const rest = document.getElementById('rest');

const despesas = [120, 80, 45.5, 200, 60];

function calcularDespesas() {
  let total = 0;

  for (let i = 0; i < despesas.length; i++) {
    total += despesas[i];
  }

  rest.innerHTML += `<p>Total de despesas: R$ ${total.toFixed(2)} </p>`;
}

// Chamada da função (caso necessário)
calcularDespesas();
