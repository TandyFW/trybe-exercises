const modelUser = require('../models/modelUsers');
const userValid = (firstName, lastName, email, password) => {
  if (!firstName) throw Error('O campo firstName deve ser preenchido.');
  if (!lastName) throw Error('O campo lastName deve ser preenchido.');
  if (!email) throw Error('O campo email deve ser preenchido.');
  if (!password) throw Error('O campo password deve ser preenchido.');
  if (password.length < 6) throw Error('O campo password deve possuir mais de 5 caracteres.');
  return true;
}

const createUser = async (firstName, lastName, email, password) => {
  return modelUser.create(firstName, lastName, email, password);
}

const findById = async (userId) => {
  return modelUser.findById(userId);
}

const updateOne = async (userId, changes) => {
  return modelUser.updateOne(userId, changes);
}

module.exports = {
  userValid,
  createUser,
  findById,
  updateOne,
}

