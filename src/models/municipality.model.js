import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import Region from "./region.model.js";

const Municipality = sequelize.define(
  "municipio",
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
    regionId: {
      type: DataTypes.INTEGER,
      field: "region_id",
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Municipality.hasOne(Region, {
  foreignKey: "id",
  sourceKey: "regionId",
});

export default Municipality;
