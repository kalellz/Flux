--CSU00 efetuar cadstro 
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
     VALUES ('Flux', 'flux@flux.com', '1234');

-- CSU01: efetuar login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email		email
  from tb_usuario
where ds_email 		= 'flux@flux.com'
and ds_senha		     = '1234';

-- CSU02: inserir anuncio
INSERT INTO tb_anuncio (id_usuario, nm_produto, ds_produto,img_produto, dc_preco, ds_telefone, ds_email, ds_cep) VALUES (1, 'ps5', 'playstation 5 barato', 5200, '11 9293219','victorsantosmenzes@gmail', '77424-180')


-- CSU02.1:: alterar a imagem
UPDATE tb_anuncio 
   SET img_produto = ''
 WHERE id_anuncio = ?;

-- CSU03:: alterar produto
UPDATE tb_anuncio 
   SET nm_produto    = ?,
       ds_produto    = ?,
       dc_preco      = ?,
       ds_telefone   = ?,
       ds_email      = ?,
       ds_cep        = ?
 WHERE id_anuncio = ?;

-- CSU04:: remover produto
DELETE FROM tb_anuncio 
      WHERE id_anuncio = 1;

-- CSU05:: consultar todos os produtos      
SELECT id_anuncio			id,
	   nm_produto           nome,
       ds_produto      descricao,
       dc_preco            preco,
       img_produto         imagem
  FROM tb_anuncio;
  
-- CSU06:: consultar produtos por nome
SELECT id_anuncio			id,
	   nm_produto           nome,
       ds_produto      descricao,
       dc_preco            preco,
       img_produto         imagem
  FROM tb_anuncio
 WHERE nm_produto		like '%a%';

-- CSU07:: consultar produto por id
SELECT id_anuncio			id,
	  nm_produto           nome,
       ds_produto      descricao,
       dc_preco            preco,
       img_produto         imagem
  FROM tb_anuncio
 WHERE id_anuncio			= ?;

