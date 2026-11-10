<?php $erro = fn($c) => isset($erros[$c]) ? '<span class="msg-erro">' . e($erros[$c]) . '</span>' : ''; ?>
<h1>Usuários</h1>

<?php if ($senhaNova): ?>
  <div class="aviso aviso-ok senha-unica" role="status">
    <p>Conta criada para <strong><?= e($senhaNova['email']) ?></strong>. Senha provisória:</p>
    <p><code class="grande"><?= e($senhaNova['senha']) ?></code></p>
    <p><small>Ela aparece só agora. A pessoa vai precisar trocar no primeiro acesso.</small></p>
  </div>
<?php endif; ?>

<form method="post" action="/bastidores/usuarios" class="formulario em-linha">
  <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
  <label>Nome <input name="nome" value="<?= e($form['nome']) ?>" required><?= $erro('nome') ?></label>
  <label>E-mail <input name="email" type="email" value="<?= e($form['email']) ?>" required><?= $erro('email') ?></label>
  <label>Papel
    <select name="papel">
      <option value="editor"<?= $form['papel'] === 'editor' ? ' selected' : '' ?>>Edição: notícias e links</option>
      <option value="admin"<?= $form['papel'] === 'admin' ? ' selected' : '' ?>>Administração: tudo</option>
    </select>
  </label>
  <button>Criar conta</button>
</form>

<table class="tabela">
  <thead><tr><th>Nome</th><th>E-mail</th><th>Papel</th><th>Último acesso</th><th></th></tr></thead>
  <tbody>
  <?php foreach ($lista as $p): ?>
    <tr class="<?= $p['ativo'] ? '' : 'apagado' ?>">
      <td><?= e($p['nome']) ?></td>
      <td><?= e($p['email']) ?></td>
      <td><?= $p['papel'] === 'admin' ? 'Administração' : 'Edição' ?></td>
      <td><?= data_br($p['ultimo_acesso']) ?></td>
      <td class="acoes">
        <?php if ((int)$p['id'] !== (int)$usuario['id']): ?>
        <form method="post" action="/bastidores/usuarios/<?= (int)$p['id'] ?>/alternar">
          <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
          <button class="link<?= $p['ativo'] ? ' perigo' : '' ?>"><?= $p['ativo'] ? 'Desativar' : 'Reativar' ?></button>
        </form>
        <?php else: ?><small>você</small><?php endif; ?>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
