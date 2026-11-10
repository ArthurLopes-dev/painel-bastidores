<?php
declare(strict_types=1);

/**
 * Roteador mínimo: método + caminho com parâmetros.
 *   {id}   só aceita dígitos
 *   {slug} só aceita a-z, 0-9 e hífen
 * O formato é conferido aqui, antes de chegar a qualquer consulta.
 */
final class Rotas
{
    private array $rotas = [];

    public function get(string $padrao, callable $acao): void
    {
        $this->rotas[] = ['GET', $this->regex($padrao), $acao];
    }

    public function post(string $padrao, callable $acao): void
    {
        $this->rotas[] = ['POST', $this->regex($padrao), $acao];
    }

    /** @return bool false quando nenhuma rota casa */
    public function despachar(string $metodo, string $caminho): bool
    {
        $caminhoCasou = false;
        foreach ($this->rotas as [$m, $re, $acao]) {
            if (!preg_match($re, $caminho, $partes)) {
                continue;
            }
            $caminhoCasou = true;
            if ($m !== $metodo) {
                continue;
            }
            $parametros = array_filter($partes, 'is_string', ARRAY_FILTER_USE_KEY);
            $acao(...$parametros);
            return true;
        }
        if ($caminhoCasou) {
            http_response_code(405);
            header('Allow: GET, POST');
            echo 'Método não permitido';
            return true;
        }
        return false;
    }

    private function regex(string $padrao): string
    {
        $re = preg_replace_callback('/\{(\w+)\}/', function ($m) {
            $formato = $m[1] === 'id' ? '\d{1,10}' : '[a-z0-9-]{1,80}';
            return '(?P<' . $m[1] . '>' . $formato . ')';
        }, $padrao);
        return '#^' . $re . '$#';
    }
}
