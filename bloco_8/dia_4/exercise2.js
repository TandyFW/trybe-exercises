const criarElemento = (...args) => {
  const element = document.createElement(args[0]);
  element.id = args[1];
  element.className = args[2];
};

console.log(criarElemento('p', 'paragrafo', 'paragrafo'));
