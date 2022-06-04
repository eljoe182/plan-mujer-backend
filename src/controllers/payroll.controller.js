import PayrollModel from "../models/payroll.model.js";
import TypePayrollModel from "../models/typePayroll.model.js";
import MunicipalityModel from "../models/municipality.model.js";
import RegionModel from "../models/region.model.js";

export const index = async (req, res) => {
  const { page, size } = req.query;
  const payrollModel = await PayrollModel.findAll({
    attributes: ["id", "cedula", "Nom_titular", "fecha_nacimiento", "edad"],
    include: [
      {
        model: TypePayrollModel,
        key: "id",
        attributes: ["descripcion"],
      },
      {
        model: MunicipalityModel,
        key: "id",
        attributes: ["descripcion"],
      },
      {
        model: RegionModel,
        key: "id",
        attributes: ["descripcion"],
      },
    ],
    limit: Number(size),
    offset: Number(page - 1) * Number(size),
  });

  const rowsCount = await PayrollModel.count();

  res.status(200).json({
    page,
    size,
    rowsCount,
    rows: payrollModel,
  });
};
