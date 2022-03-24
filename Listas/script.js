//Listas

// 1. Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

let minhaLista = [1, 5, 3, 2, 10];

for (let i = 0; i < minhaLista.length; i++) {
  console.log(minhaLista[i]);
}

// ----------------------------------------

// 2. Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inverso = [];

for (let i = numeros.length - 1; i >= 0; i--) {
  inverso.push(numeros[i]);
}

console.log(inverso);


// Funções 

// ----------------------------------------

// BONUS: crie uma função com as 4 operações matemáticas básicas

function operacoes(num1, num2) {
    console.log("Soma: " + (parseInt(num1) + parseInt(num2)));
    console.log("Subtração: " + (parseInt(num1) - parseInt(num2)));
    console.log("Multiplicação: " + (parseInt(num1) * parseInt(num2)));
    console.log("Divisão: " + (parseInt(num1) / parseInt(num2)));
}

operacoes(10, 20);

// ----------------------------------------

// 1. Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

function parOuImpar(numero){

    if(parseInt(numero) % 2 === 0){
        console.log("O número " + numero + " é par")
    } else{
        console.log("O número " + numero + " é ímpar")
    }
}

parOuImpar(10)
parOuImpar("3")
parOuImpar(5)