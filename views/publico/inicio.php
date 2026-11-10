<section class="hero">
  <div class="hero-texto">
    <p class="selo" data-hide>Biblioteca comunitária · aberta desde 1998</p>
    <h1 class="titulo" data-hide>Livros, oficinas e café de graça no fim da rua.</h1>
    <p class="sub" data-hide>Aberta de terça a sábado, das 9h às 19h. Quem tem a carteirinha leva até três livros por vez.</p>
    <div class="hero-acoes" data-hide>
      <a class="botao" href="#noticias">Ver as notícias</a>
      <span class="endereco">Rua das Paineiras, 140 · Vila Aurora</span>
    </div>
  </div>
</section>

<div class="coluna">
  <h2 class="secao" id="noticias" data-hide>Notícias</h2>
  <?php if (!$noticias): ?>
    <p class="vazio">Nenhuma notícia publicada ainda.</p>
  <?php endif; ?>
  <div class="cartoes">
    <?php foreach ($noticias as $n): ?>
      <a class="cartao" href="/noticias/<?= e($n['slug']) ?>" data-hide>
        <time datetime="<?= e($n['publicada_em']) ?>"><?= data_br($n['publicada_em']) ?></time>
        <h3><?= e($n['titulo']) ?></h3>
        <?php if ($n['resumo']): ?><p><?= e($n['resumo']) ?></p><?php endif; ?>
        <span class="ler" aria-hidden="true">Ler →</span>
      </a>
    <?php endforeach; ?>
  </div>
</div>
