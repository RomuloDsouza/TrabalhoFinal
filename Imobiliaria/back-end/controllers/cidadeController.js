// Importa o modelo de cidade para fazer as operações CRUD relacionadas as cidades
const cidadeModel = require("../models/cidadeModel");

// Define a classe cidadeController, responsável por controlar as operações relacionadas as cidades
class CidadeController {
  // Método para ler a lista de todas as cidades
  readList(req, res) {
    // Chama a função readList() do modelo cidadeModel para obter a lista de cidades
    const retorno = cidadeModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma cidade foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma cidade específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo cidadeModel para obter a cidade por ID fornecido
    const retorno = cidadeModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("cidade não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova cidade
  create(req, res) {
    // Obtém os dados da nova cidade do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo cidadeModel para criar uma nova cidade
    const retorno = cidadeModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("cidade criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma cidade existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da cidade do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo cidadeModel para atualizar a cidade com o ID fornecido
    const retorno = cidadeModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("cidade atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma cidade existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo cidadeModel para excluir a cidade com o ID fornecido
    const retorno = cidadeModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("cidade deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe cidadeController para ser utilizada em outros arquivos do projeto
module.exports = new CidadeController();
