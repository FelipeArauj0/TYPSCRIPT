import prompt from 'prompt-sync';
import { readFileSync, writeFileSync } from 'fs';
import { json } from 'stream/consumers';


interface Produto {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    quantidade_em_estoque: number,
    categoria?: string
}
let produtos: Produto[] = JSON.parse(readFileSync('produtos.json', 'utf-8'));

function cadastrarProduto(
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoria?: string
): Produto {
    const novoProduto: Produto = {
        id: produtos.length + 1,
        nome,
        descricao,
        preco,
        quantidade_em_estoque: quantidade,
        categoria: categoria || "Sem categoria"
    }
    produtos.push(novoProduto)
    writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));
    console.log(`Produto ${nome} cadastrado com sucesso!`)
    return novoProduto;
}
const input = prompt();
console.log(`${'=='.repeat(10)} BEM-VINDO AO SISTEMA ${'=='.repeat(10)}`)

// cadastrar produtos
const nomeProduto = input(`Digite o nome do produto: `)
const descricaoProduto = input(`Digite a descrição do produto: `)
const precoProduto = parseFloat(input(`Digite o Preço do produto: `))
const quantidade = parseInt(input(`Digite a quantidade: `))
const categoriaProduto = input(`Digite a categoria do produto (opcional): `)

cadastrarProduto(
    nomeProduto,
    descricaoProduto,
    precoProduto,
    quantidade
)
// tipagem de produtos


// listagem de produtos
console.log(produtos);
// buscar produtos por id ou nome

// atualizar informações de produtos


// remover produtos