const rest = document.getElementById('rest')

const pedidos = ['camiseta', 'calça', 'tênis'];

function copia() {

pedidos.push('boné');
rest.innerHTML += `<p> Array copia:", ${pedidos}</p>`


pedidos.pop()
rest.innerHTML += `<p>Array original:", ${pedidos} </p>`


}



//const pedidos = ['camiseta', 'calça', 'tênis'];

const pedidosCopia = pedidos.slice();

pedidosCopia.push('boné');

console.log("Array original:", pedidos);
console.log("Array copiado:", pedidosCopia);