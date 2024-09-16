// Importa o modelo de imovel para fazer as operações CRUD relacionadas as imovels
const imovelModel = require("../models/imovelModel");
const imovelInformacao=require("../models/informacoesImovelModel")
const imagem=require("../models/imagemModel")

// Define a classe imovelController, responsável por controlar as operações relacionadas as imovels
class ImovelController {
  // Método para ler a lista de todas as imovels
  readList(req, res) {
    // Chama a função readList() do modelo imovelModel para obter a lista de imovels
    const retorno = imovelModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma imovel foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  readlistimovel(req, res) {
    // Chama a função readList() do modelo imovelModel para obter a lista de imovels
    const retorno = imovelModel.readlistimovel();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma imovel foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  readlistimovelId(req, res) {
    const { id } = req.params;
    // Chama a função read() do modelo imovelModel para obter a imovel por ID fornecido
    const retorno = imovelModel.readlistimovelId(id);
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma imovel foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }


  // Método para ler uma imovel específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo imovelModel para obter a imovel por ID fornecido
    const retorno = imovelModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("imovel não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova imovel
  async create (req, res) {
    // Obtém os dados da nova imovel do corpo da requisição
    const reqBody = req.body; 
    console.log(reqBody);
    

    try{
      const retorno = await imovelModel.create(reqBody[0]);
      const idimovel = retorno.insertId;
      reqBody[1].idimovel = idimovel;
      const retorno2 = await imovelInformacao.create(reqBody[1]);
      return res.status(201).json(retorno);
    }catch (error) {
      res.status(400).json({ error: error.message });
    }




  }

  // Método para atualizar uma imovel existente por ID
 async update (req, res)  {
    // Obtém o parâmetro ID da requisição
    const reqBody = req.body; 

    const { id } = req.params;
    try{
      const retorno = await imovelModel.update(reqBody.objeto[0],id);
    
      const retorno2 = await imovelInformacao.update(reqBody.objeto[1],id);
      return res.status(201).json(retorno);
    }catch (error) {
      res.status(400).json({ error: error.message });
    }

  }

  // Método para excluir uma imovel existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo imovelModel para excluir a imovel com o ID fornecido
    const retorno = imovelModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("imovel deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe imovelController para ser utilizada em outros arquivos do projeto
module.exports = new ImovelController();
