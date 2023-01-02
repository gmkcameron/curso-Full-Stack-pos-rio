//arquivo que centraliza todos os models
const sequelize = require('../config/sequelize');
//Seuqelize instalado via npm
const Sequelize = require('sequelize');

//importa arq de Cursos
const Curso = require('./curso')
//model criado, com a instancia preparada pra usar
const curso = Curso(sequelize, Sequelize.DataTypes)
//pra facilitar cria-se a const db, passando algumas infos
const db = {
    curso,
    sequelize
};

module.exports = db;