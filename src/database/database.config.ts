import { Sequelize } from "sequelize";

export const database: Sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ".db/database.sqlite",
});
