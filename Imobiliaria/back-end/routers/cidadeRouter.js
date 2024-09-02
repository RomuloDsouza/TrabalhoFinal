// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de cidade
const cidadeController = require("../controllers/cidadeController");

// Define uma rota GET para listar todas as cidade
// Quando uma solicitação GET é feita para "/cidade", o método readList() do controlador de cidade é chamado
router.get("/cidade", cidadeController.readList);

// Define uma rota GET para ler uma cidade específica por ID
// Quando uma solicitação GET é feita para "/cidade/:id", o método read() do controlador de cidade é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da cidade
router.get("/cidade/:id", cidadeController.read);

// Define uma rota POST para criar uma nova cidade
// Quando uma solicitação POST é feita para "/cidade", o método create() do controlador de cidade é chamado
router.post("/cidade", cidadeController.create);

// Define uma rota PUT para atualizar uma cidade existente por ID
// Quando uma solicitação PUT é feita para "/cidade/:id", o método update() do controlador de cidade é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da cidade
router.put("/cidade/:id", cidadeController.update);

// Define uma rota DELETE para excluir uma cidade existente por ID
// Quando uma solicitação DELETE é feita para "/cidade/:id", o método delete() do controlador de cidade é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da cidade
router.delete("/cidade/:id", cidadeController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
