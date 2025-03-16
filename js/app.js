let historicoDeCompras = [];

function exibirMensagens(mensagem, tipo = 'sucesso') {
    //1. Captura o elemento onde a mensagem será exibida
    const elementoMensagem = document.getElementById('mensagem');

    //2. Define o texto da mensagem
    elementoMensagem.textContent = mensagem

    //3. Adiciona uma classe para estilização
    elementoMensagem.className = `mensagem ${tipo} visible`;//Ex: 'mensagem sucesso' ou 'mensagem erro'

    //4. Remove a mensagem após alguns segundos
    setTimeout(() => {
        elementoMensagem.textContent = ''; // limpa o conteúdo
        elementoMensagem.className = 'mensagem'; // remove as classes adicionais
    }, 2000); //2000 milisegundos = 2 segundos
}

function comprar() {
    const tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);
    let limiteMaximoPorCompra = 10;

    if (quantidade > limiteMaximoPorCompra) {
        exibirMensagens(`Você só pode comprar até ${limiteMaximoPorCompra} ingressos por vez.`, 'erro');
        return;
    }
    
    if (isNaN(quantidade) || quantidade < 1) {
        exibirMensagens('A quantidade precisa ser um número válido. No mínimo 1', 'erro');
        return; // Sai da função se a quantidade for inválida
    }
    if (!['pista', 'superior', 'inferior'].includes(tipoDeIngresso)) {
        exibirMensagens('Tipo de ingresso inválido', 'erro');
        return;
    }
    comprarIngresso(tipoDeIngresso, quantidade)
}

function comprarIngresso(tipo, quantidade) {
    const elementoQuantidade = document.getElementById(`qtd-${tipo}`);
    let quantidadeDisponivel = parseInt(elementoQuantidade.textContent);
    let palavraIngresso = quantidade > 1 ? 'ingressos' : 'ingresso';

    if (quantidadeDisponivel < quantidade) {
        exibirMensagens('Quantidade indisponível', 'erro');
    } else {
        quantidadeDisponivel -= quantidade;
        elementoQuantidade.textContent = quantidadeDisponivel

        //Adiciona a compra ao histórico
        historicoDeCompras.push({tipo, quantidade});
        exibirMensagens(`Compra realizada com sucesso! ${quantidade} ${palavraIngresso} para ${tipo}.`, 'sucesso');
        console.log('Histórico de comprar:', historicoDeCompras); //Exibe o histórico no console.
    }
}
