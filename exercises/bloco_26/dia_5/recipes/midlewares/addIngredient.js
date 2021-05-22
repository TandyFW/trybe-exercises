const recipes = require('../recipes');

const addIngredient = (req, res) => {
  if(!req.body.insert) return next();
  const newIngredients = req.body.insert;
  const id = req.params.id;
  const obj = recipes.find((recip) => recip.id == id);
  const index = recipes.indexOf(obj);
  recipes[index].ingredientes = [...recipes[index].ingredientes, ...newIngredients];
  res.status(200).send('Ingredientes inseridos com sucesso');
}

module.exports = addIngredient;
