// Crie um tipo chamado Chamado com os campos:
// id: number

// mensagem: string

// status: "pendente" | "em atendimento" | "resolvido"

// Depois, crie uma função exibirResumoChamado que recebe um chamado e retorna uma string formatada com as informações.

type Chamado = {
    id: number,
    mensagem: string,
    status: "pendente" | "em atendimento" | "resolvido"
}

function exibirResumoChamado(chamado: Chamado): string{
    return `ID: ${chamado.id}\nMensagem: ${chamado.mensagem}\nStatus: ${chamado.status}`
}

console.log(exibirResumoChamado({
    id: 1,
    mensagem: "Problema com impressora",
    status: "resolvido"
}));