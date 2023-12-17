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
    },
    name: {
      type: DataTypes.STRING(100),
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

Contact.hasMany(Phone, {
  foreignKey: "contactId",
  onDelete: "CASCADE",
});

Phone.belongsTo(Contact, {
  foreignKey: "contactId",
});
