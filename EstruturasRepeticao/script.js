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

//--------------------------------

// 4. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.

for(let i = 1; i <= 20; i++){
    console.log(i);
}

//--------------------------------

// 5. Faça um programa que leia 5 números e informe o maior número.

let maior = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digita um número"));

  if (numero > maior) {
    maior = numero;
  }
}

console.log(maior);

//--------------------------------

// 9. Dado um número n, para cada número entre 0 e 100, imprime um valor por linha da seguinte maneira:
        // Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
        // Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
        // Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
        // Se i não for múltiplo de 3 ou 5, imprima o valor de i.

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i != 0) {
    console.log(i + " - FizzBuzz");
  } else if (i % 3 == 0 && i != 0) {
    console.log(i + " - Fizz");
  } else if (i % 5 == 0 && i != 0) {
    console.log(i + " - Buzz");
  } else {
    console.log(i);
  }
}
