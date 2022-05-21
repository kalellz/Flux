import Vector from "../../../images/Vector.svg";
import "./header.scss"

export default function Header() {
  return (
    <div className="header-feed">
      <div class="cima">
        <div class="logo">
          <h3 class="logo-flux">FLUX</h3>
        </div>
        {/*new search bar code (start) */}
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Pesquisar" type="search" class="input-header"></input>
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
            <a class="botao1" href="/MeusAnuncios">
              Anúncios
            </a>
          </div>
          <div>
            <a class="botao1" href="/feed">Feed</a>
          </div>
        </div>
      </div>
    </div>
  );
}
