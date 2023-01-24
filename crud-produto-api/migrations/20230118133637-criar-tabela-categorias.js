'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      criadoEm: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      atualizadoEm: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('categorias');
   }
 };
 