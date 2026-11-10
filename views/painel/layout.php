<?php $aviso = Visao::pegarAviso(); $aqui = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH); ?>
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title><?= e($titulo) ?> · Bastidores</title>
  <link rel="stylesheet" href="/painel.css">
  <script src="/painel.js" defer></script>
  <script type="module" src="/js/painel-efeitos.js"></script>
</head>
<body class="painel">
  <aside class="lateral">
    <a class="marca" href="/bastidores">✿ Bastidores</a>
    <nav>
      <?php
      $itens = [['/bastidores', 'Início', null], ['/bastidores/noticias', 'Notícias', 'noticias'], ['/bastidores/links', 'Links curtos', 'links'],
                ['/bastidores/usuarios', 'Usuários', 'usuarios'], ['/bastidores/registro', 'Registro', 'registro']];
      foreach ($itens as [$href, $rotulo, $area]):
          if ($area && !Acesso::pode($area, $usuario)) continue;
          $ativo = $href === '/bastidores' ? $aqui === $href : str_starts_with((string)$aqui, $href); ?>
        <a href="<?= $href ?>"<?= $ativo ? ' aria-current="page"' : '' ?>><?= $rotulo ?></a>
      <?php endforeach; ?>
    </nav>
    <div class="quem">
      <a href="/bastidores/conta"><?= e($usuario['nome']) ?></a>
      <span class="papel"><?= $usuario['papel'] === 'admin' ? 'Administração' : 'Edição' ?></span>
      <form method="post" action="/bastidores/sair">
        <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
        <button class="link">Sair</button>
      </form>
      <a class="ver-site" href="/" target="_blank" rel="noopener">Ver o site ↗</a>
    </div>
  </aside>
  <main class="area">
    <?php if ($aviso): ?><p class="aviso aviso-<?= e($aviso['tipo']) ?>" role="status"><?= e($aviso['texto']) ?></p><?php endif; ?>
    <?= $conteudo ?>
  </main>
</body>
</html>
