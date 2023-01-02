//arquivo pra fazer conexao com o banco de dados

const Sequelize = require('sequelize');
const configDatabase = require('./database');

//cria uma instancia
const sequelize = new Sequelize(configDatabase);

module.exports = sequelize;