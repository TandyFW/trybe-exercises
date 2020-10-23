// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let piece = "peAo";

switch(piece.toLowerCase()){
    case "peao":
        return "Frente";
        break;
    case "torre":
        return "Vertical e Horizontal";
        break;
    case "bispo":
        return "Diagonal";
        break;
    case "cavalo":
        return "L";
        break;
    case "rainha":
        return "Horizontal, vertical e diagonal, quantas casas quiser";
        break;
    case "rei":
        return "Horizontal, vertical e diagonal, apenas uma casa";
        break;
    default:
        return "Error";
        break;
}