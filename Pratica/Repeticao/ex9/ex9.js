const rest = document.getElementById('rest');

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];

let processadas = 0;

function caixa() {

    for (let i = 0; i < caixas.length; i++) {
        let valor = caixas[i];
    
        if (valor < 0) {
            rest.innerHTML += `<p>Caixa danificada, ignorada.</p>`
    
            continue;
        }
    
        rest.innerHTML += `<p> Caixa processada: ${valor}</p>`
    
        processadas++;
    
        if (processadas === 5) {
            rest.innerHTML += `<p>Limite de caixas processadas atingido!</p>`
    
            break;
        }
    }

}

