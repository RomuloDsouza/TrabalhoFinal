// Importa o modelo de estado para fazer as operações CRUD relacionadas as estados
const estadoModel = require("../models/estadoModel");

// Define a classe estadoController, responsável por controlar as operações relacionadas as estados
class EstadoController {
  // Método para ler a lista de todas as estados
  readList(req, res) {
    // Chama a função readList() do modelo estadoModel para obter a lista de estados
    const retorno = estadoModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma estado foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma estado específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo estadoModel para obter a estado por ID fornecido
    const retorno = estadoModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("estado não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova estado
  create(req, res) {
    // Obtém os dados da nova estado do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo estadoModel para criar uma nova estado
    const retorno = estadoModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("estado criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma estado existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da estado do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo estadoModel para atualizar a estado com o ID fornecido
    const retorno = estadoModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("estado atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma estado existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo estadoModel para excluir a estado com o ID fornecido
    const retorno = estadoModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("estado deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe estadoController para ser utilizada em outros arquivos do projeto
module.exports = new EstadoController();
