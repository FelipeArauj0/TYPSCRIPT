// tipos primiticos 
let nome: string = "João";
let idade: number = 27;
let ativo: boolean = true;

// tipos em função
function saudacao(nome:string): string{
    return nome;
}

// tipos em objeto
type Usuario={
    id:Number;
    nome: string;
    idade: number;
    email?: string; //opcional
}

let usuario: Usuario={
    id:1,
    nome:"maria",
    email:"maria.2@gmail.com",
    idade: 30
}

// Union Types
let statusAtendimento: "pendende" | "resolvido" | "cancelado" = "cancelado";

// a variavel statusAtendimento só pode receber os valores "pendente", "resolvido" ou "cancelado" muito util quando por exemplo queremos definir o status de um atendimento, ou o status de um pedido, etc.

// Arrays Tipados
// const nomes: string[] = ["Maria", "yui", "Daniela"];

// função com tipos genericos
function identidade<T>(valor: T): T{
    return valor;
}


// função genérica para pegar o primeiro elemento de um array
function primeiroElemento<T>(array: T[]): T | undefined {
    return array[Math.floor(array.length / 2)]; // Retorna o elemento do meio do array
}

// Usando com array de números
const numeros = [10, 20, 30];
const primeiroNumero = primeiroElemento(numeros); // tipo inferido: number

// Usando com array de strings
const nomes = ["Maria", "João", "Fernando", "Diego", "Bruno", "Raimundo", "Yui", "Ana"];
const primeiroNome = primeiroElemento(nomes); // tipo inferido: string

// console.log(primeiroNumero); // 20
