<?php
declare(strict_types=1);

/**
 * IP do visitante e HTTPS, inclusive atrás de proxy reverso (Traefik, Nginx,
 * Cloudflare, painéis de contêiner).
 *
 * Atrás de proxy, REMOTE_ADDR é o endereço do proxy: o limite de tentativas
 * bloquearia todo mundo junto e o contador veria um visitante só. Os
 * cabeçalhos X-Forwarded-* só valem com CONFIAR_PROXY=1, porque sem proxy
 * qualquer pessoa pode mandá-los com o valor que quiser.
 */
final class Requisicao
{
    public static function ip(): string
    {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '';
        $repassado = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
        if (self::confiaNoProxy() && $repassado !== '') {
            // O proxy acrescenta no FIM da lista o endereço que ele enxergou.
            // Os anteriores vieram do cliente e podem ser inventados.
            $partes = array_map('trim', explode(',', $repassado));
            $ultimo = (string)end($partes);
            if (filter_var($ultimo, FILTER_VALIDATE_IP)) {
                $ip = $ultimo;
            }
        }
        return $ip;
    }

    public static function segura(): bool
    {
        $https = $_SERVER['HTTPS'] ?? '';
        if ($https !== '' && strtolower($https) !== 'off') {
            return true;
        }
        return self::confiaNoProxy() && strtolower($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
    }

    private static function confiaNoProxy(): bool
    {
        return Ambiente::obter('CONFIAR_PROXY') === '1';
    }
}
