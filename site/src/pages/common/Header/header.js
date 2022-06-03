import Vector from "../../../images/Vector.svg";
import "./header.scss";
import storage from 'local-storage'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect,useState } from "react";

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
        {/*new search bar code (start) */}
        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Pesquisar"
            type="search"
            className="input-header"
          ></input>
        </div>
        {/*new search bar code (end) */}
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
          <div className="text">
            <select name="" id="" className="categorias">
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
