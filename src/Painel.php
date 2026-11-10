<?php
declare(strict_types=1);

/**
 * Os "bastidores": área restrita da biblioteca.
 *
 * Toda ação que grava é POST com token CSRF, e toda ação confere o papel do
 * usuário no servidor (esconder o botão na tela não é permissão).
 */
final class Painel
{
    private const LAYOUT = 'painel/layout';

    // ---------------------------------------------------------------- acesso

    public static function formEntrar(): void
    {
        Acesso::iniciarSessao();
        if (Acesso::usuario(Banco::pdo())) {
            Visao::redirecionar('/bastidores');
        }
        Visao::mostrar('painel/entrar', ['titulo' => 'Entrar', 'erro' => null, 'email' => ''], 'painel/layout-entrar');
    }

    public static function entrar(): void
    {
        Acesso::iniciarSessao();
        self::exigirCsrf();
        $pdo = Banco::pdo();
        $email = mb_substr(trim((string)($_POST['email'] ?? '')), 0, 160);
        $resultado = Acesso::conferir($pdo, $email, (string)($_POST['senha'] ?? ''), Requisicao::ip(), SAL);
        if (is_string($resultado)) {
            Visao::mostrar('painel/entrar', ['titulo' => 'Entrar', 'erro' => $resultado, 'email' => $email], 'painel/layout-entrar', 422);
            return;
        }
        Acesso::entrar($resultado);
        Acesso::registrar($pdo, (int)$resultado['id'], 'entrou');
        Visao::redirecionar($resultado['trocar_senha'] ? '/bastidores/conta' : '/bastidores');
    }

    public static function sair(): void
    {
        Acesso::iniciarSessao();
        self::exigirCsrf();
        Acesso::sair();
        Visao::redirecionar('/bastidores/entrar');
    }

    // ---------------------------------------------------------------- início

    public static function inicio(): void
    {
        $u = self::exigir();
        $pdo = Banco::pdo();
        $desde = date('Y-m-d', strtotime('-29 days'));

        $totais = $pdo->prepare('SELECT COALESCE(SUM(visualizacoes),0) v, COALESCE(SUM(unicos),0) u FROM visitas_dia WHERE dia >= ?');
        $totais->execute([$desde]);
        $cliques = $pdo->prepare('SELECT COALESCE(SUM(total),0) FROM cliques_dia WHERE dia >= ?');
        $cliques->execute([$desde]);

        $maisLidas = $pdo->prepare(
            "SELECT n.titulo, n.slug, SUM(v.visualizacoes) total
               FROM visitas_dia v JOIN noticias n ON v.caminho = '/noticias/' || n.slug
              WHERE v.dia >= ? GROUP BY n.id ORDER BY total DESC LIMIT 5"
        );
        $maisLidas->execute([$desde]);
        $linksTop = $pdo->prepare(
            'SELECT l.slug, l.descricao, SUM(c.total) total FROM cliques_dia c JOIN links l ON l.id = c.link_id
              WHERE c.dia >= ? GROUP BY l.id ORDER BY total DESC LIMIT 5'
        );
        $linksTop->execute([$desde]);

        Visao::mostrar('painel/inicio', [
            'titulo' => 'Início',
            'usuario' => $u,
            'totais' => $totais->fetch() + ['cliques' => (int)$cliques->fetchColumn()],
            'publicadas' => (int)$pdo->query("SELECT COUNT(*) FROM noticias WHERE status = 'publicada'")->fetchColumn(),
            'serie' => Visitas::serie($pdo, 14),
            'maisLidas' => $maisLidas->fetchAll(),
            'linksTop' => $linksTop->fetchAll(),
        ], self::LAYOUT);
    }

    // ---------------------------------------------------------------- notícias

    public static function noticias(): void
    {
        $u = self::exigir('noticias');
        $lista = Banco::pdo()->query(
            'SELECT n.id, n.titulo, n.slug, n.status, n.publicada_em, n.atualizada_em, u.nome autor
               FROM noticias n LEFT JOIN usuarios u ON u.id = n.autor_id ORDER BY n.atualizada_em DESC'
        )->fetchAll();
        Visao::mostrar('painel/noticias', ['titulo' => 'Notícias', 'usuario' => $u, 'lista' => $lista], self::LAYOUT);
    }

    public static function novaNoticia(): void
    {
        $u = self::exigir('noticias');
        self::formNoticia($u, ['id' => null, 'titulo' => '', 'slug' => '', 'resumo' => '', 'corpo' => '', 'status' => 'rascunho'], []);
    }

    public static function editarNoticia(string $id): void
    {
        $u = self::exigir('noticias');
        $n = self::buscar('noticias', (int)$id);
        self::formNoticia($u, $n, []);
    }

    public static function salvarNoticia(): void
    {
        $u = self::exigir('noticias');
        self::exigirCsrf();
        $pdo = Banco::pdo();
        $id = (int)($_POST['id'] ?? 0) ?: null;
        $atual = $id ? self::buscar('noticias', $id) : null;

        $n = [
            'id' => $id,
            'titulo' => mb_substr(trim((string)($_POST['titulo'] ?? '')), 0, 160),
            'slug' => Texto::slug((string)($_POST['slug'] ?? '') ?: (string)($_POST['titulo'] ?? '')),
            'resumo' => mb_substr(trim((string)($_POST['resumo'] ?? '')), 0, 300),
            'corpo' => mb_substr((string)($_POST['corpo'] ?? ''), 0, 50000),
            'status' => ($_POST['status'] ?? '') === 'publicada' ? 'publicada' : 'rascunho',
        ];
        $erros = [];
        if (mb_strlen($n['titulo']) < 3) {
            $erros['titulo'] = 'O título precisa de pelo menos 3 letras.';
        }
        if ($n['slug'] === '') {
            $erros['slug'] = 'Endereço inválido.';
        } else {
            $dup = $pdo->prepare('SELECT 1 FROM noticias WHERE slug = ? AND id IS NOT ?');
            $dup->execute([$n['slug'], $id]);
            if ($dup->fetchColumn()) {
                $erros['slug'] = 'Já existe uma notícia com este endereço.';
            }
        }
        if ($erros) {
            self::formNoticia($u, $n, $erros, 422);
            return;
        }

        // a data de publicação é a da primeira vez que foi ao ar
        $publicadaEm = $atual['publicada_em'] ?? null;
        if ($n['status'] === 'publicada' && !$publicadaEm) {
            $publicadaEm = date('Y-m-d H:i:s');
        }

        if ($id) {
            $pdo->prepare(
                "UPDATE noticias SET titulo = ?, slug = ?, resumo = ?, corpo = ?, status = ?, publicada_em = ?,
                        atualizada_em = datetime('now') WHERE id = ?"
            )->execute([$n['titulo'], $n['slug'], $n['resumo'], $n['corpo'], $n['status'], $publicadaEm, $id]);
        } else {
            $pdo->prepare(
                'INSERT INTO noticias (titulo, slug, resumo, corpo, status, publicada_em, autor_id) VALUES (?, ?, ?, ?, ?, ?, ?)'
            )->execute([$n['titulo'], $n['slug'], $n['resumo'], $n['corpo'], $n['status'], $publicadaEm, $u['id']]);
        }
        Acesso::registrar($pdo, (int)$u['id'], $id ? 'editou notícia' : 'criou notícia', $n['titulo']);
        Visao::aviso($n['status'] === 'publicada' ? 'Notícia salva e publicada.' : 'Rascunho salvo.');
        Visao::redirecionar('/bastidores/noticias');
    }

    public static function excluirNoticia(string $id): void
    {
        $u = self::exigir('noticias');
        self::exigirCsrf();
        $n = self::buscar('noticias', (int)$id);
        Banco::pdo()->prepare('DELETE FROM noticias WHERE id = ?')->execute([$n['id']]);
        Acesso::registrar(Banco::pdo(), (int)$u['id'], 'excluiu notícia', $n['titulo']);
        Visao::aviso('Notícia excluída.');
        Visao::redirecionar('/bastidores/noticias');
    }

    private static function formNoticia(array $u, array $n, array $erros, int $status = 200): void
    {
        Visao::mostrar('painel/noticia-form', [
            'titulo' => $n['id'] ? 'Editar notícia' : 'Nova notícia',
            'usuario' => $u, 'n' => $n, 'erros' => $erros,
            'previa' => Texto::markdown($n['corpo']),
        ], self::LAYOUT, $status);
    }

    // ---------------------------------------------------------------- links

    public static function links(): void
    {
        $u = self::exigir('links');
        $lista = Banco::pdo()->query('SELECT * FROM links ORDER BY criado_em DESC')->fetchAll();
        Visao::mostrar('painel/links', [
            'titulo' => 'Links curtos', 'usuario' => $u, 'lista' => $lista,
            'base' => rtrim(Ambiente::obter('APP_URL', ''), '/'),
            'l' => ['id' => null, 'slug' => '', 'destino' => '', 'descricao' => ''], 'erros' => [],
        ], self::LAYOUT);
    }

    public static function salvarLink(): void
    {
        $u = self::exigir('links');
        self::exigirCsrf();
        $pdo = Banco::pdo();
        $l = [
            'id' => null,
            'slug' => Texto::slug((string)($_POST['slug'] ?? '')),
            'destino' => trim((string)($_POST['destino'] ?? '')),
            'descricao' => mb_substr(trim((string)($_POST['descricao'] ?? '')), 0, 120),
        ];
        $erros = [];
        if (strlen($l['slug']) < 2 || strlen($l['slug']) > 40) {
            $erros['slug'] = 'Use de 2 a 40 letras, números ou hífen.';
        } else {
            $dup = $pdo->prepare('SELECT 1 FROM links WHERE slug = ?');
            $dup->execute([$l['slug']]);
            if ($dup->fetchColumn()) {
                $erros['slug'] = 'Este link já existe.';
            }
        }
        if (!Texto::urlSegura($l['destino'])) {
            $erros['destino'] = 'Informe um endereço completo, começando com https://';
        }
        if ($erros) {
            $lista = $pdo->query('SELECT * FROM links ORDER BY criado_em DESC')->fetchAll();
            Visao::mostrar('painel/links', [
                'titulo' => 'Links curtos', 'usuario' => $u, 'lista' => $lista,
                'base' => rtrim(Ambiente::obter('APP_URL', ''), '/'), 'l' => $l, 'erros' => $erros,
            ], self::LAYOUT, 422);
            return;
        }
        $pdo->prepare('INSERT INTO links (slug, destino, descricao, criado_por) VALUES (?, ?, ?, ?)')
            ->execute([$l['slug'], $l['destino'], $l['descricao'], $u['id']]);
        Acesso::registrar($pdo, (int)$u['id'], 'criou link', '/l/' . $l['slug']);
        Visao::aviso('Link criado.');
        Visao::redirecionar('/bastidores/links');
    }

    public static function alternarLink(string $id): void
    {
        $u = self::exigir('links');
        self::exigirCsrf();
        $l = self::buscar('links', (int)$id);
        Banco::pdo()->prepare('UPDATE links SET ativo = 1 - ativo WHERE id = ?')->execute([$l['id']]);
        Acesso::registrar(Banco::pdo(), (int)$u['id'], $l['ativo'] ? 'pausou link' : 'reativou link', '/l/' . $l['slug']);
        Visao::redirecionar('/bastidores/links');
    }

    // ---------------------------------------------------------------- usuários

    public static function usuarios(?array $erros = null, ?array $form = null): void
    {
        $u = self::exigir('usuarios');
        $lista = Banco::pdo()->query('SELECT id, nome, email, papel, ativo, ultimo_acesso FROM usuarios ORDER BY nome')->fetchAll();
        Visao::mostrar('painel/usuarios', [
            'titulo' => 'Usuários', 'usuario' => $u, 'lista' => $lista,
            'erros' => $erros ?? [], 'form' => $form ?? ['nome' => '', 'email' => '', 'papel' => 'editor'],
            'senhaNova' => $_SESSION['senha_nova'] ?? null,
        ], self::LAYOUT, $erros ? 422 : 200);
        unset($_SESSION['senha_nova']); // a senha provisória aparece uma única vez
    }

    public static function criarUsuario(): void
    {
        $u = self::exigir('usuarios');
        self::exigirCsrf();
        $pdo = Banco::pdo();
        $f = [
            'nome' => mb_substr(trim((string)($_POST['nome'] ?? '')), 0, 120),
            'email' => mb_strtolower(mb_substr(trim((string)($_POST['email'] ?? '')), 0, 160)),
            'papel' => ($_POST['papel'] ?? '') === 'admin' ? 'admin' : 'editor',
        ];
        $erros = [];
        if (mb_strlen($f['nome']) < 3) {
            $erros['nome'] = 'Informe o nome.';
        }
        if (!filter_var($f['email'], FILTER_VALIDATE_EMAIL)) {
            $erros['email'] = 'E-mail inválido.';
        } else {
            $dup = $pdo->prepare('SELECT 1 FROM usuarios WHERE email = ?');
            $dup->execute([$f['email']]);
            if ($dup->fetchColumn()) {
                $erros['email'] = 'Já existe usuário com este e-mail.';
            }
        }
        if ($erros) {
            self::usuarios($erros, $f);
            return;
        }
        $senha = Acesso::senhaProvisoria();
        $pdo->prepare('INSERT INTO usuarios (nome, email, senha_hash, papel, trocar_senha) VALUES (?, ?, ?, ?, 1)')
            ->execute([$f['nome'], $f['email'], Acesso::hashSenha($senha), $f['papel']]);
        Acesso::registrar($pdo, (int)$u['id'], 'criou usuário', $f['email'] . ' (' . $f['papel'] . ')');
        $_SESSION['senha_nova'] = ['email' => $f['email'], 'senha' => $senha];
        Visao::redirecionar('/bastidores/usuarios');
    }

    public static function alternarUsuario(string $id): void
    {
        $u = self::exigir('usuarios');
        self::exigirCsrf();
        $pdo = Banco::pdo();
        $alvo = self::buscar('usuarios', (int)$id);
        if ((int)$alvo['id'] === (int)$u['id']) {
            Visao::aviso('Você não pode desativar a própria conta.', 'erro');
            Visao::redirecionar('/bastidores/usuarios');
        }
        if ($alvo['ativo'] && $alvo['papel'] === 'admin') {
            $admins = (int)$pdo->query("SELECT COUNT(*) FROM usuarios WHERE papel = 'admin' AND ativo = 1")->fetchColumn();
            if ($admins <= 1) {
                Visao::aviso('O painel precisa de pelo menos um administrador ativo.', 'erro');
                Visao::redirecionar('/bastidores/usuarios');
            }
        }
        $pdo->prepare('UPDATE usuarios SET ativo = 1 - ativo WHERE id = ?')->execute([$alvo['id']]);
        Acesso::registrar($pdo, (int)$u['id'], $alvo['ativo'] ? 'desativou usuário' : 'reativou usuário', $alvo['email']);
        Visao::redirecionar('/bastidores/usuarios');
    }

    // ---------------------------------------------------------------- conta e registro

    public static function conta(?string $erro = null, int $status = 200): void
    {
        $u = self::exigir(null, true);
        Visao::mostrar('painel/conta', ['titulo' => 'Minha conta', 'usuario' => $u, 'erro' => $erro], self::LAYOUT, $status);
    }

    public static function trocarSenha(): void
    {
        $u = self::exigir(null, true);
        self::exigirCsrf();
        $pdo = Banco::pdo();
        $atual = (string)($_POST['atual'] ?? '');
        $nova = (string)($_POST['nova'] ?? '');
        $hash = $pdo->prepare('SELECT senha_hash FROM usuarios WHERE id = ?');
        $hash->execute([$u['id']]);
        if (!password_verify($atual, (string)$hash->fetchColumn())) {
            self::conta('A senha atual não confere.', 422);
            return;
        }
        if (mb_strlen($nova) < 10 || $nova !== ($_POST['confirmar'] ?? '')) {
            self::conta('A nova senha precisa de pelo menos 10 caracteres, repetida igual nos dois campos.', 422);
            return;
        }
        if ($nova === $atual) {
            self::conta('A nova senha precisa ser diferente da atual.', 422);
            return;
        }
        $novoHash = Acesso::hashSenha($nova);
        $pdo->prepare('UPDATE usuarios SET senha_hash = ?, trocar_senha = 0 WHERE id = ?')
            ->execute([$novoHash, $u['id']]);
        Acesso::renovarVersao($novoHash); // esta sessão segue; as outras desta conta caem
        Acesso::registrar($pdo, (int)$u['id'], 'trocou a senha');
        Visao::aviso('Senha alterada.');
        Visao::redirecionar('/bastidores');
    }

    public static function registro(): void
    {
        $u = self::exigir('registro');
        $lista = Banco::pdo()->query(
            'SELECT r.acao, r.alvo, r.em, u.nome FROM registro r LEFT JOIN usuarios u ON u.id = r.usuario_id
              ORDER BY r.id DESC LIMIT 200'
        )->fetchAll();
        Visao::mostrar('painel/registro', ['titulo' => 'Registro de ações', 'usuario' => $u, 'lista' => $lista], self::LAYOUT);
    }

    // ---------------------------------------------------------------- apoio

    /** Exige login (e papel, se informado). Senha provisória só deixa ir até "Minha conta". */
    private static function exigir(?string $area = null, bool $paginaDaConta = false): array
    {
        Acesso::iniciarSessao();
        $u = Acesso::usuario(Banco::pdo());
        if (!$u) {
            Visao::redirecionar('/bastidores/entrar');
        }
        if ($u['trocar_senha'] && !$paginaDaConta) {
            Visao::aviso('Defina uma senha sua antes de continuar.', 'erro');
            Visao::redirecionar('/bastidores/conta');
        }
        if ($area !== null && !Acesso::pode($area, $u)) {
            http_response_code(403);
            Visao::mostrar('painel/proibido', ['titulo' => 'Sem permissão', 'usuario' => $u], self::LAYOUT, 403);
            exit;
        }
        return $u;
    }

    private static function exigirCsrf(): void
    {
        if (!Acesso::csrfValido($_POST['_csrf'] ?? null)) {
            http_response_code(419);
            exit('Sessão expirada. Volte, recarregue a página e tente de novo.');
        }
    }

    private static function buscar(string $tabela, int $id): array
    {
        // $tabela vem só do código, nunca do usuário
        $q = Banco::pdo()->prepare("SELECT * FROM $tabela WHERE id = ?");
        $q->execute([$id]);
        $linha = $q->fetch();
        if (!$linha) {
            http_response_code(404);
            exit('Não encontrado.');
        }
        return $linha;
    }
}
