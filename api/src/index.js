import 'dotenv/config'
import { con } from './repository/connection.js'
import usuarioController from './controller/usuarioController.js'
import produtoController from './controller/produtoController.js'
import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

// cofiguração dos endpoints
server.use(usuarioController)
server.use(produtoController)

server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));