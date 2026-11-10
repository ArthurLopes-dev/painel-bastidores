<?php
declare(strict_types=1);

// Carregado por public/index.php e por console.php.

define('RAIZ', dirname(__DIR__));

require RAIZ . '/src/Ambiente.php';
require RAIZ . '/src/Requisicao.php';
require RAIZ . '/src/Banco.php';
require RAIZ . '/src/Rotas.php';
require RAIZ . '/src/Texto.php';
require RAIZ . '/src/Visitas.php';
require RAIZ . '/src/Acesso.php';
require RAIZ . '/src/Visao.php';
require RAIZ . '/src/Publico.php';
require RAIZ . '/src/Painel.php';

Ambiente::carregar(RAIZ . '/.env');
date_default_timezone_set(Ambiente::obter('FUSO', 'America/Sao_Paulo'));

define('NOME_SITE', Ambiente::obter('NOME_SITE', 'Biblioteca Comunitária Ipê Amarelo'));

/*
 * Sal dos hashes de visitas e de tentativas de login. Vem de APP_SAL; sem ele,
 * é sorteado na primeira execução e guardado em dados/ (fora da pasta pública
 * e do git). Nunca existe um sal "padrão" escrito no código: com um sal
 * conhecido, daria para recalcular os hashes testando todos os IPs.
 */
$sal = Ambiente::obter('APP_SAL');
if ($sal === '') {
    $arquivoSal = RAIZ . '/dados/sal.txt';
    if (!is_file($arquivoSal)) {
        @mkdir(dirname($arquivoSal), 0750, true);
        file_put_contents($arquivoSal, bin2hex(random_bytes(32)), LOCK_EX);
        @chmod($arquivoSal, 0600);
    }
    $sal = trim((string)file_get_contents($arquivoSal));
}
define('SAL', $sal);

$banco = Ambiente::obter('BANCO_ARQUIVO', RAIZ . '/dados/site.sqlite');
Banco::conectar($banco, RAIZ . '/migracoes');
Visao::$pasta = RAIZ . '/views';
