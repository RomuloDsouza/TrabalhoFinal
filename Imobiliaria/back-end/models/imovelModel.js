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
      
      imovel.cidadeNome AS cidadeNome, 
      imovel.estadoNome AS estadoNome,
      imovel.idUsuario AS idUsuario
    FROM 
      imovel
    `;
    
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}



  

  readlistimovel() {
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
        imovel.cidadeNome, 
        imovel.estadoNome, 
        imovel.idUsuario,
        informacoesimovel.areaTotal,
        informacoesimovel.areaPrivada,
        informacoesimovel.quarto,
        informacoesimovel.banheiro,
         informacoesimovel.garagem,
         informacoesimovel.suite,
         informacoesimovel.valorVenda,
         informacoesimovel.valorAluguel,
         informacoesimovel.valorIptu,
         informacoesimovel.valorCondominio,
          informacoesimovel.descricaoImovel

      FROM 
        imovel
      JOIN 
        informacoesimovel ON imovel.idimovel = informacoesimovel.idImovel
     
    `;

    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}


readlistimovelId(id) {
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
    imovel.cidadeNome, 
    imovel.estadoNome, 
    imovel.idUsuario,
    informacoesimovel.areaTotal,
    informacoesimovel.areaPrivada,
    informacoesimovel.quarto,
    informacoesimovel.banheiro,
    informacoesimovel.garagem,
    informacoesimovel.suite,
    informacoesimovel.valorVenda,
    informacoesimovel.valorAluguel,
    informacoesimovel.valorIptu,
    informacoesimovel.valorCondominio,
    informacoesimovel.descricaoImovel
  FROM 
    imovel
  JOIN 
    informacoesimovel ON imovel.idimovel = informacoesimovel.idImovel
  WHERE 
    imovel.idimovel = ?;
`;

return this.executeSQL(sql, [id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
}






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
    const sql = "UPDATE imovel SET ? WHERE idimovel= ?"; // Consulta SQL para atualizar uma imovel por ID
    return this.executeSQL(sql, [updatedimovel, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma imovel existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM imovel WHERE Idimovel = ?"; // Consulta SQL para excluir uma imovel por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  
}

// Exporta uma instância da classe imovelModel para ser utilizada em outros arquivos do projeto
module.exports = new ImovelModel();



