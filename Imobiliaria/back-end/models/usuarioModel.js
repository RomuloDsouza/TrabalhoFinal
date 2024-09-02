// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às usuarios no banco de dados
class UsuarioModel {

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

  // Método para obter a lista de todas as usuarios no banco de dados
  readList() {
    const sql = "SELECT Idusuario,Nomeusuario, email, senha FROM usuario"; // Consulta SQL para selecionar todas as usuarios
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma usuario específica por ID no banco de dados
  read(id) {
    const sql = "SELECT Idusuario,Nomeusuario, email, senha FROM usuario WHERE Idusuario = ?"; // Consulta SQL para selecionar uma usuario por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova usuario no banco de dados
  create(newusuario) {
    const sql = "INSERT INTO usuario SET ?"; // Consulta SQL para inserir uma nova 
    return this.executeSQL(sql, newusuario); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma usuario existente por ID no banco de dados
  update(updatedusuario, id) {
    const sql = "UPDATE usuario SET ? WHERE Idusuario= ?"; // Consulta SQL para atualizar uma usuario por ID
    return this.executeSQL(sql, [updatedusuario, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma usuario existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM usuario WHERE Idusuario = ?"; // Consulta SQL para excluir uma usuario por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe usuarioModel para ser utilizada em outros arquivos do projeto
module.exports = new UsuarioModel();
