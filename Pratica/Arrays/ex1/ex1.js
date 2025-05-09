const rest = document.getElementById('rest')

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

function comida() {
    rest.innerHTML += `<p>Segundo item da lista:", ${ listaDeCompras[1]}</p>`

    

    listaDeCompras[listaDeCompras.length - 1] = 'fruta';

    rest.innerHTML += `<p>Lista após modificação:, ${listaDeCompras} </p>`

}


//Segundo item da lista: feijão
//Lista após modificação: ['arroz', 'feijão', 'macarrão', 'fruta']




console.log("Segundo item da lista:", listaDeCompras[1]);

listaDeCompras[listaDeCompras.length - 1] = 'fruta';

console.log("Lista após modificação:", listaDeCompras);