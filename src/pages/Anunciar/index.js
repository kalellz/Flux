
import '../../fonts/Inter/Inter-Black.ttf';
import '../../fonts/Inter/Inter-Bold.ttf';
import '../../fonts/Inter/Inter-ExtraBold.ttf';
import '../../fonts/Inter/Inter-ExtraLight.ttf';
import '../../fonts/Inter/Inter-Light.ttf';
import '../../fonts/Inter/Inter-Medium.ttf';
import '../../fonts/Inter/Inter-Regular.ttf';
import '../../fonts/Inter/Inter-SemiBold.ttf';
import '../../fonts/Inter/Inter-Thin.ttf';
import './style.scss';
import buscar from '../../images/buscar.svg';
import Vector from '../../images/Vector.svg';
import { Link } from 'react-router-dom';
export default function Index(){

  return(
    <main>
    <header>
      <div className='cima'>
        <div className='logo'>
          <h3 className='logo-flux'>FLUX</h3>
        </div>
        <div className='busca'>
          <input
            type="text"
            className='pesquisa'
          >Pesquise por qualquer coisa que quiser!</input>
          <img src={buscar} width="24px"></img>
        </div>
        <div className="conta">
          <a href="" className="botao1">Sair</a>
          <img src={Vector} width="32px"></img>
        </div>
      </div>
      <div className='baixo'>
          <div className='content'>
            <div className="text">
                <select name="" id="" className='categorias'>
                    <option value="" selected>Categorias</option>
                    <option value="">Tecnologia</option>
                    <option value="">Casa móveis</option>
                    <option value="">Brinquedos</option>
                    <option value="">Roupas</option>
                </select>
                
            </div>
            <div><a href="../anuncios/anuncios.html" className='botao1'>Anúncios</a></div>
            <div><a href="../feed/index.html"  className='botao1'>Feed</a></div>
          </div>
      </div>
    </header>

    <section className='formulario'>
        <h1 className='titulo'>Dados do produto</h1>
        <div className='inputs'>
            <p>Título</p>
            <input type="text" className='form-input'>Dê um título ao seu produto.</input>
        </div>
        <div>
            <p>Descrição</p>
            <textarea name="" id="" cols="69" rows="10"></textarea>
        </div>
        <div className="inputs">
            <p>Preço</p>
            <input type="text" className='form-input' >Coloque um preço no seu produto.</input>
        </div>
        <div className="field">
            <select name="" id="" className='categorias'>
                <option value="" selected>Categoria do produto</option>
                <option value="">Tecnologia</option>
                <option value="">Casa móveis</option>
                <option value="">Brinquedos</option>
                <option value="">Roupas</option>
            </select>
        </div>
        <h1  className='titulo'>Contato</h1>
        <div className='inputs'>
            <p>Telefone</p>
            <input type="text" className='form-input'>Bote seu número de telefone.</input>
        </div>
        <div className="inputs">
            <p>E-mail</p>
            <input type="text" className='form-input'>Coloque aqui o seu melhor e-mail.</input>
        </div>
        <div className='inputs'>
            <p>Instagram</p>
            <input type="text" className='form-input'>Digite o seu perfil do instagram.</input>
        </div>
        <div className='inputs'>
            <p>Whatsapp</p>
            <input type="text" className='form-input'>este número irá se transformar em um botão para seu número.</input>
        </div>
        <div className="inputs">
            <p>Facebook</p>
            <input type="text" className='form-input'>Digite o seu perfil do Facebook.</input>
        </div>
        <div className="inputs">
            <p>Twitter</p>
            <input type="text" className='form-input'>Digite o seu perfil do Twitter.</input>
        </div>
        <h1 className='titulo'>Localização</h1>
        <div className='inputs'>
            <p>CEP</p>
            <input type="text" className='form-input' >Coloque aqui o seu CEP.</input>
        </div>
        <h1 className='titulo'>Fotos do produto</h1>
        <p className='pp'>Máximo de 1 <span>foto</span></p>
        <button className='imgs'>ADICIONAR IMAGEM</button>
        <button className='publi'>Publicar anúncio</button>
    </section>
    
  </main>
)
}