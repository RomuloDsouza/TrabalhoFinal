// // src/pages/Login.js
// import { useState } from 'react';
// import { useAuth } from '../login/authContext';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Container, Typography, Box, Paper, Link, InputAdornment, Avatar } from '@mui/material';
// import emailIcon from '@mui/icons-material/email';
// import LockIcon from '@mui/icons-material/Lock';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const Login = () => {
//   const [email, setemail] = useState('');
//   const [senha, setsenha] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, senha);
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" height="70vh" bgcolor="#f0f0f0">
//       <Paper elevation={3} style={{ padding: '40px', borderRadius: '8px', maxWidth: '500px', width: '100%' }}>
//         <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
//           <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography variant="h4" gutterBottom align="center">
//             Login
//           </Typography>
//         </Box>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="email"
//             type="email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             fullWidth
//             required
//             margin="normal"
//             autoComplete="email"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <emailIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             label="senha"
//             type="senha"
//             value={senha}
//             onChange={(e) => setsenha(e.target.value)}
//             fullWidth
//             required
//             margin="normal"
//             autoComplete="current-senha"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Box display="flex" justifyContent="flex-end" mb={2}>
//             <Link href="" variant="body2">
//               Esqueceu sua senha?
//             </Link>
//           </Box>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ padding: '10px' }}
//           >
//             Entrar
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;


// src/pages/Login.js



import { useState } from 'react';
import { useAuth } from '../login/authContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Paper, Avatar, Typography, Link, InputAdornment } from '@mui/material';
import emailIcon from '@mui/icons-material/email';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const AuthPage = () => {
  const [email, setemail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeUsuario, setnomeUsuario] = useState(''); // Para cadastro
  const [isRegistering, setIsRegistering] = useState(false); // Controla o modo de cadastro
  const { login, register } = useAuth(); // Supondo que o contexto também tenha uma função de registro
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        // Cadastro
        await register(email, senha, nomeUsuario);
        navigate('/');
      } else {
        // Login
        await login(email, senha);
        navigate('/');
      }
    } catch (error) {
      console.error(`${isRegistering ? 'Cadastro' : 'Login'} falhou`, error);
      
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="70vh" bgcolor="#f0f0f0">
      <Paper elevation={3} style={{ padding: '40px', borderRadius: '8px', maxWidth: '500px', width: '100%' }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" gutterBottom align="center">
            {isRegistering ? 'Cadastro' : 'Login'}
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <TextField
              label="nomeUsuario"
              value={nomeUsuario}
              onChange={(e) => setnomeUsuario(e.target.value)}
              fullWidth
              required
              margin="normal"
              autoComplete="name"
            />
          )}
          <TextField
            label="email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            fullWidth
            required
            margin="normal"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <emailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            fullWidth
            required
            margin="normal"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Link href="#" variant="body2" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Já tem uma conta? Faça login' : 'Ainda não tem uma conta? Cadastre-se'}
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ padding: '10px' }}
          >
            {isRegistering ? 'Cadastrar' : 'Entrar'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AuthPage;
