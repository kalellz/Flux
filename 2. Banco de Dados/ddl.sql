create database Flux;
use Flux;

create table TB_usuario(
	ID_usuario int Primary key auto_increment,
    NM_usuario varchar(200),
    DS_email varchar(200),
    DS_senha varchar(200)
);

create table TB_anuncio_categoria(
	ID_categoria int Primary key auto_increment,
    NM_categoria varchar(200)
);

create table TB_anuncio(
	ID_anuncio int Primary key auto_increment,
    ID_usuario int,
    ID_categoria int,
    IMG_produto blob,
    DS_email varchar(300),
    NM_produto varchar(200),
    DS_produto varchar(200),
    DC_preco decimal(15,2),
	DS_telefone varchar(200),
	DS_cep varchar(200),
	foreign key (ID_categoria) references TB_anuncio_categoria (ID_categoria),
    foreign key (ID_usuario) references TB_usuario(ID_usuario)
	);

INSERT INTO TB_anuncio_categoria(NM_categoria)
		VALUES ('Tecnologia');
        INSERT INTO TB_anuncio_categoria(NM_categoria)
		VALUES ('Casa e móveis');
        INSERT INTO TB_anuncio_categoria(NM_categoria)
		VALUES ('Brinquedos');
        INSERT INTO TB_anuncio_categoria(NM_categoria)
		VALUES ('Roupas');
        INSERT INTO TB_anuncio_categoria(NM_categoria)
		VALUES ('Saúde');