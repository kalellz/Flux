import { buscarImagem } from "../../../api/produtoApi.js";
import { useNavigate } from "react-router-dom";

export default function Index(props) {
  const navigate = useNavigate();
  return (
    <div class="details">
      <div className="div-img">
      <img src={buscarImagem(props.produto.imagem)} className='product-img' />
      </div>
      <div className="div-infos">
        <div className="name-info">
          <p className="p-category">{props.produto.categoria}</p>
          <h1 class="tituloinfo">{props.produto.nome}</h1>
          <p className="user-info"> Produto postado por: <span>{props.produto.usuario}</span></p> 
        </div>
        <div className="div-product-details">
          <h1 className="price"><span>R$</span>{props.produto.preco}</h1>
        </div>
        <div className="product-description">
          <p className="desc">{ props.produto.descricao }</p>
        </div>
        <div className="contact">
          <h2 className="contact-title">Fale com <span>{props.produto.usuario}</span></h2>
          <div className="means">
            <h1>Email</h1>
            <p>{props.produto.email}</p>
            <h1>Telefone</h1>
            <p>{ props.produto.telefone }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
