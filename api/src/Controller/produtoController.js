import { alterarImagem, alterarProduto, consultarMeusAnunciosNome, consultarProdutos, consultarProdutosID, consultarProdutosNome, deletarProduto, exibirProdutosCategoria, exibirProdutosUsuario, inserirProduto } from '../repository/produtoRepository.js'
import multer from 'multer';
import { Router } from 'express'


const server = Router();
const upload = multer({ dest : 'storage/capasProduto' })

server.post('/produto', async (req, resp) => {
    try{
        const produto = req.body

		// verificações necessarias
		if(!produto.nome.trim())
			throw new Error('Nome do produto é obrigatório!')
		if(!produto.categoria)
			throw new Error('Categoria do produto é obrigatório!')
		if(!produto.descricao.trim())
			throw new Error('Descrição do produto é obrigatório!')
		if(!produto.preco)
			throw new Error('Preço do produto é obrigatório!')
		if(!produto.telefone.trim())
			throw new Error('Telefone é obrigatório!')
		if(!produto.email.trim())
			throw new Error('Email é obrigatório!')
		if(!produto.cep.trim())
			throw new Error('Cep é obrigatório!')

		if(produto.preco < 0) 
			throw new Error('Digite um preço válido')
		if(produto.telefone.length < 11) 
			throw new Error('Digite um telefone válido')
		if(produto.cep.length < 8) 
			throw new Error('Digite um cep válido')
		if(produto.email.length < 13) 
			throw new Error('Digite um email válido')

		if(produto.nome.length > 80)
			throw new Error('Nome excede o tamanho permitido')
		if(produto.descricao.length > 200)
			throw new Error('Descrição excede o tamanho permitido')
		if(produto.email.length > 300)
			throw new Error('Email excede o tamanho permitido')
		if(produto.preco.length > 15)
			throw new Error('Preço excede o tamanho permitido')
		if(produto.telefone.length > 200)
			throw new Error('Telefone excede o tamanho permitido')
		if(produto.cep.length > 200)
			throw new Error('Cep excede o tamanho permitido')
			
		const produtoinserido = await inserirProduto(produto);
        resp.send(produtoinserido)

    } catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/produto/:id/capa', upload.single('capa'), async (req,resp) => {
    try{
		if(!req.file) throw new Error('Escolha a capa do produto!')
        const { id } = req.params;
        const imagem = req.file.path;
		
        const resposta = await alterarImagem(imagem, id)
        if(resposta != 1) 
			throw new Error('A imagem não pôde ser salva.')
        resp.status(204).send();
    } catch(err){
		console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.put('/produto/:id', async (req,resp) => {
	try{
		const { id } = req.params;
		const produto = req.body
		const resposta = await alterarProduto(id,produto);
		if(!produto.nome.trim())
			throw new Error('Nome do produto é obrigatório!')
		if(!produto.categoria)
			throw new Error('Categoria do produto é obrigatório!')
		if(!produto.descricao.trim())
			throw new Error('Descrição do produto é obrigatório!')
		if(!produto.preco)
			throw new Error('Preço do produto é obrigatório!')
		if(!produto.telefone.trim())
			throw new Error('Telefone é obrigatório!')
		if(!produto.email.trim())
			throw new Error('Email é obrigatório!')
		if(!produto.cep.trim() )
			throw new Error('Cep é obrigatório!')
		if (resposta != 1) 
			throw new Error('Produto nao pôde ser alterado') 
		else 
			resp.status(204).send()
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
server.delete('/produto/:id', async (req,resp) => {
	try{
		const { id } = req.params;
		const deletar = await deletarProduto(id)
		if(deletar != 1) throw new Error('Produto não pôde ser removido')
		else
		resp.status(204).send()
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})
server.get('/produto/busca', async (req,resp) => {
	try{
		const { nome, categoria } = req.query;
		
		const resposta = await consultarProdutosNome(nome, categoria);

		// if(resposta.length == 0) 
		// 	throw new Error('produto não encontrado')
		// else
			resp.send(resposta);

	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})
server.get('/produto/:id', async (req,resp) => {
	try{
		const {id} = req.params;
		const resposta = await consultarProdutosID(id);
		if(!resposta) throw new Error('Produto não encotrado')
		else
		resp.status(200).send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})
server.get('/produto/usuario/:id/:nome', async (req,resp) => {
	try{
		const { id, nome } = req.params;
		const resposta = await consultarMeusAnunciosNome(id, nome);
			resp.send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})
server.get('/produto/usuario/:id', async (req,resp) => {
	try{
		const {id} = req.params;
		const resposta = await exibirProdutosUsuario(id);
		if(!resposta) throw new Error('Produto não encotrado')
		else
		resp.status(200).send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})
server.get('/produto/categoria/:id', async (req,resp) => {
	try{
		const {id} = req.params;
		const resposta = await exibirProdutosCategoria(id);
		if(!resposta) throw new Error('Produto não encotrado')
		else
		resp.status(200).send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})


export default server