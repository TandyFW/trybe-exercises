const readline = require('readline-sync');

const vel = (distancia, tempo) => distancia / tempo;

const velocidade = () => {
  const distancia = readline.questionInt('Informe a distancia em metros. ');
  const tempo = readline.questionInt('Informe a tempo em segundos. ');
  
  console.log(`${vel(distancia, tempo)}m/s`);
}

module.exports = velocidade;
