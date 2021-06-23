const plantService = require('../services/plantService');
const service = require('../index');
const OK = 200;
const CREATED = 201;

const getAllPlants = async (_req, res) => {
  const plants = await plantService.getAllPlants();
  res.status(OK).json(plants);
};

const getPlantById = async (req, res) => {
  const plant = await plantService.getPlantById(req.params.id);
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
