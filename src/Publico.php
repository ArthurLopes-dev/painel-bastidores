<?php
declare(strict_types=1);

/** Páginas abertas: lista de notícias, notícia e link curto. Sem sessão, sem cookie. */
final class Publico
{
    public static function inicio(): void
    {
        $pdo = Banco::pdo();
        self::contar('/');
        $noticias = $pdo->query(
            "SELECT titulo, slug, resumo, publicada_em FROM noticias
              WHERE status = 'publicada' ORDER BY publicada_em DESC LIMIT 20"
        )->fetchAll();
        Visao::mostrar('publico/inicio', ['noticias' => $noticias, 'titulo' => NOME_SITE]);
    }

    public static function noticia(string $slug): void
    {
        $q = Banco::pdo()->prepare(
            "SELECT n.*, u.nome AS autor FROM noticias n LEFT JOIN usuarios u ON u.id = n.autor_id
              WHERE n.slug = ? AND n.status = 'publicada'"
        );
        $q->execute([$slug]);
        $noticia = $q->fetch();
        if (!$noticia) {
            self::naoEncontrado();
            return;
        }
        self::contar('/noticias/' . $slug);
        Visao::mostrar('publico/noticia', ['n' => $noticia, 'titulo' => $noticia['titulo']]);
    }

    public static function link(string $slug): void
    {
        $pdo = Banco::pdo();
        $q = $pdo->prepare('SELECT id, destino FROM links WHERE slug = ? AND ativo = 1');
        $q->execute([$slug]);
        $link = $q->fetch();
        if (!$link) {
            self::naoEncontrado();
            return;
        }
        $pdo->beginTransaction();
        $pdo->prepare('UPDATE links SET cliques = cliques + 1 WHERE id = ?')->execute([$link['id']]);
        $pdo->prepare(
            'INSERT INTO cliques_dia (link_id, dia, total) VALUES (?, ?, 1)
             ON CONFLICT (link_id, dia) DO UPDATE SET total = total + 1'
        )->execute([$link['id'], date('Y-m-d')]);
        $pdo->commit();

        header('Cache-Control: no-store'); // senão o navegador guarda o redirecionamento e o clique some
        header('Location: ' . $link['destino'], true, 302);
    }

    public static function naoEncontrado(): void
    {
        Visao::mostrar('publico/404', ['titulo' => 'Página não encontrada'], 'publico/layout', 404);
    }

    private static function contar(string $caminho): void
    {
        Visitas::registrar(
            Banco::pdo(),
            $caminho,
            Requisicao::ip(),
            mb_substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 300),
            SAL
        );
    }
}
