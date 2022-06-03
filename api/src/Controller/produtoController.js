import { alterarImagem, alterarProduto, consultarProdutos, inserirProduto } from '../repository/produtoRepository.js'
import multer from 'multer';
import { Router } from 'express'


const server = Router();
const upload = multer({ dest : 'storage/capasProduto' })

server.post('/produto', async (req, resp) => {
    try{
        const novoproduto = req.body
        const produtoinserido = inserirProduto(novoproduto);
		if(!novoproduto.usuario)
			throw new Error('Usuario é obrigatorio!')
		if(!novoproduto.nome)
			throw new Error('Nome do produto é obrigatorio!')
		if(!novoproduto.categoria)
			throw new Error('Categoria do produto é obrigatorio!')
		if(!novoproduto.descricao)
			throw new Error('Descrição do produto é obrigatorio!')
		if(!novoproduto.preco)
			throw new Error('Preço do produto é obrigatorio!')
		if(!novoproduto.telefone)
			throw new Error('Telefone é obrigatorio!')
		if(!novoproduto.email)
			throw new Error('E-mail é obrigatorio!')
		if(!novoproduto.cep)
			throw new Error('Cep é obrigatorio!')
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
		else
        resp.status(204).send();
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.put('/produto/:id', async (req,resp) => {
	try{
		const { id } = req.params;
		const filme = req.body
		const resposta = await alterarProduto(id,filme);
		if(!novoproduto.usuario)
			throw new Error('Usuario é obrigatorio!')
		if(!novoproduto.nome)
			throw new Error('Nome do produto é obrigatorio!')
		if(!novoproduto.categoria)
			throw new Error('Categoria do produto é obrigatorio!')
		if(!novoproduto.descricao)
			throw new Error('Descrição do produto é obrigatorio!')
		if(!novoproduto.preco)
			throw new Error('Preço do produto é obrigatorio!')
		if(!novoproduto.telefone)
			throw new Error('Telefone é obrigatorio!')
		if(!novoproduto.email)
			throw new Error('E-mail é obrigatorio!')
		if(!novoproduto.cep)
			throw new Error('Cep é obrigatorio!')
		if (resposta != 1) throw new Error('produto nao pode ser alterado') 
		else resp.status(204).send()
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })}

	})
server.get('/produto', async (req,resp) => {
	try{
		const resposta = await consultarProdutos();
		resp.send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})

export default server;