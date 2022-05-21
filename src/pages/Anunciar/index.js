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
export default function Index() {
  return (
    <div>
      <div className="header-anunciar">
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
              <a class="botao1">Feed</a>
            </div>
          </div>
        </div>
      </div>
      <section class="formulario">
        <h1 class="titulo">Dados do produto</h1>
        <div class="inputs">
            <p>Título</p>
            <input type="text" class="form-input" placeholder="Dê um título ao seu produto."></input>
        </div>
        <div>
            <p>Descrição</p>
            <textarea class="messageinput2" rows={10} cols={70}></textarea>
        </div>
        <div class="inputs">
            <p>Preço</p>
            <input type="text" class="form-input" placeholder="Coloque um preço no seu produto."></input>
        </div>
        <div class="field">
            <select name="" id="" class="categorias">
                <option value="" selected>Categoria do produto</option>
                <option value="">Tecnologia</option>
                <option value="">Casa móveis</option>
                <option value="">Brinquedos</option>
                <option value="">Roupas</option>
            </select>
        </div>
        <h1  class="titulo">Contato</h1>
        <div class="inputs">
            <p>Telefone</p>
            <input type="tel" class="form-input" placeholder="Coloque seu número de telefone."></input>
        </div>
        <div class="inputs">
            <p>E-mail</p>
            <input type="text" class="form-input" placeholder="Coloque aqui o seu melhor e-mail."></input>
        </div>
        <div class="inputs">
            <p>Instagram</p>
            <input type="text" class="form-input" placeholder="Digite o seu perfil do instagram."></input>
        </div>
        <div class="inputs">
            <p>Whatsapp</p>
            <input type="text" class="form-input" placeholder="Este número irá se transformar em um botão para seu número."></input>
        </div>
        <div class="inputs">
            <p>Facebook</p>
            <input type="text" class="form-input" placeholder="Digite o seu perfil do Facebook."></input>
        </div>
        <div class="inputs">
            <p>Twitter</p>
            <input type="text" class="form-input" placeholder="Digite o seu perfil do Twitter."></input>
        </div>
        <h1 class="titulo">Localização</h1>
        <div class="inputs">
            <p>CEP</p>
            <input type="text" class="form-input" placeholder="Coloque aqui o seu CEP."></input>
        </div>
        <h1 class="titulo">Fotos do produto</h1>
        <p class="pp">Máximo de 1 <span>foto</span></p>
        <form>
        <div>
            <label for="arquivo">Enviar arquivo</label>
            <input type="file" name="arquivo" id="arquivo"></input>
        </div>
    </form>
        <button class="publi">Publicar anúncio</button>
    </section>

    </div>
  );
}
