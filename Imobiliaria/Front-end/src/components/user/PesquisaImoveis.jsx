
import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Slider,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PesquisaImoveis = () => {
  const [imoveis, setImoveis] = useState([]);
  const [tipo, setTipo] = useState("");
  const [quartos, setQuartos] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [finalidade, setFinalidade] = useState("");
  const [preco, setPreco] = useState([1, 1000000]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/readlistimovel"
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
  }, []);

  const filtrarImoveis = () => {
    return imoveis.filter(
      (imovel) =>
        (tipo ? imovel.tipoImovel === tipo : true) &&
        (quartos ? imovel.quarto === parseInt(quartos) : true) &&
        (cidade ? imovel.cidadeNome === cidade : true) &&
        (estado ? imovel.estadoNome === estado : true) &&
        (bairro ? imovel.bairro === bairro : true) &&
        (finalidade ? imovel.finalidadeImovel === finalidade : true) &&
        (finalidade === "A"
          ? imovel.valorAluguel >= preco[0] && imovel.valorAluguel <= preco[1]
          : imovel.valorVenda >= preco[0] && imovel.valorVenda <= preco[1])
    );
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Tipo"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="A">Apartamento</MenuItem>
            <MenuItem value="C">Casa</MenuItem>
            <MenuItem value="T">Terreno</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Quartos"
            value={quartos}
            onChange={(event) => setQuartos(event.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4+</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="São Paulo">São Paulo</MenuItem>
            <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
            <MenuItem value="Salvador">Salvador</MenuItem>
            <MenuItem value="Leopoldina">Leopoldina</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Estado"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="MG">MG</MenuItem>
            <MenuItem value="SP">SP</MenuItem>
            <MenuItem value="RJ">RJ</MenuItem>
            <MenuItem value="ES">ES</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Bairro"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Centro">Centro</MenuItem>
            <MenuItem value="Copacabana">Copacabana</MenuItem>
            <MenuItem value="Ondina">Ondina</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Finalidade"
            value={finalidade || ""}
            onChange={(event) => setFinalidade(event.target.value)}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="V">Venda</MenuItem>
            <MenuItem value="A">Aluguel</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography id="range-slider" gutterBottom>
            Preço
          </Typography>
          <Slider
            value={preco}
            onChange={(event, newValue) => setPreco(newValue)}
            valueLabelDisplay="auto"
            min={1}
            max={1000000}
            step={10000}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setImoveis(filtrarImoveis())}
          >
            Pesquisar
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filtrarImoveis().map((imovel) => (
          <Grid item xs={12} sm={4} key={imovel.idimovel}>
            <Card
              onClick={() => navigate(`/imovel/${imovel.idimovel}`)}
              sx={{ cursor: "pointer" }}
            >
              <CardMedia
                component="img"
                alt={`Imagem do imóvel ${imovel.idimovel}`}
                height="140"
                image={
                  imovel.imagem ||
                  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cód: {imovel.idimovel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {imovel.tipoImovel === "A"
                    ? "Apartamento"
                    : imovel.tipoImovel === "C"
                    ? "Casa"
                    : "Terreno"}{" "}
                  - {imovel.quarto} quartos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {imovel.cidadeNome} - {imovel.estadoNome} - {imovel.bairro}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Finalidade:{" "}
                  {imovel.finalidadeImovel === "V" ? "Venda" : "Aluguel"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preço:{" "}
                  {imovel.finalidadeImovel === "A"
                    ? `R$ ${imovel.valorAluguel.toLocaleString("pt-BR")}/mês`
                    : `R$ ${imovel.valorVenda.toLocaleString("pt-BR")}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PesquisaImoveis;


