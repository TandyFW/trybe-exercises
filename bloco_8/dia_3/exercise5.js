/*
Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
*/

const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const containsA = () => names
.reduce(((accumulate, current) => accumulate + current.toLowerCase().split('a').length-1), 0);

assert.deepStrictEqual(containsA(), 20);