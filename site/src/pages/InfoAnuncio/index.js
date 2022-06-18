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
import Detalhe from "../common/Detalhe/index.js"
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarPorId } from "../../api/produtoApi.js";
export default function Index() {

  const [produto , setProduto] = useState({})
  const {idParam} = useParams() 

  useEffect(() => {
    carregarProduto()
  }, [])
  
  async function carregarProduto(){
    const resposta = await listarPorId(idParam)
    setProduto(resposta)
  }
  

  return (
    <div class="bodyinfoanuncio">
      <body class="bodyinfoanuncio">
        <Header />
        <Detalhe produto={produto} />
      </body>
    </div>
  );
}
