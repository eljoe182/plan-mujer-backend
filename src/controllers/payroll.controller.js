import PayrollModel from "../models/payroll.model.js";
import TypePayrollModel from "../models/typePayroll.model.js";
import MunicipalityModel from "../models/municipality.model.js";
import RegionModel from "../models/region.model.js";
import { Op } from "sequelize";

export const index = async (req, res) => {
  const { page = 1, size = 10 } = req.query;
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
    page: Number(page),
    size: Number(size),
    rowsCount,
    rows: payrollModel,
  });
};

export const show = async (req, res) => {
  const { query = "*" } = req.params;
  const { page = 1, size = 10 } = req.query;
  const { count, rows } = await PayrollModel.findAndCountAll({
    where: {
      fullName: {
        [Op.like]: `%${query}%`,
      },
    },
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

  res.status(200).json({
    page: Number(page),
    size: Number(size),
    rowsCount: count,
    rows: rows,
  });
};

export const edit = async (req, res) => {
  const { id } = req.params;
  const payroll = await PayrollModel.findOne({
    where: {
      id,
    },
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
  });

  const municipality = await MunicipalityModel.findAll({
    attributes: ["id", "descripcion"],
    include: [
      {
        model: RegionModel,
        key: "id",
        attributes: ["id", "descripcion"],
      },
    ],
    order: [["descripcion", "ASC"]],
  });

  res.status(200).json({ payroll, municipality });
};

export const store = async (req, res) => {
  try {
    const {
      fullName,
      documentNumber,
      birthDate,
      age,
      typePayroll,
      municipality,
      region,
    } = req.body;

    const payrollModel = await PayrollModel.create({
      typePayroll: typePayroll.id,
      regionId: region.id,
      municipalityId: municipality.id,
      documentNumber,
      fullName: fullName.toUpperCase(),
      birthday: birthDate,
      age,
    });

    res.status(201).json(payrollModel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { municipality, region } = req.body;
  console.log({
    id,
    municipality,
    region,
  });
  const payrollModel = await PayrollModel.update(
    {
      municipalityId: municipality,
      regionId: region,
    },
    {
      where: {
        id,
      },
    }
  );

  res.status(200).json({
    rows: payrollModel,
  });
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  const payrollModel = await PayrollModel.destroy({
    where: {
      cedula: id,
    },
  });

  res.status(200).json({
    rows: payrollModel,
  });
};
