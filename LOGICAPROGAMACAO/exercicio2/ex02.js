let prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite a 1ª nota: "));
let n2 = Number(prompt("Digite a 2ª nota: "));
let n3 = Number(prompt("Digite a 3ª nota: "));

let soma = n1 + n2 + n3;
let media = soma / 3;

if(media >= 7){
    console.log(`media: ${media.toFixed(2)} - Aprovado`);
} else if(media >= 5 && media < 7){
    console.log(`media: ${media.toFixed(2)} - Recuperação`);
} else{
    console.log(`media: ${media.toFixed(2)} - Reprovado`);
}