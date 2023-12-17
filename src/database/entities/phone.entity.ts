import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { database } from "@database/database.config";

const sequelize: Sequelize = database;

export class Phone extends Model<
  InferAttributes<Phone>,
  InferCreationAttributes<Phone>
> {
  id: number;
  contactId: number;
  number: string;
}

Phone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        len: [0, 14],
      },
    },
    contactId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [0, 14],
      },
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 16],
      },
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "Phone",
  }
);
