<?php
declare(strict_types=1);

/**
 * Contador de visitas sem cookie e sem guardar IP.
 *
 * Para saber se a visita é "única no dia" basta um hash de IP + navegador +
 * página, com um sal derivado do dia. O sal muda à meia-noite e as linhas de
 * ontem são apagadas: o hash de hoje não se liga ao de amanhã, e o que fica
 * para sempre são só os totais por dia e página.
 */
final class Visitas
{
    private const ROBOS = '/bot|crawl|spider|slurp|preview|monitor|curl|wget|python|headless|facebookexternalhit/i';

    public static function registrar(PDO $pdo, string $caminho, string $ip, string $navegador, string $sal, ?string $dia = null): void
    {
        if ($navegador === '' || preg_match(self::ROBOS, $navegador)) {
            return; // robôs inflam o número e não são leitores
        }
        $dia ??= date('Y-m-d');
        $salDoDia = hash_hmac('sha256', $dia, $sal);
        $hash = hash_hmac('sha256', $ip . '|' . $navegador . '|' . $caminho, $salDoDia);

        $pdo->beginTransaction();
        $novo = $pdo->prepare('INSERT OR IGNORE INTO visitantes_dia (dia, hash, caminho) VALUES (?, ?, ?)');
        $novo->execute([$dia, $hash, $caminho]);
        $unico = $novo->rowCount() === 1 ? 1 : 0;

        $pdo->prepare(
            'INSERT INTO visitas_dia (dia, caminho, visualizacoes, unicos) VALUES (?, ?, 1, ?)
             ON CONFLICT (dia, caminho) DO UPDATE SET
               visualizacoes = visualizacoes + 1,
               unicos = unicos + excluded.unicos'
        )->execute([$dia, $caminho, $unico]);

        $pdo->prepare('DELETE FROM visitantes_dia WHERE dia < ?')->execute([$dia]);
        $pdo->commit();
    }

    /** @return list<array{dia: string, visualizacoes: int, unicos: int}> um item por dia, inclusive os zerados */
    public static function serie(PDO $pdo, int $dias, ?string $hoje = null): array
    {
        $hoje ??= date('Y-m-d');
        $inicio = date('Y-m-d', strtotime("$hoje -" . ($dias - 1) . ' days'));
        $q = $pdo->prepare('SELECT dia, SUM(visualizacoes) v, SUM(unicos) u FROM visitas_dia WHERE dia BETWEEN ? AND ? GROUP BY dia');
        $q->execute([$inicio, $hoje]);
        $porDia = [];
        foreach ($q as $l) {
            $porDia[$l['dia']] = $l;
        }
        $serie = [];
        for ($i = 0; $i < $dias; $i++) {
            $d = date('Y-m-d', strtotime("$inicio +$i days"));
            $serie[] = ['dia' => $d, 'visualizacoes' => (int)($porDia[$d]['v'] ?? 0), 'unicos' => (int)($porDia[$d]['u'] ?? 0)];
        }
        return $serie;
    }
}
