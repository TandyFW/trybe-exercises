const {encode, decode} = require('../challenges');

test('Teste se encode e decode são funções', () => {
  expect('function').toBe(typeof(encode));
  expect('function').toBe(typeof(decode));
});

test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  expect('12345').toBe(encode('aeiou'));
});

test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
  expect('aeiou').toBe(decode('12345'));
});

test('Teste se as demais letras/números não são convertidos para cada caso;', () => {
  expect('bcdfghjklmnpqrstvwxyz06789').toBe(encode('bcdfghjklmnpqrstvwxyz06789'));
  expect('bcdfghjklmnpqrstvwxyz06789').toBe(decode('bcdfghjklmnpqrstvwxyz06789'));
});

test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
  expect(26).toBe(encode('abcdefghijklmnopqrstuwvxyz').length);
  expect(10).toBe(decode('0123456789').length);
});
