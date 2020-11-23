/*
Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const longestWord = (texto) => console.log(texto.split(' ')[texto.split(' ').length-1]);

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'