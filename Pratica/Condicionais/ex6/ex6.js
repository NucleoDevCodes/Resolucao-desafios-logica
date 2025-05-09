const result = document.getElementById('result');

const frutasValidas = ["laranja", "abacaxi"];

function frutas() {
    const digite = prompt('Digite uma fruta:').toLowerCase();
    
    const mensagem = frutasValidas.includes(digite) 
        ? `Fruta compatível para a receita de ${digite}!` 
        : "Fruta incompatível para a receita.";
    
    result.innerHTML += `<p>${mensagem}</p>`;
}
