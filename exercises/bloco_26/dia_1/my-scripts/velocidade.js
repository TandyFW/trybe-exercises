const readline = require('readline-sync');

const velocidade = (distancia, tempo) => distancia / tempo;

const distancia = readline.questionInt('Informe a distancia em metros. ');
const tempo = readline.questionInt('Informe a tempo em segundos. ');

console.log(`${velocidade(distancia, tempo)}m/s`);
