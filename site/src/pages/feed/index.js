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
import {Link} from 'react-router-dom'
export default function Index() {
  return (
    <div>
      <Header selecionado='feed' />
      <div className="feed-content">
      <div className="nav-btn">
        <Link className="c-botao5" to="/Anunciar">
              ANUNCIAR
            </Link>
          </div>
        <div className="sec-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
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
