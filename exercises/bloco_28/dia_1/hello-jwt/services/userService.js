const userModel = require('../models/userModel');

const create = async ({username, password}) => {
  if (typeof username !== 'string' || username.length < 5)
    return { err: { code: 400, message: 'username inválido.' }};
  if (typeof password !== 'string' || password.length < 5)
    return { err: { code: 400, message: 'password inválida.' }};
  console.log('servive');
  const result = await userModel.create(username, password);
  return result;
};

module.exports = {
  create,
};
