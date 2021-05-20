const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const opcoes = () => {
  console.log('Lista de funções.');
  console.log('1 - Calculo do IMC.');
  console.log('2 - Calculo da velocidade.');
  console.log('3 - Jogo do sorteio.');

  const input = readline.questionInt('Escolha uma função inserindo seu número.');
  
  switch(input) {
    case 1: return imc();
    case 2: return velocidade();
    case 3: return sorteio();
    default: return error();
  }
}  

const error = () => {
  console.log('opção inválida, tente outra opção.');
  opcoes();
}

opcoes();
