const readline = require('readline-sync');

const imc = (peso, altura) => {
  const IMC = (peso / altura**2);
  if (IMC >= 40) return `imc: ${IMC.toFixed(2)}, Situação: Obesidade graus III e IV.`;
  if (IMC >= 35) return `imc: ${IMC.toFixed(2)}, Situação: Obesidade grau II.`;
  if (IMC >= 30) return `imc: ${IMC.toFixed(2)}, Situação: Obesidade grau I.`;
  if (IMC >= 25) return `imc: ${IMC.toFixed(2)}, Situação: Acima do peso (sobrepeso).`;
  if (IMC >= 18.5) return `imc: ${IMC.toFixed(2)}, Situação: Peso normal.`;
  if (IMC < 18.5) return `imc: ${IMC.toFixed(2)}, Situação: Abaixo do peso (magreza).`;
};

const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura em metros?');

console.log(imc(peso, altura));
