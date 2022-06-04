import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import TypePayroll from "./typePayroll.model.js";
import Municipality from "./municipality.model.js";
import Region from "./region.model.js";

const Payroll = sequelize.define(
  "nomina",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    typePayroll: {
      type: DataTypes.INTEGER,
      field: "tipo_nomina_id",
    },
    regionId: {
      type: DataTypes.INTEGER,
      field: "region_id",
    },
    municipalityId: {
      type: DataTypes.INTEGER,
      field: "municipio_id",
    },
    documentNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      field: "cedula",
    },
    fullName: {
      type: DataTypes.STRING,
      field: "Nom_titular",
    },
    birthday: {
      type: DataTypes.DATE,
      field: "fecha_nacimiento",
    },
    age: {
      type: DataTypes.INTEGER,
      field: "edad",
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Payroll.hasOne(TypePayroll, {
  foreignKey: "id",
  sourceKey: "typePayroll",
});

Payroll.hasOne(Municipality, {
  foreignKey: "id",
  sourceKey: "municipalityId",
});

Payroll.hasOne(Region, {
  foreignKey: "id",
  sourceKey: "regionId",
});

export default Payroll;
