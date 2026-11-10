// Roda antes da primeira pintura: avisa o CSS que os efeitos vão assumir as
// entradas. Se o módulo não chegar, o CSS mostra tudo sozinho depois de 2,5 s.
// Arquivo separado (e não <script> na página) por causa da CSP: script-src 'self'.
if ('noModule' in HTMLScriptElement.prototype && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('efeitos');
}
