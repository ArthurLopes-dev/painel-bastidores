// Cena 3D de fundo do site: um ipê-amarelo florido, com livros ao pé da árvore.
//
// Tudo modelado no código, nada para baixar (a CSP do site só aceita 'self'):
// - Madeira: ramificação recursiva com semente fixa (a árvore sai igual em toda
//   visita). Cada galho é um cilindro afinando; as juntas ganham uma esfera
//   ("nó") para não mostrar emenda e a base ganha raízes. Tudo vira UMA malha
//   (mergeGeometries) com textura de casca desenhada num canvas.
// - Copa: flores de verdade — 5 pétalas inclinadas em taça e o miolo laranja,
//   cor por vértice — num InstancedMesh (um draw call para ~1.200 flores), mais
//   folhas verdes entre elas para dar profundidade. A copa fica num grupo com
//   pivô no centro, para "desabrochar" de dentro para fora.
// - Livros: capa dura (duas tampas + lombada com frisos dourados), miolo com
//   textura de folhas e um rótulo na capa.
// - Chão: sombra suave e um tapete de flores caídas; flores caem da copa.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, MeshStandardMaterial, MeshPhysicalMaterial,
  MeshBasicMaterial, HemisphereLight, DirectionalLight, InstancedMesh, CylinderGeometry, SphereGeometry,
  CircleGeometry, PlaneGeometry, BoxGeometry, CanvasTexture, SRGBColorSpace, RepeatWrapping, Object3D,
  Vector3, Quaternion, Color, Box3, DoubleSide, Float32BufferAttribute, Timer, MathUtils, ACESFilmicToneMapping,
} from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

function semente(s) { // mulberry32: aleatório reprodutível
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function canvas2d(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function textura(c, repetir) {
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  if (repetir) { t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(...repetir); }
  t.anisotropy = 4;
  return t;
}
function pintarVertices(geo, cor) {
  const c = new Color(cor), n = geo.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new Float32BufferAttribute(arr, 3));
  return geo;
}

// ------------------------------------------------------------------ madeira
function texturaCasca(r) {
  const [c, g] = canvas2d(256, 512);
  g.fillStyle = '#6a4a36';
  g.fillRect(0, 0, 256, 512);
  for (let i = 0; i < 260; i++) {          // sulcos verticais da casca
    const x = r() * 256, y = r() * 512, comp = 30 + r() * 150, larg = 1.5 + r() * 5;
    const l = Math.floor(40 + r() * 70);
    g.strokeStyle = `rgba(${l + 25},${l},${l - 15},${0.35 + r() * 0.5})`;
    g.lineWidth = larg;
    g.beginPath();
    g.moveTo(x, y);
    g.bezierCurveTo(x + (r() - 0.5) * 12, y + comp * 0.33, x + (r() - 0.5) * 12, y + comp * 0.66, x + (r() - 0.5) * 8, y + comp);
    g.stroke();
  }
  for (let i = 0; i < 40; i++) {           // fissuras transversais curtas
    g.strokeStyle = 'rgba(35,22,14,0.5)';
    g.lineWidth = 1 + r() * 2;
    const x = r() * 256, y = r() * 512;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + 6 + r() * 14, y + (r() - 0.5) * 4); g.stroke();
  }
  return textura(c, [2, 2]);
}

function criarArvore(r) {
  const madeira = [];
  const pontas = [];
  const CIMA = new Vector3(0, 1, 0);

  // um segmento de madeira: cilindro afinando, levemente curvo, com nó na base
  function ramo(origem, direcao, comp, raio, afina = 0.72) {
    const fim = origem.clone().addScaledVector(direcao, comp);
    const g = new CylinderGeometry(raio * afina, raio, comp, 10, 3);
    const pos = g.attributes.position;
    const curva = (r() - 0.5) * comp * 0.1;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / comp + 0.5;
      pos.setX(i, pos.getX(i) + Math.sin(y * Math.PI) * curva);
    }
    g.computeVertexNormals();
    g.translate(0, comp / 2, 0);
    g.applyQuaternion(new Quaternion().setFromUnitVectors(CIMA, direcao));
    g.translate(origem.x, origem.y, origem.z);
    madeira.push(g);
    const no = new SphereGeometry(raio * 1.02, 10, 8); // junta arredondada, sem emenda
    no.translate(origem.x, origem.y, origem.z);
    madeira.push(no);
    return fim;
  }

  // galho que se divide em dois, um para cada lado (forquilha em 3D), sempre
  // puxando para cima: é o que dá a copa arredondada em vez de um "Y" chapado
  function crescer(origem, direcao, comp, raio, nivel) {
    const fim = ramo(origem, direcao, comp, raio);
    if (nivel === 0) { pontas.push(fim); return; }
    if (nivel === 1) pontas.push(fim);            // pontas intermediárias enchem a copa
    const u = new Vector3().crossVectors(direcao, Math.abs(direcao.y) > 0.9 ? new Vector3(1, 0, 0) : CIMA).normalize();
    const v = new Vector3().crossVectors(direcao, u).normalize();
    const phi = r() * Math.PI * 2;
    for (let i = 0; i < 2; i++) {
      const az = phi + i * Math.PI + (r() - 0.5) * 0.7;
      const eixo = u.clone().multiplyScalar(Math.cos(az)).addScaledVector(v, Math.sin(az));
      const nova = direcao.clone().applyAxisAngle(eixo, 0.34 + r() * 0.3);
      nova.y += 0.2;
      nova.normalize();
      crescer(fim, nova, comp * (0.72 + r() * 0.1), raio * 0.72 * 0.92, nivel - 1);
    }
  }

  // tronco único, em três segmentos com leve desvio (não é um poste reto)
  let base = new Vector3(0, 0, 0);
  let dir = new Vector3(0.04, 1, 0.02).normalize();
  let raio = 0.36;
  let meio = null;
  for (let s = 0; s < 3; s++) {
    base = ramo(base, dir, 1.3, raio, 0.88);
    raio *= 0.88;
    if (s === 1) meio = base.clone();
    dir = dir.clone().add(new Vector3((r() - 0.5) * 0.16, 0, (r() - 0.5) * 0.16)).normalize();
  }
  // galhos principais saindo do alto do tronco, espalhados em volta (guarda-chuva do ipê)
  const N = 5;
  for (let i = 0; i < N; i++) {
    const az = (i / N) * Math.PI * 2 + (r() - 0.5) * 0.5;
    const tomba = 0.62 + r() * 0.28;
    const d = new Vector3(Math.sin(tomba) * Math.cos(az), Math.cos(tomba), Math.sin(tomba) * Math.sin(az));
    crescer(base, d, 1.7 + r() * 0.35, raio * 0.66, 3);
  }
  crescer(base, dir, 1.35, raio * 0.6, 3);                                     // guia central: fecha o topo da copa
  crescer(meio, new Vector3(-0.72, 0.62, 0.3).normalize(), 1.25, 0.11, 2);    // um galho baixo, para não ficar simétrica

  // raízes: cones grossos junto ao tronco, afinando para fora e para baixo
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + r() * 0.4;
    const comp = 0.7 + r() * 0.35;
    const raiz = new CylinderGeometry(0.03, 0.15, comp, 8, 1);
    raiz.translate(0, comp / 2, 0);
    raiz.applyQuaternion(new Quaternion().setFromUnitVectors(CIMA, new Vector3(Math.cos(a), -0.42, Math.sin(a)).normalize()));
    raiz.translate(0, 0.34, 0);
    madeira.push(raiz);
  }

  const tronco = new Mesh(
    mergeGeometries(madeira),
    new MeshStandardMaterial({ map: texturaCasca(r), color: '#ffffff', roughness: 0.92 }),
  );
  madeira.forEach((g) => g.dispose());
  return { tronco, pontas };
}

// ------------------------------------------------------------------ flores e folhas da copa
function geometriaFlor() {
  const partes = [];
  for (let i = 0; i < 5; i++) {
    const p = new SphereGeometry(1, 7, 5);
    p.scale(0.055, 0.02, 0.1);          // pétala: larga, fina e comprida
    p.translate(0, 0, 0.085);
    p.rotateX(-0.55);                    // inclinada para cima: flor em taça (trombeta do ipê)
    p.rotateY((i / 5) * Math.PI * 2);
    partes.push(pintarVertices(p, i % 2 ? '#ffd23a' : '#ffdf5c'));
  }
  const miolo = new SphereGeometry(0.035, 6, 4);
  partes.push(pintarVertices(miolo, '#d27d10'));
  const tubo = new CylinderGeometry(0.03, 0.012, 0.09, 6);
  tubo.translate(0, -0.05, 0);
  partes.push(pintarVertices(tubo, '#e6a51e'));
  return mergeGeometries(partes);
}
function geometriaFolha() {
  const f = new SphereGeometry(1, 7, 4);
  f.scale(0.05, 0.008, 0.12);
  f.translate(0, 0, 0.11);
  return f;
}

function criarCopa(r, pontas) {
  const centro = pontas.reduce((a, p) => a.add(p), new Vector3()).divideScalar(pontas.length);
  const molde = new Object3D();
  const cor = new Color();
  const TONS = ['#ffffff', '#fff4c8', '#ffe79a', '#ffd970', '#fff9e0'];

  const porPonta = Math.round(1500 / pontas.length);
  const flores = new InstancedMesh(geometriaFlor(),
    new MeshStandardMaterial({ vertexColors: true, roughness: 0.55, emissive: '#4a2c00', emissiveIntensity: 0.25 }),
    porPonta * pontas.length);
  let k = 0;
  for (const p of pontas) {
    for (let j = 0; j < porPonta; j++) {
      // cachos: mais flores perto da ponta, viradas para fora do centro da copa
      const raio = Math.pow(r(), 0.6) * 0.72;
      const a = r() * Math.PI * 2, b = r() * Math.PI - Math.PI / 2;
      molde.position.set(
        p.x - centro.x + Math.cos(a) * Math.cos(b) * raio,
        p.y - centro.y + Math.sin(b) * raio * 0.6 + 0.08,
        p.z - centro.z + Math.sin(a) * Math.cos(b) * raio,
      );
      molde.lookAt(molde.position.clone().multiplyScalar(2).add(new Vector3(0, 1.5, 0)));
      molde.rotateX(Math.PI / 2);
      molde.rotateY(r() * 6.28);
      molde.scale.setScalar(0.85 + r() * 0.5);
      molde.updateMatrix();
      flores.setMatrixAt(k, molde.matrix);
      flores.setColorAt(k, cor.set(TONS[Math.floor(r() * TONS.length)]));
      k++;
    }
  }

  const NF = pontas.length * 4;
  const folhas = new InstancedMesh(geometriaFolha(), new MeshStandardMaterial({ roughness: 0.7, side: DoubleSide }), NF);
  const VERDES = ['#4f7a3a', '#5f8c45', '#3f6630', '#6f9a4f'];
  for (let i = 0; i < NF; i++) {
    const p = pontas[i % pontas.length];
    molde.position.set(p.x - centro.x + (r() - 0.5) * 0.7, p.y - centro.y + (r() - 0.6) * 0.4, p.z - centro.z + (r() - 0.5) * 0.7);
    molde.rotation.set((r() - 0.5) * 1.2, r() * 6.28, (r() - 0.5) * 1.2);
    molde.scale.setScalar(0.8 + r() * 0.6);
    molde.updateMatrix();
    folhas.setMatrixAt(i, molde.matrix);
    folhas.setColorAt(i, cor.set(VERDES[Math.floor(r() * VERDES.length)]));
  }

  const grupo = new Group();       // pivô no centro da copa: desabrocha de dentro para fora
  grupo.position.copy(centro);
  grupo.add(folhas, flores);
  return grupo;
}

// ------------------------------------------------------------------ chão
function criarChao(r) {
  const chao = new Group();
  const [c, g] = canvas2d(256, 256);
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, 'rgba(70,60,30,0.30)');
  grad.addColorStop(0.55, 'rgba(70,60,30,0.10)');
  grad.addColorStop(1, 'rgba(70,60,30,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  const sombra = new Mesh(new PlaneGeometry(9, 9), new MeshBasicMaterial({ map: textura(c), transparent: true, depthWrite: false }));
  sombra.rotation.x = -Math.PI / 2;
  sombra.position.y = 0.01;
  chao.add(sombra);

  const N = 260;
  const caidas = new InstancedMesh(geometriaFlor(), new MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }), N);
  const molde = new Object3D();
  for (let i = 0; i < N; i++) {
    const a = r() * Math.PI * 2, d = Math.sqrt(r()) * 3.6;
    molde.position.set(Math.cos(a) * d, 0.02, Math.sin(a) * d * 0.8);
    molde.rotation.set((r() - 0.5) * 0.6, r() * 6.28, (r() - 0.5) * 0.6);
    molde.scale.setScalar(0.7 + r() * 0.5);
    molde.updateMatrix();
    caidas.setMatrixAt(i, molde.matrix);
  }
  chao.add(caidas);
  return chao;
}

// ------------------------------------------------------------------ livros
function texturaPaginas() {
  const [c, g] = canvas2d(64, 256);
  g.fillStyle = '#fbf6e8';
  g.fillRect(0, 0, 64, 256);
  for (let y = 0; y < 256; y += 3) {
    g.fillStyle = `rgba(150,130,95,${0.12 + ((y * 7) % 5) * 0.03})`;
    g.fillRect(0, y, 64, 1);
  }
  return textura(c, [1, 1]);
}
function texturaRotulo(cor) {
  const [c, g] = canvas2d(256, 360);
  g.fillStyle = cor;
  g.fillRect(0, 0, 256, 360);
  g.fillStyle = 'rgba(255,248,225,0.92)';
  g.fillRect(36, 70, 184, 120);
  g.fillStyle = 'rgba(60,45,25,0.75)';
  g.fillRect(58, 100, 140, 12);
  g.fillRect(78, 124, 100, 8);
  g.fillRect(90, 150, 76, 6);
  g.strokeStyle = 'rgba(214,170,60,0.9)';
  g.lineWidth = 4;
  g.strokeRect(20, 20, 216, 320);
  return textura(c);
}
let paginasTex = null;
function criarLivro(cor) {
  const W = 1.45, H = 2.05, T = 0.36, TAMPA = 0.05;
  const livro = new Group();
  const couro = new MeshPhysicalMaterial({ color: cor, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.4 });
  const frente = new Mesh(new RoundedBoxGeometry(W, H, TAMPA, 2, 0.02), [couro, couro, couro, couro,
    new MeshPhysicalMaterial({ map: texturaRotulo(cor), roughness: 0.5, clearcoat: 0.3 }), couro]);
  frente.position.z = T / 2 - TAMPA / 2;
  const verso = new Mesh(new RoundedBoxGeometry(W, H, TAMPA, 2, 0.02), couro);
  verso.position.z = -T / 2 + TAMPA / 2;
  const lombada = new Mesh(new CylinderGeometry(T / 2, T / 2, H, 16, 1, false, Math.PI, Math.PI), couro);
  lombada.position.x = -W / 2;
  lombada.scale.x = 0.5;
  paginasTex ??= texturaPaginas();
  const miolo = new Mesh(new BoxGeometry(W * 0.96, H * 0.96, T - TAMPA * 2), new MeshStandardMaterial({ map: paginasTex, roughness: 0.95 }));
  miolo.position.x = W * 0.01;
  const ouro = new MeshStandardMaterial({ color: '#d4a63c', metalness: 0.6, roughness: 0.35 });
  for (const y of [-H * 0.36, H * 0.36]) {
    const friso = new Mesh(new CylinderGeometry(T / 2 + 0.005, T / 2 + 0.005, 0.035, 16, 1, false, Math.PI, Math.PI), ouro);
    friso.position.set(-W / 2, y, 0);
    friso.scale.x = 0.5;
    livro.add(friso);
  }
  livro.add(frente, verso, lombada, miolo);
  return livro;
}

export function criarCenaIpe(canvas, { reduzir = false, estado = { rolagem: 0 } } = {}) {
  if (!canvas) return null;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    canvas.remove();
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const r = semente(19980311);
  const cena = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 200);
  cena.add(new HemisphereLight('#ffffff', '#8a9a6a', 1.8));
  const sol = new DirectionalLight('#fff3d6', 2.6);
  sol.position.set(-6, 10, 8);
  cena.add(sol);
  const preenchimento = new DirectionalLight('#fff8ee', 0.8);
  preenchimento.position.set(7, 3, 6);
  cena.add(preenchimento);

  // mundo: tudo que fica no chão gira junto com a rolagem
  const mundo = new Group();
  cena.add(mundo);
  const { tronco, pontas } = criarArvore(r);
  const grupoCopa = criarCopa(r, pontas);
  const arvore = new Group();
  arvore.add(tronco, grupoCopa);
  mundo.add(arvore, criarChao(r));

  const livros = [
    { cor: '#3f6b3a', pos: [1.55, 0.11, 1.5], rot: [-Math.PI / 2, 0, 0.5] },
    { cor: '#a8452f', pos: [1.6, 0.31, 1.45], rot: [-Math.PI / 2, 0, 0.18], esc: 0.9 },
    { cor: '#2f4858', pos: [1.52, 0.5, 1.5], rot: [-Math.PI / 2, 0, 0.72], esc: 0.82 },
    { cor: '#c98f1c', pos: [-1.35, 0.54, 1.25], rot: [-0.2, 0.55, 0.08], esc: 0.85 },
  ].map((d) => {
    const pulo = new Group();
    const livro = criarLivro(d.cor);
    livro.rotation.set(...d.rot);
    livro.scale.setScalar((d.esc || 1) * 0.6);
    pulo.add(livro);
    pulo.position.set(...d.pos);
    mundo.add(pulo);
    return { pulo, livro };
  });

  // flores caindo da copa
  const QUEDA = 60;
  const flores = new InstancedMesh(geometriaFlor(),
    new MeshStandardMaterial({ vertexColors: true, roughness: 0.6, transparent: true }), QUEDA);
  flores.frustumCulled = false;
  mundo.add(flores);
  const queda = Array.from({ length: QUEDA }, (_, i) => ({ i, vel: 0, balanco: 0, fase: 0, giro: 0, x: 0, y: 0, z: 0 }));
  function nascer(f, espalhar) {
    const p = pontas[Math.floor(r() * pontas.length)];
    f.x = p.x + (r() - 0.5) * 1.2;
    f.z = p.z + (r() - 0.5) * 1.2;
    f.y = espalhar ? r() * p.y : p.y;
    f.vel = 0.35 + r() * 0.4;
    f.balanco = 0.6 + r() * 0.8;
    f.fase = r() * 6.28;
    f.giro = (r() - 0.5) * 3;
  }
  queda.forEach((f) => nascer(f, true));
  const molde = new Object3D();
  function atualizarQueda(t, dt) {
    for (const f of queda) {
      f.y -= f.vel * dt;
      if (f.y < 0.05) nascer(f, false);
      molde.position.set(f.x + Math.sin(t * f.balanco + f.fase) * 0.3, f.y, f.z + Math.cos(t * f.balanco + f.fase) * 0.2);
      molde.rotation.set(t * f.giro * 0.7 + f.fase, t * f.giro + f.fase, 0);
      molde.scale.setScalar(1.3);
      molde.updateMatrix();
      flores.setMatrixAt(f.i, molde.matrix);
    }
    flores.instanceMatrix.needsUpdate = true;
  }

  // Enquadramento de fundo (canvas fixo, janela toda): árvore à direita, do chão
  // até perto do topo; no celular, menor e no canto, para o texto ficar legível.
  const alturaArvore = new Box3().setFromObject(arvore).max.y;
  function posicionar() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const estreito = w < 760;
    const dist = 22;
    camera.position.set(0, 0, dist);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    const meiaAlt = Math.tan(MathUtils.degToRad(camera.fov / 2)) * dist;
    const meiaLarg = meiaAlt * camera.aspect;
    mundo.scale.setScalar((meiaAlt * (estreito ? 1.0 : 1.5)) / alturaArvore);
    mundo.position.set(estreito ? meiaLarg * 0.6 : meiaLarg * 0.56, -meiaAlt * 0.84, 0);
  }
  posicionar();
  window.addEventListener('resize', posicionar, { passive: true });

  const alvo = { x: 0, y: 0 };
  if (!reduzir) {
    window.addEventListener('pointermove', (e) => {
      alvo.x = (e.clientX / window.innerWidth - 0.5) * 2;
      alvo.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  const timer = new Timer();
  const giroBase = -0.5;
  function quadro() {
    timer.update();
    const t = timer.getElapsed();
    const dt = Math.min(timer.getDelta(), 0.05);
    // a rolagem gira a árvore (mostra que é 3D); o ponteiro só inclina de leve
    mundo.rotation.y = MathUtils.damp(mundo.rotation.y, giroBase + estado.rolagem * 1.4 + alvo.x * 0.12, 4, dt);
    mundo.rotation.x = MathUtils.damp(mundo.rotation.x, alvo.y * 0.03, 4, dt);
    // vento: a copa balança mais que o tronco
    arvore.rotation.z = Math.sin(t * 0.6) * 0.008;
    grupoCopa.rotation.z = Math.sin(t * 0.9 + 1) * 0.018;
    grupoCopa.rotation.x = Math.sin(t * 0.7) * 0.012;
    atualizarQueda(t, dt);
    renderer.render(cena, camera);
  }

  mundo.rotation.y = giroBase;
  if (reduzir) {
    atualizarQueda(0, 0);
    renderer.render(cena, camera);              // um quadro parado, nenhum loop
    window.addEventListener('resize', () => renderer.render(cena, camera), { passive: true });
  } else {
    renderer.setAnimationLoop(quadro);          // rAF: pausa sozinho com a aba oculta
  }

  return { tronco, grupoCopa, flores: flores.material, livros, renderizar: () => renderer.render(cena, camera) };
}
