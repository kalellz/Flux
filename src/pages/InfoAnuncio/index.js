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
import Header from "../common/Header/header";
export default function Index() {
  return (
    <div class="bodyinfoanuncio">
      <body class="bodyinfoanuncio">
        <Header />
        <div class="pagetoda">
          <section class="page">
              <h1 class="tituloinfo">Kit de Cozinha</h1>
              <img src={img1} />

              <h1 class="tituloinfo">Descrição do produto</h1>
              <div class="desc">
                <p class="descprod">
                  Kit contém: 20 facas e  
                  20 colheres<br/>
                  Sem marcas de uso e
                  entrego no lugar desejado.<br/>
                  Combinamos via whatsapp.
                </p>
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
