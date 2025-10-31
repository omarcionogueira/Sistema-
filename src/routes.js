import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default Rotas;
