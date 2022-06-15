import { cadastro, login, buscarUsuarioEmail } from "../Repository/usuarioRepository.js";
import { Router } from "express";
const server = Router();

server.post("/usuario/cadastro", async (req, resp) => {
	try {

		const { nome, email, senha } = req.body;

		if(!nome)
			throw new Error('Insira um nome')
		if(!email)
			throw new Error('Insira um email')
		if(!senha)
			throw new Error('Insira uma senha')
		
			const usu = await buscarUsuarioEmail(email)
			if(!usu){
				const resposta = await cadastro(nome, email, senha); 
				resp.send('cadastrado com sucesso');
				
			}
			else
				throw new Error('email ja utilizado')
			
		

	} catch (err) {
		resp.status(401).send({
			erro: err.message,
		});
	}
});
server.post("/usuario/login", async (req,resp) => {
	try{
		const {email,senha} = req.body;
		const resposta = await login(email,senha);
		if(!email) throw new Error('email é obrigatorio')
		if(!senha) throw new Error('senha é obrigatorio!')
		if(!resposta || resposta == null) throw new Error("usuario não encontrado")
		else
			resp.send(resposta);
	} catch (err) {
		resp.status(401).send({
			erro: err.message
		});
	}
})

export default server;
