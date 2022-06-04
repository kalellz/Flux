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
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (1, 2, 'ps5', 'playstation 5 barato', 5200, '11 9293219','menezes.victorsantos@gmail.com', '77424-180')


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

-- CSU08:: consultar produtos por usuario
SELECT id_anuncio			     id,
       id_usuario                  usuario,
	  nm_produto                  nome,
       ds_produto                  descricao,
       dc_preco                    preco,
       img_produto                 imagem
  FROM tb_anuncio
 WHERE id_usuario		= ?

 -- CSU09:: consultar produtos por categoria
SELECT id_anuncio			     id,
       id_usuario                  usuario,
       id_categoria                categoria,
	  nm_produto                  nome,
       ds_produto                  descricao,
       dc_preco                    preco,
       img_produto                 imagem
  FROM tb_anuncio
 WHERE id_categoria		= ?





 ---------------------------------------------------------------------------------------------------

-- carga inicial para tb_anuncio
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (1, 1, 'ps5', 'playstation 5 barato', 5200, '11 9293219','menezes.victorsantos@gmail.com', '77424-180');
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (2, 1, 'xbox', 'xbox one caro', 1200, '11 3215213213','horvathmontemurro@gmail.com', '232134-180');

---------------------------------------------------------------------------------------------------

INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (1, 2, 'armario', 'armario barato', 200, '11 9293219','menezes.victorsantos@gmail.com', '77424-180');
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (2, 2, 'tinta', 'tinta azul xbom', 20, '11 3215213213','horvathmontemurro@gmail.com', '232134-180');

---------------------------------------------------------------------------------------------------

INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (1, 3, 'beyblade', 'pegasus quebrado', 5, '11 9293219','menezes.victorsantos@gmail.com', '77424-180');
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (2, 3, 'ioio', 'ioio de bambu', 50, '11 3215213213','horvathmontemurro@gmail.com', '232134-180');

---------------------------------------------------------------------------------------------------

INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (1, 4,'camisa da nike', 'camisa da nike refletiva', 250, '11 9293219','menezes.victorsantos@gmail.com', '77424-180');
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (2, 4, 'bag', 'bag ajustavel no precinho', 90, '11 3215213213','horvathmontemurro@gmail.com', '232134-180');

---------------------------------------------------------------------------------------------------

INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (1, 5, 'seringa', 'seringa medica não usada', 10, '11 9293219','menezes.victorsantos@gmail.com', '77424-180');
INSERT INTO tb_anuncio (id_usuario,id_categoria, nm_produto, ds_produto, dc_preco, ds_telefone, ds_email, ds_cep)
       VALUES (2, 5, 'jaleco de medico', 'jaleco pouco usado', 60, '11 3215213213','horvathmontemurro@gmail.com', '232134-180');

---------------------------------------------------------------------------------------------------