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
import veja from "../../images/veja";
import Card from "../common/Card/card";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarTodosProdutos, listarPorNome, listarCategoria } from "../../api/produtoApi.js";

export default function Index() {
  const Navigate = useNavigate()
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('')
  const [categoria, setCategoria] = useState('0')

  async function carregarTodosProdutos() {
    const resp = await listarTodosProdutos();
    setProdutos(resp);
  }
  async function Filtrar() {
    const resp = await listarPorNome(filtro, categoria);
    setProdutos(resp)
  }
  
  function abrirDetalhes(id){
    Navigate(`/InfoAnuncio/${id}`)
  }
  
  useEffect(() => {
    Filtrar();
  }, [categoria, filtro])

  useEffect(() => {
    carregarTodosProdutos()
  }, [])

  return (
    <div>
      <Header selecionado="feed" />
      <div className="feed-content">
        <div className="nav-btn">
          <div className="row">
            <input
              placeholder="Pesquisar anúncios"
              type="search"
              class="input-search"
              Value={filtro}
              onChange={e => setFiltro(e.target.value)}
            ></input>
            <div className="text">
              <select className="categorias" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value='0'>Categorias</option>
                <option value='1'>Tecnologia</option>
                <option value='2'>Casa móveis</option>
                <option value='3'>Brinquedos</option>
                <option value='4'>Roupas</option>
                <option value='5'>Saúde</option>
              </select>
            </div>
          </div>

          <Link className="c-botao5" to="/Anunciar">
            ANUNCIAR
          </Link>
        </div>
        <div className="sec-cards" >
          {produtos.map(item => <div class="card"  onClick={() => abrirDetalhes(item.id)}>
            <div class="card-img">
              <img src={`http://localhost:5000/${item.imagem}`} class="product-img" />
            </div>
            <div class="card-info">
              <p class="text-title">{item.nome}</p>
              <p class="text-body">{item.descricao.substr(0, 20)}</p>
            </div>
            <div class="card-footer">
              <span class="text-title">R${item.preco}</span>
              
            </div>
          </div>)}
        </div>
        
      </div>
    </div>

  );
}
