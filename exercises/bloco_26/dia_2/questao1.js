// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function questao1(num1, num2, num3){
  return new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number', typeof num3 !== 'number') {
      reject(Error('Informe apenas números'));
    }
    const resultado = (num1 + num2) * num3;
    if(resultado < 50) reject(Error('Valor muito baixo'));
    resolve(resultado);
  })
  .then(result => console.log(result))
  .catch(err => console.log(`Erro: ${err.message}`));
};

// questao1(10, 5, 5);

module.exports = questao1;