// // Importa o modelo de imagem para fazer as operações CRUD relacionadas as imagems
// const imagemModel = require("../models/imagemModel");
// const multer = require("multer");
// // Define a classe imagemController, responsável por controlar as operações relacionadas as imagems
// class ImagemController {
 
//   // Método para ler a lista de todas as imagems
//   readList(req, res) {
//     // Chama a função readList() do modelo imagemModel para obter a lista de imagems
//     const retorno = imagemModel.readList();
//     return retorno
//       .then((result) =>
//         result.length == 0
//           ? res.status(404).send("Nenhuma imagem foi encontrada!")
//           : res.status(200).json(result)
//       )
//       .catch((error) => res.status(400).json(error.message));
//   }

//   // Método para ler uma imagem específica por ID
//   read(req, res) {
//     // Obtém o parâmetro ID da requisição
//     const { id } = req.params;
//     // Chama a função read() do modelo imagemModel para obter a imagem por ID fornecido
//     const retorno = imagemModel.read(id);
//     return retorno
//       .then((result) =>
//         result.length == 0
//           ? res.status(404).send("imagem não encontrada!")
//           : res.status(200).json(result)
//       )
//       .catch((error) => res.status(400).json(error.message));
//   }

//   // Método para criar uma nova imagem
//   create(req, res) {
//     // Obtém os dados da nova imagem do corpo da requisição
//     const reqBody = req.body;
//     // Chama a função create() do modelo imagemModel para criar uma nova imagem
//     const retorno = imagemModel.create(reqBody);
//     return retorno
//       .then((result) => res.status(201).send("imagem criada com sucesso!"))
//       .catch((error) => res.status(400).json(error.message));
//   }

//   // Método para atualizar uma imagem existente por ID
//   update(req, res) {
//     // Obtém o parâmetro ID da requisição
//     const { id } = req.params;
//     // Obtém os dados atualizados da imagem do corpo da requisição
//     const reqBody = req.body;

//     // Chama a função update() do modelo imagemModel para atualizar a imagem com o ID fornecido
//     const retorno = imagemModel.update(reqBody, id);
//     return retorno
//       .then((result) => res.status(200).send("imagem atualizada com sucesso!"))
//       .catch((error) => res.status(400).json(error.message));
//   }

//   // Método para excluir uma imagem existente por ID
//   delete(req, res) {
//     // Obtém o parâmetro ID da requisição
//     const { id } = req.params;
//     // Chama a função delete() do modelo imagemModel para excluir a imagem com o ID fornecido
//     const retorno = imagemModel.delete(id);
//     return retorno
//       .then((result) => res.status(200).send("imagem deletada com sucesso!"))
//       .catch((error) => res.status(400).json(error.message));
//   }
// }

// // Exporta uma instância da classe imagemController para ser utilizada em outros arquivos do projeto
// module.exports = new ImagemController();









const imagemModel = require("../models/imagemModel");
const multer = require("multer");
const path = require('path');
const fs = require('fs');

// Define o armazenamento do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Cria o diretório 'uploads' se não existir
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Define a classe imagemController
class ImagemController {
  
  // Método para ler a lista de todas as imagens
  readList(req, res) {
    const retorno = imagemModel.readList();
    return retorno
      .then((result) =>
        result.length == 0
          ? res.status(404).send("Nenhuma imagem foi encontrada!")
          : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma imagem específica por ID
  read(req, res) {
    const { id } = req.params;
    const retorno = imagemModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0
          ? res.status(404).send("Imagem não encontrada!")
          : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova imagem
  create(req, res) {
    const reqBody = req.body;
    const retorno = imagemModel.create(reqBody);
    return retorno
      .then((result) => res.status(201).send("Imagem criada com sucesso!"))
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma imagem existente por ID
  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;

    const retorno = imagemModel.update(reqBody, id);
    return retorno
      .then((result) => res.status(200).send("Imagem atualizada com sucesso!"))
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para excluir uma imagem existente por ID
  delete(req, res) {
    const { id } = req.params;
    const retorno = imagemModel.delete(id);
    return retorno
      .then((result) => res.status(200).send("Imagem deletada com sucesso!"))
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para fazer o upload de uma imagem
  uploadImage(req, res) {
    const uploadSingle = upload.single('file');
    uploadSingle(req, res, (err) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      // Aqui você pode adicionar lógica para salvar informações sobre o arquivo no banco de dados, se necessário
      res.send({ message: 'Upload realizado com sucesso!', file: req.file });
    });
  }
}

// Exporta uma instância da classe imagemController
module.exports = new ImagemController();
