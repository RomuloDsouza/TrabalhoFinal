

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORTAÇÕES
import { AuthProvider } from './components/login/authContext';
import Navbar from './components/user/navbar';
import CadastroImovel from '../src/components/user/CadastroImovel';
import PesquisaImoveis from '../src/components/user/PesquisaImoveis';
import ImovelDetalhes from '../src/components/user/ImovelDetalhes';
import Login from './components/login/login';
import BuscarImovel from './components/user/BuscarImovel';
import EditarImovel from './components/user/Editarimovel';
import Footer from './components/user/Footer';
import Home from './components/user/Home';
import Sobre from './components/user/Sobre';
import Contato from './components/user/Contato';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/cadastroImovel' element={<CadastroImovel />} />
          <Route path='/busca-de-imoveis' element={<PesquisaImoveis />} />
          <Route path="/imovel/:id" element={<ImovelDetalhes />} /> 
          <Route path="/buscarImovel" element={<BuscarImovel />} /> 
          <Route path="/editarimovel/:id" element={<EditarImovel />} /> 
          <Route path="/Sobre" element={<Sobre />} /> 
          <Route path="/contato" element={<Contato />} /> 
        </Routes>
        {/* O Footer será exibido em todas as páginas */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
