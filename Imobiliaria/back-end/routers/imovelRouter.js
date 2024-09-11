// Importa o módulo Router do framework Express
const Router = require("express").Router;
const multer = require('multer');
const upload = multer();

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de imovel
const imovelController = require("../controllers/imovelController");

// Define uma rota GET para listar todas as imovel
// Quando uma solicitação GET é feita para "/imovel", o método readList() do controlador de imovel é chamado
router.get("/imovel", imovelController.readList);

// Define uma rota GET para ler uma imovel específica por ID
// Quando uma solicitação GET é feita para "/imovel/:id", o método read() do controlador de imovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da imovel
router.get("/imovel/:id", imovelController.read);

router.get("/readlistimovel", imovelController.readlistimovel);

router.get("/readlistimovel/:id", imovelController.readlistimovelId);


// Define uma rota POST para criar uma nova imovel
// Quando uma solicitação POST é feita para "/imovel", o método create() do controlador de imovel é chamado
router.post("/imovel",upload.none(), imovelController.create);

// Define uma rota PUT para atualizar uma imovel existente por ID
// Quando uma solicitação PUT é feita para "/imovel/:id", o método update() do controlador de imovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da imovel
router.put("/imovel/:id", imovelController.update);

// Define uma rota DELETE para excluir uma imovel existente por ID
// Quando uma solicitação DELETE é feita para "/imovel/:id", o método delete() do controlador de imovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da imovel
router.delete("/imovel/:id", imovelController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
