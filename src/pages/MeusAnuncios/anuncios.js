
import '../../fonts/Inter/Inter-Black.ttf';
import '../../fonts/Inter/Inter-Bold.ttf';
import '../../fonts/Inter/Inter-ExtraBold.ttf';
import '../../fonts/Inter/Inter-ExtraLight.ttf';
import '../../fonts/Inter/Inter-Light.ttf';
import '../../fonts/Inter/Inter-Medium.ttf';
import '../../fonts/Inter/Inter-Regular.ttf';
import '../../fonts/Inter/Inter-SemiBold.ttf';
import '../../fonts/Inter/Inter-Thin.ttf';
import './anuncios.scss';
import buscar from '../../images/buscar.svg';
import Vector from '../../images/Vector.svg';
import talheres from '../../images/talheres.svg';
import trash from '../../images/Trash.svg';
import { Link } from 'react-router-dom';
export default function Index(){

  return(
    <main>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="anuncios.css" />
  <link rel="stylesheet" href="../../common/common.css" />
  <title>Anúncios</title>
</head>

<body>
  <header className='header-anuncios'>
    <div class="cima">
      <div class="logo">
        <h3 class="logo-flux">FLUX</h3>
      </div>
      <div class="busca">
        <input type="text" class="pesquisa" >Pesquise por qualquer coisa que quiser!</input>
        <img src={buscar} width="24px" ></img>
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
            <option value="" selected>Categorias</option>
            <option value="">Tecnologia</option>
            <option value="">Casa móveis</option>
            <option value="">Brinquedos</option>
            <option value="">Roupas</option>
          </select>
        </div>
        <div class="botaoanuncio">Anuncios</div>
        <div><a class="botao1" href="../feed/index.html">Feed</a></div>
      </div>
    </div>
  </header>

  <main class="faixa-variavel">
    <div class="sub-fx">
      <a class="a-fx1" href="">Geral</a>
      <a class="a-fx1" href="">Recentes</a>
      <a class="a-fx12" href="">Meus Anuncios</a>
    </div>


    <div class="busca">
      <input type="text" class="pesquisa2">Encontre seu anúncio</input>
      <img class="lupinha-buscar" src={buscar}></img>
    </div>

    <div >
    <a class="botao-fx-var" href="../Anunciar/index.html">ANUNCIAR</a>
    </div>
  </main>

  <div class="fx-2">
    <section class="cartao-anuncio">
      <div class="img-anuncio">
        <img src={talheres} alt=""></img>
      </div>
      
      <div class="desc-anuncio">
        <p><span class="desc-anuncio-p1">#1234567891011</span></p>
        <p>Kit de cozinha básicão <br></br> para cozinhas cozinhadas</p>
      </div>

      <div class="info-anuncio">
        <p>R$300</p>
      </div>

      <div class="info-anuncio">
        <p>8 mil visitas</p>
      </div>

      <div class="edit">
        <img src={trash}></img>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3334 6.03331C18.3341 5.92363 18.313 5.81492 18.2716 5.71338C18.2301 5.61185 18.169 5.51951 18.0918 5.44164L14.5584 1.90831C14.4806 1.83107 14.3882 1.76997 14.2867 1.7285C14.1852 1.68703 14.0764 1.66601 13.9668 1.66664C13.8571 1.66601 13.7484 1.68703 13.6468 1.7285C13.5453 1.76997 13.453 1.83107 13.3751 1.90831L11.0168 4.26664L1.90843 13.375C1.83119 13.4528 1.77009 13.5452 1.72862 13.6467C1.68715 13.7482 1.66613 13.857 1.66676 13.9666V17.5C1.66676 17.721 1.75456 17.933 1.91084 18.0892C2.06712 18.2455 2.27908 18.3333 2.5001 18.3333H6.03343C6.15003 18.3397 6.26667 18.3214 6.37578 18.2798C6.48488 18.2381 6.58402 18.174 6.66676 18.0916L15.7251 8.98331L18.0918 6.66664C18.1678 6.58587 18.2298 6.49292 18.2751 6.39164C18.2831 6.32522 18.2831 6.25806 18.2751 6.19164C18.279 6.15285 18.279 6.11376 18.2751 6.07497L18.3334 6.03331ZM5.69176 16.6666H3.33343V14.3083L11.6084 6.03331L13.9668 8.39164L5.69176 16.6666ZM15.1418 7.21664L12.7834 4.85831L13.9668 3.68331L16.3168 6.03331L15.1418 7.21664Z" fill="#5A41DC"/>
          </svg>    
      </div>
    </section>
  </div>

  <div class="fx-2">
    <section class="cartao-anuncio">
      <div class="img-anuncio">
        <img src={talheres} alt=""></img>
      </div>
      
      <div class="desc-anuncio">
        <p><span class="desc-anuncio-p1">#1234567891011</span></p>
        <p>Kit de cozinha básicão <br></br> para cozinhas cozinhadas</p>
      </div>

      <div class="info-anuncio">
        <p>R$300</p>
      </div>

      <div class="info-anuncio">
        <p>5 mil visitas</p>
      </div>

      <div class="edit">
        <img src={trash}></img>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3334 6.03331C18.3341 5.92363 18.313 5.81492 18.2716 5.71338C18.2301 5.61185 18.169 5.51951 18.0918 5.44164L14.5584 1.90831C14.4806 1.83107 14.3882 1.76997 14.2867 1.7285C14.1852 1.68703 14.0764 1.66601 13.9668 1.66664C13.8571 1.66601 13.7484 1.68703 13.6468 1.7285C13.5453 1.76997 13.453 1.83107 13.3751 1.90831L11.0168 4.26664L1.90843 13.375C1.83119 13.4528 1.77009 13.5452 1.72862 13.6467C1.68715 13.7482 1.66613 13.857 1.66676 13.9666V17.5C1.66676 17.721 1.75456 17.933 1.91084 18.0892C2.06712 18.2455 2.27908 18.3333 2.5001 18.3333H6.03343C6.15003 18.3397 6.26667 18.3214 6.37578 18.2798C6.48488 18.2381 6.58402 18.174 6.66676 18.0916L15.7251 8.98331L18.0918 6.66664C18.1678 6.58587 18.2298 6.49292 18.2751 6.39164C18.2831 6.32522 18.2831 6.25806 18.2751 6.19164C18.279 6.15285 18.279 6.11376 18.2751 6.07497L18.3334 6.03331ZM5.69176 16.6666H3.33343V14.3083L11.6084 6.03331L13.9668 8.39164L5.69176 16.6666ZM15.1418 7.21664L12.7834 4.85831L13.9668 3.68331L16.3168 6.03331L15.1418 7.21664Z" fill="#5A41DC"/>
          </svg>    
      </div>
    </section>
  </div>

  <div class="fx-2">
    <section class="cartao-anuncio">
      <div class="img-anuncio">
        <img src={talheres} alt=""></img>
      </div>
      
      <div class="desc-anuncio">
        <p><span class="desc-anuncio-p1">#1234567891011</span></p>
        <p>Kit de cozinha <br></br> básicão para cozinhas cozinhadas</p>
      </div>

      <div class="info-anuncio">
        <p>R$300</p>
      </div>

      <div class="info-anuncio">
        <p>3 mil visitas</p>
      </div>

      <div class="edit">
        <img src={trash}></img>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3334 6.03331C18.3341 5.92363 18.313 5.81492 18.2716 5.71338C18.2301 5.61185 18.169 5.51951 18.0918 5.44164L14.5584 1.90831C14.4806 1.83107 14.3882 1.76997 14.2867 1.7285C14.1852 1.68703 14.0764 1.66601 13.9668 1.66664C13.8571 1.66601 13.7484 1.68703 13.6468 1.7285C13.5453 1.76997 13.453 1.83107 13.3751 1.90831L11.0168 4.26664L1.90843 13.375C1.83119 13.4528 1.77009 13.5452 1.72862 13.6467C1.68715 13.7482 1.66613 13.857 1.66676 13.9666V17.5C1.66676 17.721 1.75456 17.933 1.91084 18.0892C2.06712 18.2455 2.27908 18.3333 2.5001 18.3333H6.03343C6.15003 18.3397 6.26667 18.3214 6.37578 18.2798C6.48488 18.2381 6.58402 18.174 6.66676 18.0916L15.7251 8.98331L18.0918 6.66664C18.1678 6.58587 18.2298 6.49292 18.2751 6.39164C18.2831 6.32522 18.2831 6.25806 18.2751 6.19164C18.279 6.15285 18.279 6.11376 18.2751 6.07497L18.3334 6.03331ZM5.69176 16.6666H3.33343V14.3083L11.6084 6.03331L13.9668 8.39164L5.69176 16.6666ZM15.1418 7.21664L12.7834 4.85831L13.9668 3.68331L16.3168 6.03331L15.1418 7.21664Z" fill="#5A41DC"/>
            </svg>            
      </div>
    </section>
  </div>
</body>
</main>
)
}