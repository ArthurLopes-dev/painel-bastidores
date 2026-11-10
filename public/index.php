<?php
declare(strict_types=1);

// Ponto de entrada único: todo pedido passa por aqui (ver .htaccess).

$caminho = rawurldecode((string)parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH));

// No servidor embutido do PHP (php -S), arquivos estáticos saem direto.
if (PHP_SAPI === 'cli-server' && $caminho !== '/' && is_file(__DIR__ . $caminho)) {
    return false;
}

// Erro inesperado nunca mostra caminho de arquivo, SQL ou pilha para o visitante:
// o detalhe vai para o log do servidor e a pessoa vê uma página neutra.
ini_set('display_errors', '0');
ini_set('log_errors', '1');
set_exception_handler(function (Throwable $e): void {
    error_log('[bastidores] ' . $e::class . ': ' . $e->getMessage() . ' em ' . $e->getFile() . ':' . $e->getLine());
    if (!headers_sent()) {
        http_response_code(500);
        header('Content-Type: text/plain; charset=utf-8');
    }
    echo 'Algo deu errado do nosso lado. Tente de novo em instantes.';
});

require dirname(__DIR__) . '/src/inicio.php';

if (str_starts_with($caminho, '/bastidores')) {
    // páginas do painel (inclusive a da senha provisória) não ficam no cache
    header('Cache-Control: no-store');
}
if (Requisicao::segura()) {
    header('Strict-Transport-Security: max-age=31536000');
}
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');
header("Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");

$caminho = $caminho === '/' ? '/' : rtrim($caminho, '/');

$r = new Rotas();
$r->get('/', [Publico::class, 'inicio']);
$r->get('/noticias/{slug}', [Publico::class, 'noticia']);
$r->get('/l/{slug}', [Publico::class, 'link']);

$r->get('/bastidores/entrar', [Painel::class, 'formEntrar']);
$r->post('/bastidores/entrar', [Painel::class, 'entrar']);
$r->post('/bastidores/sair', [Painel::class, 'sair']);
$r->get('/bastidores', [Painel::class, 'inicio']);

$r->get('/bastidores/noticias', [Painel::class, 'noticias']);
$r->get('/bastidores/noticias/nova', [Painel::class, 'novaNoticia']);
$r->post('/bastidores/noticias/salvar', [Painel::class, 'salvarNoticia']);
$r->get('/bastidores/noticias/{id}', [Painel::class, 'editarNoticia']);
$r->post('/bastidores/noticias/{id}/excluir', [Painel::class, 'excluirNoticia']);

$r->get('/bastidores/links', [Painel::class, 'links']);
$r->post('/bastidores/links', [Painel::class, 'salvarLink']);
$r->post('/bastidores/links/{id}/alternar', [Painel::class, 'alternarLink']);

$r->get('/bastidores/usuarios', [Painel::class, 'usuarios']);
$r->post('/bastidores/usuarios', [Painel::class, 'criarUsuario']);
$r->post('/bastidores/usuarios/{id}/alternar', [Painel::class, 'alternarUsuario']);

$r->get('/bastidores/conta', [Painel::class, 'conta']);
$r->post('/bastidores/conta', [Painel::class, 'trocarSenha']);
$r->get('/bastidores/registro', [Painel::class, 'registro']);

if (!$r->despachar($_SERVER['REQUEST_METHOD'] ?? 'GET', $caminho)) {
    Publico::naoEncontrado();
}
