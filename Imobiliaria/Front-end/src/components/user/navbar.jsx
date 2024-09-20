
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../login/authContext';
import { Box, Typography, IconButton, CssBaseline, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit'; // Ícone de lápis
import '../user/styles/index.css';

const theme = createTheme();

export default function Navbar() {
  const { user, logout } = useAuth(); // Obtém o usuário e a função de logout do contexto de autenticação

  // Função para obter o nome do usuário do localStorage
  const getUserNameFromLocalStorage = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      return userObj.name;
    }
    return '';
  };

  const userName = getUserNameFromLocalStorage(); // Obtém o nome do usuário

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="navbar"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
          m: 0,
          p: 0,
        }}
      >
        {/* Seção de Contato */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            padding: '10px 20px',
            backgroundColor: 'var(--navbar)',
          }}
        >
          <Typography variant="body2" sx={{ color: '#fff' }}>
            (32) 0000-0000 | (32) 0000-0000
          </Typography>
        </Box>

        {/* Seção do Logo e Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '80px',
            backgroundColor: 'var(--navbar)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '40px',
              fontFamily: 'Varela Round',
            }}
          >
            <Link
              to="/"
              style={{
                color: '#FFF',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Sua logo aqui
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
            <Link to="/sobre" style={{ color: '#FFF', textDecoration: 'none', marginRight: '20px' }}>
              Sobre
            </Link>
            <Link to="CadastroImovel" style={{ color: '#FFF', textDecoration: 'none', marginRight: '20px' }}>
              Anuncie seu imóvel
            </Link>
            <Link to="/busca-de-imoveis" style={{ color: '#FFF', textDecoration: 'none', marginRight: '20px' }}>
              Busca de imóveis
            </Link>
            <Link to="/contato" style={{ color: '#FFF', textDecoration: 'none', marginRight: '20px' }}>
              Contato
            </Link>
            <Link to="/login" style={{ color: '#FFF', textDecoration: 'none', marginRight: '20px' }}>
              Login
            </Link>
          </Box>
        </Box>

        {/* Seção de Saudação e Logout */}
        {user && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'flex-end',
              padding: '10px 40px',
              backgroundColor: '#008080',
            }}
          >
                
            <IconButton component={Link} to="buscarImovel" sx={{ color: '#fffc' }}>
               Editar imovel  <EditIcon fontSize="large" /> 
            </IconButton>
            <Button variant="contained" color="success" onClick={logout} sx={{ ml: 2 }}>
              Sair
            </Button>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}
