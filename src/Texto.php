<?php
declare(strict_types=1);

/**
 * Slug, URL segura e um Markdown pequeno.
 *
 * O Markdown escapa TODO o HTML antes de aplicar a formatação: quem escreve
 * uma notícia não consegue injetar <script>, mesmo sendo editor. Links só
 * aceitam http e https (javascript: e data: ficam como texto).
 */
final class Texto
{
    public static function slug(string $texto): string
    {
        $t = mb_strtolower(trim($texto));
        $t = strtr($t, [
            'á' => 'a', 'à' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'é' => 'e', 'ê' => 'e', 'è' => 'e',
            'í' => 'i', 'ì' => 'i', 'ó' => 'o', 'ô' => 'o', 'õ' => 'o', 'ò' => 'o', 'ú' => 'u', 'ü' => 'u',
            'ç' => 'c', 'ñ' => 'n',
        ]);
        $t = preg_replace('/[^a-z0-9]+/', '-', $t);
        return substr(trim($t, '-'), 0, 80);
    }

    public static function urlSegura(string $url): bool
    {
        if (strlen($url) > 2000 || !filter_var($url, FILTER_VALIDATE_URL)) {
            return false;
        }
        return in_array(strtolower((string)parse_url($url, PHP_URL_SCHEME)), ['http', 'https'], true);
    }

    public static function markdown(string $md): string
    {
        $html = '';
        $paragrafo = [];
        $lista = [];

        $fecharParagrafo = function () use (&$paragrafo, &$html) {
            if ($paragrafo) {
                $html .= '<p>' . self::emLinha(implode(' ', $paragrafo)) . "</p>\n";
                $paragrafo = [];
            }
        };
        $fecharLista = function () use (&$lista, &$html) {
            if ($lista) {
                $html .= "<ul>\n" . implode('', array_map(fn($i) => '<li>' . self::emLinha($i) . "</li>\n", $lista)) . "</ul>\n";
                $lista = [];
            }
        };

        foreach (preg_split('/\R/', $md) as $linha) {
            $t = trim($linha);
            if ($t === '') {
                $fecharParagrafo();
                $fecharLista();
            } elseif (preg_match('/^(#{2,3})\s+(.+)$/', $t, $m)) {
                $fecharParagrafo();
                $fecharLista();
                $n = strlen($m[1]);
                $html .= "<h$n>" . self::emLinha($m[2]) . "</h$n>\n";
            } elseif (preg_match('/^[-*]\s+(.+)$/', $t, $m)) {
                $fecharParagrafo();
                $lista[] = $m[1];
            } else {
                $fecharLista();
                $paragrafo[] = $t;
            }
        }
        $fecharParagrafo();
        $fecharLista();
        return $html;
    }

    private static function emLinha(string $t): string
    {
        $t = htmlspecialchars($t, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $t = preg_replace_callback(
            '/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/',
            fn($m) => '<a href="' . $m[2] . '" rel="noopener nofollow">' . $m[1] . '</a>',
            $t
        );
        $t = preg_replace('/\*\*(.+?)\*\*/', '<strong>$1</strong>', $t);
        return preg_replace('/(?<![*\w])\*(?!\s)(.+?)(?<!\s)\*(?![*\w])/', '<em>$1</em>', $t);
    }
}
