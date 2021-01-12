  // Desafio 13
  function hydrate(string) {
    // seu código aqui
    let coposDeAgua = 0;
    let number = string.match(/\d+/g).map(Number);
    for (let pos = 0; pos < number.length; pos += 1) {
      coposDeAgua += number[pos];
    }
    if (coposDeAgua === 1) {
      return `${coposDeAgua} copo de água`;
    } 
    return `${coposDeAgua} copos de água`;
  }

  module.exports = hydrate;
  