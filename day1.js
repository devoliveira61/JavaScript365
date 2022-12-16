// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

const prompt = require("prompt-sync")();

let nota = 0;

// Utilizando o for 👇

for (let i = 0; nota >= 10 || nota <= 0; i++) {
  nota = prompt("Digite uma nota entre 0 e 10: ");
  if (nota >= 0 && nota <= 10) {
    console.log(`A nota ${nota} é válida!`);
    break;
  }
}

// Utilizando o while 👇

// while (nota >= 10 || nota <= 0) {
//   nota = prompt("Digite uma nota entre 0 e 10: ");
//   if (nota >= 0 && nota <= 10) {
//     console.log(`A nota ${nota} é válida!`);
//     break;
//   }
// }
