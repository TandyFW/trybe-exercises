require('dotenv').config({ path: '/home/tandy/trybe/course/trybe-exercises/exercises/bloco_28/dia_1/hello-jwt/file.env'});
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const secret = process.env.SECRET_JWT;


const auth = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    let payload = {};
    if (username === 'admin' && password === 's3nh4S3gur4???') {
      payload = { data: { username, admin: true  } };
    } else {
      payload = { data: { username, admin: false } };
    }

    const token = jwt.sign(payload, secret, jwtConfig);
    console.log('mid');
    req.token = token;
    next();

  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const validAuth = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: { messsage: 'Token not found' } });
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userModel.findUser(decoded.data.username);
    if (!user) return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    const result = { username: user.username, admin: decoded.data.admin };
    req.validation = result;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  auth,
  validAuth,
};
