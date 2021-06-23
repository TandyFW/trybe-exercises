const connection = require('./connection');
const { ObjectId } = require('mongodb');
const PLANTS_STORE = 'plants-store';
const PLANTS = 'plants';

const getAllPlants = async () => {
  const db = await connection(PLANTS_STORE);
  const result = await db.collection(PLANTS).find().toArray();
  return result;
};

const getPlantById = async (id) => {
  const db = await connection(PLANTS_STORE);
  const result  = await db.collection(PLANTS).findOne({ _id: ObjectId(id) });
  return result;
};

const addPlant = async (plant) => {
  const db = await connection(PLANTS_STORE);
  const result = await db.collection(PLANTS).insertOne(plant);
  return result.ops[0];
};

module.exports = {
  addPlant,
  getAllPlants,
  getPlantById,
};
