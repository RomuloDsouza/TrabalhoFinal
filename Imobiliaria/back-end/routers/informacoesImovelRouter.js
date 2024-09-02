// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de  InformacoesImovel
const  InformacoesImovelController = require("../controllers/informacoesImovelController");

// Define uma rota GET para listar todas as  InformacoesImovel
// Quando uma solicitação GET é feita para "/ InformacoesImovel", o método readList() do controlador de  InformacoesImovel é chamado
router.get("/InformacoesImovel",  InformacoesImovelController.readList);

// Define uma rota GET para ler uma  InformacoesImovel específica por ID
// Quando uma solicitação GET é feita para "/ InformacoesImovel/:id", o método read() do controlador de  InformacoesImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da  InformacoesImovel
router.get("/InformacoesImovel/:id",  InformacoesImovelController.read);

// Define uma rota POST para criar uma nova  InformacoesImovel
// Quando uma solicitação POST é feita para "/ InformacoesImovel", o método create() do controlador de  InformacoesImovel é chamado
router.post("/InformacoesImovel",  InformacoesImovelController.create);

// Define uma rota PUT para atualizar uma  InformacoesImovel existente por ID
// Quando uma solicitação PUT é feita para "/ InformacoesImovel/:id", o método update() do controlador de  InformacoesImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da  InformacoesImovel
router.put("/InformacoesImovel/:id",  InformacoesImovelController.update);

// Define uma rota DELETE para excluir uma  InformacoesImovel existente por ID
// Quando uma solicitação DELETE é feita para "/ InformacoesImovel/:id", o método delete() do controlador de  InformacoesImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da  InformacoesImovel
router.delete("/InformacoesImovel/:id",  InformacoesImovelController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
