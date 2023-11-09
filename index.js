const express = require("express");
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.listen(3000);

const database = require('./db/db');
const sequelize = require('./db/db');
const Cliente = require('./models/clienteModel');
const clienteController = require("./controller/clienteController");

// Sincronização do banco de dados
try{
  database.sync().then(() => {
  })
} catch(erro){
  console.log("Falha ao se conectar com o banco de dados", erro);
};

app.get("/",(req,res) =>{
  return res.json("Olá mundo!")
});

// Rota POST - Cadastrar

app.post("/Cadastrar", clienteController.ClienteCreate);

// Rota GET = Listar

app.get("/Clientes", clienteController.ClienteListar);

// Rota PUT = Update (Atualizar)

app.put("/Clientes/:id", clienteController.ClienteUpdate);

// Rota DELETE = Delete (Deletar)

app.delete("/Clientes/:id", clienteController.ClienteDelete);