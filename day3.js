/* 
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
*/

const prompt = require("prompt-sync")();

let nome = prompt("Insira um nome: ");
let idade = prompt("Insira uma idade: ");
let salario = prompt("Insira um salário: ");
let sexo = prompt("Insira um sexo: ");
let estadoCivil = prompt("Insira um estado civil: ");

for (let i = 0; nome && idade && salario && sexo && estadoCivil; i++) {
  if (nome.length < 3) {
    console.log("O nome deve conter no mínimo 3 caracteres");
    nome = prompt("Insira um nome: ");
  } else if (idade > 150) {
    console.log("A idade pode ser no máximo até 150");
    idade = prompt("Insira uma idade: ");
  } else if (salario <= 0) {
    console.log("O salário deve ser maior que zero");
    salario = prompt("Insira um salário: ");
  } else if (sexo != "f" && sexo != "m") {
    console.log("O sexo deve ser f ou m");
    sexo = prompt("Insira um sexo: ");
  } else if (
    estadoCivil != "s" &&
    estadoCivil != "c" &&
    estadoCivil != "v" &&
    estadoCivil != "d"
  ) {
    console.log("O estado civil deve ser: s, c, v ou d");
    estadoCivil = prompt("Insira um estado civil: ");
  } else {
    console.log("Informações cadastradas: ");
    console.log(`\n Nome: ${nome}\n Idade: ${idade}\n Salário: ${salario}\n Sexo: ${sexo}\n Estado Civil: ${estadoCivil}\n`)
    break;
  }
}
