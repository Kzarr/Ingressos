let historicoDeCompras = [];

function comprar() {
    const tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);
    let limiteMaximo = 10;

    if (quantidade > limiteMaximo) {
        alert(`Você só pode comprar até ${limiteMaximo} ingressos por vez.`);
        return;
    }
    
    if (isNaN(quantidade) || quantidade < 1) {
        alert('A quantidade precisa ser um número válido. No mínimo 1');
        return; // Sai da função se a quantidade for inválida
    }
    if (!['pista', 'superior', 'inferior'].includes(tipoDeIngresso)) {
        alert('Tipo de ingresso inválido');
        return;
    }

    compraIngresso(tipoDeIngresso, quantidade)
}

function compraIngresso(tipo, quantidade) {
    const elementoQuantidade = document.getElementById(`qtd-${tipo}`);
    let quantidadeDisponivel = parseInt(elementoQuantidade.textContent);
    let palavraIngresso = quantidade > 1 ? 'ingressos' : 'ingresso';

    if (quantidadeDisponivel < quantidade) {
        alert('Quantidade indisponível');
    } else {
        quantidadeDisponivel -= quantidade;
        elementoQuantidade.textContent = quantidadeDisponivel

        //Adiciona a compra ao histórico
        historicoDeCompras.push(tipo, quantidade);
        alert(`Compra realizada com sucesso!${quantidade} ${palavraIngresso} para ${tipo}.`);
        console.log('Histórico de comprar:', historicoDeCompras); //Exibe o histórico no console.
    }
}
