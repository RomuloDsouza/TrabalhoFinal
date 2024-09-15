
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');
const cors = require("cors");



const app = express();
app.use(cors());

const port = 3000;
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const database = require("./db/index.js");
database();
const router = require("./routers/index.js");
router(app, express);


app.listen(
  port, 
  function (error) {
    
    if (error) {
      
      console.log("Ocorreu um erro ao rodar o servidor!");
      console.log("API documentation: http://localhost:3000/docs");
      return;
    } else {
     
      console.log("Servidor rodando com sucesso!");
      
    }
  }
);
