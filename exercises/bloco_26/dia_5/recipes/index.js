const express = require('express');
const midlewares = require('./midlewares');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Servidor aberto, porta 3000'));

app.get('/recipe', midlewares.recipesArray);

app.get('/recipe/:id/ingredients', midlewares.verifyId, midlewares.searchRecipe);

app.post('/recipe/:id/ingredients', midlewares.verifyId, midlewares.addIngredient);

app.post('/recipe/:id/ingredients', midlewares.verifyId, midlewares.deleteIngredient);
