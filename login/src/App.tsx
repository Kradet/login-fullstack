import React from 'react';
/* import logo from './logo.svg'; */
/* import './App.css'; */
import { BrowserRouter, Route, Routes } from      'react-router-dom';
import { Navbar } from './components/Navbar';
import { Inicio } from './pages/Inicio';
import { Registro } from './pages/Registro';
import { Listar } from './pages/Listar';
import {NoEncontrado} from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="/*" element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
