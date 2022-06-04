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
export default function Index() {
  return (
    <div className="DadosProduto">
      <Header />
      <section class="formulario">
        <div>
        <h1 class="titulo">Dados do produto</h1>
        <div class="inputs">
          <p className="p-anunciar">Nome</p>
          <input
            type="text"
            class="form-input"
            placeholder="Dê um título ao seu produto."
          ></input>
        </div>
        <div>
          <p className="p-anunciar">Descrição</p>
          <textarea class="messageinput2" rows={10} cols={70}></textarea>
        </div>
        <div class="inputs">
          <p className="p-anunciar">Preço</p>
          <input
            type="text"
            class="form-input"
            placeholder="Coloque um preço no seu produto."
          ></input>
        </div>
        <div class="field">
          <select name="" id="" class="categorias">
            <option value="" selected>
              Categoria do produto
            </option>
            <option value="">Tecnologia</option>
            <option value="">Casa móveis</option>
            <option value="">Brinquedos</option>
            <option value="">Roupas</option>
          </select>
        </div>
        <div class="inputs">
          <p className="p-anunciar">Telefone</p>
          <input
            type="text"
            class="form-input"
            placeholder="Digite o seu telefone."
          ></input>
        </div>
        <div class="inputs">
          <p className="p-anunciar">E-mail</p>
          <input
            type="text"
            class="form-input"
            placeholder="Digite o seu Email de contato."
          ></input>
        </div>
      </div>
      <div>
        <h1 class="titulo">Localização</h1>
        <div class="inputs">
          <p className="p-anunciar">CEP</p>
          <input
            type="text"
            class="form-input"
            placeholder="Coloque aqui o seu CEP."
          ></input>
        </div>
        </div>
        <div>
        <h1 class="titulo">Foto do produto</h1>
        <form>
          <div>
            <label for="arquivo">Enviar Arquivo</label>
            <input type="file" name="arquivo" id="arquivo"></input>
          </div>
        </form>
        </div>
      </section>
      <div className="publicaranuncio">
        <button class="publi">Publicar anúncio</button>
        </div>
    </div>
  );
}
