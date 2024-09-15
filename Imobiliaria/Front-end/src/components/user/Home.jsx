

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Carousel from "react-material-ui-carousel";

// const theme = createTheme();

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("sale");
//   const [searchResults, setSearchResults] = useState([]);
//   const [imoveis, setImoveis] = useState([]);

//   useEffect(() => {
//     const fetchImoveis = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/readlistimovel");
//         const imoveisData = response.data;
//         setImoveis(imoveisData);
//         console.log(imoveisData);
//       } catch (error) {
//         console.error(error);
//         setImoveis([]);
//         console.log("Erro ao carregar imóveis");
//       }
//     };

//     fetchImoveis();
//   }, []);

//   const handleSearch = () => {
//     const results = filter === "sale"
//       ? imoveis.filter((imovel) => imovel.finalidadeImovel === "V")
//       : imoveis.filter((imovel) => imovel.finalidadeImovel === "A");
//     setSearchResults(results);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container className="box-container-search">
//         <Box className="box-manager-search" sx={{ mt: 4 }}>
//           <Typography component="h1" variant="h5" textAlign="center">
//             Pesquisa de Imóveis
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             sx={{
//               mt: 3,
//               width: "100%",
//               maxWidth: 1000,
//               margin: "0 auto",
//               textAlign: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 gap: 2,
//                 width: "100%",
//               }}
//             >
              

//               <TextField
//                 margin="normal"
//                 fullWidth
//                 id="searchTerm"
//                 label="Pesquisar Imóvel"
//                 name="searchTerm"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Digite a cidade, bairro, etc."
//                 InputLabelProps={{
//                   sx: {
//                     color: "#0303037e",
//                     "&.Mui-focused": {
//                       color: "#030303",
//                     },
//                   },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "#0303037e",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "#0303037e",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#030303af",
//                     },
//                   },
//                   flex: 3,
//                 }}
//               />
//             </Box>

//             <Button
//               variant="contained"
//               className="primary-button"
//               sx={{ mt: 2 }}
//               onClick={handleSearch}
//             >
//               Buscar
//             </Button>

//             {searchResults.length > 0 ? (
//               <Grid container spacing={3} sx={{ mt: 4 }}>
//                 {searchResults.map((imovel) => (
//                   <Grid item xs={12} sm={6} md={4} key={imovel.idimovel}>
//                     <Card>
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={property.image}
//                         alt={imovel.descricaoImovel}
//                       />
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           {property.title}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {imovel.description}
//                         </Typography>
//                       </CardContent>
//                       <CardActions>
//                         <Button size="small" color="primary">
//                           Ver Detalhes
//                         </Button>
//                       </CardActions>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             ) : (
              
//               <>
                 
//                 {/* Novo Card com foto à esquerda e informações à direita */}
//                 <Box sx={{ mt: 4 }}>
//                   {imoveis.slice(0, 1).map((imovel) => (
//                     <Card sx={{ display: "flex", alignItems: "center", mb: 2 }} key={imovel.idimovel}>
//                       <CardMedia
//                         component="img"
//                         sx={{ width: 200, height: 140 }} // Ajuste o tamanho conforme necessário
//                         image={imovel.image}
//                         alt={imovel.descricaoImovel}
//                       />
//                       <Box sx={{ flex: 1, p: 2 }}>
//                         <CardContent>
//                           <Typography variant="h6" component="div">
//                             {imovel.descricaoImovel}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             R$ {imovel.valorVenda || imovel.valorAluguel}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             {imovel.finalidadeImovel === "V" ? "Venda" : "Aluguel"}
//                           </Typography>
//                         </CardContent>
//                         <CardActions>
//                           <Button size="small" color="primary">
//                             Ver Detalhes
//                           </Button>
//                         </CardActions>
//                       </Box>
//                     </Card>
//                   ))}
//                 </Box>

//                 <Typography variant="h6" sx={{ mt: 4 }}>
//                   Imóveis à Venda
//                 </Typography>

//                 <Carousel>
//                   {imoveis
//                     .filter((imovel) => imovel.finalidadeImovel === "V")
//                     .slice(0, 6)
//                     .map((imovel) => (
//                       <Box key={imovel.idimovel} sx={{ padding: 2 }}>
//                         <Card>
//                           <CardMedia
//                             component="img"
//                             height="140"
//                             image={imovel.image}
//                             alt={imovel.descricaoImovel}
//                           />
//                           <CardContent>
//                             <Typography variant="h6" component="div">
//                               {imovel.descricaoImovel}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               R$ {imovel.valorVenda}
//                             </Typography>
//                           </CardContent>
//                           <CardActions>
//                             <Button size="small" color="primary">
//                               Ver Detalhes
//                             </Button>
//                           </CardActions>
//                         </Card>
//                       </Box>
//                     ))}
//                 </Carousel>

//                 <Typography variant="h6" sx={{ mt: 4 }}>
//                   Imóveis para Alugar
//                 </Typography>

//                 <Carousel>
//                   {imoveis
//                     .filter((imovel) => imovel.finalidadeImovel === "A")
//                     .slice(0, 6)
//                     .map((imovel) => (
//                       <Box key={imovel.idimovel} sx={{ padding: 2 }}>
//                         <Card>
//                           <CardMedia
//                             component="img"
//                             height="140"
//                             image={imovel.image}
//                             alt={imovel.descricaoImovel}
//                           />
//                           <CardContent>
//                             <Typography variant="h6" component="div">
//                               {imovel.descricaoImovel}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               R$ {imovel.valorAluguel}
//                             </Typography>
//                           </CardContent>
//                           <CardActions>
//                             <Button size="small" color="primary">
//                               Ver Detalhes
//                             </Button>
//                           </CardActions>
//                         </Card>
//                       </Box>
//                     ))}
//                 </Carousel>
               
//               </>
//             )}
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";

const theme = createTheme();

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("sale");
  const [searchResults, setSearchResults] = useState([]);
  const [imoveis, setImoveis] = useState([]);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await axios.get("http://localhost:3000/readlistimovel");
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
  }, []);

  const handleSearch = () => {
    const results = filter === "sale"
      ? imoveis.filter((imovel) => imovel.finalidadeImovel === "V")
      : imoveis.filter((imovel) => imovel.finalidadeImovel === "A");
    setSearchResults(results);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="box-container-search">
        <Box className="box-manager-search" sx={{ mt: 4 }}>
          <Typography component="h1" variant="h5" textAlign="center">
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                width: "100%",
              }}
            >
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
                  flex: 3,
                }}
              />
            </Box>

            <Button
              variant="contained"
              className="primary-button"
              sx={{ mt: 2 }}
              onClick={handleSearch}
            >
              Buscar
            </Button>

            {searchResults.length > 0 ? (
              <Grid container spacing={3} sx={{ mt: 4 }}>
                {searchResults.map((imovel) => (
                  <Grid item xs={12} sm={6} md={4} key={imovel.idimovel}>
                    <Card
                      onClick={() => navigate(`/imovel/${imovel.idimovel}`)}
                      sx={{ cursor: "pointer" }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={imovel.image}
                        alt={imovel.descricaoImovel}
                      />
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {imovel.descricaoImovel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {imovel.descricaoImovel}
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
                <Box sx={{ mt: 4 }}>
                  {imoveis.length > 0 && (
                    <Card
                      sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      onClick={() => navigate(`/imovel/${imoveis[0].idimovel}`)}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 200, height: 140 }}
                        image={imoveis[0].image}
                        alt={imoveis[0].descricaoImovel}
                      />
                      <Box sx={{ flex: 1, p: 2 }}>
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {imoveis[0].descricaoImovel}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            R$ {imoveis[0].valorVenda || imoveis[0].valorAluguel}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {imoveis[0].finalidadeImovel === "V" ? "Venda" : "Aluguel"}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            Ver Detalhes
                          </Button>
                        </CardActions>
                      </Box>
                    </Card>
                  )}
                </Box>

                <Typography variant="h6" sx={{ mt: 4 }}>
                  Imóveis à Venda
                </Typography>

                <Carousel>
                  {imoveis
                    .filter((imovel) => imovel.finalidadeImovel === "V")
                    .slice(0, 6)
                    .map((imovel) => (
                      <Box key={imovel.idimovel} sx={{ padding: 2 }}>
                        <Card
                          onClick={() => navigate(`/imovel/${imovel.idimovel}`)}
                          sx={{ cursor: "pointer" }}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={imovel.image}
                            alt={imovel.descricaoImovel}
                          />
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {imovel.descricaoImovel}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              R$ {imovel.valorVenda}
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
                  {imoveis
                    .filter((imovel) => imovel.finalidadeImovel === "A")
                    .slice(0, 6)
                    .map((imovel) => (
                      <Box key={imovel.idimovel} sx={{ padding: 2 }}>
                        <Card
                          onClick={() => navigate(`/imovel/${imovel.idimovel}`)}
                          sx={{ cursor: "pointer" }}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={imovel.image}
                            alt={imovel.descricaoImovel}
                          />
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {imovel.descricaoImovel}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              R$ {imovel.valorAluguel}
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
