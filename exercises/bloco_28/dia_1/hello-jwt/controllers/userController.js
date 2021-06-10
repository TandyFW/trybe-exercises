const userService = require('../services/userService');

const create = async (req, res) => {
  const { username, password } = req.body;
  const { token } = req;
  const result = await userService.create({ username, password });
  if (result.err) return res.status(err.code).json(err.message);
  res.status(201).json({ token });
};

const getUser = async (req, res) => {
  const { validation } = req;
  res.status(200).json(validation);
};

const getTopSecret = async (req, res) => {
  const { validation } = req;
  console.log(validation);
  const result = await userService.getTopSecret(validation.admin);
  if (result.err) res.status(401).json(result);
  res.status(200).json(result);
}

module.exports = {
  create,
  getUser,
  getTopSecret,
};
