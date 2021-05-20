const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const fatorial = require('./fatorial');
const fibonacci = require('./fibonacci');

const opcoes = () => {
  console.log('Lista de funções.');
  console.log('1 - Calculo do IMC.');
  console.log('2 - Calculo da velocidade.');
  console.log('3 - Jogo do sorteio.');
  console.log('4 - Calculo do fatorial.');
  console.log('5 - Sequencia fibonacci.');

  const input = readline.questionInt('Escolha uma função inserindo seu número.');
  
  switch(input) {
    case 1: return imc();
    case 2: return velocidade();
    case 3: return sorteio();
    case 4: return fatorial();
    case 5: return fibonacci();
    default: return error();
  }
}  

const error = () => {
  console.log('opção inválida, tente outra opção.');
  opcoes();
}

opcoes();
