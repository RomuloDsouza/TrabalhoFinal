// // Importa o módulo Router do framework Express
// const Router = require("express").Router;

// // Cria uma instância de um roteador do Express
// // O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
// const router = Router();

// // ----------------------------------------------------------------------------------------------
// // Métodos HTTP para fazer as requisições
// // ----------------------------------------------------------------------------------------------


// // Importa o controlador de imagem
// const imagemController = require("../controllers/imagemController");

// // Define uma rota GET para listar todas as imagem
// // Quando uma solicitação GET é feita para "/imagem", o método readList() do controlador de imagem é chamado
// router.get("/imagem", imagemController.readList);

// // Define uma rota GET para ler uma imagem específica por ID
// // Quando uma solicitação GET é feita para "/imagem/:id", o método read() do controlador de imagem é chamado,
// // onde ":id" é um parâmetro na URL que representa o ID da imagem
// router.get("/imagem/:id", imagemController.read);

// // Define uma rota POST para criar uma nova imagem
// // Quando uma solicitação POST é feita para "/imagem", o método create() do controlador de imagem é chamado
// router.post("/imagem", imagemController.create);

// // Define uma rota PUT para atualizar uma imagem existente por ID
// // Quando uma solicitação PUT é feita para "/imagem/:id", o método update() do controlador de imagem é chamado,
// // onde ":id" é um parâmetro na URL que representa o ID da imagem
// router.put("/imagem/:id", imagemController.update);

// // Define uma rota DELETE para excluir uma imagem existente por ID
// // Quando uma solicitação DELETE é feita para "/imagem/:id", o método delete() do controlador de imagem é chamado,
// // onde ":id" é um parâmetro na URL que representa o ID da imagem
// router.delete("/imagem/:id", imagemController.delete);

// // Exporta o objeto router (roteador)
// // O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
// module.exports = router;






const express = require('express');
const router = express.Router();
const imagemController = require('../controllers/imagemController');

// Rotas para as operações CRUD existentes
router.get('/imagem', imagemController.readList.bind(imagemController));
router.get('/imagem/:id', imagemController.read.bind(imagemController));
//router.post('/imagem', imagemController.create.bind(imagemController));
router.put('/imagem/:id', imagemController.update.bind(imagemController));
router.delete('/imagem/:id', imagemController.delete.bind(imagemController));

// Rota para upload de imagem
// router.post('/upload', imagemController.uploadImage.bind(imagemController));

module.exports = router;
