// Importa o modelo de usuario para fazer as operações CRUD relacionadas as usuarios
const usuarioModel = require("../models/usuarioModel");

// Define a classe usuarioController, responsável por controlar as operações relacionadas as usuarios
class UsuarioController {
  // Método para ler a lista de todas as usuarios
  readList(req, res) {
    // Chama a função readList() do modelo usuarioModel para obter a lista de usuarios
    const retorno = usuarioModel.readList();
    return retorno
      .then((result) =>
        result.length == 0
          ? res.status(404).send("Nenhuma usuario foi encontrada!")
          : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma usuario específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo usuarioModel para obter a usuario por ID fornecido
    const retorno = usuarioModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0
          ? res.status(404).send("usuario não encontrada!")
          : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova usuario
  create(req, res) {
    // Obtém os dados da nova usuario do corpo da requisição
    const reqBody = req.body;
    // Chama a função create() do modelo usuarioModel para criar uma nova usuario
    const retorno = usuarioModel.create(reqBody);
    return retorno
      .then((result) => res.status(201).send("usuario criada com sucesso!"))
      .catch((error) => res.status(400).json(error.message));
  }

  
  async login(req, res) {
    let email = req.body.email;
    let senha = req.body.senha;
    console.log(email,senha)
    try {
      const user = await usuarioModel.findByEmail(email);
      if (!user[0]) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      if (senha == user[0].senha) {
        return res.status(200).json({ nome: user[0].nome });
      }else{ 
        return res.status(401).json({ message: "Credencial invalida" });

      }
    } catch (error) {
      res.status(500).json({ message: "Erro no servidor" });
    }
  }

  // Método para atualizar uma usuario existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da usuario do corpo da requisição
    const reqBody = req.body;

    // Chama a função update() do modelo usuarioModel para atualizar a usuario com o ID fornecido
    const retorno = usuarioModel.update(reqBody, id);
    return retorno
      .then((result) => res.status(200).send("usuario atualizada com sucesso!"))
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para excluir uma usuario existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo usuarioModel para excluir a usuario com o ID fornecido
    const retorno = usuarioModel.delete(id);
    return retorno
      .then((result) => res.status(200).send("usuario deletada com sucesso!"))
      .catch((error) => res.status(400).json(error.message));
  }
}

// Exporta uma instância da classe usuarioController para ser utilizada em outros arquivos do projeto
module.exports = new UsuarioController();
