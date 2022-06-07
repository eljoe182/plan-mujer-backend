import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";


const Citas = sequelize.define(
  "citas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },    
    fechaHoraInicio: {
      type: DataTypes.DATE,
      field: "fechaHoraInicio",
    },
    fechaHoraFin: {
        type: DataTypes.DATE,
        field: "fechaHoraFin",
      },
      cedula: {
        type: DataTypes.INTEGER,
        field: "cedula",
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


export default Citas;
//
//create table citas
//(id int not null auto_increment,
// fechaHoraInicio datetime,
// fechaHoraFin datetime,
// cedula int,
// descripcion varchar(100),
// primary key (id)
//)
//