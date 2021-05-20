const recipes = require('../recipes');

const recipesArray = (req, res, next) => {
  res.status(200).send(recipes);
}

module.exports = recipesArray;