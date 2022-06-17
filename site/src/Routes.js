import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Anunciar from "./pages/Anunciar/index";
import Feed from "./pages/feed/index";
import InfoAnuncio from "./pages/InfoAnuncio/index";
import Login from "./pages/login/index";
import Cadastro from "./pages/login/signin";
import MeusAnuncios from "./pages/MeusAnuncios/anuncios";
import LadingPage from "./LadingPage";

export default function Index() {
    return (
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/Anunciar" element={<Anunciar />} />
        <Route path="/alterar/:idParam" element={<Anunciar />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/InfoAnuncio/:idParam" element={<InfoAnuncio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MeusAnuncios" element={<MeusAnuncios />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
    );
}