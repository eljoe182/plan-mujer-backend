import CitasModel from "../models/citas.model.js";


export const index = async (req, res) => {
  const citasModel = await CitasModel.findAll({   
  });
  res.status(200).json({
    rows: citasModel,
  });
};
export const store= async (req, res) => {
  const {fechaHoraInicio, fechaHoraFin,cedula,description}=req.body
  const citasModel = await CitasModel.create({
    fechaHoraInicio, fechaHoraFin,cedula,description
  });
  res.status(200).json({
    rows: citasModel,
  });
};

