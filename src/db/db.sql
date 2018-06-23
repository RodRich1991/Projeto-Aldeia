CREATE DATABASE IF NOT EXISTS aldeia;

USE aldeia;

CREATE TABLE IF NOT EXISTS tb_usuario (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  senha VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tb_genero (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tb_jogo (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  id_genero INT,
  votos INT UNSIGNED NOT NULL DEFAULT = 0,
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
