import "../../fonts/Inter/Inter-Black.ttf";
import "../../fonts/Inter/Inter-Bold.ttf";
import "../../fonts/Inter/Inter-ExtraBold.ttf";
import "../../fonts/Inter/Inter-ExtraLight.ttf";
import "../../fonts/Inter/Inter-Light.ttf";
import "../../fonts/Inter/Inter-Medium.ttf";
import "../../fonts/Inter/Inter-Regular.ttf";
import "../../fonts/Inter/Inter-SemiBold.ttf";
import "../../fonts/Inter/Inter-Thin.ttf";
import "./anuncios.scss";
import trash from "../../images/Trash.svg";
import Header from "../common/Header/header";
import pencil from "../../images/Pencil.svg";
import storage from 'local-storage'
import { Link, useNavigate } from "react-router-dom";
import { listarMeusProdutos , removerProduto } from "../../api/produtoApi.js";
import { useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert' 
import { toast } from 'react-toastify'

export default function Index() {
  
  const idUsuario = storage('usuario-logado').id
  const [produtos, setProdutos] = useState([])
  const navigate = useNavigate()

  async function deletarProduto(id, nome){
    confirmAlert({
      title: 'Remover produto',
      message: `Deseja remover o produto ${nome}`,
      buttons:[
        {
          label: 'Sim',
          onClick: async () => 
          { const resposta = await removerProduto(id, nome)
            listarProdutos()
            toast.dark('🔥 Produto ' + nome + ' removido!')
          }
        },

        {
          label: 'Não'
        }
      ]
    })
  }
  async function listarProdutos(){
    const resposta = await listarMeusProdutos(idUsuario)
    setProdutos(resposta)
  }
  useEffect(() => {
    listarProdutos()
  }, [])
  function editarProduto(id){
    navigate(`/alterar/${id}`)
  }
  return (
    <div className="body">
      <Header selecionado='meusanuncios' />
      <div className="main-content">
        <nav className="navbar">
            <div className="botao-meusanuncios">
              <Link className="botao-anunciar" to="/Anunciar">
              ANUNCIAR
            </Link>
            </div>
          
        </nav>
        {produtos.map(item => <div className="anun-div-cards">
          <div className="anun-card-meusanuncios">
            <div className="anun-card-img-meusanuncios">
              <img src={`http://localhost:5000/${item.imagem}`} className="imagemsitee-meusanuncios" alt="" />
            </div>
            <div className="anun-card-desc-meusanuncios">
              <p>{item.nome.substr(0,30)}</p>
              <p className="cinza">{item.descricao.substr(0,30)}</p>
            </div>
            <div className="anun-card-info-meusanuncios">
              <p>R${item.preco}</p>
              <p>{item.id}</p>
            </div>
            <div className="anun-card-icons-meusanuncios">
              <img src={pencil} onClick={() =>editarProduto(item.id)} />
              <img src={trash}  onClick={() => deletarProduto(item.id, item.nome)} />
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}