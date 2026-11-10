<form class="caixa-entrar" method="post" action="/bastidores/entrar">
  <p class="marca">✿ Bastidores</p>
  <h1>Entrar</h1>
  <p class="sub"><?= e(NOME_SITE) ?></p>
  <?php if ($erro): ?><p class="aviso aviso-erro" role="alert"><?= e($erro) ?></p><?php endif; ?>
  <input type="hidden" name="_csrf" value="<?= e(Acesso::csrf()) ?>">
  <label>E-mail <input type="email" name="email" value="<?= e($email) ?>" autocomplete="username" required autofocus></label>
  <label>Senha <input type="password" name="senha" autocomplete="current-password" required></label>
  <button>Entrar</button>
</form>
