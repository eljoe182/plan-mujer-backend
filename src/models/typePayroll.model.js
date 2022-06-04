import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const TypePayroll = sequelize.define(
  "tipo_nomina",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      field: "descripcion",
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default TypePayroll;
