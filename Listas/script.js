// 1. Faça um Programa que leia um vetor de 5 números

let minhaLista = [1, 5, 3, 2, 10];

for (let i = 0; i < minhaLista.length; i++) {
    console.log(minhaLista[i]);
}

// ----------------------------------------

// 2. Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

// 2. Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inverso = [];

for (let i = numeros.length - 1; i >= 0; i--) {
  inverso.push(numeros[i]);
}

console.log(inverso);
