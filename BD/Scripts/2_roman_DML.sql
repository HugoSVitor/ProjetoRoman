USE Roman;
GO

INSERT INTO TipoUsuario(titulo)
VALUES ('Admin'),('Professor')
GO

INSERT INTO Usuario(email,senha,nome,idTipoUsuario)
VALUES ('adm@email.com','adm12345','Administrador',1),('saulo@email.com','saulo123','Saulo',2),
('lucas@email.com','lucas123','Lucas',2)
GO

INSERT INTO Tema(tituloTema)
VALUES ('Administração'),('BackEnd'),('Banco de Dados')
GO

INSERT INTO Sugestao(idUsuario,idTema,tituloSugestao,descricao)
VALUES (2,1,'Taylor','Influencia de Taylor sob os temas de administração.'),
(2,2,'Swagger','Entendimento e como criar o Swagger.'),
(3,3,'Tabelas','Como criar tabelas no SQL Server.')
GO