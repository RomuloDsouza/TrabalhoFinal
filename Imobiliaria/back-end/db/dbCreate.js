// class tarefaDatabase {
//   // Método para inicializar a conexão com o banco de dados e iniciar o processo de criação do banco e da tabela
//   initConnection(connection) {
//     this.connection = connection; // Armazena a conexão passada como argumento
//     this.initDatabase(); // Chama o método para inicializar o banco de dados
//   }

//   // Método para inicializar o banco de dados
//   initDatabase() {
//     // Conecta ao banco de dados utilizando a conexão fornecida
//     this.connection.connect((error) => {
//       if (error) {
//         console.log("Ocorreu um erro ao conectar no banco de dados..."); // Exibe uma mensagem de erro se a conexão falhar
//         console.log(error.message); // Exibe o erro detalhado
//         return;
//       }
//       console.log("Banco de dados conectado com sucesso..."); // Exibe uma mensagem de sucesso se a conexão for bem-sucedida
//       this.createDatabase(); // Chama o método para criar o banco de dados
//     });
//   }

//   // Método para criar o banco de dados
//   createDatabase() {
//     // Query SQL para criar o banco de dados, se ele não existir
//     const sql = "CREATE DATABASE IF NOT EXISTS imobiliaria";
//     // Executa a query para criar o banco de dados
//     this.connection.query(sql, (error) => {
//       if (error) {
//         console.log("Ocorreu um erro ao criar o banco de dados..."); // Exibe uma mensagem de erro se a criação do banco falhar
//         console.log(error.message); // Exibe o erro detalhado
//         return;
//       }
//       console.log("Banco de dados criado com sucesso..."); // Exibe uma mensagem de sucesso se a criação do banco for bem-sucedida
//       // Seleciona o banco de dados recém-criado para utilização
//       this.connection.query("USE imobiliaria", (error) => {
//         if (error) {
//           console.log("Ocorreu um erro ao selecionar o banco de dados..."); // Exibe uma mensagem de erro se a seleção do banco falhar
//           console.log(error.message); // Exibe o erro detalhado
//           return;
//         }
//         console.log("Banco de dados selecionado com sucesso..."); // Exibe uma mensagem de sucesso se a seleção do banco for bem-sucedida
//         this.createTable(); // Chama o método para criar a tabela após criar o banco de dados
//       });
//     });
//   }

//   // Método para criar a tabela 'imovel'
//   createTable() {
//     // Query SQL para criar a tabela 'tarefa', se ela não existir
//     const sql = `
//     CREATE TABLE IF NOT EXISTS TipoImovel (
//       id INT NOT NULL AUTO_INCREMENT,
//       descricao_tarefa VARCHAR(50) DEFAULT NULL,
//       situacaoAtual_tarefa VARCHAR(45) DEFAULT 'NaoIniciada, Iniciada, EmAndamento, Concluida',
//       dataAbertura_tarefa DATETIME DEFAULT NULL,
//       dataConcusao_tarefa DATETIME DEFAULT NULL,
//       PRIMARY KEY (id)
//       ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
//     `;
//     // Executa a query para criar a tabela 'tarefa'
//     this.connection.query(sql, (error) => {
//       if (error) {
//         console.log("Ocorreu um erro ao criar a tabela tarefa..."); // Exibe uma mensagem de erro se a criação da tabela falhar
//         console.log(error.message); // Exibe o erro detalhado
//         return;
//       }
//       console.log("Tabela tarefa criada com sucesso..."); // Exibe uma mensagem de sucesso se a criação da tabela for bem-sucedida
//     });
//   }
// }

// // Exporta uma instância da classe tarefaDatabase para ser utilizada em outros arquivos do projeto
// module.exports = new tarefaDatabase();

class Database {
  
  initConnection(connection) {
    this.connection = connection; 
    this.initDatabase(); 
  }

  initDatabase() {
    this.connection.connect((error) => {
      if (error) {
        console.log("Ocorreu um erro ao conectar no banco de dados...");
        console.log(error.message); 
        return;
      }
      console.log("Banco de dados conectado com sucesso..."); 
    });
  }
}

module.exports = new Database();