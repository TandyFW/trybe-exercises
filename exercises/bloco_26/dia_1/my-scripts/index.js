const readline = require('readline-sync');

const opcoes = () => {
  console.log('Lista de funções.');
  console.log('1 - Calculo do IMC.');
  console.log('2 - Calculo da velocidade.');
  console.log('3 - Jogo do sorteio.');
  console.log('4 - Calculo do fatorial.');
  console.log('5 - Sequencia fibonacci.');

  const input = readline.questionInt('Escolha uma função inserindo seu número.');
  
  switch(input) {
    case 1: return require('./imc');
    case 2: return require('./velocidade');
    case 3: return require('./sorteio');
    case 4: return require('./fatorial');
    case 5: return require('./fibonacci');
    default: return error();
  }
}  

const error = () => {
  console.log('opção inválida, tente outra opção.');
  opcoes();
}

opcoes();
