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
              <input
                placeholder="Pesquisar entre seus anúncios"
                type="search"
                class="input-header"
              ></input>
            </div>
            <div className="nav-btn">
              <Link className="c-botao6" to="/Anunciar">
              ANUNCIAR
            </Link>
            </div>
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
              <img src={pencil} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
