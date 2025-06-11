function calcularDesconto(preco:number, desconto: number): number{
    return preco - (preco * (desconto / 100)); // retorna o preço com desconto aplicado
}

let precoProduto: number = 100;
let descontoProduto: number = 10;

console.log(`O preço do produto sem desconto é: R$ ${precoProduto.toFixed(2)}`)
console.log(`O preço do produto com desconto de ${descontoProduto}% é: R$ ${calcularDesconto(precoProduto, descontoProduto).toFixed(2)}`);