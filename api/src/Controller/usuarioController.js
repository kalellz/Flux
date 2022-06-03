import { cadastro, login } from "../Repository/usuarioRepository.js";
import { Router } from "express";
const server = Router();

server.post("/usuario/cadastro", async (req, resp) => {
	try {
		const { nome, email, senha } = req.body;
		const resposta = await cadastro(nome, email, senha);
		if(!resposta) throw new Error('não foi possivel se cadastrar')
		resp.send('cadastrado com sucesso');
	} catch (err) {
		resp.status(400).send({
			erro: err.message,
		});
	}
});
server.get("/usuario/login", async (req,resp) => {
	try{
		const {email,senha} = req.body;
		const resposta = await login(email,senha);
		if(!email) throw new Error('email é obrigatorio')
		if(!senha) throw new Error('senha é obrigatorio!')
		if(!resposta || resposta == null) throw new Error("usuario não encontrado")
		else
			resp.send(resposta);
	} catch (err) {
		resp.status(400).send({
			erro: err.message
		});
	}
})

export default server;
