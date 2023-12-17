"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Phones", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contactId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      number: {
        type: Sequelize.STRING,
      },
    });
    await queryInterface.addConstraint("Phones", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_contact_id",
      references: {
        table: "Contacts",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Phones");
  },
};
