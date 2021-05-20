const readline = require('readline-sync');

const fibonacci = () => {
  const input = readline.questionInt('Informe quantos números da sequencia deseja visualizar. ');
  if(input < 1) {
    console.log('Valor inválido.');
    return fibonacci();
  }
  const result = [0, 1];
  for(let index = 1; index < input; index += 1){
    result.push(result.reduce((acc, curr) => acc + curr));
  }
  result.shift();
  console.log(...result);
}

module.exports = fibonacci;
