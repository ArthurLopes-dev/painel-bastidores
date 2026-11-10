<h1>Minha conta</h1>
<p class="sub"><?= e($usuario['email']) ?></p>
<?php if ($usuario['trocar_senha']): ?>
  <p class="aviso aviso-erro">Você entrou com uma senha provisória. Escolha uma senha sua para liberar o painel.</p>
<?php endif; ?>
<?php if ($erro): ?><p class="aviso aviso-erro" role="alert"><?= e($erro) ?></p><?php endif; ?>

<form method="post" action="/bastidores/conta" class="formulario estreito">
  <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
  <label>Senha atual <input type="password" name="atual" autocomplete="current-password" required></label>
  <label>Nova senha <small>mínimo de 10 caracteres</small> <input type="password" name="nova" autocomplete="new-password" minlength="10" required></label>
  <label>Repita a nova senha <input type="password" name="confirmar" autocomplete="new-password" minlength="10" required></label>
  <button>Trocar senha</button>
</form>
