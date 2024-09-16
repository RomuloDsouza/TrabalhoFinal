// // BIBLIOTECAS
// import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';

// // IMPORTAÇÕES
// import { AuthProvider, useAuth } from './components/login/authContext';
// import Navbar from './components/navbar';
// import Manager from './components/manager';
// import CreateUser from './components/user/createUser';
// import SearchUser from './components/user/searchUser';
// import UpdateUser from './components/user/updateUser';
// import Home from './components/home';
// import Login from './components/login/login';
// import PrivateRoute from './components/login/privateRoute';


// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <div>
//           <Navbar />
//         </div>
//         <Routes>
//           <Route exact path='/login' element={<Login />} />
//           <Route element={<PrivateRoute />}>
//           <Route exact path='/' element={<Home/>} />
//             <Route path="/manager" element={<Manager />} />
//             <Route path='/criarusuario' element={<CreateUser/>} />
//             <Route path='/buscarusuario' element={<SearchUser/>} />
//             <Route path="/atualizarusuario/:id" element={<UpdateUser/>} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

// BIBLIOTECAS
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


import Home from './components/user/Home';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        
          <Navbar />
          <Routes>
           
              <Route exact path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
              <Route path='/cadastroImovel' element={<CadastroImovel/>} />
              <Route path='/busca-de-imoveis' element={<PesquisaImoveis/>} />
              <Route path="/imovel/:id" element={<ImovelDetalhes />} /> 
              <Route path="/buscarImovel" element={< BuscarImovel/>} /> 
              <Route path="/editarimovel/:id" element={< EditarImovel/>} /> 
              
          </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
