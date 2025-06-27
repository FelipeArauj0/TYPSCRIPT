# 🎯 Objetivo:
Criar um sistema de cadastro de produtos usando TypeScript, com foco em tipagem estática, organização do código, e princípios de estrutura de dados (arrays, objetos, validações).

# ✅ Requisitos Funcionais:
Cadastrar produtos

Nome (string)

Descrição (string)

Preço (number)

Quantidade em estoque (number)

Categoria (opcional, string)

Listar todos os produtos

Buscar produto por nome ou ID

Atualizar informações de um produto

Remover um produto

# 🧠 Requisitos Técnicos:
Recurso	Descrição
TypeScript	Criar tipos e interfaces para produto, retorno de funções, e arrays.
Validações	Não permitir cadastrar produtos com nome vazio, preço negativo ou quantidade inválida.
Modularização	Separar lógica em arquivos distintos: modelo, funções de manipulação, entrada/saída.
Persistência temporária	Armazenar dados em array (não precisa de banco agora).

# 🔧 Ferramentas sugeridas:
ts-node para executar sem compilar manualmente.

readline-sync ou prompt-sync para interagir via terminal.

fs (se quiser salvar os dados em um JSON local mais pra frente).

# 🧩 Exemplo de Interface:  
```
    interface Produto {
    id: string;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoria?: string;
    }
```
