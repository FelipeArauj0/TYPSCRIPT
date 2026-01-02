let prompt = require('prompt-sync')();
let valores = 5;
let numeros = [];
let pares = 0;
let impares = 0;
let maiorNumero = null;

for (let i = 1; i <= valores; i++) {
    let numero = Number(prompt(`Digite o ${i}ª número: `));
    numeros.push(numero);
}

console.log(`Numeros: [${numeros}]`);

// calcular quantos numeros dentro do array sao pares
numeros.forEach((num, index) => {
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
});

//Qual foi o maior numero digitado
maiorNumero = numeros.reduce((maior, atual) => {
    return atual > maior ? atual : maior;
})

console.log(`${'-'.repeat(40)}`);
console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
console.log(`O maior número digitado foi: ${maiorNumero}`);
console.log(`${'-'.repeat(40)}`);