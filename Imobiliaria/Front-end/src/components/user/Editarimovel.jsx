import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, Grid } from "@mui/material";
const theme = createTheme();

function UpdateImovel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [imovel, setImovel] = useState({
    idimovel:"",
    tipoImovel: "",
    finalidadeImovel: "",
    cepImovel: "",
    bairro: "",
    cidadeNome: "",
    estadoNome: "",
    logradouro: "",
    numero: "",
    complemento: "",
    idUsuario: "",
  });

  const [imovelInformacao, setImovelInformacao] = useState({
    idImovel:"",
    areaTotal: "",
    areaPrivada: "",
    quarto: "",
    garagem: "",
    suite: "",
    banheiro: "",
    valorIptu: "",
    valorCondominio: "",
    valorAluguel: "",
    valorVenda: "",
    descricaoImovel: "",
    idImovel:""
  });

  useEffect(() => {
    const fetchImovel = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/readlistimovel/${id}`,
          {}
        );
        const userData = response.data[0];
        setImovel({
          idimovel:userData.idimovel,
          tipoImovel: userData.tipoImovel,
          finalidadeImovel: userData.finalidadeImovel,
          cepImovel: userData.cepImovel,
          bairro: userData.bairro,
          cidadeNome: userData.cidadeNome,
          estadoNome: userData.estadoNome,
          logradouro: userData.logradouro,
          numero: userData.numero,
          complemento: userData.complemento,
          idUsuario: userData.idUsuario,
        });
        setImovelInformacao({
          areaTotal: userData.areaTotal,
          areaPrivada: userData.areaPrivada,
          quarto: userData.quarto,
          garagem: userData.garagem,
          suite: userData.suite,
          banheiro: userData.banheiro,
          valorIptu: userData.valorIptu,
          valorCondominio: userData.valorCondominio,
          valorAluguel: userData.valorAluguel,
          valorVenda: userData.valorVenda,
          descricaoImovel: userData.descricaoImovel,
          idImovel:userData.idimovel
        });
      } catch (error) {
        console.log(error);
        alert(response.data.message || "Erro ao pesquisar imovel!");
      }
    };

    fetchImovel();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setImovel({ ...imovel, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let objeto = [imovel, imovelInformacao];
     
      const response = await axios.put(`http://localhost:3000/imovel/${id}`, { objeto }, {});
      alert("Imóvel atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao atualizar imóvel.");
    }
     
  };
  const handleCepChange = async (e) => {
    const cep = e.target.value;
    setImovel({ ...imovel, cepImovel: cep });

    if (cep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        const data = response.data;

        if (!data.erro) {
          setImovel({
            ...imovel,
            cepImovel: cep,
            bairro: data.bairro,
            cidadeNome: data.localidade,
            estadoNome: data.uf,
            logradouro: data.logradouro,
          });
        } else {
          alert("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP.");
      }
    }
  };

  const handleChangeInformacao = (e) => {
    const { name, value } = e.target;
    setImovelInformacao({
      ...imovelInformacao,
      [name]: value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" component="h1" align="center">
          Atualizar Imóvel
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {/* Campos de formulário */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="tipo-label">Tipo de Imóvel</InputLabel>
                <Select
                  labelId="tipo-label"
                  name="tipoImovel"
                  value={imovel.tipoImovel}
                  onChange={handleChange}
                  label="Tipo de Imóvel"
                >
                  <MenuItem value="A">Apartamento</MenuItem>
                  <MenuItem value="C">Casa</MenuItem>
                  <MenuItem value="T">Terreno</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="finalidadeImovel-label">
                  finalidadeImovel do Imóvel
                </InputLabel>
                <Select
                  labelId="finalidadeImovel-label"
                  name="finalidadeImovel"
                  value={imovel.finalidadeImovel}
                  onChange={handleChange}
                  label="finalidadeImovel do Imóvel"
                >
                  <MenuItem value="V">Venda</MenuItem>
                  <MenuItem value="A">Aluguel</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="cep"
                label="CEP"
                fullWidth
                value={imovel.cepImovel}
                onChange={handleCepChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="bairro"
                label="Bairro"
                fullWidth
                value={imovel.bairro}
                onChange={handleChange}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="cidadeNome"
                label="cidadeNome"
                fullWidth
                value={imovel.cidadeNome}
                onChange={handleChange}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="estadoNome"
                label="estadoNome"
                fullWidth
                value={imovel.estadoNome}
                onChange={handleChange}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="logradouro"
                label="Logradouro"
                fullWidth
                value={imovel.logradouro}
                onChange={handleChange}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="numero"
                label="Número"
                fullWidth
                value={imovel.numero}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="complemento"
                label="Complemento"
                fullWidth
                value={imovel.complemento}
                onChange={handleChange}
              />
            </Grid>

            {/* Detalhes do Imóvel */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="areaPrivada"
                label="Área Privada (m²)"
                fullWidth
                value={imovelInformacao.areaPrivada}
                onChange={handleChangeInformacao}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="areaTotal"
                label="Área Total (m²)"
                fullWidth
                value={imovelInformacao.areaTotal}
                onChange={handleChangeInformacao}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="quarto"
                label="Quantidade de Dormitórios"
                fullWidth
                value={imovelInformacao.quarto}
                onChange={handleChangeInformacao}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="garagem"
                label="Vagas de Garagem"
                fullWidth
                value={imovelInformacao.garagem}
                onChange={handleChangeInformacao}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="suite"
                label="Quantidade de Suítes"
                fullWidth
                value={imovelInformacao.suite}
                onChange={handleChangeInformacao}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="banheiro"
                label="Quantidade de banheiro"
                fullWidth
                value={imovelInformacao.banheiro}
                onChange={handleChangeInformacao}
              />
            </Grid>

            {/* Custos */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="valorIptu"
                label="valorIptu (R$)"
                fullWidth
                value={imovelInformacao.valorIptu}
                onChange={handleChangeInformacao}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="valorCondominio"
                label="Condomínio (R$)"
                fullWidth
                value={imovelInformacao.valorCondominio}
                onChange={handleChangeInformacao}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="valorAluguel"
                label="Valor de Locação (R$)"
                fullWidth
                value={imovelInformacao.valorAluguel}
                onChange={handleChangeInformacao}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="valorVenda"
                label="Valor de Venda (R$)"
                fullWidth
                value={imovelInformacao.valorVenda}
                onChange={handleChangeInformacao}
              />
            </Grid>

            {/* Descrição */}
            <Grid item xs={12}>
              <TextField
                name="descricaoImovel"
                label="Descrição do Imóvel"
                multiline
                rows={4}
                fullWidth
                value={imovelInformacao.descricaoImovel}
                onChange={handleChangeInformacao}
              />
            </Grid>

            {/* Botão de Envio */}
            <Grid item xs={12}>
              <Box sx={{ mt: 3 }}>
                <Button type="submit" variant="contained" color="primary">
                  Atualizar Imóvel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UpdateImovel;
