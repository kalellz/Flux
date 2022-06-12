import Vector from "../../../images/Vector.svg";
import "./header.scss";
import storage from 'local-storage'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect,useState } from "react";
import { listarCategoria } from "../../../api/produtoApi.js";

export default function Header(props) {
  const [usuario, setUsuario] = useState('-')
  const [menuSelecionado, setMenuSelecionado] = useState(props.selecionado)
  const navigate = useNavigate();

  useEffect(() => {
    if (!storage('usuario-logado')) {
      navigate('/login') 
    } else{
      const usuarioLogado = storage('usuario-logado')
      setUsuario(usuarioLogado.nome)
    }
  }, [])
  
  function verificarMenuSelecionado(menu){
    if(menu === menuSelecionado) return 'selecionado'
    else return 'botao1'
  }

  function sairClick() {
    storage.remove('usuario-logado')
    navigate('/login')
  }
 
  return (
    <div className="header-feed">
      <div className="oláusuario">Olá {usuario}</div>
      <div className="cima">
        <div className="logo">
          <h3 className="logo-flux">FLUX</h3>
        </div>
        <div className="conta">
          <button onClick={sairClick} className="botao1">
            Sair
          </button>
          <div className="usuarioimage">
            <span>{usuario[0].toUpperCase()}</span>
          </div>
        </div>
      </div>
      <div className="baixo">
        <div className="content">
         
          <div>
            <Link className={verificarMenuSelecionado('meusanuncios')} to="/MeusAnuncios">
              Meus Anúncios
            </Link>
          </div>
          <div>
            <Link className={verificarMenuSelecionado('feed')} to="/feed" >
              Feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
