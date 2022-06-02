import { con }  from "./connection.js";

export async function inserirProduto(produto) {
	const comando = `
    INSERT INTO tb_anuncio (id_usuario, nm_produto, ds_produto,img_produto, dc_preco, ds_telefone, ds_email, ds_cep) 
               VALUES (?, ?, ?, null, ?, ?, ?, ?)`;

	const [resposta] = await con.query(comando, [produto.usuario, produto.nome, produto.descricao, produto.imagem, produto.preco, produto.telefone, produto.email, produto.cep]);
	produto.id = resposta.insertId;
	return produto;
}
