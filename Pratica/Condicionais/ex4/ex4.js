const result = document.getElementById('result');

const diaSemana = 6;

const semana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
const fimDeSemana = ['domingo', 'sabado'];

function verificarHorario() {
    const digite = prompt('Digite um dia da semana:').toLowerCase();

    if (fimDeSemana.includes(digite)) {
        result.innerHTML += `<p>${digite.charAt(0).toUpperCase() + digite.slice(1)}: A loja está aberta em horário especial: 10h às 14h.</p>`;
    } else if (semana.includes(digite)) {
        result.innerHTML += `<p>${digite.charAt(0).toUpperCase() + digite.slice(1)}: A loja está aberta no horário normal: 9h às 18h.</p>`;
    } else {
        result.innerHTML += `<p>Dia inválido. Por favor, digite um dia da semana válido.</p>`;
    }
}


//const diaSemana = 6;
 
if (diaSemana === 6 || diaSemana === 0) {
  console.log("A loja está aberta em horário especial: 10h às 14h.");
} else {
  console.log("A loja está aberta no horário normal: 9h às 18h.");
}
