import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export async function Login(email,senha){
    const r = await api.post('/usuario/login', {
        email: email,
        senha: senha
      });
      return r.data
}
export async function cadastro(nome, email,senha){
  const r = await api.post('/usuario/cadastro', {
      nome: nome,
      email: email,
      senha: senha
    });
    return r.data
}