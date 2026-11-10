<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= e($titulo) ?><?= $titulo !== NOME_SITE ? ' · ' . e(NOME_SITE) : '' ?></title>
  <link rel="stylesheet" href="/site.css">
  <!-- liga.js marca o <html> antes da primeira pintura; sem os efeitos, nada fica escondido -->
  <script src="/liga.js"></script>
  <script type="module" src="/js/site.js"></script>
</head>
<body>
  <!-- ipê-amarelo em 3D: fundo fixo e decorativo de todas as páginas públicas -->
  <canvas id="cena-ipe" class="cena-fundo" aria-hidden="true"></canvas>
  <header class="topo" data-hide>
    <a class="marca" href="/"><span class="flor" aria-hidden="true">✿</span> <?= e(NOME_SITE) ?></a>
    <span class="local">Vale Sereno</span>
  </header>
  <main><?= $conteudo ?></main>
  <footer class="rodape">Projeto de portfólio. Biblioteca, cidade e notícias são fictícias.</footer>
</body>
</html>
