const connection = require('./connection');

const getCep = async (cep) => {
  try {
    const validCep = cep.replace('-', '');
    const [result] = await connection.execute(
      'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;', [validCep],
    );
    console.log(result);
    return result;
    } catch(err){
      return null;
    }
}

module.exports = {
  getCep,
}
