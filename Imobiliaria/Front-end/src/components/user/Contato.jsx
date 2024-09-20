import React from "react";
import { Container, Typography, Paper, Grid, Link } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import PhoneIcon from "@mui/icons-material/Phone";

// Definição da posição
const position = [-21.528868768891076, -42.64486704715764];

const Contato = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Contato
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="body1" component="p" align="left" paragraph>
              A empresa foi fundada em 2020 com o objetivo de oferecer soluções de
              tecnologia para pequenas e médias empresas.
            </Typography>
            <Typography variant="body1" component="p" align="left" paragraph>
              <Link
                href="https://wa.me/5511999999999"
                color="inherit"
                underline="none"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <WhatsAppIcon sx={{ mr: 1 }} /> WhatsApp
              </Link>
            </Typography>
            <Typography variant="body1" component="p" align="left" paragraph>
              <Link
                href="mailto:contato@empresa.com"
                color="inherit"
                underline="none"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                E-mail
              </Link>
            </Typography>
            <Typography variant="body1" component="p" align="left" paragraph>
              <Link
                href="tel:+553299999999"
                color="inherit"
                underline="none"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <PhoneIcon sx={{ mr: 1 }} /> Telefone
              </Link>
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Leopoldina, MG<br />Brasil
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contato;
