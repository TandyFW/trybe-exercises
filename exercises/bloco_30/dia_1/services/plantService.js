const plantModell = require('../models/plantsModell');

const getAllPlants = async () => {
  return plantModell.getAllPlants();
};

const getPlantById = async (id) => {
  return plantModell.getPlantById(id);
}

const addPlant = async (plant) => {
  const result = await plantModell.addPlant(plant);
  const { _id, ...restOfPlant} = result;
  return {
    _id,
    ...restOfPlant,
  };
}

module.exports = {
  addPlant,
  getAllPlants,
  getPlantById,
}