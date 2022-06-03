import { alterarImagem, inserirProduto } from '../repository/produtoRepository.js'
import multer from 'multer';
import { Router } from 'express'


const server = Router();
const upload = multer({ dest : 'storage/capasProduto' })

server.post('/produto', async (req, resp) => {
    try{
        const novoproduto = req.body
        const produtoinserido = inserirProduto(novoproduto);
        resp.send(produtoinserido)
    } catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/produto/:id/capa', upload.single('capa'), async (req,resp) => {
    try{
        const { id } = req.params;
        const imagem = req.file.path;
        
        const resposta = await alterarImagem(imagem, id)
        if(resposta != 1) throw new Error('A imagem não pode ser salva.')
        resp.statu(204).send();
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;