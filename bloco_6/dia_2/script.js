function geraEstados(){
  let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  let select = document.querySelector('#estados');
  for(let index = 0; index < estados.length; index += 1) {
    let opt = document.createElement('option');
    opt.value = estados[index];
    opt.text = estados[index];
    select.appendChild(opt);
  }
}
geraEstados();

function eventosBotaoValidacao() {
  let btnValidacao = document.querySelector('#btnValidacao');
  btnValidacao.addEventListener('click', function(event) {
    event.preventDefault();
    if ((validarDataDia + validarDataMes + validarDataAno).length > 0) {
      alert(validarDataDia() + validarDataMes() + validarDataAno());
    }
    
  });
}
eventosBotaoValidacao();

function validarDataDia() {
  let data = document.querySelector('#dataInicio').value;
  let indexDia = data.indexOf('/');
  let dia = data.substring(0,indexDia);
  
  if(parseInt(dia) < 1 || parseInt(dia) > 31) {
    return `${dia} não é um dia válido.\n`;
  }
  return '';
}

function validarDataMes() {
  let data = document.querySelector('#dataInicio').value;
  let indexDia = data.indexOf('/') + 1;
  let indexMes = data.indexOf('/', indexDia);
  let mes = data.substring(indexDia,indexMes);
  
  if(parseInt(mes) < 1 || parseInt(mes) > 12) {
     return `${mes} não é um mês válido.\n`;
  }
  return '';
}

function validarDataAno() {
  let data = document.querySelector('#dataInicio').value;
  let indexDia = data.indexOf('/') + 1;
  let indexMes = data.indexOf('/', indexDia) + 1;
  let ano = data.substring(indexMes,data.length);

  if(parseInt(ano) < 0) {
    return `${ano} não é um ano válido.\n`;
  }
  return '';
}

function montarCurriculo() {
  let btnMontarcurriculo = document.querySelector('#montarCurriculo');
  btnMontarcurriculo.addEventListener('click', function(event){
    event.preventDefault();
    let curriculo = document.querySelector('#curriculo');
    curriculo.innerHTML = construirCurriculo();
  });
}
montarCurriculo();

function construirCurriculo() {
  let inputText = document.querySelectorAll('input[type=text]');
  let curriculo = '';
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value !== '') {
      curriculo += inputText[index].value + '<br>';
    }
    if (inputText[index].id == cidade) {
      let select = document.getElementById('estados');
      let estado = select.options[select.selectedIndex].value;
      curriculo += select.options[select.selectedIndex].text + '<br>';
    }
  }
  return curriculo;
}