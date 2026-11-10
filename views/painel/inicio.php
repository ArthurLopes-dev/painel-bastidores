<?php
$max = max(1, ...array_column($serie, 'visualizacoes'));
$larg = 28; $vao = 8; $alt = 140;
?>
<h1>Olá, <?= e(explode(' ', $usuario['nome'])[0]) ?></h1>
<p class="sub">Últimos 30 dias</p>

<div class="kpis">
  <div class="kpi"><strong><?= number_format((int)$totais['v'], 0, ',', '.') ?></strong><span>visualizações</span></div>
  <div class="kpi"><strong><?= number_format((int)$totais['u'], 0, ',', '.') ?></strong><span>visitantes únicos por dia, somados</span></div>
  <div class="kpi"><strong><?= number_format($totais['cliques'], 0, ',', '.') ?></strong><span>cliques em links curtos</span></div>
  <div class="kpi"><strong><?= $publicadas ?></strong><span>notícias no ar</span></div>
</div>

<section class="bloco">
  <h2>Visualizações por dia</h2>
  <svg class="grafico" viewBox="0 0 <?= count($serie) * ($larg + $vao) ?> <?= $alt + 24 ?>" role="img"
       aria-label="Visualizações nos últimos 14 dias">
    <?php foreach ($serie as $i => $d):
        $h = $d['visualizacoes'] / $max * $alt; $x = $i * ($larg + $vao); ?>
      <g>
        <title><?= data_br($d['dia']) ?>: <?= $d['visualizacoes'] ?> visualizações, <?= $d['unicos'] ?> únicos</title>
        <rect class="barra" x="<?= $x ?>" y="<?= round($alt - $h, 1) ?>" width="<?= $larg ?>" height="<?= round(max($h, 1), 1) ?>" rx="4"></rect>
        <text class="eixo" x="<?= $x + $larg / 2 ?>" y="<?= $alt + 16 ?>" text-anchor="middle"><?= date('d', strtotime($d['dia'])) ?></text>
      </g>
    <?php endforeach; ?>
  </svg>
</section>

<div class="duas">
  <section class="bloco">
    <h2>Notícias mais lidas</h2>
    <?php if (!$maisLidas): ?><p class="vazio">Sem visitas no período.</p><?php endif; ?>
    <ol class="ranking">
      <?php foreach ($maisLidas as $m): ?>
        <li><a href="/noticias/<?= e($m['slug']) ?>" target="_blank" rel="noopener"><?= e($m['titulo']) ?></a><span><?= (int)$m['total'] ?></span></li>
      <?php endforeach; ?>
    </ol>
  </section>
  <section class="bloco">
    <h2>Links mais clicados</h2>
    <?php if (!$linksTop): ?><p class="vazio">Sem cliques no período.</p><?php endif; ?>
    <ol class="ranking">
      <?php foreach ($linksTop as $l): ?>
        <li><span>/l/<?= e($l['slug']) ?> <small><?= e($l['descricao']) ?></small></span><span><?= (int)$l['total'] ?></span></li>
      <?php endforeach; ?>
    </ol>
  </section>
</div>
