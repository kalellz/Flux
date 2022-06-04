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
import Header from "../common/Header/header";
import { useState } from "react";
import { cadastrarProduto, enviarImagemProduto } from '../../api/produtoApi'
import storage from 'local-storage'
import { toast } from 'react-toastify';



export default function Index() {
  const [nome ,setNome] = useState('')
  const [descricao ,setDescricao] = useState('')
  const [preco ,setPreco] = useState(0,0)
  const [categoria ,setCategoria] = useState(0)
  const [telefone ,setTelefone] = useState('')
  const [email ,setEmail] = useState('')
  const [cep ,setCep] = useState('')
  const [imagem, setImagem] = useState()

  async function salvarClick() {
    try{
        const usuario = storage('usuario-logado').id
        const r = await cadastrarProduto(usuario, categoria, nome, descricao, preco, telefone, email, cep)

        toast.dark('🔥 filme cadastrado com sucesso!')
    } catch(err){
        toast.error(err.response.data.erro)
    }
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
            type="text"
            className="form-input"
            placeholder="Coloque um preço no seu produto."
            value={preco} onChange={e => setPreco(e.target.value)}
          ></input>
        </div>
        <div>
        <p className="p-anunciar">Categoria</p>
          <input
            type="text"
            className="form-input"
            placeholder="Coloque um preço no seu produto."
            value={categoria} onChange={e => setCategoria(e.target.value)}
          ></input>
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
            type="text"
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
        <div>
        <h1 className="titulo">Foto do produto</h1>
        <form>
          <div>
            <label for="arquivo">Enviar Arquivo</label>
            <input type="file" name="arquivo" id="arquivo"></input>
          </div>
        </form>
        </div>
      </section>
      <div className="publicaranuncio">
        <button className="publi" onClick={salvarClick}>Publicar anúncio</button>
        </div>
    </div>
  );
}
