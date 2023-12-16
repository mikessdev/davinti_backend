import { Sequelize, DataTypes, Model } from "sequelize";
import { database } from "@database/database.config";

const sequelize: Sequelize = database;

export class Contact extends Model {}

Contact.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Contact",
  }
);

console.log(Contact === sequelize.models.Contact);
