// Pede confirmação antes de enviar formulários com data-confirmar (ex.: excluir).
// Arquivo separado porque a CSP do painel não permite script embutido na página.
document.addEventListener('submit', (evento) => {
  const msg = evento.target.dataset.confirmar;
  if (msg && !window.confirm(msg)) evento.preventDefault();
});
