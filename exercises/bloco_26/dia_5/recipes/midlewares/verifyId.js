const recipes = require('../recipes');

const verifyId = (req, res, next) => {
  const id = req.params.id;
  if(!id) res.status(404).send('Recipe not found.');
  next();
}

module.exports = verifyId;
