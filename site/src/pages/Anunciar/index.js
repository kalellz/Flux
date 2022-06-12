import "../../fonts/Inter/Inter-Black.ttf";
import "../../fonts/Inter/Inter-Bold.ttf";
import "../../fonts/Inter/Inter-ExtraBold.ttf";
import "../../fonts/Inter/Inter-ExtraLight.ttf";
import "../../fonts/Inter/Inter-Light.ttf";
import "../../fonts/Inter/Inter-Medium.ttf";
import "../../fonts/Inter/Inter-Regular.ttf";
import "../../fonts/Inter/Inter-SemiBold.ttf";
import "../../fonts/Inter/Inter-Thin.ttf";
import "./style.scss";
import { useNavigate } from 'react-router-dom'
import Header from "../common/Header/header.js";
import { useEffect, useState } from "react";
import storage from 'local-storage'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { cadastrarProduto, enviarImagemProduto, alterarProduto, listarPorId, buscarImagem } from '../../api/produtoApi.js'



export default function Index() {
  const navigate = useNavigate()
  const [nome ,setNome] = useState('')
  const [descricao ,setDescricao] = useState('')
  const [preco ,setPreco] = useState()
  const [categoria ,setCategoria] = useState(0)
  const [telefone ,setTelefone] = useState('')
  const [email ,setEmail] = useState('')
  const [cep ,setCep] = useState('')
  const [imagem, setImagem] = useState()
  const [id, setID] = useState(0);
  const [carregando, setCarregando] = useState(false)
  const {idParam} = useParams()

  useEffect(() => {
    if(idParam){
      carregarProduto()
    }
  }, [])
  async function salvarClick() {
    try{
        setCarregando(true)
        const usuario = storage('usuario-logado').id
        
        if(id === 0){
          const novoProduto = await cadastrarProduto(usuario, categoria, nome, descricao, preco, telefone, email, cep)
          await enviarImagemProduto(novoProduto.id, imagem)
          
          setID(novoProduto.id)
          toast.dark('🔥 Anúncio cadastrado com sucesso!')
          navigate('/MeusAnuncios')
        } 
        else {
            await alterarProduto(id, usuario, categoria, nome, descricao, preco, telefone, email, cep)
            if(typeof(imagem) == 'object'){
              await enviarImagemProduto(id, imagem)
            }
            toast.dark('🔥 Anúncio alterado com sucesso!')
        }
    } catch(err){
      if(err.response)
        toast.error(err.response.data.erro)
      else 
        toast.error(err.message)
    }
  }
  function escolherImagem(){
    document.getElementById('imagemCapa').click()
  }
  function mostrarImagem() {
    if(typeof(imagem) == 'object')
      return URL.createObjectURL(imagem)
    else 
      return buscarImagem(imagem)
  }
  async function carregarProduto(){
    const resposta = await listarPorId(idParam)
    setNome(resposta.nome)
    setDescricao(resposta.descricao)
    setPreco(resposta.preco)
    setCategoria(resposta.categoria)
    setTelefone(resposta.telefone)
    setEmail(resposta.email)
    setCep(resposta.cep)

    setImagem(resposta.imagem)
    setID(resposta.id)

  }

  return (
    <div className="DadosProduto">
      <Header />
      <section className="formulario">
        <div>
        <h1 className="titulo">Dados do produto</h1>
        <div className="inputs">
          <p className="p-anunciar">Nome</p>
          <input
            type="text"
            className="form-input"
            placeholder="Dê um título ao seu produto."
            value={nome} onChange={e => setNome(e.target.value)}
          ></input>
        </div>
        <div>
          <p className="p-anunciar">Descrição</p>
          <textarea className="messageinput2" rows={10} cols={70} value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
        </div>
        <div className="inputs">
          <p className="p-anunciar">Preço</p>
          <input
            type="number"
            className="form-input"
            placeholder="Coloque um preço no seu produto."
            value={preco} onChange={e => setPreco(e.target.value)}
          ></input>
        </div>
        <div>
        <p className="p-anunciar">Categoria</p>
        <select value={categoria} onChange={e => setCategoria(e.target.value)} className='Select-Anunciar'>
        <option >Selecione</option>
          <option value={1}>Tecnologia</option>
          <option value={2}>Casa e Móveis</option>
          <option value={3}>Brinquedos</option>
          <option value={4}>Roupas</option>
          <option value={5}>Saúde</option>
        </select>
        </div>
        <div className="inputs">
          <p className="p-anunciar">Telefone</p>
          <input
            type="text"
            className="form-input"
            placeholder="Digite o seu telefone."
            value={telefone} onChange={e => setTelefone(e.target.value)}
          ></input>
        </div>
        <div className="inputs">
          <p className="p-anunciar">E-mail</p>
          <input
            type="email"
            className="form-input"
            placeholder="Digite o seu Email de contato."
            value={email} onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <div>
        <h1 className="titulo">Localização</h1>
        <div className="inputs">
          <p className="p-anunciar">CEP</p>
          <input
            type="text"
            className="form-input"
            placeholder="Coloque aqui o seu CEP."
            value={cep} onChange={e => setCep(e.target.value)}
          ></input>
        </div>
        </div>
        <div className="ultrapassado">
        <h1 className="titulo-ultra">Foto do produto</h1>
        <form>
          <div ocClick={escolherImagem}>
            <label for="arquivo">Enviar Arquivo</label>
            <input type="file" name="arquivo" id="arquivo" className="arquivoclass" onChange={e => setImagem(e.target.files[0])} />
            {imagem && 
              <img className="imagempreenchida" src={mostrarImagem()} alt='' />
            }
          </div>
        </form>
        </div>
      </section>
      <div className="publicaranuncio">
        <button className="publi" disabled={carregando} onClick={salvarClick}>{id === 0? 'Publicar' : 'Alterar'}</button>
        </div>
    </div>
  );
}
