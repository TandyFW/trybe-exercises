const cepService = require('../services/cepService');

const getCep = async (req, res) => {
  const { cep } = req.params;
  const validCep = cepService.validCep(cep);
  if (validCep) return res.status(400).json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  const cepSearched = await cepService.getCep(cep);
  if (!cepSearched) return res.status(404).json({ error: { code: 'NotFound', message: 'CEP não encontrado' } });
  res.status(200).json(cepSearched);
}

module.exports = {
  getCep,
}
