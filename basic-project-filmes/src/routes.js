import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Categoria from './pages/Categoria';

import Erro from './pages/Erro';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/filme/:id" element={ <Filme/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />
        <Route path="/categoria/:genero_id" element= { <Categoria/> } />
        <Route path="*" element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;