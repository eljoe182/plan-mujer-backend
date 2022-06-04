import TypePayrollModel from "../models/typePayroll.model.js";

export const index = async (req, res) => {
  const typePayrollModel = await TypePayrollModel.findAll({
    attributes: ["id", "descripcion"],
  });
  res.json({
    rows: typePayrollModel,
  });
};
