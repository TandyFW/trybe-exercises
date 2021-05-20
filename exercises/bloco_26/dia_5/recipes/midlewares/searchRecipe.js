const recipes = require('../recipes');

const searchRecipe = (req, res, next) => {
  const id = req.params.id;
  const obj = recipes.find((recip) => recip.id == id);
  const index = recipes.indexOf(obj);
  res.status(200).send(recipes[index]);
}

module.exports = searchRecipe;
