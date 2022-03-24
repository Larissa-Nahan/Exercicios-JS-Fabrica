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
