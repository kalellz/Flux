import { con } from './connection.js'

export async function inserirProduto(produto){
    const comando = `
    INSERT INTO tb_anuncio (id_usuario, nm_produto, id_categoria, ds_produto,img_produto, dc_preco, ds_telefone, ds_email, ds_cep) VALUES (?,?,?,?,?,?,?,?,?);`

    const [resposta] = await con.query(comando, [produto.usuario, produto.nome, produto.categoria, produto.descricao, produto.imagem, produto.preco, produto.telefone, produto.email, produto.cep])
    produto.id = resposta.insertId;
    return produto
}
export async function alterarImagem(imagem, id){
    const comando = `
    UPDATE tb_anuncio 
    SET img_produto = ?
    WHERE id_anuncio = ?`
    const [linhas] = await con.query(comando, [imagem, id])
    return linhas.affectedRows;
}
export async function alterarProduto(id, produto){
	const comando = `
	UPDATE tb_anuncio 
   SET nm_produto    = ?,
       ds_produto    = ?,
       dc_preco      = ?,
       ds_telefone   = ?,
       ds_email      = ?,
       ds_cep        = ?
 WHERE id_anuncio = ?`
	const [linhas] = await con.query(comando, [[produto.usuario, produto.nome, produto.categoria, produto.descricao, produto.imagem, produto.preco, produto.telefone, produto.email, produto.cep]])
}
export async function consultarProdutos() {
	const comando = `
		SELECT id_anuncio			    id,
			nm_produto             		nome,
			ds_produto        			descricao,
			dc_preco              		preco,
			img_produto           		imagem
		FROM tb_anuncio`
	const [linhas] = await con.query(comando);
	return linhas;
}
export async function deletarProduto(){
	const comando = `
	DELETE FROM tb_anuncio 
      WHERE id_anuncio = ?`
	const [linhas] = await con.query(comando)
	return linhas;
}