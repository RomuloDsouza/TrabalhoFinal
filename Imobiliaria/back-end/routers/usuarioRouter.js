// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de usuario
const usuarioController = require("../controllers/usuarioController");

// Define uma rota GET para listar todas as usuario
// Quando uma solicitação GET é feita para "/usuario", o método readList() do controlador de usuario é chamado
router.get("/usuario", usuarioController.readList);

// Define uma rota GET para ler uma usuario específica por ID
// Quando uma solicitação GET é feita para "/usuario/:id", o método read() do controlador de usuario é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da usuario
router.get("/usuario/:id", usuarioController.read);

// Define uma rota POST para criar uma nova usuario
// Quando uma solicitação POST é feita para "/usuario", o método create() do controlador de usuario é chamado
router.post("/usuario", usuarioController.create);

router.post("/login", usuarioController.login);    

// Define uma rota PUT para atualizar uma usuario existente por ID
// Quando uma solicitação PUT é feita para "/usuario/:id", o método update() do controlador de usuario é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da usuario
router.put("/usuario/:id", usuarioController.update);

// Define uma rota DELETE para excluir uma usuario existente por ID
// Quando uma solicitação DELETE é feita para "/usuario/:id", o método delete() do controlador de usuario é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da usuario
router.delete("/usuario/:id", usuarioController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
