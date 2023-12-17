import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { database } from "@database/database.config";

const sequelize: Sequelize = database;

export class Contact extends Model<
  InferAttributes<Contact>,
  InferCreationAttributes<Contact>
> {
  id: number;
  name: string;
  age: number;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    timestamps: false,
    sequelize,
    modelName: "Contact",
  }
);

console.log(Contact === sequelize.models.Contact);
