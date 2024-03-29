CREATE DATABASE Roman;
GO

USE Roman;
GO

CREATE TABLE TipoUsuario
(
	idTipoUsuario SMALLINT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(25) UNIQUE NOT NULL
)
GO

CREATE TABLE Usuario 
(
	idUsuario SMALLINT PRIMARY KEY IDENTITY(1,1),
	idTipoUsuario SMALLINT FOREIGN KEY REFERENCES TipoUsuario(idTipoUsuario),
	email VARCHAR(255) UNIQUE NOT NULL,
	senha VARCHAR(255) NOT NULL CHECK ( len(senha) >= 8),
	nome VARCHAR(100) NOT NULL
);
GO

CREATE TABLE Tema
(
	idTema SMALLINT PRIMARY KEY IDENTITY(1,1),
	tituloTema VARCHAR(200) NOT NULL UNIQUE,
	situacao SMALLINT DEFAULT(1)
)
GO

CREATE TABLE Sugestao
(
	idSugestao SMALLINT PRIMARY KEY IDENTITY(1,1),
	idUsuario SMALLINT FOREIGN KEY REFERENCES Usuario(idUsuario),
	idTema SMALLINT FOREIGN KEY REFERENCES Tema(idTema),
	tituloSugestao VARCHAR(50) NOT NULL,
	descricao VARCHAR(300) NOT NULL
)
GO

