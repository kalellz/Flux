import "dotenv/config";
import usuarioController from "./controller/usuarioController.js";
import produtoController from "./controller/produtoController.js";
import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

// liberar arquivos da storage
server.use('/storage/capasProduto', express.static('storage/capasProduto'))

// using endpoints
server.use(usuarioController);
server.use(produtoController);

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));
