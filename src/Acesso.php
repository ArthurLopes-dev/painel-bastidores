<?php
declare(strict_types=1);

/**
 * Login, sessão, CSRF e permissões do painel.
 *
 * - A sessão só existe dentro de /bastidores: o site público não grava cookie.
 * - Senha com password_hash em custo fixo; e-mail inexistente compara com um
 *   hash do mesmo custo, para o tempo de resposta não revelar quem tem conta.
 * - Limite de tentativas em três chaves (e-mail+IP, e-mail, IP), todas em hash.
 * - Troca do id de sessão no login; trocar a senha derruba as outras sessões.
 */
final class Acesso
{
    public const PERMISSOES = [
        'noticias' => ['admin', 'editor'],
        'links'    => ['admin', 'editor'],
        'usuarios' => ['admin'],
        'registro' => ['admin'],
    ];

    /** Custo explícito: o padrão do PHP muda entre versões (10 até a 8.3, 12 na 8.4). */
    public const OPCOES_SENHA = ['cost' => 12];

    /*
     * Limites por janela de 15 minutos. O mais rígido é o do par e-mail+IP:
     * quem só sabe o e-mail do administrador não consegue trancá-lo para fora
     * com meia dúzia de tentativas, precisaria de 50.
     */
    private const MAX_POR_PAR = 5;
    private const MAX_POR_EMAIL = 50;
    private const MAX_POR_IP = 20;
    private const JANELA = 900;
    private const INATIVIDADE = 7200;  // 2 horas

    /** Hash de uma senha que ninguém tem, no mesmo custo de OPCOES_SENHA. */
    private const HASH_FALSO = '$2y$12$Po6K/fVxHp5bxuZrS.WMm.z.LjapLE/sKfBM70ZGP7rkFDnvGev5G';

    private static ?array $usuario = null;

    public static function iniciarSessao(): void
    {
        if (session_status() === PHP_SESSION_ACTIVE) {
            return;
        }
        session_name('bastidores');
        session_start([
            'cookie_path'     => '/bastidores',
            'cookie_httponly' => true,
            'cookie_samesite' => 'Lax',
            'cookie_secure'   => Requisicao::segura(),
            'use_strict_mode' => true,
        ]);
        $agora = time();
        if (isset($_SESSION['visto']) && $agora - $_SESSION['visto'] > self::INATIVIDADE) {
            $_SESSION = [];
            session_regenerate_id(true);
        }
        $_SESSION['visto'] = $agora;
    }

    public static function pode(string $area, ?array $usuario): bool
    {
        return $usuario !== null && in_array($usuario['papel'], self::PERMISSOES[$area] ?? [], true);
    }

    public static function hashSenha(string $senha): string
    {
        return password_hash($senha, PASSWORD_BCRYPT, self::OPCOES_SENHA);
    }

    /**
     * Confere e-mail e senha sem mexer na sessão (testável sozinho).
     *
     * A tentativa é gravada ANTES de contar: dez pedidos ao mesmo tempo gravam
     * dez linhas e cada um enxerga as outras, então ninguém passa do limite
     * aproveitando a corrida entre contar e gravar.
     *
     * @return array|string o usuário, ou a mensagem de erro para a tela
     */
    public static function conferir(PDO $pdo, string $email, string $senha, string $ip, string $sal): array|string
    {
        $emailNorm = mb_strtolower(trim($email));
        $chaves = [
            'par'   => ['p:' . hash_hmac('sha256', $emailNorm . '|' . $ip, $sal), self::MAX_POR_PAR],
            'email' => ['e:' . hash_hmac('sha256', $emailNorm, $sal), self::MAX_POR_EMAIL],
            'ip'    => ['i:' . hash_hmac('sha256', $ip, $sal), self::MAX_POR_IP],
        ];
        $agora = time();
        $pdo->prepare('DELETE FROM tentativas_login WHERE em < ?')->execute([$agora - self::JANELA]);

        $grava = $pdo->prepare('INSERT INTO tentativas_login (chave, em) VALUES (?, ?)');
        $conta = $pdo->prepare('SELECT COUNT(*) FROM tentativas_login WHERE chave = ?');
        $minhas = [];
        $bloqueado = false;
        foreach ($chaves as [$chave, $max]) {
            $grava->execute([$chave, $agora]);
            $minhas[] = (int)$pdo->lastInsertId();
            $conta->execute([$chave]);
            $bloqueado = $bloqueado || (int)$conta->fetchColumn() > $max;
        }
        if ($bloqueado) {
            return 'Muitas tentativas. Aguarde 15 minutos e tente de novo.';
        }

        $q = $pdo->prepare('SELECT * FROM usuarios WHERE email = ? AND ativo = 1');
        $q->execute([trim($email)]);
        $usuario = $q->fetch() ?: null;
        $ok = password_verify($senha, $usuario['senha_hash'] ?? self::HASH_FALSO) && $usuario !== null;
        if (!$ok) {
            return 'E-mail ou senha incorretos.';
        }

        // acertou: some a tentativa de agora e o histórico do par
        $apaga = $pdo->prepare('DELETE FROM tentativas_login WHERE rowid = ?');
        foreach ($minhas as $id) {
            $apaga->execute([$id]);
        }
        $pdo->prepare('DELETE FROM tentativas_login WHERE chave = ?')->execute([$chaves['par'][0]]);

        if (password_needs_rehash($usuario['senha_hash'], PASSWORD_BCRYPT, self::OPCOES_SENHA)) {
            $usuario['senha_hash'] = self::hashSenha($senha);
            $pdo->prepare('UPDATE usuarios SET senha_hash = ? WHERE id = ?')->execute([$usuario['senha_hash'], $usuario['id']]);
        }
        $pdo->prepare("UPDATE usuarios SET ultimo_acesso = datetime('now') WHERE id = ?")->execute([$usuario['id']]);
        return $usuario;
    }

    public static function entrar(array $usuario): void
    {
        session_regenerate_id(true);
        $_SESSION['uid'] = (int)$usuario['id'];
        $_SESSION['versao'] = self::versao($usuario['senha_hash']);
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
        self::$usuario = null;
    }

    /** Depois de trocar a senha: esta sessão continua, as outras caem. */
    public static function renovarVersao(string $novoHash): void
    {
        session_regenerate_id(true);
        $_SESSION['versao'] = self::versao($novoHash);
        self::$usuario = null;
    }

    public static function sair(): void
    {
        $_SESSION = [];
        session_regenerate_id(true);
        self::$usuario = null;
    }

    public static function usuario(PDO $pdo): ?array
    {
        if (self::$usuario === null && !empty($_SESSION['uid'])) {
            $q = $pdo->prepare('SELECT id, nome, email, papel, trocar_senha, senha_hash FROM usuarios WHERE id = ? AND ativo = 1');
            $q->execute([$_SESSION['uid']]);
            $u = $q->fetch() ?: null;
            // Desativado, ou a senha mudou em outra sessão: esta sessão cai.
            if ($u === null || !hash_equals(self::versao($u['senha_hash']), (string)($_SESSION['versao'] ?? ''))) {
                $_SESSION = [];
                return null;
            }
            unset($u['senha_hash']);
            self::$usuario = $u;
        }
        return self::$usuario;
    }

    public static function csrf(): string
    {
        return $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
    }

    public static function csrfValido(mixed $recebido): bool
    {
        return is_string($recebido) && isset($_SESSION['csrf']) && hash_equals($_SESSION['csrf'], $recebido);
    }

    public static function senhaProvisoria(): string
    {
        $letras = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789';
        $s = '';
        for ($i = 0; $i < 14; $i++) {
            $s .= $letras[random_int(0, strlen($letras) - 1)];
        }
        return $s;
    }

    public static function registrar(PDO $pdo, ?int $usuarioId, string $acao, string $alvo = ''): void
    {
        $pdo->prepare('INSERT INTO registro (usuario_id, acao, alvo) VALUES (?, ?, ?)')
            ->execute([$usuarioId, $acao, mb_substr($alvo, 0, 200)]);
    }

    /** Impressão digital do hash da senha: muda quando a senha muda. */
    private static function versao(string $hash): string
    {
        return substr(hash('sha256', $hash), 0, 16);
    }
}
