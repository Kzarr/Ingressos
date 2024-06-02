function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (quantidade < 1){
        alert('A quantidade precisa ser no mínimo 1');
    }
    if (tipoDeIngresso.value == 'pista'){
        comprarPista(quantidade);
    } else if (tipoDeIngresso.value == 'superior'){
        comprarSuperior(quantidade);
    } if (tipoDeIngresso.value == 'inferior'){
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadePista < quantidade){
        alert('Quantidade indisponível');
        }else if (quantidade < 1){
            alert('A quantidade precisa ser no mínimo 1');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
    }
}
function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeSuperior < quantidade){
        alert('Quantidade indisponível');
    }else if (quantidade < 1){
        alert('A quantidade precisa ser no mínimo 1');
    }else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
    }
}
function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeInferior < quantidade){
        alert('Quantidade indisponível');
    }else if (quantidade < 1){
        alert('A quantidade precisa ser no mínimo 1');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
    }
}