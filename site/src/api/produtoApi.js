import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export async function cadastrarProduto(usuario, categoria, nome, descricao, preco, telefone, email, cep) {
  const resposta = await api.post('/produto', {
    usuario: usuario,
    categoria: categoria,
    nome: nome,
    descricao: descricao,
    preco: preco,
    telefone: telefone,
    email: email,
    cep: cep
  })
  return resposta.data
}
export async function enviarImagemProduto(id, imagem) {
  const formData = new FormData()
  formData.append('capa', imagem)

  const resposta = await api.put(`/produto/${id}/capa`, formData, {
    headers:{
      "Content-Type": "multipart/form-data"
    },
  })
  return resposta.status
}
export async function alterarProduto(id, usuario, categoria, nome, descricao, preco, telefone, email, cep) {
  const resposta = await api.put(`/produto/${id}`, {
    usuario: usuario,
    categoria: categoria,
    nome: nome,
    descricao: descricao,
    preco: preco,
    telefone: telefone,
    email: email,
    cep: cep
  })
  return resposta.data
}
export async function listarTodosProdutos(){
   const resposta = await api.get('/produto')
   return resposta.data
}
export async function listarPorNome(nome){
	const resposta = await api.get(`/produto/busca?nome=${nome}`)
	return resposta.data
}
export async function listarMeusProdutos(id){
  const resposta = await api.get(`/produto/usuario/${id}`)
  return resposta.data
}
export async function removerProduto(id){
  const resposta = await api.delete(`/produto/${id}`)
  return resposta.status
}