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
import Vector from "../../images/Vector.svg";
import Buscar from "../../images/buscar.svg";
import sitee from "../../images/sitee.jfif";
import trash from "../../images/Trash.svg";
import pencil from "../../images/Pencil.svg";
import { Link } from "react-router-dom";

export default function anuncios() {
  return (
    <div className="body">
      <header className="header-feed">
        <div class="cima">
          <div class="logo">
            <h3 class="logo-flux">FLUX</h3>
          </div>
          {/*new search bar code (start) */} 
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
            <input placeholder="Search" type="search" class="input">
            </input>
          </div>
          {/*new search bar code (end) */}
          <div class="conta">
            <a href="" class="botao1">
              Sair
            </a>
            <img src={Vector} width="32px"></img>
          </div>
        </div>
        <div class="baixo">
          <div class="content">
            <div class="text">
              <select name="" id="" class="categorias">
                <option value="" selected>
                  Categorias
                </option>
                <option value="">Tecnologia</option>
                <option value="">Casa móveis</option>
                <option value="">Brinquedos</option>
                <option value="">Roupas</option>
              </select>
            </div>
            <div>
              <a class="botaofeed">Anúncios</a>
            </div>
            <div>
              <a class="botao1" href="/feed">
                Feed
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content">
        <nav className="navbar">
          <div class="busca">
            <input
              type="text"
              placeholder="Encontre seu anúncio"
              class="pesquisa"
            ></input>
            <div className="nav-img">
              <img src={Buscar} width="20em"></img>
            </div>
          </div>
          <div className="nav-btn">
            <Link className="c-botao3" to='/Anunciar'>ANUNCIAR</Link>
          </div>
        </nav>
        <div className="anun-div-cards">
          <div className="anun-card">
            <div className="card-img">
              <img src={sitee} className="imagemsitee" alt="" />
            </div>
            <div className="card-desc">
              <p>
                <span>#1234567891011</span>{" "}
              </p>
              <p>Kit de cozinha básicão para cozinhas cozinhadas</p>
            </div>
            <div className="card-info">
              <p>R$300</p>
              <p>8 mil visitas</p>
            </div>
            <div className="card-icons">
              <img src={trash} alt="" />
              <img src={pencil} className="svg" />
            </div>
          </div>
          <div className="anun-card">
            <div className="card-img">
              <img src={sitee} className="imagemsitee" alt="" />
            </div>
            <div className="card-desc">
              <p>
                <span>#1234567891011</span>{" "}
              </p>
              <p>Kit de cozinha básicão para cozinhas cozinhadas</p>
            </div>
            <div className="card-info">
              <p>R$300</p>
              <p>5 mil visitas</p>
            </div>
            <div className="card-icons">
              <img src={trash} alt="" />
              <img src={pencil} className="svg" />
            </div>
          </div>
          <div className="anun-card">
            <div className="card-img">
              <img src={sitee} className="imagemsitee" alt="" />
            </div>
            <div className="card-desc">
              <p>
                <span>#1234567891011</span>{" "}
              </p>
              <p>Kit de cozinha básicão para cozinhas cozinhadas</p>
            </div>
            <div className="card-info">
              <p>R$300</p>
              <p>3 mil visitas</p>
            </div>
            <div className="card-icons">
              <img src={trash} alt="" />
              <img src={pencil} className="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
