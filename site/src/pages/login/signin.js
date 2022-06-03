import "../../fonts/Inter/Inter-Black.ttf";
import "../../fonts/Inter/Inter-Bold.ttf";
import "../../fonts/Inter/Inter-ExtraBold.ttf";
import "../../fonts/Inter/Inter-ExtraLight.ttf";
import "../../fonts/Inter/Inter-Light.ttf";
import "../../fonts/Inter/Inter-Medium.ttf";
import "../../fonts/Inter/Inter-Regular.ttf";
import "../../fonts/Inter/Inter-SemiBold.ttf";
import "../../fonts/Inter/Inter-Thin.ttf";
import "./signin.scss";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import mail from "../../images/mail.svg";
import lock from "../../images/lock.svg";
import user from "../../images/user.svg";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <main>
      <body>
        <main>
          <section class="login-container">
            <div class="roxa">
              <div class="roxa-content">
                <h1 class="h1-roxa">Seja bem vindo!</h1>
                <p class="p-roxa">
                  Para se reconectar conosco, por favor coloque suas informações
                  de login!
                </p>
                <Link class="roxa-btn" to="/Login">
                  entrar
                </Link>
              </div>
            </div>
            <div class="branca">
              <div class="branca-content">
                <h1 class="h1-branca">Crie sua conta</h1>
                <div class="social">
                  <img src={twitter} width="42px" alt="twitter" />
                  <img src={facebook} width="42px" alt="facebook" />
                  <img src={linkedin} width="42px" alt="linkedin" />
                </div>
                <p class="p-branca">Ou use seu e-mail para se cadastrar</p>
                <div class="container-input">
                  <div class="email">
                    <img
                      src={user}
                      width="24px"
                      class="input-img"
                      alt="user"
                    ></img>
                    <input
                      type="text"
                      class="input-login"
                      placeholder="Nome"
                    ></input>
                  </div>
                  <div class="email">
                    <img
                      src={mail}
                      width="24px"
                      class="input-img"
                      alt="mail"
                    ></img>
                    <input
                      type="email"
                      class="input-login"
                      placeholder="E-mail"
                    ></input>
                  </div>
                  <div class="email">
                    <img
                      src={lock}
                      width="24px"
                      class="input-img"
                      alt="lock"
                    ></img>
                    <input
                      type="password"
                      class="input-login"
                      placeholder="Senha"
                    ></input>
                  </div>
                  <Link class="branca-btn" to="/Login">
                    cadastrar
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </main>
  );
}
