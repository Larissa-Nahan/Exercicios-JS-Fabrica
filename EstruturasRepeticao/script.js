// 1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

while (true) {
  let nota = parseFloat(prompt("Digite uma nota"));

  if (nota >= 0 && nota <= 10) {
    console.log(nota);
    break;
  } else {
    console.log("Nota inválida");
  }
}

//--------------------------------

// 3. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

do {
  var nome = prompt("Digite seu nome");
  var senha = prompt("Digite uma senha");

  if (nome == senha) {
    alert("Nome e senha devem ser distintos");
  }
} while (nome == senha);

