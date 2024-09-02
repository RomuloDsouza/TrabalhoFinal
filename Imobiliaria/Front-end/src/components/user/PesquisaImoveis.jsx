import React, { useState } from 'react';
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
  Slider
} from '@mui/material';

const imoveis = [
  // Exemplo de imóveis para testes
  {
    id: 1,
    codigo: 'LH4015',
    tipo: 'Apartamento',
    quartos: 3,
    cidade: 'São Paulo',
    estado: 'SP',
    bairro: 'Centro',
    preco: 240000,
    imagem: '/imagens/imovel1.jpg',
    finalidade: 'Venda',
  },
  {
    id: 2,
    codigo: 'LH4011',
    tipo: 'Apartamento',
    quartos: 2,
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    bairro: 'Copacabana',
    preco: 340000,
    imagem: '/imagens/imovel2.jpg',
    finalidade: 'Aluguel',
  },
  {
    id: 3,
    codigo: 'LH4007',
    tipo: 'Casa',
    quartos: 4,
    cidade: 'Salvador',
    estado: 'BA',
    bairro: 'Ondina',
    preco: 540000,
    imagem: '/imagens/imovel3.jpg',
    finalidade: 'Venda',
  },
];

const PesquisaImoveis = () => {
  const [tipo, setTipo] = useState('');
  const [quartos, setQuartos] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [finalidade, setFinalidade] = useState('');
  const [preco, setPreco] = useState([100000, 1000000]);

  const handleTipoChange = (event) => setTipo(event.target.value);
  const handleQuartosChange = (event) => setQuartos(event.target.value);
  const handleCidadeChange = (event) => setCidade(event.target.value);
  const handleEstadoChange = (event) => setEstado(event.target.value);
  const handleBairroChange = (event) => setBairro(event.target.value);
  const handleFinalidadeChange = (event) => setFinalidade(event.target.value);
  const handlePrecoChange = (event, newValue) => setPreco(newValue);

  const filtrarImoveis = () => {
    return imoveis.filter(
      (imovel) =>
        (tipo ? imovel.tipo === tipo : true) &&
        (quartos ? imovel.quartos === parseInt(quartos) : true) &&
        (cidade ? imovel.cidade === cidade : true) &&
        (estado ? imovel.estado === estado : true) &&
        (bairro ? imovel.bairro === bairro : true) &&
        (finalidade ? imovel.finalidade === finalidade : true) &&
        imovel.preco >= preco[0] &&
        imovel.preco <= preco[1]
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
            onChange={handleTipoChange}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Apartamento">Apartamento</MenuItem>
            <MenuItem value="Casa">Casa</MenuItem>
            <MenuItem value="Terreno">Terreno</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Quartos"
            value={quartos}
            onChange={handleQuartosChange}
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
            onChange={handleCidadeChange}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="São Paulo">São Paulo</MenuItem>
            <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
            <MenuItem value="Salvador">Salvador</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Estado"
            value={estado}
            onChange={handleEstadoChange}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="SP">SP</MenuItem>
            <MenuItem value="RJ">RJ</MenuItem>
            <MenuItem value="BA">BA</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            select
            label="Bairro"
            value={bairro}
            onChange={handleBairroChange}
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
            value={finalidade}
            onChange={handleFinalidadeChange}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="Venda">Venda</MenuItem>
            <MenuItem value="Aluguel">Aluguel</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography id="range-slider" gutterBottom>
            Preço de Venda
          </Typography>
          <Slider
            value={preco}
            onChange={handlePrecoChange}
            valueLabelDisplay="auto"
            min={100000}
            max={1000000}
            step={10000}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Pesquisar
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filtrarImoveis().map((imovel) => (
          <Grid item xs={12} sm={4} key={imovel.id}>
            <Card>
              <CardMedia
                component="img"
                alt={`Imagem do imóvel ${imovel.codigo}`}
                height="140"
                image={imovel.imagem}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cód: {imovel.codigo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {imovel.tipo} - {imovel.quartos} quartos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {imovel.cidade} - {imovel.estado} - {imovel.bairro}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Finalidade: {imovel.finalidade}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preço: R$ {imovel.preco.toLocaleString('pt-BR')}
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
