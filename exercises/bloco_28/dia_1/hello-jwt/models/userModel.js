const connection = require('./connection');

const create = async (username, password) => {
  try {
    const db = await connection();
    const { ops } = await db.collection('user').insertOne({ username, password });
    console.log('model');
    return ops.map(({_id, username, password}) => ({
      _id, username, password,
    }));
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
}

const findUser = async (name) => {
  try {
    const db = await connection();
    const result = await db.collection('user').findOne({ username: name });
    return result;
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
}

module.exports = {
  create,
  findUser,
}
