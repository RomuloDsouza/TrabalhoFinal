import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Sobre = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Sobre
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="body1" align="justify" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            earum quod perferendis ut, cupiditate unde, fugiat eum maiores
            libero est dicta placeat voluptates voluptatum consequatur voluptas
            delectus exercitationem alias recusandae?
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta numquam omnis harum quae, necessitatibus exercitationem amet
            recusandae et corporis repellat odit temporibus, maiores assumenda!
            Dolorum explicabo aliquid odit quibusdam!
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta numquam omnis harum quae, necessitatibus exercitationem amet
            recusandae et corporis repellat odit temporibus, maiores assumenda!
            Dolorum explicabo aliquid odit quibusdam!
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta numquam omnis harum quae, necessitatibus exercitationem amet
            recusandae et corporis repellat odit temporibus, maiores assumenda!
            Dolorum explicabo aliquid odit quibusdam!
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta numquam omnis harum quae, necessitatibus exercitationem amet
            recusandae et corporis repellat odit temporibus, maiores assumenda!
            Dolorum explicabo aliquid odit quibusdam!
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta numquam omnis harum quae, necessitatibus exercitationem amet
            recusandae et corporis repellat odit temporibus, maiores assumenda!
            Dolorum explicabo aliquid odit quibusdam!
          </Typography>
        </Grid>

        {/* Ícones de redes sociais */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              href="https://www.instagram.com"
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              href="https://wa.me/5532988986927"
              color="primary"
              size="large"
            >
              <WhatsAppIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sobre;
