const readline = require('readline-sync');

const velocidade = () => {
  const vel = (distancia, tempo) => distancia / tempo;
  const distancia = readline.questionInt('Informe a distancia em metros. ');
  const tempo = readline.questionInt('Informe a tempo em segundos. ');
  
  console.log(`${vel(distancia, tempo)}m/s`);
}

velocidade();
