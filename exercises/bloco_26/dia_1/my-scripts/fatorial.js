const readline = require('readline-sync');

const fatorial = () => {
  const input = readline.questionInt('Digite um valor inteiro maior que zero para calcular seu fatorial. ');
  if(input < 1) {
    console.log('Número inválido.');
    return fatorial();
  }
  let result = 1;
  for(let index = 1; index <= input; index += 1){
    result *= index;
  }
  console.log(`O fatorial de ${input} é ${result}.`);
}

module.exports = fatorial;
