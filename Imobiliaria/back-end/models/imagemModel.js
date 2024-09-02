// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às imagems no banco de dados
class ImagemModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parametros = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise( function (resolve, reject) {
        
        // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
        dbConnection.query(sql, parametros, function (error, resposta) {
          // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
          if (error) {
            return reject(error);
          }
          // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
          return resolve(resposta);
        });

      }
    );
  }

  // Método para obter a lista de todas as imagems no banco de dados
  // readList() {
  //   const sql = "SELECT Idimagem,Nome FROM imagem"; // Consulta SQL para selecionar todas as imagems
  //   return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }

  readList() {
    const sql = `
        SELECT 
            idImagem, 
            idImovel, 
            caminho_imagem, 
            statusImagem 
        FROM imagem
    `; // Consulta SQL para selecionar todas as imagens
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}


  // // Método para obter uma imagem específica por ID no banco de dados
  // read(id) {
  //   const sql = "SELECT Idimagem,Nome FROM imagem WHERE Idimagem = ?"; // Consulta SQL para selecionar uma imagem por ID
  //   return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }

  // Método para obter uma imagem específica por ID no banco de dados
read(id) {
  const sql = `
      SELECT 
          idImagem, 
          idImovel, 
          caminho_imagem, 
          statusImagem 
      FROM imagem 
      WHERE idImagem = ?
  `; // Consulta SQL para selecionar uma imagem por ID
  return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}


  // Método para criar uma nova imagem no banco de dados
  // create(newimagem) {
  //   const sql = "INSERT INTO imagem SET ?"; // Consulta SQL para inserir uma nova 
  //   return this.executeSQL(sql, newimagem); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }

  // Método para criar uma nova imagem no banco de dados
create(newimagem) {
  const sql = "INSERT INTO imagem SET ?"; // Consulta SQL para inserir uma nova 
  return this.executeSQL(sql, newimagem); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}


  // Método para atualizar uma imagem existente por ID no banco de dados
  // update(updatedimagem, id) {
  //   const sql = "UPDATE imagem SET ? WHERE Idimagem= ?"; // Consulta SQL para atualizar uma imagem por ID
  //   return this.executeSQL(sql, [updatedimagem, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }

  // Método para atualizar uma imagem existente por ID no banco de dados
update(updatedimagem, id) {
  const sql = "UPDATE imagem SET ? WHERE idImagem = ?"; // Consulta SQL para atualizar uma imagem por ID
  return this.executeSQL(sql, [updatedimagem, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}


  // Método para excluir uma imagem existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM imagem WHERE Idimagem = ?"; // Consulta SQL para excluir uma imagem por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe imagemModel para ser utilizada em outros arquivos do projeto
module.exports = new ImagemModel();
