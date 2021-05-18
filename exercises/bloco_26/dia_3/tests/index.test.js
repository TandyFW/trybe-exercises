const { expect } = require('chai') ;
const sinalNumero = require('../index.js');

  describe("Chama a função sinalNumero", () => {
    it("Caso número seja maior que 0, no caso 4.", () => {
      const result = sinalNumero(4);
      expect(result).equal("Positivo");
    });
    
    it("Caso o número seja menor que 0, no caso -2.", () => {
      const result = sinalNumero(-2);
      expect(result).equal("Negativo");
    });

    it("Caso o número seja 0", () => {
      const result = sinalNumero(0);
      expect(result).equal("Neutro");
    });
  });