// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");
// const { search } = require("../routers/imovelRouter");

// Define a classe jobModel para manipular operações relacionadas às imovels no banco de dados
class ImovelModel {
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

  // Método para obter a lista de todas as imovels no banco de dados

  // readList() {
  //   const sql = `
  //   SELECT 
  //     imovel.idimovel, 
  //       imovel.cepImovel, 
  //       imovel.logradouro, 
  //       imovel.bairro, 
  //       imovel.numero, 
  //       imovel.complemento, 
  //       imovel.tipoImovel, 
  //       imovel.finalidadeImovel, 
  //       imovel.valor, 
  //       cidade.nome AS cidadeNome, 
  //       usuario.email AS usuarioEmail,
  //       imovel.Cidade,
  //       imovel.Usuario
    
  
  // `;

  //   return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }


  readList() {
    const sql = `
    SELECT 
      imovel.idimovel, 
      imovel.cepImovel, 
      imovel.logradouro, 
      imovel.bairro, 
      imovel.numero, 
      imovel.complemento, 
      imovel.tipoImovel, 
      imovel.finalidadeImovel, 
      imovel.valor, 
      imovel.cidadeNome AS cidadeNome, 
      imovel.estadoNome AS estadoNome,
      imovel.idUsuario AS idUsuario
    FROM 
      imovel
    `;
    
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}



  // // Método para obter uma imovel específica por ID no banco de dados

  // read(id) {
  //   const sql = `
  //     SELECT 
  //       imovel.idimovel, 
  //       imovel.cepImovel, 
  //       imovel.logradouro, 
  //       imovel.bairro, 
  //       imovel.numero, 
  //       imovel.complemento, 
  //       imovel.tipoImovel, 
  //       imovel.finalidadeImovel, 
  //       imovel.valor, 
  //       cidade.nome AS cidadeNome, 
  //       usuario.email AS usuarioEmail,
  //       imovel.idCidade,
  //       imovel.idUsuario

  //     FROM 
  //       imovel
  //     JOIN 
  //       cidade ON imovel.idCidade = cidade.idCidade
  //     JOIN 
  //       usuario ON imovel.idUsuario = usuario.idusuario
  //     WHERE 
  //       imovel.idimovel = ?;
  //   `;

  //   return this.executeSQL(sql, [id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  // }


  read(id) {
    const sql = `
      SELECT 
        imovel.idimovel, 
        imovel.cepImovel, 
        imovel.logradouro, 
        imovel.bairro, 
        imovel.numero, 
        imovel.complemento, 
        imovel.tipoImovel, 
        imovel.finalidadeImovel, 
        imovel.valor, 
        imovel.cidadeNome, 
        imovel.estadoNome, 
        imovel.idUsuario
      FROM 
        imovel
      JOIN 
        usuario ON imovel.idUsuario = usuario.idusuario
      WHERE 
        imovel.idimovel = ?;
    `;

    return this.executeSQL(sql, [id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}


  // Método para criar uma nova imovel no banco de dados
  create(newimovel) {
    const sql = "INSERT INTO imovel SET ? "; // Consulta SQL para inserir uma nova
    return this.executeSQL(sql, newimovel); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma imovel existente por ID no banco de dados
  update(updatedimovel, id) {
    const sql = "UPDATE imovel SET ? WHERE Idimovel= ?"; // Consulta SQL para atualizar uma imovel por ID
    return this.executeSQL(sql, [updatedimovel, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma imovel existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM imovel WHERE Idimovel = ?"; // Consulta SQL para excluir uma imovel por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  search(parametro) {
    const sql = `
      SELECT 
        imovel.idimovel, 
        imovel.cepImovel, 
        imovel.logradouro, 
        imovel.bairro, 
        imovel.complemento, 
        imovel.tipoImovel, 
        imovel.finalidadeImovel, 
        imovel.valor, 
        cidade.nome AS cidadeNome,
        estado.nome AS estadoNome
      FROM 
        imovel
      JOIN 
        cidade ON imovel.idCidade = cidade.idCidade
      JOIN
        estado ON cidade.idEstado = estado.idEstado
      WHERE 
        imovel.idimovel = ? 
        OR imovel.cepImovel LIKE ? 
        OR imovel.logradouro LIKE ? 
        OR imovel.bairro LIKE ? 
        OR imovel.complemento LIKE ? 
        OR imovel.tipoImovel LIKE ? 
        OR imovel.finalidadeImovel LIKE ? 
        OR imovel.valor LIKE ? 
        OR cidade.nome LIKE ? 
        OR estado.nome LIKE ?`;

    const values = [
      parametro,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
      `%${parametro}%`,
    ];

    return this.executeSQL(sql, values);
  }
}

// Exporta uma instância da classe imovelModel para ser utilizada em outros arquivos do projeto
module.exports = new ImovelModel();
