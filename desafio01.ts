// Desafio 01 - Filtrando e Ordenando Produtos Indisponíveis
type Produto = {
    id: number,
    nome: string,
    preco: number,
    disponivel: boolean
}

let estoque: Produto[] = [
    {
        id: 1,
        nome: "Carro Hot Wheels",
        preco: 15.00,
        disponivel: true
    },
    {
        id: 2,
        nome: "Max Steel",
        preco: 29.99,
        disponivel: false
    },
    {
        id: 3,
        nome: "Boneca Barbie",
        preco: 45.50,
        disponivel: true
    },
    {
        id: 4,
        nome: "Bola de Futebol",
        preco: 39.90,
        disponivel: false
    },
    {
        id: 5,
        nome: "Quebra-Cabeça",
        preco: 25.00,
        disponivel: false
    }
]

console.log(estoque.filter(produto => produto.disponivel === false).map(produto => `${produto.nome} - R$ ${produto.preco.toFixed(2)}`).sort()); // sort usado para ordenar os produtos indisponiveis por nome em ordem alfabética.
// console.log(estoque.filter(produto => produto.nome).map(produto => `${produto.id} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`));