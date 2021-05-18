const sinalNumero = (num) => {
  if(num > 0) return "Positivo";
  if(num < 0) return "Negativo";
  return "Neutro";
}

module.exports = sinalNumero;