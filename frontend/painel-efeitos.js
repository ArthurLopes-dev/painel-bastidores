// Movimento discreto no painel: números contando e barras do gráfico subindo.
// O painel é ferramenta de trabalho, então só a tela inicial anima, uma vez,
// e nada disso roda com prefers-reduced-motion.
import { animate, stagger, utils } from 'animejs';

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const anims = [];
  document.querySelectorAll('.kpi strong').forEach((el, i) => {
    const fim = Number(el.textContent.replace(/\D/g, ''));
    if (!fim) return;
    const valor = { v: 0 };
    el.textContent = '0';
    anims.push(animate(valor, {
      v: fim, duration: 1100, delay: i * 90, ease: 'out(4)', modifier: utils.round(0),
      onRender: () => { el.textContent = valor.v.toLocaleString('pt-BR'); },
    }));
  });
  if (document.querySelector('.grafico .barra')) {
    anims.push(animate('.grafico .barra', { scaleY: [0, 1], duration: 700, delay: stagger(40, { start: 150 }), ease: 'out(3)' }));
  }
  if (document.querySelector('.kpi, .bloco')) {
    anims.push(animate('.kpi, .bloco', { opacity: [0, 1], y: [14, 0], duration: 520, delay: stagger(60), ease: 'out(3)' }));
  }
  // relógio de quadros parado (aba em segundo plano): termina tudo e mostra os números certos
  setTimeout(() => anims.forEach((a) => { if (!a.completed) a.complete(); }), 2500);
}
