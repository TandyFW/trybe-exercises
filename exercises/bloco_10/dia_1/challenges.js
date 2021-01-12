  // Desafio 9
  function encode(sentence) {
    // seu código aqui
    let newSentence = '';
    for (let pos = 0; pos < sentence.length; pos += 1) {
      switch (sentence.slice(pos, pos + 1)) {
        case 'a':
          newSentence += '1';
          break;
        case 'e':
          newSentence += '2';
          break;
        case 'i':
          newSentence += '3';
          break;
        case 'o':
          newSentence += '4';
          break;
        case 'u':
          newSentence += '5';
          break;
        default:
          newSentence += sentence.slice(pos, pos + 1);
      }
    }
    return newSentence;
  }
  
  function decode(sentence) {
    // seu código aqui
    let newSentence = '';
    for (let pos = 0; pos < sentence.length; pos += 1) {
      switch (sentence.slice(pos, pos + 1)) {
        case '1':
          newSentence += 'a';
          break;
        case '2':
          newSentence += 'e';
          break;
        case '3':
          newSentence += 'i';
          break;
        case '4':
          newSentence += 'o';
          break;
        case '5':
          newSentence += 'u';
          break;
        default:
          newSentence += sentence.slice(pos, pos + 1);
      }
    }
    return newSentence;
  }
    
  module.exports = {
    decode,
    encode
  }
