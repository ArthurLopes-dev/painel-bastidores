-- Estrutura inicial. Cada arquivo desta pasta roda uma vez, em ordem, e fica
-- anotado na tabela migracoes (ver src/Banco.php).

CREATE TABLE usuarios (
  id            INTEGER PRIMARY KEY,
  nome          TEXT    NOT NULL,
  email         TEXT    NOT NULL UNIQUE COLLATE NOCASE,
  senha_hash    TEXT    NOT NULL,
  papel         TEXT    NOT NULL CHECK (papel IN ('admin', 'editor')),
  ativo         INTEGER NOT NULL DEFAULT 1,
  trocar_senha  INTEGER NOT NULL DEFAULT 0,   -- 1 = senha provisória, troca obrigatória no primeiro acesso
  criado_em     TEXT    NOT NULL DEFAULT (datetime('now')),
  ultimo_acesso TEXT
);

CREATE TABLE noticias (
  id            INTEGER PRIMARY KEY,
  titulo        TEXT    NOT NULL,
  slug          TEXT    NOT NULL UNIQUE,
  resumo        TEXT    NOT NULL DEFAULT '',
  corpo         TEXT    NOT NULL DEFAULT '',
  status        TEXT    NOT NULL CHECK (status IN ('rascunho', 'publicada')),
  autor_id      INTEGER REFERENCES usuarios(id) ON DELETE SET NULL,
  publicada_em  TEXT,
  atualizada_em TEXT    NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX noticias_publicadas ON noticias (status, publicada_em);

CREATE TABLE links (
  id         INTEGER PRIMARY KEY,
  slug       TEXT    NOT NULL UNIQUE,
  destino    TEXT    NOT NULL,
  descricao  TEXT    NOT NULL DEFAULT '',
  ativo      INTEGER NOT NULL DEFAULT 1,
  cliques    INTEGER NOT NULL DEFAULT 0,
  criado_por INTEGER REFERENCES usuarios(id) ON DELETE SET NULL,
  criado_em  TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE cliques_dia (
  link_id INTEGER NOT NULL REFERENCES links(id) ON DELETE CASCADE,
  dia     TEXT    NOT NULL,
  total   INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (link_id, dia)
);

-- Visitas agregadas por dia e página: nenhuma linha identifica uma pessoa.
CREATE TABLE visitas_dia (
  dia           TEXT    NOT NULL,
  caminho       TEXT    NOT NULL,
  visualizacoes INTEGER NOT NULL DEFAULT 0,
  unicos        INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (dia, caminho)
);

-- Só para não contar a mesma pessoa duas vezes no mesmo dia. O hash usa um sal
-- que muda todo dia e as linhas são apagadas no dia seguinte: não dá para
-- seguir alguém de um dia para o outro.
CREATE TABLE visitantes_dia (
  dia     TEXT NOT NULL,
  hash    TEXT NOT NULL,
  caminho TEXT NOT NULL,
  PRIMARY KEY (dia, hash, caminho)
);

CREATE TABLE tentativas_login (
  chave TEXT    NOT NULL,
  em    INTEGER NOT NULL
);
CREATE INDEX tentativas_por_chave ON tentativas_login (chave, em);

CREATE TABLE registro (
  id         INTEGER PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE SET NULL,
  acao       TEXT    NOT NULL,
  alvo       TEXT    NOT NULL DEFAULT '',
  em         TEXT    NOT NULL DEFAULT (datetime('now'))
);
