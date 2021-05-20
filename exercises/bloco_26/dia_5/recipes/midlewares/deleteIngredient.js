const recipes = require('../recipes');

const deleteIngredient = (req, res, next) => {
  if(!req.body.remove) return next();
  const newIngredients = req.body.remove;
  const id = req.params.id;
  const obj = recipes.find((recip) => recip.id == id);
  const index = recipes.indexOf(obj);
  for(let indice = 0; indice < newIngredients.length; indice+= 1){
    const ingredient = recipes.indexOf(newIngredients[indice]);
    recipes[index].ingredientes.splice(ingredient, 1);
  }
  res.status(200).send('Ingredientes removidos com sucesso');
}

module.exports = deleteIngredient;
