const rest = document.getElementById('rest');


const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;



let segundos = 0;
 
do {
    segundos++;
    rest.innerHTML += `<p>Aquecendo... segundo ${segundos}</p>`
   
 
    if (segundos === temperaturaIdealAlcancadaEm) {
            rest.innerHTML += `<p>Temperatura ideal atingida.</p>`
       
    }
 
} while (segundos < tempoMinimo);
 
 rest.innerHTML += `<p>Tempo total de aquecimento: ${segundos} segundos</p>`;