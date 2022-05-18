
import '../../fonts/Inter/Inter-Black.ttf';
import '../../fonts/Inter/Inter-Bold.ttf';
import '../../fonts/Inter/Inter-ExtraBold.ttf';
import '../../fonts/Inter/Inter-ExtraLight.ttf';
import '../../fonts/Inter/Inter-Light.ttf';
import '../../fonts/Inter/Inter-Medium.ttf';
import '../../fonts/Inter/Inter-Regular.ttf';
import '../../fonts/Inter/Inter-SemiBold.ttf';
import '../../fonts/Inter/Inter-Thin.ttf';
import './signin.scss';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import mail from '../../images/mail.svg';
import lock from '../../images/lock.svg';
import user from '../../images/user.svg';
import { Link } from 'react-router-dom';
export default function Index(){

  return(
    <main>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="signin.css" />
    <link rel="stylesheet" href="/common/common.css" />
    <title>Cadastrar</title>
  </head>
  <body>
    <main>
      <section class="login-container">
        <div class="roxa">
          <div class="roxa-content">
            <h1 class="h1-roxa">Seja bem vindo!</h1>
            <p class="p-roxa">
                Para se reconectar conosco, por favor coloque suas informações de login!
            </p>
            <button class="roxa-btn" onclick="location.href = 'index.html';">entrar</button>
          </div>
        </div>
        <div class="branca">
          <div class="branca-content">
            <h1 class="h1-branca">Crie sua conta</h1>
            <div class="social">
              <img src={twitter} width="42px" />
              <img src={facebook} width="42px" />
              <img src={linkedin} width="42px" />
            </div>
            <p class="p-branca">Ou use seu e-mail para se cadastrar</p>
            <div class="container-input">
                <div class="email">
                    <img
                      src={user}
                      width="24px"
                      class="input-img"
                    ></img>
                    <input type="text" class="input" placeholder="Nome" ></input>
                  </div>
              <div class="email">
                <img
                  src={mail}
                  width="24px"
                  class="input-img"
                ></img>
                <input type="email" class="input" placeholder="E-mail" ></input>
              </div>
              <div class="email">
                <img
                  src={lock}
                  width="24px"
                  class="input-img"
                ></img>
                <input type="password" class="input" placeholder="Senha" ></input>
              </div>
              <button class="branca-btn">cadastrar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
  </main>
)
}

