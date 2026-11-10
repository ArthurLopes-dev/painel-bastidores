<h1>Registro de ações</h1>
<p class="sub">Quem fez o quê no painel. As 200 ações mais recentes.</p>
<table class="tabela">
  <thead><tr><th>Quando</th><th>Quem</th><th>Ação</th><th>Sobre</th></tr></thead>
  <tbody>
  <?php foreach ($lista as $r): ?>
    <tr>
      <td><?= e(date('d/m/Y H:i', strtotime($r['em'] . ' UTC'))) ?></td>
      <td><?= e($r['nome'] ?? '—') ?></td>
      <td><?= e($r['acao']) ?></td>
      <td><?= e($r['alvo']) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
