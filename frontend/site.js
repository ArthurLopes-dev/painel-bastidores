// Movimento do site público da biblioteca (anime.js v4 + cena three.js).
//
// Camadas (skill de anime.js): entrada do topo, ambiente (flores e livros),
// entradas por rolagem com rede de segurança e uma ligação de rolagem (scrub):
// o quanto a página já rolou gira o ipê do fundo.
// Três caminhos funcionam: normal, reduced-motion (sem loop) e sem este arquivo.
import { animate, createTimeline, stagger, onScroll, spring, engine } from 'animejs';
import { criarCenaIpe } from './cena-ipe.js';

const raiz = document.documentElement;
const reduzir = matchMedia('(prefers-reduced-motion: reduce)').matches;
engine.defaults.ease = 'out(3)';
engine.precision = 3;

function mod(nome, fn) {
  try { return fn(); } catch (e) { console.warn(`[${nome}] ignorado:`, e && e.message); return null; }
}
function preparar(alvos) {
  const lista = typeof alvos === 'string' ? [...document.querySelectorAll(alvos)]
    : alvos instanceof Element ? [alvos] : [...(alvos || [])].filter(Boolean);
  lista.forEach((el) => { el.style.opacity = '0'; el.removeAttribute('data-hide'); });
  return lista;
}

// Divide um título em palavras, cada uma dentro de uma máscara.
// Não uso o splitText do anime.js aqui porque ele escreve style="..." no HTML,
// e a CSP do site (style-src 'self') bloqueia isso. Aqui as classes vêm do CSS
// e o resto é CSSOM (el.style), que a CSP permite. O texto continua o mesmo
// para leitores de tela: aria-label no título, palavras com aria-hidden.
function dividirPalavras(el) {
  const texto = el.textContent.trim();
  el.setAttribute('aria-label', texto);
  el.textContent = '';
  const palavras = [];
  texto.split(/\s+/).forEach((p, i) => {
    if (i) el.append(' ');
    const mascara = document.createElement('span');
    mascara.className = 'mascara';
    mascara.setAttribute('aria-hidden', 'true');
    const palavra = document.createElement('span');
    palavra.className = 'palavra';
    palavra.textContent = p;
    mascara.append(palavra);
    el.append(mascara);
    palavras.push(palavra);
  });
  return palavras;
}

const estado = { rolagem: 0 };
const cena = mod('cena', () => criarCenaIpe(document.getElementById('cena-ipe'), { reduzir, estado }));

if (reduzir || !raiz.classList.contains('efeitos')) {
  document.querySelectorAll('[data-hide]').forEach((el) => el.removeAttribute('data-hide'));
} else {
  mod('topo', topo);
  mod('cartoes', cartoes);
  mod('materia', materia);
  mod('rolagem', ligarRolagem);
}

// ------------------------------------------------------------------ topo da página inicial
function topo() {
  const titulo = document.querySelector('.hero .titulo');
  if (!titulo) return;
  const tl = createTimeline({ defaults: { duration: 760, ease: 'out(4)' } });
  tl.add(preparar('.topo'), { opacity: [0, 1], y: [-12, 0], duration: 560 }, 0);
  tl.add(preparar('.hero .selo'), { opacity: [0, 1], y: [10, 0], duration: 520 }, 120);
  preparar(titulo).forEach((el) => { el.style.opacity = '1'; });
  tl.add(dividirPalavras(titulo), { y: ['110%', '0%'], duration: 860, delay: stagger(60) }, 200);
  tl.add(preparar('.hero .sub'), { opacity: [0, 1], y: [14, 0] }, 560);
  tl.add(preparar('.hero-acoes'), { opacity: [0, 1], y: [14, 0] }, 680);

  if (cena) {
    // o ipê cresce do chão, a copa desabrocha de dentro para fora e as flores começam a cair
    cena.tronco.scale.set(1, 0.001, 1);
    cena.grupoCopa.scale.setScalar(0.001);
    cena.flores.opacity = 0;
    tl.add(cena.tronco.scale, { y: 1, duration: 1300, ease: 'out(3)' }, 150);
    tl.add(cena.grupoCopa.scale, { x: 1, y: 1, z: 1, ease: spring({ bounce: 0.32, duration: 1400 }) }, 850);
    tl.add(cena.flores, { opacity: 1, duration: 1200, ease: 'inOut(2)' }, 1500);
    // livros "pousam" ao pé da árvore
    cena.livros.forEach((l, i) => {
      const y = l.pulo.position.y;
      l.pulo.position.y = y + 3;
      l.pulo.scale.setScalar(0.001);
      tl.add(l.pulo.position, { y, ease: spring({ bounce: 0.4, duration: 900 }) }, 1200 + i * 120);
      tl.add(l.pulo.scale, { x: 1, y: 1, z: 1, duration: 500, ease: 'outBack(1.6)' }, 1200 + i * 120);
    });
  }
  // rede de segurança: relógio parado (aba oculta) não deixa nada invisível
  setTimeout(() => { if (!tl.completed) tl.complete(); }, 3500);
}

// ------------------------------------------------------------------ cartões de notícia
function cartoes() {
  const grade = document.querySelector('.cartoes');
  if (!grade) return;
  const titulo = preparar('.secao');
  const lista = preparar('.cartao');
  const anim = animate([...titulo, ...lista], {
    opacity: [0, 1], y: [34, 0], duration: 760, delay: stagger(90),
    autoplay: onScroll({ target: grade, enter: 'bottom-=90 top', sync: 'play', repeat: false }),
  });
  // watchdog (receita 2): se o gatilho não disparar, mostra quando estiver na tela
  let n = 0;
  const id = setInterval(() => {
    n++;
    if (!anim.began && grade.getBoundingClientRect().top < innerHeight * 1.05) anim.play();
    if (anim.began || n > 15) clearInterval(id);
  }, 900);
}

// ------------------------------------------------------------------ página da notícia
function materia() {
  const artigo = document.querySelector('.materia');
  if (!artigo) return;
  const titulo = artigo.querySelector('h1');
  const tl = createTimeline({ defaults: { duration: 700, ease: 'out(4)' } });
  tl.add(preparar('.topo'), { opacity: [0, 1], y: [-12, 0], duration: 520 }, 0);
  preparar(titulo).forEach((el) => { el.style.opacity = '1'; });
  tl.add(dividirPalavras(titulo), { y: ['110%', '0%'], delay: stagger(45) }, 120);
  tl.add(preparar(artigo.querySelectorAll('[data-hide]')), { opacity: [0, 1], y: [16, 0], delay: stagger(70) }, 380);
  setTimeout(() => { if (!tl.completed) tl.complete(); }, 3500);

  // barra de leitura: segue o progresso da página (sem duração própria, vai e volta com o dedo)
  const barra = document.querySelector('.leitura span');
  if (barra) aoRolar((p) => { barra.style.transform = `scaleX(${p.toFixed(4)})`; });
}

// ------------------------------------------------------------------ rolagem → cena
function ligarRolagem() {
  if (!cena) return;
  // a cena lê estado.rolagem a cada quadro e gira o ipê com amortecimento
  aoRolar((p) => { estado.rolagem = p; });
}

// Progresso da página inteira (0 no topo, 1 no fim). Funciona também em página
// curta, onde os gatilhos enter/leave de um elemento se cruzariam.
function aoRolar(fn) {
  const medir = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    fn(max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0);
  };
  addEventListener('scroll', medir, { passive: true });
  addEventListener('resize', medir, { passive: true });
  medir();
}
