<?php
declare(strict_types=1);

/** Escapa para HTML. Toda saída de dado nas views passa por aqui. */
function e(mixed $valor): string
{
    return htmlspecialchars((string)$valor, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/** Data ISO (AAAA-MM-DD ...) para dd/mm/aaaa. */
function data_br(?string $iso): string
{
    return $iso ? date('d/m/Y', strtotime($iso)) : '—';
}

final class Visao
{
    public static string $pasta = '';

    /** Renderiza views/<nome>.php dentro de views/<layout>.php */
    public static function mostrar(string $nome, array $dados = [], string $layout = 'publico/layout', int $status = 200): void
    {
        http_response_code($status);
        $conteudo = self::trecho($nome, $dados);
        echo self::trecho($layout, $dados + ['conteudo' => $conteudo]);
    }

    public static function trecho(string $nome, array $dados): string
    {
        extract($dados, EXTR_SKIP);
        ob_start();
        require self::$pasta . '/' . $nome . '.php';
        return (string)ob_get_clean();
    }

    public static function redirecionar(string $caminho, int $status = 303): never
    {
        // só caminhos internos: nada de redirecionar para endereço vindo de fora
        if (!str_starts_with($caminho, '/') || str_starts_with($caminho, '//')) {
            $caminho = '/';
        }
        header('Location: ' . $caminho, true, $status);
        exit;
    }

    public static function aviso(string $texto, string $tipo = 'ok'): void
    {
        $_SESSION['aviso'] = ['texto' => $texto, 'tipo' => $tipo];
    }

    public static function pegarAviso(): ?array
    {
        $a = $_SESSION['aviso'] ?? null;
        unset($_SESSION['aviso']);
        return $a;
    }
}
