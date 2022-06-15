import { con } from "./connection.js";

export async function cadastro(nome, email, senha) {
	const comando = `
    INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
    VALUES (?,?,?);
    `;
	const [linhas] = await con.query(comando, [nome, email, senha]);
	return linhas;
}
export async function login(email,senha) {
    const comando = 
    `select id_usuario 		  id,
           nm_usuario		nome,
           ds_email		    email
    from tb_usuario
    where ds_email 		= ?
    and ds_senha		= ? `
    
    const [linhas] = await con.query(comando, [email,senha]) 
    return linhas[0];
}
export async function buscarUsuarioEmail(email){
    const comando = `
    select ds_email		    email

    from tb_usuario
    where ds_email 		= ?`
    const [linhas] = await con.query(comando, [email])
    return linhas[0]
    
}