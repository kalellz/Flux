import React from "react";
import ReactDOM from "react-dom/client";
import LadingPage from "./LadingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anunciar from "./pages/Anunciar/index";
import Feed from "./pages/feed/index";
import InfoAnuncio from "./pages/InfoAnuncio/index";
import Login from "./pages/login/index";
import Cadastro from "./pages/login/signin";
import MeusAnuncios from "./pages/MeusAnuncios/anuncios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/Anunciar" element={<Anunciar />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/InfoAnuncio" element={<InfoAnuncio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MeusAnuncios" element={<MeusAnuncios />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
