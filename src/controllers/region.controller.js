import RegionModel from "../models/region.model.js";

export const index = async (req, res) => {
  const regions = await RegionModel.findAll({
    attributes: ["id", "descripcion"],
  });
  res.json({
    rows: regions,
  });
};
