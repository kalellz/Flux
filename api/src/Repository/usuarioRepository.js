import { con } from './connection.js'

export default async function cadastro(nome, email, senha){
    const comando = `
    INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
    VALUES (?,?,?);
    `
    const [linhas] = await con.query(comando,[nome,email,senha]);
    return linhas
}