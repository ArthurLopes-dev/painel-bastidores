<?php $erro = fn($c) => isset($erros[$c]) ? '<span class="msg-erro">' . e($erros[$c]) . '</span>' : ''; ?>
<div class="cabeca">
  <h1><?= e($titulo) ?></h1>
  <a class="link" href="/bastidores/noticias">← Voltar</a>
</div>

<div class="editor">
  <form method="post" action="/bastidores/noticias/salvar" class="formulario">
    <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
    <input type="hidden" name="id" value="<?= e($n['id'] ?? '') ?>">
    <label>Título <input name="titulo" value="<?= e($n['titulo']) ?>" maxlength="160" required><?= $erro('titulo') ?></label>
    <label>Endereço <small>/noticias/…, em branco gera pelo título</small>
      <input name="slug" value="<?= e($n['slug']) ?>" maxlength="80" pattern="[a-z0-9\-]*"><?= $erro('slug') ?></label>
    <label>Resumo <small>aparece na lista e no topo</small>
      <textarea name="resumo" rows="2" maxlength="300"><?= e($n['resumo']) ?></textarea></label>
    <label>Texto <small>## subtítulo · **negrito** · *itálico* · - lista · [link](https://…)</small>
      <textarea name="corpo" rows="16" class="mono"><?= e($n['corpo']) ?></textarea></label>
    <fieldset class="linha">
      <label class="radio"><input type="radio" name="status" value="rascunho"<?= $n['status'] !== 'publicada' ? ' checked' : '' ?>> Rascunho</label>
      <label class="radio"><input type="radio" name="status" value="publicada"<?= $n['status'] === 'publicada' ? ' checked' : '' ?>> Publicar</label>
      <button>Salvar</button>
    </fieldset>
  </form>
  <aside class="previa">
    <p class="rotulo">Prévia (atualiza ao salvar)</p>
    <div class="texto"><?= $previa ?: '<p class="vazio">Sem texto ainda.</p>' ?></div>
  </aside>
</div>
