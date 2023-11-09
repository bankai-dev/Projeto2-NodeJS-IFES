const Sequelize = require('sequelize');

//importanto a instância do sequelize
const sequelize = require('../db/db');

const Cliente = sequelize.define('cliente',
{
  id_cliente: {  
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, { modelName: 'cliente',
   tableName: 'cliente'});

module.exports = Cliente;