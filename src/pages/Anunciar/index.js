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
import Header from "../common/Header/header" 
export default function Index() {
  return (
    <div>
      <Header/>
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
