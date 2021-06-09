const userService = require('../services/userService');

const create = async (req, res) => {
  const { username, password } = req.body;
  const { token } = req;
  const result = await userService.create({ username, password });
  if (result.err) return res.status(err.code).json(err.message);
  res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  
};

module.exports = {
  create,
  getUsers,
};
