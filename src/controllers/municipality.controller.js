import MunicipalityModel from "../models/municipality.model.js";
import RegionModel from "../models/region.model.js";

export const index = async (req, res) => {
  const municipalityModel = await MunicipalityModel.findAll({
    attributes: ["id", "descripcion"],
    include: [
      {
        model: RegionModel,
        key: "id",
        attributes: ["descripcion"],
      },
    ],
  });
  res.status(200).json({
    rows: municipalityModel,
  });
};
