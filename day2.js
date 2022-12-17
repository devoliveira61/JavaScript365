// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const prompt = require("prompt-sync")();

let nomeUsuario = prompt("Insira um usuário: ");
let senhaUsuario = prompt("Insira uma senha: ");

for (let i = 0; nomeUsuario && senhaUsuario; i++) {
  if (nomeUsuario === senhaUsuario) {
    console.log("Não é permitido usar uma senha igual ao nome de usuário ");
    senhaUsuario = prompt(
      "Insira uma senha que não seja igual ao nome de usuário: "
    );
  } else {
    console.log(
      `Olá, ${nomeUsuario}, a sua conta foi cadastrada com sucesso! `
    );
    break;
  }
}
