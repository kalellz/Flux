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
import buscar from "../../images/buscar.svg";
import Vector from "../../images/Vector.svg";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <header className="header-feed">
        <div class="cima">
          <div class="logo">
            <h3 class="logo-flux">FLUX</h3>
          </div>
          <div class="busca">
            <input
              type="text"
              placeholder="Pesquise por qualquer coisa que quiser!"
              class="pesquisa"
            ></input>
            <img src={buscar} width="20em"></img>
          </div>
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
              <a class="botao1" href="/MeusAnuncios">
                Anúncios
              </a>
            </div>
            <div>
              <a class="botao1">Feed</a>
            </div>
          </div>
        </div>
      </header>
    

    </div>
  );
}
