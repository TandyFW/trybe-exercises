const plantService = require('../services/plantService');
const service = require('../index');
const OK = 200;
const CREATED = 201;

const getAllPlants = (_req, res) => {
  const plants = service.getPlants();
  res.status(OK).json(plants);
};

const getPlantById = (req, res) => {
  const { id } = req.params;
  const plant = service.getPlantById(id);
  res.status(OK).json(plant);
};

const addPlant = async (req, res) => {
  console.log(req.body);
  const result = await plantService.addPlant(req.body);
  res.status(CREATED).json(result);
};

module.exports = {
  getAllPlants,
  getPlantById,
  addPlant,
};
