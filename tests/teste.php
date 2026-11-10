<?php
declare(strict_types=1);

// Testes sem framework: php tests/teste.php
$raiz = dirname(__DIR__);
require $raiz . '/src/Ambiente.php';
require $raiz . '/src/Requisicao.php';
require $raiz . '/src/Banco.php';
require $raiz . '/src/Rotas.php';
require $raiz . '/src/Texto.php';
require $raiz . '/src/Visitas.php';
require $raiz . '/src/Acesso.php';

$falhas = 0;
function confere(string $nome, bool $ok): void
{
    global $falhas;
    echo ($ok ? '  ok   ' : '  FALHA ') . $nome . PHP_EOL;
    $falhas += $ok ? 0 : 1;
}

$pdo = Banco::conectar(':memory:', $raiz . '/migracoes');

echo "Banco\n";
$tabelas = $pdo->query("SELECT name FROM sqlite_master WHERE type = 'table'")->fetchAll(PDO::FETCH_COLUMN);
confere('migração cria as tabelas', !array_diff(['usuarios', 'noticias', 'links', 'visitas_dia', 'registro'], $tabelas));
try {
    $pdo->exec("INSERT INTO usuarios (nome, email, senha_hash, papel) VALUES ('X', 'x@x.org', 'h', 'dono')");
    confere('papel fora da lista é recusado pelo banco', false);
} catch (PDOException) {
    confere('papel fora da lista é recusado pelo banco', true);
}

echo "Texto\n";
confere('slug tira acento e espaço', Texto::slug('  Oficina de Encadernação!  ') === 'oficina-de-encadernacao');
$xss = Texto::markdown("<script>alert(1)</script> **forte**");
confere('markdown escapa HTML', !str_contains($xss, '<script>') && str_contains($xss, '&lt;script&gt;'));
confere('markdown aplica negrito', str_contains($xss, '<strong>forte</strong>'));
confere('link javascript: não vira link', !str_contains(Texto::markdown('[clique](javascript:alert(1))'), '<a '));
confere('link https vira link', str_contains(Texto::markdown('[site](https://exemplo.org)'), '<a href="https://exemplo.org"'));
confere('aspas no link não quebram o atributo', !str_contains(Texto::markdown('[x](https://a.org/"onmouseover="alert(1))'), '"onmouseover'));
confere('lista e subtítulo', Texto::markdown("## Título\n- um\n- dois") === "<h2>Título</h2>\n<ul>\n<li>um</li>\n<li>dois</li>\n</ul>\n");
confere('URL https é aceita', Texto::urlSegura('https://exemplo.org/a?b=1'));
confere('URL javascript: é recusada', !Texto::urlSegura('javascript:alert(1)'));
confere('URL data: é recusada', !Texto::urlSegura('data:text/html,oi'));

echo "Rotas\n";
$r = new Rotas();
$visto = null;
$r->get('/bastidores/noticias/{id}', function (string $id) use (&$visto) { $visto = $id; });
confere('rota com id numérico casa', $r->despachar('GET', '/bastidores/noticias/12') && $visto === '12');
confere('id com letras não casa', !$r->despachar('GET', '/bastidores/noticias/12x'));
confere('id com aspas não chega à rota', !$r->despachar('GET', "/bastidores/noticias/1'or'1"));
ob_start();
$visto = null;
$respondeu = @$r->despachar('POST', '/bastidores/noticias/12'); // @: no terminal não há cabeçalho HTTP
$saida = ob_get_clean();
confere('método errado é recusado sem rodar a ação', $respondeu && $visto === null && $saida === 'Método não permitido');

echo "Visitas\n";
Visitas::registrar($pdo, '/', '203.0.113.1', 'Firefox', 'sal', '2026-01-10');
Visitas::registrar($pdo, '/', '203.0.113.1', 'Firefox', 'sal', '2026-01-10');
Visitas::registrar($pdo, '/', '203.0.113.2', 'Firefox', 'sal', '2026-01-10');
Visitas::registrar($pdo, '/', '203.0.113.3', 'Googlebot/2.1', 'sal', '2026-01-10');
$l = $pdo->query("SELECT visualizacoes, unicos FROM visitas_dia WHERE dia = '2026-01-10'")->fetch();
confere('conta 3 visualizações e 2 pessoas', (int)$l['visualizacoes'] === 3 && (int)$l['unicos'] === 2);
confere('robô não conta', (int)$l['visualizacoes'] === 3);
$guardado = implode(' ', $pdo->query('SELECT hash FROM visitantes_dia')->fetchAll(PDO::FETCH_COLUMN));
confere('IP não é guardado', !str_contains($guardado, '203.0.113'));
Visitas::registrar($pdo, '/', '203.0.113.1', 'Firefox', 'sal', '2026-01-11');
confere('no dia seguinte a mesma pessoa conta de novo', (int)$pdo->query("SELECT unicos FROM visitas_dia WHERE dia = '2026-01-11'")->fetchColumn() === 1);
confere('rastro do dia anterior é apagado', (int)$pdo->query("SELECT COUNT(*) FROM visitantes_dia WHERE dia = '2026-01-10'")->fetchColumn() === 0);
$serie = Visitas::serie($pdo, 3, '2026-01-11');
confere('série inclui dias zerados', count($serie) === 3 && $serie[0]['visualizacoes'] === 0 && $serie[1]['visualizacoes'] === 3);

echo "Acesso\n";
$pdo->prepare("INSERT INTO usuarios (nome, email, senha_hash, papel) VALUES ('Ana', 'ana@exemplo.org', ?, 'editor')")
    ->execute([password_hash('senha-boa-123', PASSWORD_DEFAULT)]);
confere('senha certa entra', is_array(Acesso::conferir($pdo, 'ANA@exemplo.org', 'senha-boa-123', '198.51.100.1', 'sal')));
confere('senha errada não entra', is_string(Acesso::conferir($pdo, 'ana@exemplo.org', 'errada', '198.51.100.1', 'sal')));
confere('e-mail inexistente dá a mesma mensagem', Acesso::conferir($pdo, 'ninguem@exemplo.org', 'x', '198.51.100.1', 'sal') === 'E-mail ou senha incorretos.');
for ($i = 0; $i < 5; $i++) {
    Acesso::conferir($pdo, 'ana@exemplo.org', 'errada', '198.51.100.9', 'sal');
}
confere('após 5 erros, bloqueia até a senha certa', str_starts_with((string)Acesso::conferir($pdo, 'ana@exemplo.org', 'senha-boa-123', '198.51.100.9', 'sal'), 'Muitas tentativas'));
confere('o bloqueio não tranca a dona da conta em outro lugar', is_array(Acesso::conferir($pdo, 'ana@exemplo.org', 'senha-boa-123', '198.51.100.50', 'sal')));
$hash = (string)$pdo->query("SELECT senha_hash FROM usuarios WHERE email = 'ana@exemplo.org'")->fetchColumn();
confere('senha guardada com custo 12 em qualquer versão do PHP', password_get_info($hash)['options']['cost'] === 12);

// sessão: trocar a senha derruba as outras sessões da conta
$zerarCache = fn() => (new ReflectionProperty(Acesso::class, 'usuario'))->setValue(null, null);
$_SESSION = [];
$ana = $pdo->query("SELECT * FROM usuarios WHERE email = 'ana@exemplo.org'")->fetch();
@Acesso::entrar($ana); // @: no terminal não há sessão real para regenerar o id
confere('sessão válida reconhece a pessoa', Acesso::usuario($pdo)['email'] === 'ana@exemplo.org');
$pdo->prepare('UPDATE usuarios SET senha_hash = ? WHERE id = ?')->execute([Acesso::hashSenha('outra-senha-456'), $ana['id']]);
$zerarCache();
confere('senha trocada em outro lugar derruba esta sessão', Acesso::usuario($pdo) === null);
$_SESSION = [];

echo "Proxy\n";
$_SERVER['REMOTE_ADDR'] = '10.0.0.2';
$_SERVER['HTTP_X_FORWARDED_FOR'] = '1.2.3.4, 203.0.113.77';
$_SERVER['HTTP_X_FORWARDED_PROTO'] = 'https';
unset($_SERVER['HTTPS']);
putenv('CONFIAR_PROXY');
confere('sem CONFIAR_PROXY, X-Forwarded-For é ignorado', Requisicao::ip() === '10.0.0.2' && !Requisicao::segura());
putenv('CONFIAR_PROXY=1');
confere('com proxy, vale o último IP da lista (o que o proxy viu)', Requisicao::ip() === '203.0.113.77');
confere('com proxy, HTTPS repassado conta como seguro', Requisicao::segura());
putenv('CONFIAR_PROXY');
$chaves = implode(' ', $pdo->query('SELECT chave FROM tentativas_login')->fetchAll(PDO::FETCH_COLUMN));
confere('tentativas não guardam e-mail nem IP', !str_contains($chaves, 'ana@') && !str_contains($chaves, '198.51'));
$pdo->exec("UPDATE usuarios SET ativo = 0 WHERE email = 'ana@exemplo.org'");
confere('usuário desativado não entra', is_string(Acesso::conferir($pdo, 'ana@exemplo.org', 'senha-boa-123', '192.0.2.1', 'sal')));
confere('editor não vê usuários', !Acesso::pode('usuarios', ['papel' => 'editor']));
confere('editor edita notícias', Acesso::pode('noticias', ['papel' => 'editor']));
confere('admin vê o registro', Acesso::pode('registro', ['papel' => 'admin']));
confere('sem login não pode nada', !Acesso::pode('noticias', null));
$s = Acesso::senhaProvisoria();
confere('senha provisória tem 14 caracteres sem ambíguos', strlen($s) === 14 && !preg_match('/[0O1lI]/', $s));

echo $falhas ? "\n$falhas falha(s)\n" : "\nTudo certo\n";
exit($falhas ? 1 : 0);
