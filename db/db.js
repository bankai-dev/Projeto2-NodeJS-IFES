// importanto o framework sequelize
const Sequelize = require("sequelize");

// Criando uma instância do Sequelize para nos conectar a um banco de dados SQLite

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
}); 

// Conexão com o banco de dados

try{
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
  console.log("Erro ao conectar ao banco de dados", erro);
}

//Exportamos a instância do Sequelize para utilizarmos em outros arquivos

module.exports = sequelize;