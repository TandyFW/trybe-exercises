/*
Dada uma matriz de matrizes, transforme em uma única matriz.
*/

const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


const flatten = () => arrays.reduce(((acculumator, current) => acculumator.concat(current)), []);

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat