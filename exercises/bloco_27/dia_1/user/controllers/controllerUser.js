const service = require('../services/serviceUsers');
const model = require('../models/modelUsers');

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    service.userValid(firstName, lastName, email, password);
    const result = await service.createUser(firstName, lastName, email, password);
    res.status(201).json(result);

  } catch(err) {
    res.status(400).json({ error: true, message: err.message });
  }
}

const getAll = async (_req, res) => {
  const users = await model.getAll();
  res.status(200).json(users);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await service.findById(id);
  if (!result) return res.status(404).json({ error: true, message: 'Not found' });
  res.status(200).json(result);
}

const updateOne = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    service.userValid(firstName, lastName, email, password);
    const { id } = req.params;
    const result = await service.updateOne(id, { firstName, lastName, email, password });
    res.status(200).json(result);
  } catch(err) {
    res.status(400).json({ error: true, message: err.message });
  }
}

module.exports = {
  createUser,
  getAll,
  findById,
  updateOne,
}
