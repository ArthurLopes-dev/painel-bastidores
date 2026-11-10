<?php
declare(strict_types=1);

/*
 * Comandos de terminal.
 *
 *   php console.php usuario:novo "Nome Completo" email@dominio admin|editor
 *       cria uma conta com senha provisória (mostrada uma vez, troca obrigatória)
 *
 *   php console.php demo
 *       enche o banco com a biblioteca fictícia: notícias, links, 30 dias de
 *       visitas e uma conta de administração de demonstração
 *
 * Por que o primeiro usuário nasce no terminal e não numa tela de "instalação":
 * uma tela dessas, esquecida aberta no servidor, deixa qualquer um virar admin.
 */

if (PHP_SAPI !== 'cli') {
    exit("Só pelo terminal.\n");
}
require __DIR__ . '/src/inicio.php';
$pdo = Banco::pdo();
$comando = $argv[1] ?? '';

function criarUsuario(PDO $pdo, string $nome, string $email, string $papel): string
{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !in_array($papel, ['admin', 'editor'], true)) {
        fwrite(STDERR, "Uso: php console.php usuario:novo \"Nome\" email admin|editor\n");
        exit(1);
    }
    $senha = Acesso::senhaProvisoria();
    $pdo->prepare('INSERT INTO usuarios (nome, email, senha_hash, papel, trocar_senha) VALUES (?, ?, ?, ?, 1)')
        ->execute([$nome, mb_strtolower($email), Acesso::hashSenha($senha), $papel]);
    return $senha;
}

switch ($comando) {
    case 'usuario:novo':
        [, , $nome, $email, $papel] = array_pad($argv, 5, '');
        $senha = criarUsuario($pdo, $nome, $email, $papel ?: 'editor');
        echo "Conta criada para $email.\nSenha provisória (troca obrigatória no primeiro acesso): $senha\n";
        break;

    case 'demo':
        if ((int)$pdo->query('SELECT COUNT(*) FROM usuarios')->fetchColumn() > 0) {
            fwrite(STDERR, "O banco já tem usuários. Apague dados/site.sqlite para recomeçar a demonstração.\n");
            exit(1);
        }
        $senha = criarUsuario($pdo, 'Coordenação da Biblioteca', 'coordenacao@exemplo.org', 'admin');
        criarUsuario($pdo, 'Equipe de Voluntários', 'voluntarios@exemplo.org', 'editor');

        $noticias = [
            ['Feira de trocas de livros no sábado', 'Traga um livro, leve outro. Na praça, das 9h às 13h.',
             "Neste sábado a **Feira de trocas** volta para a praça em frente à biblioteca.\n\n## Como funciona\n\n- Cada livro que você traz vale uma ficha\n- Cada ficha vale um livro da mesa\n- Livros didáticos vão para a mesa da escola\n\nQuem não tiver livro para trocar pode levar um mesmo assim: a mesa *sempre* tem sobra.", 2],
            ['Clube de leitura juvenil abre inscrições', 'Encontros quinzenais para quem tem de 12 a 17 anos.',
             "O clube se encontra a cada duas semanas, às quintas, às 16h. O primeiro livro foi escolhido por votação dos participantes da turma passada.\n\nAs vagas são limitadas a 15 pessoas por turma.", 6],
            ['Oficina de encadernação artesanal', 'Aprenda a costurar o próprio caderno com papel reaproveitado.',
             "Em duas tardes, a oficina ensina costura copta e capa dura com papelão. Todo o material é doado pela comunidade.\n\n## O que levar\n\n- Uma tesoura\n- Vontade de errar algumas vezes", 11],
            ['Horário especial de fim de ano', 'Do dia 24 ao dia 2 a biblioteca abre só pela manhã.',
             "Entre os dias 24 e 2 o atendimento é das 9h ao meio-dia. A devolução de livros pode ser feita na caixa da entrada a qualquer hora.", 19],
        ];
        $insere = $pdo->prepare("INSERT INTO noticias (titulo, slug, resumo, corpo, status, publicada_em, autor_id) VALUES (?, ?, ?, ?, 'publicada', ?, 1)");
        foreach ($noticias as [$titulo, $resumo, $corpo, $diasAtras]) {
            $insere->execute([$titulo, Texto::slug($titulo), $resumo, $corpo, date('Y-m-d H:i:s', strtotime("-$diasAtras days 10:00"))]);
        }
        $pdo->prepare("INSERT INTO noticias (titulo, slug, resumo, corpo, status, autor_id) VALUES (?, ?, ?, ?, 'rascunho', 2)")
            ->execute(['Mutirão de catalogação (rascunho)', 'mutirao-de-catalogacao', 'Ainda sem data.', 'Texto em construção.']);

        $links = [
            ['feira', 'https://example.org/feira-de-trocas', 'cartaz da praça'],
            ['clube', 'https://example.org/clube-de-leitura', 'QR code do mural da escola'],
            ['oficina', 'https://example.org/oficina-encadernacao', 'post da rede social'],
        ];
        $insereLink = $pdo->prepare('INSERT INTO links (slug, destino, descricao, criado_por) VALUES (?, ?, ?, 1)');
        foreach ($links as $l) {
            $insereLink->execute($l);
        }

        // 30 dias de movimento inventado, com mais gente no fim de semana
        $caminhos = array_merge(['/'], array_map(fn($n) => '/noticias/' . Texto::slug($n[0]), $noticias));
        $visita = $pdo->prepare('INSERT INTO visitas_dia (dia, caminho, visualizacoes, unicos) VALUES (?, ?, ?, ?)');
        $clique = $pdo->prepare('INSERT INTO cliques_dia (link_id, dia, total) VALUES (?, ?, ?)');
        mt_srand(42); // sempre os mesmos números: a demonstração fica igual em qualquer máquina
        for ($d = 29; $d >= 0; $d--) {
            $dia = date('Y-m-d', strtotime("-$d days"));
            $fimDeSemana = in_array((int)date('N', strtotime($dia)), [6, 7], true);
            foreach ($caminhos as $i => $c) {
                $v = (int)round(mt_rand(4, 22) * ($fimDeSemana ? 1.8 : 1) / ($i + 1) * ($i === 0 ? 1 : 1.6));
                if ($v > 0) {
                    $visita->execute([$dia, $c, $v, (int)ceil($v * 0.7)]);
                }
            }
            foreach ([1, 2, 3] as $id) {
                $t = mt_rand(0, 9) - $id;
                if ($t > 0) {
                    $clique->execute([$id, $dia, $t]);
                }
            }
        }
        $pdo->exec('UPDATE links SET cliques = (SELECT COALESCE(SUM(total), 0) FROM cliques_dia WHERE link_id = links.id)');

        echo "Demonstração pronta.\n";
        echo "Entre em /bastidores com coordenacao@exemplo.org e a senha provisória: $senha\n";
        echo "(o painel vai pedir uma senha nova no primeiro acesso)\n";
        break;

    default:
        echo "Comandos:\n  php console.php usuario:novo \"Nome\" email admin|editor\n  php console.php demo\n";
}
