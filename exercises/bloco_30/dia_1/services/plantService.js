const plantModell = require('../models/plantsModell');

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
}