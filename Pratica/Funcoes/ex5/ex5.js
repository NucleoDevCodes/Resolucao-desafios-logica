const rest = document.getElementById('rest');

function pagar() {
    let distancia = Number(prompt('Digite a distância em km:'));
    let valor;

    if (distancia <= 5) {
        valor = 5;
    } else if (distancia <= 20) {
        valor = distancia * 0.5;
    } else {
        valor = 20;
    }

    rest.innerHTML += `<p>Valor a pagar: R$ ${valor.toFixed(2)}</p>`;
    return valor;
}



const calcularFrete = (distancia) => {
    if (distancia <= 5) {
      return 5;
    } else if (distancia <= 20) {
      return distancia * 0.5;
    } else {
      return 20;
    }
  };
