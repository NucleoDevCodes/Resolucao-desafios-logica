const rest = document.getElementById('rest')

const precos = [100, 80, 50, 120];

function maps() {
    const desconto = precos.map(preco => preco * 0.9);

    rest.innerHTML += `<p>${desconto} </p>`


}