const recipes = require('../recipes');

const recipesArray = (_req, res) => {
  res.status(200).send(recipes);
}

module.exports = recipesArray;