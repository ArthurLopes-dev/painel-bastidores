# Bastidores · site de notícias com painel administrativo

Site público de notícias com um painel restrito para quem publica: notícias com
rascunho e prévia, links curtos com contagem de cliques, contador de visitas
sem cookie, contas com perfis e registro de ações. PHP 8 e SQLite, sem
framework; no navegador, anime.js e three.js empacotados no próprio projeto.

> **Projeto de portfólio.** A "Biblioteca Comunitária Ipê Amarelo", a cidade de
> Vale Sereno e as notícias da demonstração são fictícias.

## O que ele mostra

- **Front controller e roteador próprios**, com o formato dos parâmetros
  conferido na rota (`{id}` só aceita dígitos) antes de chegar ao banco.
- **Autenticação séria**: bcrypt com custo fixo, troca do id de sessão no login,
  cookie só dentro de `/bastidores`, expiração por inatividade, e a mesma
  resposta (e o mesmo tempo) para e-mail inexistente e senha errada. Trocar a
  senha derruba as outras sessões da conta.
- **Limite de tentativas que não vira arma**: o limite rígido é por e-mail +
  IP. Quem só sabe o e-mail do administrador não consegue trancá-lo para fora,
  e rajadas em paralelo não furam a contagem (a tentativa é gravada antes de
  contar).
- **Perfis no servidor**: edição cuida de notícias e links; administração também
  de contas e do registro. Esconder o botão não é permissão, então cada ação
  confere o papel de novo.
- **Senha provisória**: conta nova nasce com senha aleatória, mostrada uma vez, e
  o painel só libera depois da troca.
- **Contador de visitas sem dado pessoal**: sem cookie, sem IP gravado. A visita
  "única do dia" usa um hash com sal que muda todo dia e é apagado no dia
  seguinte.
- **Defesa contra XSS em camadas**: toda saída passa por `e()`, o Markdown
  escapa o HTML antes de formatar, links só aceitam `http`/`https` e a CSP
  bloqueia script embutido.
- **CSRF** em todo POST, **SQL só com parâmetros**, migrações em transação.

## Rodar

```bash
cp .env.example .env
php console.php demo                         # cria a biblioteca fictícia e mostra a senha provisória
php -S localhost:8080 -t public public/index.php
```

Site em <http://localhost:8080>, painel em <http://localhost:8080/bastidores>.

Para usar de verdade, sem a demonstração:

```bash
php console.php usuario:novo "Seu Nome" voce@seudominio.com admin
```

O sal dos hashes é sorteado sozinho na primeira execução (`dados/sal.txt`);
se preferir, defina `APP_SAL` no `.env`.

**Publicar:**

- **Apache** — aponte o site para `public/`. Se a hospedagem só deixa enviar
  tudo para a raiz (`public_html`), o `.htaccess` da raiz manda cada pedido para
  dentro de `public/` e bloqueia banco, `.env` e código.
- **Atrás de proxy** (Traefik, Nginx, Cloudflare, painel de contêiner) — use
  `CONFIAR_PROXY=1`, senão o limite de tentativas enxerga todo mundo como o
  mesmo IP e o cookie da sessão sai sem `Secure`.
- Erro inesperado vai para o log do servidor; o visitante vê só uma página
  neutra, sem caminho de arquivo nem SQL.

## Testes

```bash
php tests/teste.php
```

40 verificações: migração e restrições do banco, Markdown contra XSS, URLs
perigosas, rotas, contagem de visitas, login, bloqueio por tentativas, sessão
derrubada ao trocar a senha, proxy e perfis. Rodam em PHP 8.2 e 8.4.

## Decisões

**Por que custo fixo no bcrypt?** O padrão do PHP mudou de 10 para 12 na versão
8.4. Com o padrão, uma conta real (custo 10) responderia 4× mais rápido que um
e-mail inexistente (comparado com um hash de custo 12), e o tempo entregaria
quem tem conta.

**Por que o primeiro usuário nasce no terminal?** Uma tela de "instalação"
esquecida aberta no servidor deixa qualquer um virar administrador. O terminal
exige acesso ao servidor.

**Por que não existe "excluir usuário"?** Desativar tira o acesso na hora (a
sessão cai na próxima página) e mantém o registro de ações legível. O painel
também impede desativar o último administrador.

**Por que o link curto manda `Cache-Control: no-store`?** Sem isso o navegador
guarda o redirecionamento e o segundo clique da mesma pessoa não chega ao
servidor.

**Por que "visitantes únicos por dia, somados"?** Como o hash muda todo dia, a
mesma pessoa em dois dias conta duas vezes. É o preço de não conseguir seguir
ninguém, e o painel diz isso no rótulo.

## Camada visual (anime.js + three.js)

O site público tem um **ipê-amarelo em 3D** como fundo fixo, feito inteiro no
código (`frontend/cena-ipe.js`), sem modelo nem imagem para baixar:

- **Madeira**: tronco único e galhos por ramificação recursiva com semente fixa
  (a árvore sai igual em toda visita), juntas arredondadas, raízes e textura de
  casca desenhada num canvas. Tudo vira uma malha só.
- **Copa**: ~1.500 flores de cinco pétalas em taça, num `InstancedMesh` (um
  draw call), com folhas verdes entre elas. Flores caem e cobrem o chão.
- **Livros** de capa dura ao pé da árvore, com lombada, frisos e miolo.
- A **rolagem gira a árvore**; na notícia, uma barra mostra o progresso da leitura.
- As notícias aparecem como **livros** (lombada com frisos, capa, corte das páginas), só com CSS.

O movimento é do anime.js v4 (entrada do título, árvore que cresce e desabrocha,
cards por rolagem, números do painel). Dois cuidados que valem nota:

- **CSP estrita**: o site só aceita script e estilo de `'self'`. As bibliotecas
  vão empacotadas em `public/js/`, e o título é dividido em palavras por um
  código próprio, porque o `splitText` do anime.js escreve `style="..."` no
  HTML, que a CSP bloqueia.
- **Três caminhos funcionam**: normal; `prefers-reduced-motion` (um quadro
  parado, nenhum loop); e sem o JavaScript dos efeitos (o CSS mostra tudo).

Para refazer os pacotes depois de mexer em `frontend/`:

```bash
npm install
npm run build
```

## Estrutura

```
public/        index.php (entrada única), CSS, JS, .htaccess
src/           Banco, Rotas, Acesso, Visitas, Texto, Visao, Publico, Painel
views/         publico/ e painel/
migracoes/     SQL que roda uma vez, em ordem
console.php    criar usuário e montar a demonstração
dados/         banco SQLite, fora do git
tests/         testes sem framework
```

## Segredos

Nenhum segredo neste repositório. O `.env` e o banco estão no `.gitignore`; o
`.env.example` só traz os nomes das variáveis.

## Licença

MIT. Inclui three.js e anime.js (ambos MIT); os avisos de licença ficam no fim dos pacotes.
