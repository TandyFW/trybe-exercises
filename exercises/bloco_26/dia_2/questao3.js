// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

const questao1 = require('./questao1');

const random = async () => Math.floor(Math.random() * 100) + 1;

const questao3 = async () => {
  const num1 = await random();
  const num2 = await random();
  const num3 = await random();
  questao1(num1, num2, num3);
}

questao3();
