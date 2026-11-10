<div class="cabeca">
  <h1>Notícias</h1>
  <a class="botao" href="/bastidores/noticias/nova">Nova notícia</a>
</div>

<?php if (!$lista): ?><p class="vazio">Nenhuma notícia ainda.</p><?php else: ?>
<table class="tabela">
  <thead><tr><th>Título</th><th>Situação</th><th>Publicada em</th><th>Autor</th><th></th></tr></thead>
  <tbody>
  <?php foreach ($lista as $n): ?>
    <tr>
      <td><a href="/bastidores/noticias/<?= (int)$n['id'] ?>"><?= e($n['titulo']) ?></a></td>
      <td><span class="selo selo-<?= e($n['status']) ?>"><?= $n['status'] === 'publicada' ? 'No ar' : 'Rascunho' ?></span></td>
      <td><?= data_br($n['publicada_em']) ?></td>
      <td><?= e($n['autor'] ?? '—') ?></td>
      <td class="acoes">
        <form method="post" action="/bastidores/noticias/<?= (int)$n['id'] ?>/excluir" data-confirmar="Excluir “<?= e($n['titulo']) ?>”? Não dá para desfazer.">
          <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
          <button class="link perigo">Excluir</button>
        </form>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
<?php endif; ?>
