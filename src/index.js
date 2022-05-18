import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Anunciar from './pages/Anunciar/index';
import feed from './pages/feed/index';
import InfoAnuncio from './pages/InfoAnuncio/index';
import login from './pages/login/index';
import MeusAnuncios from './pages/MeusAnuncios/anuncios';
import cadastro from './pages/login/signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/Anunciar' element={<Anunciar />} />
    <Route path='/feed' element={<feed />} />
    <Route path='/InfoAnuncio' element={<InfoAnuncio />} />
    <Route path='/login' element={<login />} />
    <Route path='/MeusAnuncios' element={<MeusAnuncios />} />
    <Route path='/cadastro' element={<cadastro />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
