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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarTodosProdutos, listarPorNome, listarCategoria } from "../../api/produtoApi.js";

export default function Index() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('')
  const [categoria, setCategoria] = useState()

  async function carregarTodosProdutos() {
    const resp = await listarTodosProdutos();
    setProdutos(resp);
  }
  async function Filtrar() {
    const resp = await listarPorNome(filtro);
    setProdutos(resp)
  }
  async function FiltrarCategoria() {
    const resp = await listarCategoria(categoria);
    setProdutos(resp)
  }

  useEffect(() => {
    FiltrarCategoria();
  }, [categoria])
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
              onChange={e => Filtrar(setFiltro(e.target.value))}
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
        <table className="sec-cards">
          {produtos.map(item => <div class="card">
            <div class="card-img">
              <img src={`http://localhost:5000/${item.imagem}`} class="product-img" />
            </div>
            <div class="card-info">
              <p class="text-title">{item.nome}</p>
              <p class="text-body">{item.descricao.substr(0, 20)}</p>
            </div>
            <div class="card-footer">
              <span class="text-title">R$: {item.preco}</span>
              <div class="card-button">
                <Link to="/InfoAnuncio">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>)}
        </table>
        <section class="propraganda">
          <h1 class="titulo">
            Novos anúncios na categoria de <span class="roxo">limpeza</span>
          </h1>
          <div className="propaganda-imgs">
            <img class="imagempropa" src={veja} alt="veja"></img>
            <img class="imagempropa" src={veja} alt="veja"></img>
            <img class="imagempropa" src={veja} alt="veja"></img>
          </div>
          <h1 class="titulo">Venha conferir!</h1>
        </section>
      </div>
    </div>
  );
}
