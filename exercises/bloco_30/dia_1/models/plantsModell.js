const connection = require('./connection');

const addPlant = async (plant) => {
  const db = await connection('plants-store');
  console.log(plant);
  const result = await db.collection('plants').insertOne(plant);
  return result.ops[0];
};

module.exports = {
  addPlant,
};
