const readline = require('readline-sync');

const imc = () => {
  const IMC = (peso, altura) => peso / altura**2;
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura em metros? ');
  const imc = IMC(peso, altura);
  if (imc >= 40) return console.log(`imc: ${imc.toFixed(2)}, Situação: Obesidade graus III e IV.`);
  if (imc >= 35) return console.log(`imc: ${imc.toFixed(2)}, Situação: Obesidade grau II.`);
  if (imc >= 30) return console.log(`imc: ${imc.toFixed(2)}, Situação: Obesidade grau I.`);
  if (imc >= 25) return console.log(`imc: ${imc.toFixed(2)}, Situação: Acima do peso (sobrepeso).`);
  if (imc >= 18.5) return console.log(`imc: ${imc.toFixed(2)}, Situação: Peso normal.`);
  if (imc < 18.5) return console.log(`imc: ${imc.toFixed(2)}, Situação: Abaixo do peso (magreza).`);
};

imc();
