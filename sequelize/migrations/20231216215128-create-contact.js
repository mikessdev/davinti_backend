"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Contacts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(14),
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(100),
      },
      age: {
        type: Sequelize.INTEGER(3),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Contacts");
  },
};
