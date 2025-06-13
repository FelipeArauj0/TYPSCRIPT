// Desafio 01 - Filtrando e Ordenando Produtos Indisponíveis
type Produto = {
    id: number,
    nome: string,
    preco: number,
    disponivel: boolean
}

let produtos: Produto[] = [
    {
        id: 1,
        nome: "Panela de pressão",
        preco: 59.99,
        disponivel: true
    },
    {
        id: 2,
        nome: "Notbook",
        preco: 1499.99,
        disponivel: false
    },
    {
        id: 3,
        nome: "alicate",
        preco: 299.99,
        disponivel: false
    },
    {
        id: 4,
        nome: "Teclado",
        preco: 89.99,
        disponivel: true
    },
    {
        id: 5,
        nome: "Mouse",
        preco: 49.99,
        disponivel: false
    }
];

console.log("produtos indisponiveis ordenados por nome:")
console.log(produtos
    .filter(p => !p.disponivel)
    .sort((a,b) => a.nome.localeCompare(b.nome))
    .map(p => `${p.nome} - R$ ${p.preco.toFixed(2)}`)
    .toString()
    .replace(/,/g, "\n"));

