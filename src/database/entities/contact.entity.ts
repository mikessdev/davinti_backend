import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { database } from "@database/database.config";
import { Phone } from "./phone.entity";

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
      validate: {
        len: [0, 14],
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [0, 3],
      },
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "Contact",
  }
);

Contact.hasMany(Phone, {
  foreignKey: "contactId",
  onDelete: "CASCADE",
});

Phone.belongsTo(Contact, {
  foreignKey: "contactId",
});
