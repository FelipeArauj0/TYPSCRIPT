let prompt = require('prompt-sync')();
// pedir uma palavra ou frase
let input = prompt("Digite uma palavra ou frase: ").toLowerCase();
let textoSemEspacos = input.split(" ").join("");
let vogais = ['a', 'e', 'i', 'o', 'u'];
let contadorVogais = 0;



for (let i =0; i < textoSemEspacos.length; i++){
    vogais.forEach((vogal)=>{
        if(textoSemEspacos[i] === vogal){
            contadorVogais++
        }
    })
}

if(contadorVogais === 0){
    console.log("Nenhuma vogal encontrada.");
} else{
    console.log("-".repeat(30) , "Resultado", "-".repeat(30));
    console.log(`A palavra/frase ${input} possui ${contadorVogais} vogais.`)
    console.log("-".repeat(70));
}
