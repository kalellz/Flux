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
import img1 from "../../images/img1.svg";
import buscar from "../../images/buscar.svg";
import Vector from "../../images/Vector.svg";
export default function Index() {
  return (
    <div class="bodyinfoanuncio">
      <body class="bodyinfoanuncio">
        <header className="header-info">
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
                <a class="botao1" href="/MeusAnuncios">
                  Anúncios
                </a>
              </div>
              <div>
                <a class="botao1" href="/feed">
                  Feed
                </a>
              </div>
            </div>
          </div>
        </header>
        <div class="pagetoda">
          <section class="page">
            <div class="parte1">
              <h1 class="tituloinfo">Kit de Cozinha</h1>
              <img src={img1} />

              <h1 class="tituloinfo">Descrição do produto</h1>
              <div class="desc">
                <p class="descprod">
                  Kit contém: 20 facas;<br></br> 20 colheres;<br></br> Sem
                  marcas de uso e nenhuma <mancha class="br"></mancha> Entrego
                  em qualquer lugar. <br></br>Combinamos via whatsapp.
                </p>
              </div>
            </div>
          </section>
          <section class="aaaa">
            <div class="informa">
              <h1 class="tituloinfo">Informações gerais</h1>

              <div class="div1">
                <h4 class="minititulo">Nome do vendedor:</h4>
                <p class="nm">Eduardo Costa</p>

                <h4 class="minititulo">Preço:</h4>
                <p class="nm">R$300,00</p>

                <h4 class="minititulo">Categoria do produto</h4>
                <p class="nm">Roupas</p>
              </div>
            </div>
          </section>

          <section class="page2">
            <div class="contato">
              <h1 class="tituloinfo">Contato:</h1>
              <div>
                <h4 class="minititulo">Telefone:</h4>
                <p class="nm">5666-5557</p>

                <h4 class="minititulo">E-mail:</h4>
                <p class="nm">flux@company.com</p>

                <h4 class="minititulo">Twitter:</h4>
                <p class="nm">@flux</p>

                <h4 class="minititulo">Facebook:</h4>
                <p class="nm">fluxBook</p>

                <h4 class="minititulo">WhatsApp:</h4>
                <p class="nm">11 952443450</p>
              </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}
