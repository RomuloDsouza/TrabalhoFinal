// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de estado
const estadoController = require("../controllers/estadoController");

// Define uma rota GET para listar todas as estado
// Quando uma solicitação GET é feita para "/estado", o método readList() do controlador de estado é chamado
router.get("/estado", estadoController.readList);

// Define uma rota GET para ler uma estado específica por ID
// Quando uma solicitação GET é feita para "/estado/:id", o método read() do controlador de estado é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da estado
router.get("/estado/:id", estadoController.read);

// Define uma rota POST para criar uma nova estado
// Quando uma solicitação POST é feita para "/estado", o método create() do controlador de estado é chamado
router.post("/estado", estadoController.create);

// Define uma rota PUT para atualizar uma estado existente por ID
// Quando uma solicitação PUT é feita para "/estado/:id", o método update() do controlador de estado é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da estado
router.put("/estado/:id", estadoController.update);

// Define uma rota DELETE para excluir uma estado existente por ID
// Quando uma solicitação DELETE é feita para "/estado/:id", o método delete() do controlador de estado é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da estado
router.delete("/estado/:id", estadoController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
