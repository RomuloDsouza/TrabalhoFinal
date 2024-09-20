

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
// import axios from "axios";

// const ImovelDetalhes = () => {
//   const { id } = useParams(); // Obtém o ID do imóvel da URL
//   const [imovel, setImovel] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImovel = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/readlistimovel/${id}`);
//         if (response.data && response.data.length > 0) {
//           setImovel(response.data[0]); // A resposta parece ser um array, então pegamos o primeiro item
//           setError(null);
//         } else {
//           setImovel(null);
//           setError("Imóvel não encontrado.");
//         }
//       } catch (error) {
//         console.error(error);
//         setImovel(null);
//         setError("Erro ao carregar os detalhes do imóvel.");
//       }
//     };

//     fetchImovel();
//   }, [id]);

//   if (error) return <Typography color="error">{error}</Typography>;
//   if (!imovel) return <Typography>Carregando...</Typography>;

//   return (
//     <Container>
//       <Card>
//         <CardMedia
//           component="img"
//           alt={`Imagem do imóvel ${imovel.idimovel}`}
//           height="300"
//           image={imovel.imagem || "caminho/para/imagem/padrao.jpg"} // Substitua por uma URL válida ou imagem padrão
//         />
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Cód: {imovel.idimovel}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Tipo: {imovel.tipoImovel === "A" ? "Apartamento" : imovel.tipoImovel === "C" ? "Casa" : "Terreno"}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {imovel.quarto} quartos
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {imovel.bairro} - {imovel.cidadeNome}/{imovel.estadoNome}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Finalidade: {imovel.finalidadeImovel === "V" ? "Venda" : "Aluguel"}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Preço: {imovel.finalidadeImovel === "A" && imovel.valorAluguel 
//               ? `R$ ${imovel.valorAluguel.toLocaleString("pt-BR")}/mês` 
//               : imovel.finalidadeImovel === "V" && imovel.valorVenda 
//               ? `R$ ${imovel.valorVenda.toLocaleString("pt-BR")}` 
//               : "Valor indisponível"}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Descrição: {imovel.descricaoImovel}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default ImovelDetalhes;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import axios from "axios";

const ImovelDetalhes = () => {
  const { id } = useParams(); // Obtém o ID do imóvel da URL
  const [imovel, setImovel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("ID do imóvel:", id); // Verifica o valor de id

    if (!id) {
      setError("ID do imóvel não está disponível.");
      return;
    }

    const fetchImovel = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/readlistimovel/${id}`);
        if (response.data && response.data.length > 0) {
          setImovel(response.data[0]); // A resposta parece ser um array, então pegamos o primeiro item
          setError(null);
        } else {
          setImovel(null);
          setError("Imóvel não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao carregar os detalhes do imóvel:", error);
        setImovel(null);
        setError("Erro ao carregar os detalhes do imóvel.");
      }
    };

    fetchImovel();
  }, [id]);

  const handleWhatsAppClick = () => {
    const message = `Olá! Estou interessado no imóvel de numero ${imovel.idimovel}. Gostaria de mais informações sobre ele. Agradeço desde já!`;
    

    const phoneNumber = "3291338698";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };
  

  const handleEmailClick = () => {
    const subject = `Interesse no Imóvel Código ${imovel.idimovel}`;
    const body = `Olá,\n\nEstou interessado no imóvel de numero ${imovel.idimovel}. Gostaria de obter mais informações sobre ele. Agradeço se puderem me enviar os detalhes.\n\nAtenciosamente,\n[Seu Nome]`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };
  

  if (error) return <Typography color="error">{error}</Typography>;
  if (!imovel) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={`Imagem do imóvel ${imovel.idimovel}`}
          height="500"
          image={imovel.imagem || "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} // Substitua por uma URL válida ou imagem padrão
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Cód: {imovel.idimovel}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tipo: {imovel.tipoImovel === "A" ? "Apartamento" : imovel.tipoImovel === "C" ? "Casa" : "Terreno"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {imovel.quarto} quartos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {imovel.bairro} - {imovel.cidadeNome}/{imovel.estadoNome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Finalidade: {imovel.finalidadeImovel === "V" ? "Venda" : "Aluguel"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Preço: {imovel.finalidadeImovel === "A" && imovel.valorAluguel 
              ? `R$ ${imovel.valorAluguel.toLocaleString("pt-BR")}/mês` 
              : imovel.finalidadeImovel === "V" && imovel.valorVenda 
              ? `R$ ${imovel.valorVenda.toLocaleString("pt-BR")}` 
              : "Valor indisponível"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descrição: {imovel.descricaoImovel}
          </Typography>
          {/* Botões para envio por e-mail e WhatsApp */}
          <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
              Faça sua oferta para este imovel clicando em um dos botoes abaixo
            </Typography>
            <div style={{ marginTop: 10 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleWhatsAppClick}
                style={{ marginRight: 10 }}
              >
                Enviar por WhatsApp
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleEmailClick}
              >
                Enviar por E-mail
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ImovelDetalhes;
