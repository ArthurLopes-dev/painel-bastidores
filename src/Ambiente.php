<?php
declare(strict_types=1);

/**
 * Lê o .env da raiz. Variável do servidor tem prioridade sobre o arquivo.
 * O .env nunca vai para o git; o repositório traz só o .env.example.
 */
final class Ambiente
{
    private static array $valores = [];

    public static function carregar(string $arquivo): void
    {
        if (!is_file($arquivo)) {
            return;
        }
        foreach (file($arquivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $linha) {
            $linha = trim($linha);
            if ($linha === '' || str_starts_with($linha, '#') || !str_contains($linha, '=')) {
                continue;
            }
            [$chave, $valor] = array_map('trim', explode('=', $linha, 2));
            self::$valores[$chave] = trim($valor, "\"'");
        }
    }

    public static function obter(string $chave, string $padrao = ''): string
    {
        $doSistema = getenv($chave);
        if ($doSistema !== false && $doSistema !== '') {
            return $doSistema;
        }
        $valor = self::$valores[$chave] ?? '';
        return $valor !== '' ? $valor : $padrao;
    }
}
