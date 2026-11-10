<?php
declare(strict_types=1);

/**
 * Conexão SQLite e migrações.
 *
 * SQLite porque o projeto precisa rodar em hospedagem simples, sem servidor de
 * banco. Todas as consultas usam parâmetros (prepare/execute): nenhum valor
 * vindo de fora é concatenado em SQL.
 */
final class Banco
{
    private static ?PDO $pdo = null;

    public static function conectar(string $arquivo, string $pastaMigracoes): PDO
    {
        if ($arquivo !== ':memory:' && !is_dir(dirname($arquivo))) {
            mkdir(dirname($arquivo), 0750, true);
        }
        $pdo = new PDO('sqlite:' . $arquivo, null, null, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        $pdo->exec('PRAGMA foreign_keys = ON');
        $pdo->exec('PRAGMA busy_timeout = 3000');
        if ($arquivo !== ':memory:') {
            $pdo->exec('PRAGMA journal_mode = WAL'); // leitores não travam quem grava
        }
        self::migrar($pdo, $pastaMigracoes);
        return self::$pdo = $pdo;
    }

    public static function pdo(): PDO
    {
        return self::$pdo ?? throw new LogicException('Banco não conectado');
    }

    private static function migrar(PDO $pdo, string $pasta): void
    {
        $pdo->exec('CREATE TABLE IF NOT EXISTS migracoes (nome TEXT PRIMARY KEY, em TEXT NOT NULL DEFAULT (datetime(\'now\')))');
        $feitas = $pdo->query('SELECT nome FROM migracoes')->fetchAll(PDO::FETCH_COLUMN);
        $arquivos = glob($pasta . '/*.sql') ?: [];
        sort($arquivos);
        foreach ($arquivos as $arquivo) {
            $nome = basename($arquivo);
            if (in_array($nome, $feitas, true)) {
                continue;
            }
            $pdo->beginTransaction(); // migração pela metade não fica gravada
            try {
                $pdo->exec((string)file_get_contents($arquivo));
                $pdo->prepare('INSERT INTO migracoes (nome) VALUES (?)')->execute([$nome]);
                $pdo->commit();
            } catch (Throwable $e) {
                $pdo->rollBack();
                throw $e;
            }
        }
    }
}
