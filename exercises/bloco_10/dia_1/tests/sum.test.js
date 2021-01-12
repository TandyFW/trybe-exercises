const sum = require('../sum');

test('sums two values', () => {
  expect(9).toEqual(sum(4, 5));
  expect(0).toEqual(sum(0, 0));
});

test('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
  expect(() => sum(4, "5").toThrow(Error));
});

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => sum(4, "5").toThrow('parameters must be numbers'));
});
