// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às cidades no banco de dados
class CidadeModel {

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

  //Método para obter a lista de todas as cidades no banco de dados
  // readList() {
  //   const sql = "SELECT cidade.idCidade, cidade.nome AS cidadeNome, cidade.nome AS cidadeNome FROM cidade JOIN cidade ON cidade.idcidade = cidade.idcidade;"; // Consulta SQL para selecionar todas as cidades
  //   return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }

  readList() {
    const sql = `
      SELECT 
        cidade.idCidade, 
        cidade.nome AS cidadeNome, 
        estado.nome AS estadoNome
      FROM 
        cidade
      JOIN 
        estado 
      ON 
        cidade.idEstado = estado.idestado;
    `;
    
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }
  
  


  // Método para obter uma cidade específica por ID no banco de dados
  read(id) {
    const sql = "SELECT Idcidade,Nome FROM cidade WHERE Idcidade = ?"; // Consulta SQL para selecionar uma cidade por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova cidade no banco de dados
  create(newcidade) {
    const sql = "INSERT INTO cidade SET ?"; // Consulta SQL para inserir uma nova 
    return this.executeSQL(sql, newcidade); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma cidade existente por ID no banco de dados
  update(updatedcidade, id) {
    const sql = "UPDATE cidade SET ? WHERE Idcidade= ?"; // Consulta SQL para atualizar uma cidade por ID
    return this.executeSQL(sql, [updatedcidade, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma cidade existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM cidade WHERE Idcidade = ?"; // Consulta SQL para excluir uma cidade por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe cidadeModel para ser utilizada em outros arquivos do projeto
module.exports = new CidadeModel();
