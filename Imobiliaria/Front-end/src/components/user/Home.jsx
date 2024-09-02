import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel"; // Use a library for carousel

const theme = createTheme();



function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("sale");
  const [searchResults, setSearchResults] = useState([]);
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/InformacoesImovel"
        );
        const imoveisData = response.data;
        setImoveis(imoveisData);
        console.log(imoveisData);
      } catch (error) {
        console.error(error);
        setImoveis([]);
        console.log("Erro ao carregar imóveis");
      }
    };

    fetchImoveis();
  }, []); // Adicione a lista de dependências vazia aqui

  const handleSearch = () => {
    // Simulação de resultados de pesquisa
    const results = filter === "sale" ? propertiesForSale : propertiesForRent;
    setSearchResults(results);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="box-container-search">
        <Box className="box-manager-search">
          <Typography component="h1" variant="h5">
            Pesquisa de Imóveis
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 3,
              width: "100%",
              maxWidth: 1000,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <FormControl
              sx={{ minWidth: 120, marginRight: 2, display: "inline-block" }}
            >
              <InputLabel id="filter-label">Tipo</InputLabel>
              <Select
                labelId="filter-label"
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                label="Tipo"
              >
                <MenuItem value="">Tipo de imovel</MenuItem>
                <MenuItem value="sale">Venda</MenuItem>
                <MenuItem value="rent">Aluguel</MenuItem>
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              fullWidth
              id="searchTerm"
              label="Pesquisar Imóvel"
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Digite a cidade, bairro, etc."
              InputLabelProps={{
                sx: {
                  color: "#0303037e",
                  "&.Mui-focused": {
                    color: "#030303",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#0303037e",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0303037e",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#030303af",
                  },
                },
                maxWidth: "calc(100% - 180px)",
                display: "inline-block",
              }}
            />

            <Button
              variant="contained"
              className="primary-button"
              sx={{ marginLeft: 2 }}
              onClick={handleSearch}
            >
              Buscar
            </Button>

            {searchResults.length > 0 ? (
              <Grid container spacing={2} sx={{ mt: 4 }}>
                {searchResults.map((property) => (
                  <Grid item xs={12} sm={6} md={4} key={property.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={property.image}
                        alt={property.title}
                      />
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {property.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {property.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Ver Detalhes
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <>
                <Typography variant="h6" sx={{ mt: 4 }}>
                  Imóveis à Venda
                </Typography>

                <Carousel>
                  {imoveis.map((imovel) => (
                    <Box key={imovel.id} sx={{ padding: 2 }}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" component="div">
                           
                          
                            {/* Corrigido para usar imovel */}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {imovel.descricaoImovel}{" "}
                            {/* Corrigido para usar imovel */}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            Ver Detalhes
                          </Button>
                        </CardActions>
                      </Card>
                    </Box>
                  ))}
                </Carousel>

                

                <Typography variant="h6" sx={{ mt: 4 }}>
                  Imóveis para Alugar
                </Typography>
                <Carousel>
                  {imoveis.map((imoveis) => (
                    <Box key={imoveis.id} sx={{ padding: 2 }}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={imoveis.id}
                         
                        />
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {imoveis.valorVenda}
                          </Typography>
                          <Typography variant="h6" component="div">
                            {imoveis.descricaoImovel}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {imoveis.descricaoImovel}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            Ver Detalhes
                          </Button>
                        </CardActions>
                      </Card>
                    </Box>
                  ))}
                </Carousel>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Home;

