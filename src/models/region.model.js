import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Region = sequelize.define(
  "region",
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

export default Region;
