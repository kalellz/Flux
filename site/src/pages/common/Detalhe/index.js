import { useEffect, useState } from "react";
import storage from "local-storage";
import { buscarImagem } from "../../../api/produtoApi.js";
import { useNavigate } from "react-router-dom";

export default function Index(props) {
  const Navigate = useNavigate()
  const [usuario, setUsuario] = useState("-");
  const usuarioLogado = storage("usuario-logado");
  useEffect(() => {
    setUsuario(usuarioLogado.nome);
  }, []);
  return (
    <div class="pagetoda">
      <section class="page">
        <h1 class="tituloinfo">{props.produto.nome}</h1>
        <img src={buscarImagem(props.produto.imagem)} className='imagem-detalhe' />
        <h1 class="tituloinfo">Descrição do produto</h1>
        <div class="desc">
          <p class="descprod">{props.produto.descricao}</p>
        </div>
      </section>
      <section class="aaaa">
        <div class="informa">
          <h1 class="tituloinfo">Informações gerais</h1>

          <div class="div1">
            <h4 class="minititulo">Nome do vendedor:</h4>
            <p class="nm">{usuario}</p>

            <h4 class="minititulo">Preço:</h4>
            <p class="nm">R$: {props.produto.preco}</p>

            <h4 class="minititulo">Categoria do produto</h4>
            <p class="nm">{props.produto.categoria}</p>
          </div>
        </div>
      </section>

      <section class="page2">
        <div class="contato">
          <h1 class="tituloinfo">Contato:</h1>
          <div>
            <h4 class="minititulo">Telefone:</h4>
            <p class="nm">{props.produto.telefone}</p>
            <h4 class="minititulo">E-mail:</h4>
            <p class="nm">{props.produto.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
