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
import sitee from "../../images/sitee.jfif";
import trash from "../../images/Trash.svg";
import Header from "../common/Header/header";
import pencil from "../../images/Pencil.svg";
import { Link } from "react-router-dom";

export default function anuncios() {
  return (
    <div className="body">
      <Header />
      <div className="main-content">
        <nav className="navbar">
          <div className="anun-search">
            <div class="group">
              <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Pesquisar entre seus anúncios"
                type="search"
                class="input-header"
              ></input>
            </div>
          </div>
          <div className="nav-btn">
            <Link className="c-botao3" to="/Anunciar">
              ANUNCIAR
            </Link>
          </div>
        </nav>
        <div className="anun-div-cards">
          <div className="anun-card">
            <div className="anun-card-img">
              <img src={sitee} className="imagemsitee" alt="" />
            </div>
            <div className="anun-card-desc">
              <p>#1234567891011</p>
              <p>Kit de cozinha básicão para cozinhas cozinhadas</p>
            </div>
            <div className="anun-card-info">
              <p>R$300</p>
              <p>8 mil visitas</p>
            </div>
            <div className="anun-card-icons">
              <img src={trash} alt="" />
              <img src={pencil} className="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
