import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function BuscarImovel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [imovel, setImovel] = useState([]);

  // Função para buscar todos os usuários
  const fetchImovel = async () => {
    try {
      const response = await axios.get("http://localhost:3000/imovel");

      setImovel(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImovel();
  }); // Dependência para atualizar quando token mudar

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      // Se o campo de pesquisa estiver vazio, buscar todos os usuários
      fetchimovel();
    } else {
      // Caso contrário, buscar usuários que correspondem ao termo de pesquisa
      try {
        const response = await axios.put(
          `http://localhost:3000/imovel/${searchTerm}`,
          {}
        );
        const searchedImovel = response.data;
        setImovel(searchedImovel);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="box-container-search">
        <Box className="box-manager-search">
          <Avatar className="avatar">
            <AccountCircleIcon className="avatar" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Pesquisa de Imovel
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 3,
              width: "100%",
              maxWidth: 1000,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="searchTerm"
              label="Pesquisar imovel"
              name="searchTerm"
              autoComplete="searchTerm"
              autoFocus
              value={searchTerm}
              onChange={handleChange}
              placeholder="Digite o numero do imovel ou a cidade"
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
                maxWidth: "calc(100% - 120px)",
                display: "inline-block",
              }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 2 }}
            >
              <Button
                type="submit"
                variant="contained"
                className="primary-button"
                sx={{ width: "32%" }}
              >
                Buscar
              </Button>
            </Box>
            {imovel.length > 0 && (
              <TableContainer
                component={Paper}
                sx={{
                  mt: 2,
                  width: "100%",
                  maxWidth: "100%",
                  maxHeight: 350,
                  overflowY: "auto",
                  overflowX: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Rua</TableCell>
                      <TableCell>Cidade</TableCell>
                      <TableCell>Finalidade</TableCell>
                      <TableCell>Tipo Imovel</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {imovel.map((imovelDados) => (
                      <TableRow key={imovelDados.idimovel}>
                        <TableCell>{imovelDados.idimovel}</TableCell>
                        <TableCell>{imovelDados.logradouro}</TableCell>
                        <TableCell>{imovelDados.cidadeNome}</TableCell>
                        <TableCell>
                          {imovelDados.finalidadeImovel === "V"
                            ? "Venda"
                            : "Aluguel"}
                        </TableCell>
                        <TableCell>
                          {
                            <TableCell>
                              {imovelDados.tipoImovel === "A"
                                ? "Apartamento"
                                : imovelDados.tipoImovel === "C"
                                ? "Casa"
                                : "Terreno"}
                            </TableCell>
                          }
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Button
                            component={Link}
                            to={`/editarimovel/${imovelDados.idimovel}`}
                            variant="contained"
                            color="success"
                          >
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  
}

export default BuscarImovel;
