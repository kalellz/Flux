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
  const FormData = new FormData()
  FormData.append('capa', imagem)
  const resposta = await api.put(`/produto/${id}/capa`, FormData, {
    headers:{
      "Content-Type": "multipart/form-data"
    },
  })
  return resposta.status
}