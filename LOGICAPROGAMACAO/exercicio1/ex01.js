const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let sono = Number(prompt("Quantas horas você dormiu na noite passada? "));
let sonoIdeal = 8;

if(isNaN(sono) || sono < 0){
    console.log("Por favor, insira um número válido de horas.");
    process.exit(1);
}else if(sono >= sonoIdeal){
    console.log(`Boa, ${nome}! Você dormiu bem!`);
}else{
    console.log(`${nome}, tenta dormir mais hoje! Seu corpo merece descanso.`);
}
