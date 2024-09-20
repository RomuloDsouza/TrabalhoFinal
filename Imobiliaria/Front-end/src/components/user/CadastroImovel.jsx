
import React, { useState } from "react";
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
} from "@mui/material";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function CadastroImovel() {
  const [imovel, setImovel] = useState({
    tipoImovel: "",
    finalidadeImovel: "",
    cepImovel: "",
    bairro: "",
    cidadeNome: "",
    estadoNome: "",
    logradouro: "",
    numero: "",
    complemento: "",
    idUsuario: 1,
  });

  const [imovelInformacao, setImovelInformacao] = useState({
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
  });

  const [fotos, setFotos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImovel({
      ...imovel,
      [name]: value,
    });
  };

  const handleChangeInformacao = (e) => {
    const { name, value } = e.target;
    setImovelInformacao({
      ...imovelInformacao,
      [name]: value,
    });
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

  const handleFotoChange = (e) => {
    const files = Array.from(e.target.files);
    setFotos((prevFotos) => [...prevFotos, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Adiciona os dados do imóvel
    for (const key in imovel) {
      formData.append(key, imovel[key]);
    }

    // Adiciona as informações detalhadas do imóvel
    for (const key in imovelInformacao) {
      formData.append(key, imovelInformacao[key]);
    }

    // Adiciona as fotos
    fotos.forEach((foto, index) => {
      formData.append(`foto${index + 1}`, foto);
    });

    // const formData2 = new FormData();
    // formData.append('file', fotos);
    // try {
    //   const res = await axios.post('http://localhost:3000/upload', formData2, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   console.log(res.data.message);
    // } catch (err) {
    //   console.log('Erro no upload!');
    // }


    let objeto = [imovel, imovelInformacao,fotos];
    console.log(objeto);
    try {
      const response = await axios.post(
        "http://localhost:3000/imovel",
        objeto,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message || "Imóvel cadastrado com sucesso!");

      // Resetar o formulário após o sucesso
      setImovel({
        tipoImovel: "",
        finalidadeImovel: "",
        cepImovel: "",
        bairro: "",
        cidadeNome: "",
        estadoNome: "",
        logradouro: "",
        numero: "",
        complemento: "",
        idUsuario: 1,
      });
      setImovelInformacao({
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
      });
      setFotos([]);
    } catch (error) {
      console.error("Erro ao cadastrar imóvel:", error);
      alert("Erro ao cadastrar imóvel.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" component="h1" align="center">
          Descreva o imóvel que deseja anunciar
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
                  FinalidadeImovel do Imóvel
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

            {/* Upload de Fotos e Anexos */}
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload Fotos
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={handleFotoChange}
                />
              </Button>
            </Grid>

            {/* Exibição de Miniaturas */}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {fotos.map((foto, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(foto)}
                    alt={`Foto ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
            </Grid>

            {/* Botão de Envio */}
            <Grid item xs={12}>
              <Box sx={{ mt: 3 }}>
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar Imóvel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CadastroImovel;
