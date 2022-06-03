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
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import mail from "../../images/mail.svg";
import lock from "../../images/lock.svg";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false)

  async function entrarClick() {
    setCarregando(true)
    try{
      const r = await axios.post('http://localhost:5000/usuario/login', {
        email: email,
        senha: senha
      });
        navigate('/feed')

} catch(err){
    if(err.response.status === 401){
      setErro(err.response.data.erro)
    }
}
  }

  return (
    <main>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="/common/common.css" />
        <title>Logar</title>
      </head>
      <body>
        <main>
          <section className="login-container">
            <div className="roxa">
              <div className="roxa-content">
                <h1 className="h1-roxa">É novo aqui?</h1>
                <p className="p-roxa">
                  Crie sua conta na flux agora, dura menos de 5 minutos!
                </p>
                <Link className="roxa-btn" to="/Cadastro">
                  cadastrar-se
                </Link>
              </div>
            </div>
            <div className="branca">
              <div className="branca-content">
                <h1 className="h1-branca">Faça seu login</h1>
                <div className="social">
                  <img src={twitter} width="42px" alt="twitter"></img>
                  <img src={facebook} width="42px" alt="facebook"></img>
                  <img src={linkedin} width="42px" alt="linkedin"></img>
                </div>
                <p className="p-branca">Ou use seu login para entrar</p>
                <div className="container-input">
                  <div className="email">
                    <img
                      src={mail}
                      width="24px"
                      className="input-img"
                      alt="mail"
                    ></img>
                    <input
                      type="text"
                      className="input-login"
                      placeholder="Login"
                      value={email} onChange={e => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="email">
                    <img
                      src={lock}
                      width="24px"
                      className="input-img"
                      alt="lock"
                    ></img>
                    <input
                      type="password"
                      className="input-login"
                      placeholder="Senha"
                      value={senha} onChange={e => setSenha(e.target.value)}
                    ></input>
                  </div>
                  <button className="branca-btn" disabled={carregando} onClick={entrarClick}>
                    entrar
                  </button>
                  <div className="errologin">
                    {erro}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </main>
  );
}
