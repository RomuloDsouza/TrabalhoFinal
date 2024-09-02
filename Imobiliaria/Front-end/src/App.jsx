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



import Home from './components/user/Home';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
           
           
              <Route path='/' element={<Home />} />
              <Route path='/cadastroImovel' element={<CadastroImovel/>} />
              <Route path='/busca-de-imoveis' element={<PesquisaImoveis/>} />
              <Route path='/home' element={<Home />} />
              
              
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
