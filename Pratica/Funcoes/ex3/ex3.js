const rest = document.getElementById('rest');

function medias() {
    let n1 = Number(prompt('Digite sua nota:'));
    let n2 = Number(prompt('Digite sua nota:'));

    // Verifica se algum dos valores não é um número
    if (isNaN(n1) || isNaN(n2)) {
        rest.innerHTML += `<p>Valor inválido.</p>`;
        return;
    }

    let media = (n1 + n2) / 2;

    rest.innerHTML += `
        <p>A média das notas: ${media.toFixed(2)}</p>
    `;
}


const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
 
console.log(calcularMedia(7, 10));

