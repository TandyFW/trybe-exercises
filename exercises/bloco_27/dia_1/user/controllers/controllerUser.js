const service = require('../services/serviceUsers');
const model = require('../models/modelUsers');

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    service.userValid(firstName, lastName, email, password);
    const result = await service.createUser(firstName, lastName, email, password);
    console.log(result);
    res.status(201).json(result);

  } catch(err) {
    res.status(400).json({ error: true, message: err.message });
  }
}

const getAll = async (_req, res) => {
  const users = await model.getAll();
  res.status(200).json(users);
}

module.exports = {
  createUser,
  getAll,
}
