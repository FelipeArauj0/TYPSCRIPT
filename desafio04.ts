// 4️⃣ Crie uma função enviarMensagem que recebe:
// mensagem: string

// destinatario?: string (opcional)

// Se o destinatário não for informado, envie para "suporte@empresa.com".

function enviarMensagem(mensagem: string, destinatario?:string): string{
    const emailDestinatario = destinatario ? destinatario : "suporte@empresa.com";
    return `Mensagem enviada para ${emailDestinatario}: ${mensagem}`; 
}

console.log(enviarMensagem("Olá Mundo!, preciso de ajuda."));