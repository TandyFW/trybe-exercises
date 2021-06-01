const cepModel = require('../models/cepModel');

const validCep = (cep) => {
  const cepFormat = '\d{5}-?\d{3}';
  return cep.match(cepFormat);
}

const getCep = async (cep) => {
  const result = await cepModel.getCep(cep);
  return result;
}

module.exports = {
  validCep,
  getCep,
}
