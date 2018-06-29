DROP DATABASE IF EXISTS aldeia;

CREATE DATABASE IF NOT EXISTS aldeia;

USE aldeia;

CREATE TABLE IF NOT EXISTS tb_usuario (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  usuario VARCHAR(50) NOT NULL UNIQUE,
  senha VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  grupo INT NOT NULL DEFAULT 0,
  id_status INT NOT NULL DEFAULT 1,
  dt_alteracao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tb_genero (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  id_status INT NOT NULL DEFAULT 1,
  dt_alteracao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tb_jogo (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  id_genero INT,
  votos INT UNSIGNED NOT NULL DEFAULT 0,
  descricao text NOT NULL,
  path_url VARCHAR(250) NOT NULL,
  id_status INT NOT NULL DEFAULT 1,
  dt_alteracao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (id_genero) REFERENCES tb_genero (id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tb_favoritos (
  id_usuario INT,
  id_jogo INT,
  FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id),
  FOREIGN KEY (id_jogo) REFERENCES tb_jogo (id),
  PRIMARY KEY (id_usuario, id_jogo)
);

INSERT INTO tb_usuario (nome, usuario, senha, email, grupo) VALUES ('Administrador', 'admin', 'admin', 'admin@admin', 99);
INSERT INTO tb_genero (nome) VALUES ('Ação'), ('Aventura'), ('Estratégia'), ('Luta'), ('Corrida'), ('Esportes');
INSERT INTO tb_jogo (nome, id_genero, descricao, path_url) VALUES
('Jogo da Velha', 3, 'Jogo da velha para jogar com um amigo!', 'http://localhost/jogos/jogo-da-velha/'),
('Jogo do Gato', 3, 'Um jogo que pode adivinhar o seu pensamento!!', 'http://localhost/jogos/jogo-do-gato/'),
('Damas', 3, 'Jogo de damas para enfrentar um amigo.', 'http://localhost/jogos/damas/');
