const rest = document.getElementById('rest');

function off() {
    let preco = Number(prompt('Digite o valor do produto:'));

    if (isNaN(preco)) {
        rest.innerHTML += `<p>Valor inválido.</p>`;
        return;
    }

    let desconto = preco * 0.10;
    let precoComDesconto = preco - desconto;

    rest.innerHTML += `
        <p>Valor original: R$ ${preco.toFixed(2)}</p>
        <p>Desconto (10%): R$ ${desconto.toFixed(2)}</p>
        <p>Valor a pagar: R$ ${precoComDesconto.toFixed(2)}</p>
    `;
}




function calcularDesconto(preco, desconto = 10) {
    const valorFinal = preco - (preco * desconto / 100);
    return valorFinal;
}
 
console.log(calcularDesconto(100, 20)); 
console.log(calcularDesconto(100));