import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../user/styles/index.css';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#F8F8F8',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #E0E0E0'
      }}
    >
      {/* Seção esquerda */}
      <Box>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Nome da empresa 
        </Typography>
        
        <Box display="flex" alignItems="center" mt={2}>
          <LocationOnIcon color="primary" />
          <Typography variant="body2" ml={1}>
           Sua localização 
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          
          <Link href="mailto:contato@leopoldinahouse.com.br" color="inherit" ml={1}>
            Seu email@.com.br
          </Link>
        </Box>
      </Box>

      {/* Seção do meio */}
      <Box>
        <Box display="flex" alignItems="center">
          <PhoneIcon color="primary" />
          <Typography variant="body2" ml={1}>
            (32) 0000-0000
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <WhatsAppIcon sx={{ color: '#25D366' }} />
          <Typography variant="body2" ml={1}>
            (32) 0000-0000
          </Typography>
        </Box>
      </Box>

      {/* Seção direita */}
      <Box>
        <Typography variant="body2" color="textSecondary">
          Site desenvolvido por:
        </Typography>
        <Link href="https://github.com/RomuloDsouza/TrabalhoFinal" target="_blank" color="primary">
          Romulo Valente
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
