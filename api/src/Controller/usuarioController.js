import { cadastro } from "../Repository/usuarioRepository.js";
import { Router } from "express";
const server = Router();

server.post("/usuario/cadastro", async (req, resp) => {
	try {
		const { nome, email, senha } = req.body;
		const resposta = await cadastro(nome, email, senha);
		resp.send(resposta);
	} catch (err) {
		resp.status(400).send({
			erro: err.message,
		});
	}
});

export default server;
