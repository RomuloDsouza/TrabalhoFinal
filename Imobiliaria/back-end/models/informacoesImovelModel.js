// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às  InformacoesImovels no banco de dados
class InformacoesImovelModel {
  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parametros = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise(function (resolve, reject) {
      // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
      dbConnection.query(sql, parametros, function (error, resposta) {
        // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
        if (error) {
          return reject(error);
        }
        // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
        return resolve(resposta);
      });
    });
  }

  // Método para obter a lista de todas as  InformacoesImovels no banco de dados
  readList() {
    const sql =
      "SELECT IdInfoImovel, areaTotal, areaPrivada, quarto, banheiro, garagem, suite, valorVenda, valorAluguel, valorIptu, valorCondominio, descricaoImovel, idImovel FROM InformacoesImovel"; // Consulta SQL para selecionar todos os campos da tabela InformacoesImovel
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma InformacoesImovel específica por ID no banco de dados
  read(id) {
    const sql =
      "SELECT IdInfoImovel, areaTotal, areaPrivada, quarto, banheiro, garagem, suite, valorVenda, valorAluguel, valorIptu, valorCondominio, descricaoImovel, idImovel FROM InformacoesImovel WHERE IdInfoImovel = ?"; // Consulta SQL para selecionar uma InformacoesImovel por ID
    return this.executeSQL(sql, [id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova InformacoesImovel no banco de dados
  create(newInformacoesImovel) {
    const sql = "INSERT INTO InformacoesImovel SET ?"; // Consulta SQL para inserir uma nova InformacoesImovel
    return this.executeSQL(sql, newInformacoesImovel); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma InformacoesImovel existente por ID no banco de dados
  update(updatedInformacoesImovel, id) {
    const sql = "UPDATE InformacoesImovel SET ? WHERE IdInfoImovel = ?"; // Consulta SQL para atualizar uma InformacoesImovel por ID
    return this.executeSQL(sql, [updatedInformacoesImovel, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  /// Método para excluir uma InformacoesImovel existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM InformacoesImovel WHERE IdInfoImovel = ?"; // Consulta SQL para excluir uma InformacoesImovel por ID
    return this.executeSQL(sql, [id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }
}

// Exporta uma instância da classe  InformacoesImovelModel para ser utilizada em outros arquivos do projeto
module.exports = new InformacoesImovelModel();
