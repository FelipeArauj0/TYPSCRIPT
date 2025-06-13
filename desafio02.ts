// Desafio 01 - Função calcularDesconto(preco: number, desconto: number)
// Valida se o desconto está entre 0 e 100

// Retorna o preço final com desconto aplicado
function calcularDesconto(preco: number, desconto: number): number {
    if(desconto < 0 || desconto > 100){
        throw new Error("Desconto deve ser entre 0 e 100");
    }
    return preco - (preco * (desconto / 100))
}

console.log(calcularDesconto(300, 10));



