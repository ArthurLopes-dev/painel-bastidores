<?php $erro = fn($c) => isset($erros[$c]) ? '<span class="msg-erro">' . e($erros[$c]) . '</span>' : ''; ?>
<h1>Links curtos</h1>
<p class="sub">Para cartaz, QR code e rede social: o link curto redireciona e conta os cliques por dia.</p>

<form method="post" action="/bastidores/links" class="formulario em-linha">
  <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
  <label>Link <span class="prefixo"><span>/l/</span><input name="slug" value="<?= e($l['slug']) ?>" placeholder="feira-de-trocas" maxlength="40" required></span><?= $erro('slug') ?></label>
  <label>Destino <input name="destino" type="url" value="<?= e($l['destino']) ?>" placeholder="https://…" required><?= $erro('destino') ?></label>
  <label>Descrição <input name="descricao" value="<?= e($l['descricao']) ?>" maxlength="120" placeholder="cartaz da praça"></label>
  <button>Criar</button>
</form>

<?php if (!$lista): ?><p class="vazio">Nenhum link ainda.</p><?php else: ?>
<table class="tabela">
  <thead><tr><th>Link</th><th>Destino</th><th>Cliques</th><th>Situação</th><th></th></tr></thead>
  <tbody>
  <?php foreach ($lista as $item): ?>
    <tr class="<?= $item['ativo'] ? '' : 'apagado' ?>">
      <td><code><?= e($base) ?>/l/<?= e($item['slug']) ?></code><br><small><?= e($item['descricao']) ?></small></td>
      <td class="quebra"><?= e($item['destino']) ?></td>
      <td><?= (int)$item['cliques'] ?></td>
      <td><span class="selo selo-<?= $item['ativo'] ? 'publicada' : 'rascunho' ?>"><?= $item['ativo'] ? 'Ativo' : 'Pausado' ?></span></td>
      <td class="acoes">
        <form method="post" action="/bastidores/links/<?= (int)$item['id'] ?>/alternar">
          <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
          <button class="link"><?= $item['ativo'] ? 'Pausar' : 'Reativar' ?></button>
        </form>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
<?php endif; ?>
