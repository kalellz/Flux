import { inserirProduto } from "../repository/produtoRepository.js";
import { Router } from "express";
const server = Router();

server.post("/produto", async (req, resp) => {
	try {
		const novoproduto = req.body;
		const produtoinserido = inserirProduto(novoproduto);
		resp.send(produtoinserido);
	} catch (err) {
		resp.status(400).send({
			erro: err.message,
		});
	}
});
export default server;
