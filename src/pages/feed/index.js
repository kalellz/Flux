
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
import Buscar from '../../images/buscar.svg';
import Vector from '../../images/Vector.svg';
import veja from '../../images/veja';
import sitee from '../../images/sitee.jfif';
export default function Index(){

  return(
    <div>
  <header className='header-feed'>
    <div class="cima">
      <div class="logo">
        <h3 class="logo-flux">FLUX</h3>
      </div>
      <div class="busca">
        <input type="text" placeholder="  Pesquise por qualquer coisa que quiser!" class="pesquisa" ></input>
        <img src={Buscar} width="20em"></img>
      </div>
      <div class="conta">
        <a href="" class="botao1">Sair</a>
        <img src={Vector} width="32px"></img>
      </div>
    </div>
    <div class="baixo">
      <div class="content">
        <div class="text">
          <select name="" id="" class="categorias">
            <option value="" selected >Categorias</option>
            <option value="">Tecnologia</option>
            <option value="">Casa móveis</option>
            <option value="">Brinquedos</option>
            <option value="">Roupas</option>
          </select>

        </div>
        <div><a class="botao1" href="/MeusAnuncios">Anúncios</a></div>
        <div><a class="botaofeed" >Feed</a></div>
      </div>
    </div>
  </header>

  

    <div>
      <a class="anun" href = "/Anunciar">ANUNCIAR</a>
    </div>
    <section class="primeiro-1">

      <div class="primeiro">
        <a class="text-decoration" href="../InfoAnuncio/">
        <div class="co-1" id="cozinha">
          <img class="img" src={sitee}></img>
          <h2 class="kit">Kit de cozinha </h2>
          <p class="dinheiro">R$ 300</p>
          <button className='botao'> Tecnologia</button>
        </div>
      </a>
      <a class="text-decoration" href="../InfoAnuncio/">
        <div class="co-1" id="cozinha">
          <img class="img" src={sitee}></img>
          <h2 class="kit">Kit de cozinha </h2>
          <p class="dinheiro">R$ 300</p>
          <button className='botao'> Móveis </button>
        </div>
      </a>
      <a class="text-decoration" href="../InfoAnuncio/">
        <div class="co-1" id="cozinha">
        <img class="img" src={sitee}></img>
          <h2 class="kit">Kit de cozinha </h2>
          <p class="dinheiro">R$ 300</p>
          <button class="botao"> Cozinha </button>
        </div>
      </a>
      <a class="text-decoration" href="../InfoAnuncio/">
        <div class="co-1" id="cozinha">
        <img class="img" src={sitee}></img>
          <h2 class="kit">Kit de cozinha </h2>
          <p class="dinheiro">R$ 300</p>
          <button class="botao"> Roupas </button>
        </div>
      </a>
      <a class="text-decoration" href="../InfoAnuncio/">
      <div class="co-1" id="cozinha">
        <img class="img" src={sitee}></img>
          <h2 class="kit">Kit de cozinha </h2>
          <p class="dinheiro">R$ 300</p>
          <button class="botao"> Roupas </button>
        </div>
      </a>
        </div>
        </section>

       <section class="propraganda">
       <h1 class="titulo">
        Novos anúncios <br></br>
        na área de <span class="roxo">limpeza</span>
       </h1>
       <div>
        <img class="imagempropa" src={veja}></img>
        <img class="imagempropa" src={veja}></img>
        <img class="imagempropa" src={veja}></img>
      </div>
       <h1 class="titulo">Venha <br></br>
        conferir!</h1>
       </section>
</div>
)
}