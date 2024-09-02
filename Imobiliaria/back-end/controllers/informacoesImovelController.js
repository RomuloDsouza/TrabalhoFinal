// Importa o modelo de  InformacoesImovel para fazer as operações CRUD relacionadas as  InformacoesImovels
const  InformacoesImovelModel = require("../models/informacoesImovelModel");

// Define a classe  InformacoesImovelController, responsável por controlar as operações relacionadas as  InformacoesImovels
class  InformacoesImovelController {
  // Método para ler a lista de todas as  InformacoesImovels
  readList(req, res) {
    // Chama a função readList() do modelo  InformacoesImovelModel para obter a lista de  InformacoesImovels
    const retorno =  InformacoesImovelModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma  InformacoesImovel foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma  InformacoesImovel específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo  InformacoesImovelModel para obter a  InformacoesImovel por ID fornecido
    const retorno =  InformacoesImovelModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send(" InformacoesImovel não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova  InformacoesImovel
  create(req, res) {
    // Obtém os dados da nova  InformacoesImovel do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo  InformacoesImovelModel para criar uma nova  InformacoesImovel
    const retorno =  InformacoesImovelModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send(" InformacoesImovel criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma  InformacoesImovel existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da  InformacoesImovel do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo  InformacoesImovelModel para atualizar a  InformacoesImovel com o ID fornecido
    const retorno =  InformacoesImovelModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send(" InformacoesImovel atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma  InformacoesImovel existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo  InformacoesImovelModel para excluir a  InformacoesImovel com o ID fornecido
    const retorno =  InformacoesImovelModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send(" InformacoesImovel deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe  InformacoesImovelController para ser utilizada em outros arquivos do projeto
module.exports = new  InformacoesImovelController();
