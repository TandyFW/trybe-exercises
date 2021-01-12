const searchEmployee = require('../bonus');

describe('Testando funcionalidades da função searchEmployee', () => {
  it('Testa se searchEmployee é uma função.', () => {
    expect('function').toBe(typeof(searchEmployee));
  });
  it('Testa se a função retorna o primeiro nome do(a) funcionário(a) pesquisado(a) pelo id', () => {
    expect('Linda').toBe(searchEmployee('1256-4', 'firstName'));
  });
  it('Testa se a função retorna o último nome do(a) funcionário(a) pesquisado(a) pelo id', () => {
    expect('Dodds').toBe(searchEmployee('4678-2', 'lastName'));
  });
  it('Testa se a função retorna as especialidades do(a) funcionário(a) pesquisado(a) pelo id', () => {
    expect(['UX', 'Design']).toEqual(searchEmployee('8579-6', 'specialities'));
  });
  it('Testa se a função retorna o Error "ID não identificada" caso não encontre um id', () => {
    expect(() => searchEmployee('1111-1', 'firstName')).toThrow('ID não identificada');
  });
  it('Testa se a função retorna o Error "Informação indisponível" caso não encontre um detail.', () => {
    expect(() => searchEmployee('8579-6', 'email')).toThrow('Informação indisponível');
  });
});