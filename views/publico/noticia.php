<div class="leitura" aria-hidden="true"><span></span></div>
<article class="materia coluna">
  <a class="voltar" href="/" data-hide>← Todas as notícias</a>
  <h1><?= e($n['titulo']) ?></h1>
  <p class="meta" data-hide><?= data_br($n['publicada_em']) ?><?= $n['autor'] ? ' · ' . e($n['autor']) : '' ?></p>
  <?php if ($n['resumo']): ?><p class="linha-fina" data-hide><?= e($n['resumo']) ?></p><?php endif; ?>
  <div class="texto" data-hide><?= Texto::markdown($n['corpo']) /* o markdown já escapa o HTML */ ?></div>
</article>
