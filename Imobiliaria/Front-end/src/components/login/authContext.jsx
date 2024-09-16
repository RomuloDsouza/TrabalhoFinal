
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem('user');
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const login = async (email, senha) => {
//     try {
//       const response = await axios.post('http://localhost:3000/usuario', { email,senha });
//       if (response.status === 200) {
//         setUser(response.data);
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//       throw error;
//     }
//   };

//   const register = async (email, senha, nomeUsuario) => {
//     try {
//       const response = await axios.post('http://localhost:3000/usuario', { email, senha, nomeUsuario });
//       if (response.status === 201) { // Supondo que o cadastro retorna 201 Created
//         setUser(response.data);
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//     } catch (error) {
//       console.error('Registration failed', error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);
//     console.log(user)
//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Criação do Contexto de Autenticação
const AuthContext = createContext();

// Provider para o Contexto de Autenticação
export const AuthProvider = ({ children }) => {
  // Estado para armazenar o usuário autenticado
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Função para login
  const login = async (email, senha) => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, senha });
      if (response.status === 200) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  // Função para registro
  const register = async (email, senha, nomeUsuario) => {
    try {
      const response = await axios.post('http://localhost:3000/usuario', { email, senha, nomeUsuario });
      if (response.status === 201) { // Supondo que o cadastro retorna 201 Created
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  // Função para logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Efeito para carregar usuário salvo no localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
