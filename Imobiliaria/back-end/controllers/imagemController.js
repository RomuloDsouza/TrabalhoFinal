// Importa o modelo de imagem para fazer as operações CRUD relacionadas as imagems
const imagemModel = require("../models/imagemModel");

// Define a classe imagemController, responsável por controlar as operações relacionadas as imagems
class ImagemController {
  // Método para ler a lista de todas as imagems
  readList(req, res) {
    // Chama a função readList() do modelo imagemModel para obter a lista de imagems
    const retorno = imagemModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma imagem foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma imagem específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo imagemModel para obter a imagem por ID fornecido
    const retorno = imagemModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("imagem não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova imagem
  create(req, res) {
    // Obtém os dados da nova imagem do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo imagemModel para criar uma nova imagem
    const retorno = imagemModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("imagem criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma imagem existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da imagem do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo imagemModel para atualizar a imagem com o ID fornecido
    const retorno = imagemModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("imagem atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma imagem existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo imagemModel para excluir a imagem com o ID fornecido
    const retorno = imagemModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("imagem deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe imagemController para ser utilizada em outros arquivos do projeto
module.exports = new ImagemController();
