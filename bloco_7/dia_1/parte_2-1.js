/*
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.
*/

// const fatorial = (numero) => {
//   if (numero > 1) {
//     return numero * fatorial(numero -1);
//   }
//   return numero;
// };

// console.log(fatorial(4));


const fatorial = (numero) => numero > 1 ? numero * fatorial(numero -1):numero;

console.log(fatorial(4));