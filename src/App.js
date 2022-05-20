import "./App.scss";
import "./fonts/Inter/Inter-Black.ttf";
import "./fonts/Inter/Inter-Bold.ttf";
import "./fonts/Inter/Inter-ExtraBold.ttf";
import "./fonts/Inter/Inter-ExtraLight.ttf";
import "./fonts/Inter/Inter-Light.ttf";
import "./fonts/Inter/Inter-Medium.ttf";
import "./fonts/Inter/Inter-Regular.ttf";
import "./fonts/Inter/Inter-SemiBold.ttf";
import "./fonts/Inter/Inter-Thin.ttf";
import maonopc from "./images/maozinha no pc.png";
import localizacao from "./images/localizacao.png";
import insta from "./images/insta";
import twitter from "./images/twitter";
import facebook from "./images/facebook";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <header class="landing-header">
        <section className="btn-content">
          <p className="title">FLUX</p>
          <a href="#saibamais" class="c-botao2">
            Saiba mais
          </a>
          <a href="#formulario-app" class="c-botao2">
            Contato
          </a>
          <Link to="/login" className="c-botao3">
            FAÇA SEU LOGIN
          </Link>
        </section>
      </header>
      <body>
        <section class="primeiro-container">
          <div class="c1-textos">
            <h1 class="titulo-1">Venda e compra de produtos com facilidade</h1>
            <p class="texto-1">
              Venda e compre móveis, periféricos, utensílios de cozinha e tudo o
              que quiser, você acha com facilidade pessoas tanto vendendo quanto
              comprando produtos do seu interesse.
            </p>
            <Link to="/login" className="c-botao3">
              COMEÇAR AGORA
            </Link>
          </div>
          <div>
            <img src={maonopc} className="c1-imagem"></img>
          </div>
        </section>

        <section id="saibamais">
          <h1 class="titulosaibamais">Saiba mais</h1>
          <p class="textosaibamais">
            Saiba um pouco mais do jeito que nós trabalhamos.
          </p>
        </section>

        <section class="quadradaos">
          <button class="quadrados">
            <h1 class="tituloquadrados">Anúncios</h1>
            <span class="textosquadrados">
              Veja anúncios baseados em suas buscas,<br></br>
              anúncios e também em sua localização,<br></br>
              assim você encontra tudo aquilo que<br></br>
              procura o mais perto de você.<br></br>
              Desta forma você evita passar muito<br></br>
              tempo rolando o feed até achar<br></br>
              algo que o interesse.<br></br>
            </span>
          </button>
          <button class="quadrados">
            <h1 class="tituloquadrados">Segurança</h1>
            <span class="textosquadrados">
              Cada vez que você avalia alguém ou deixa<br></br>
              um comentário ruim o nosso sistema <br></br>
              tenta não exibir anúncios desta pessoa,<br></br>
              assim você tem menos chances de cair<br></br>
              em um golpe ou coisa do tipo. <br></br>
            </span>
          </button>
          <button class="quadrados">
            <span class="tituloquadrados"> Vendas </span>
            <span class="textosquadrados">
              Nós não interferirmos na sua venda,<br></br>
              nós apenas somos a ponte entre o <br></br>
              anunciante e o comprador, não nos<br></br>
              responsabilizamos por golpes ou<br></br>
            </span>
          </button>
        </section>

        <section class="localizacao">
          <div>
            <img src={localizacao} className="imagemlocalizacao"></img>
          </div>
          <div class="localizacaocontainer">
            <h1 class="titulolocalizacao">
              Compre de qualquer<br></br>
              lugar do Brasil
            </h1>
            <p class="textolocalizacao">
              Faça sua primeira compra independente do seu<br></br>
              local, venha dar uma olhada no que estão<br></br>
              vendendo no momento!
            </p>
            <Link class="c-botao3" to="/feed">
              ME LEVE AO FEED
            </Link>
          </div>
        </section>

        <section class="ultimo">
          <div class="parteroxa">
            <div>
              <h1 class="ultimos-titulos">LOCALIZAÇÃO</h1>
              <p class="ultimos-textos">Rua Adele nº 95 apto: 234</p>
              <h1 class="ultimos-titulos">TELEFONES</h1>
              <p class="ultimos-textos">
                5666-5557 <br></br>
                5777-6555
              </p>
              <h1 class="ultimos-titulos">HORÁRIOS DE ATENDIMENTO</h1>
              <p class="ultimos-textos">
                Segunda à sexta: 9h às 18h. <br></br>
                Finais de semana e feriados: 9h às 12h.
              </p>
            </div>
          </div>
          <div id="formulario-app">
            <div class="ultimocontainer">
              <h1 class="ultimotitulo">Formulário para contato</h1>
              <p class="ultimostext">Nome</p>
              <input type="text" class="form-input-app"></input>
              <p class="ultimostext">E-mail</p>
              <input type="text" class="form-input-app"></input>
              <p class="ultimostext">Mensagem</p>
              <textarea class="messageinput" rows={10} cols={70}></textarea>
            </div>
            <div className="btn-form-div">
              <button className="c-botao3-form">ENVIAR</button>
            </div>
          </div>
        </section>

        <section class="rodape">
          <p class="rodapebutton">FLUX</p>
          <div class="redessociais">
            <img className="imagensrodape" src={insta}></img>
            <img className="imagensrodape" src={twitter}></img>
            <img className="imagensrodape" src={facebook}></img>
          </div>
          <div>
            <p class="direitosautorais">
              © 2022 The Flux Company, all rights reserved
            </p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
