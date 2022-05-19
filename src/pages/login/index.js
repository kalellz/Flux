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
import { Link } from "react-router-dom";
export default function Index() {
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
          <section class="login-container">
            <div class="roxa">
              <div class="roxa-content">
                <h1 class="h1-roxa">É novo aqui?</h1>
                <p class="p-roxa">
                  Crie sua conta na flux agora, dura menos de 5 minutos!
                </p>
                <a class="roxa-btn" href="/Cadastro">
                  cadastrar-se
                </a>
              </div>
            </div>
            <div class="branca">
              <div class="branca-content">
                <h1 class="h1-branca">Faça seu login</h1>
                <div class="social">
                  <img src={twitter} width="42px"></img>
                  <img src={facebook} width="42px"></img>
                  <img src={linkedin} width="42px"></img>
                </div>
                <p class="p-branca">Ou use seu login para entrar</p>
                <div class="container-input">
                  <div class="email">
                    <img src={mail} width="24px" class="input-img"></img>
                    <input
                      type="email"
                      class="input"
                      placeholder="Login"
                    ></input>
                  </div>
                  <div class="email">
                    <img src={lock} width="24px" class="input-img"></img>
                    <input
                      type="password"
                      class="input"
                      placeholder="Senha"
                    ></input>
                  </div>
                  <button class="branca-btn">entrar</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </main>
  );
}
