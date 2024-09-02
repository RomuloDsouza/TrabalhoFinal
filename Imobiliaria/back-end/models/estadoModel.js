// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às estados no banco de dados
class EstadoModel {

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

  // Método para obter a lista de todas as estados no banco de dados
  readList() {
    const sql = "SELECT Idestado,Nome FROM estado"; // Consulta SQL para selecionar todas as estados
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma estado específica por ID no banco de dados
  read(id) {
    const sql = "SELECT Idestado,Nome FROM estado WHERE Idestado = ?"; // Consulta SQL para selecionar uma estado por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova estado no banco de dados
  create(newestado) {
    const sql = "INSERT INTO estado SET ?"; // Consulta SQL para inserir uma nova 
    return this.executeSQL(sql, newestado); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma estado existente por ID no banco de dados
  update(updatedestado, id) {
    const sql = "UPDATE estado SET ? WHERE Idestado= ?"; // Consulta SQL para atualizar uma estado por ID
    return this.executeSQL(sql, [updatedestado, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma estado existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM estado WHERE Idestado = ?"; // Consulta SQL para excluir uma estado por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe estadoModel para ser utilizada em outros arquivos do projeto
module.exports = new EstadoModel();
