const result = document.getElementById('result');

const bateria = 65;

function sistema() {
    const statusBateria = (bateria < 20) 
    ? "Crítica" 
    : (bateria <= 80) 
      ? "Moderada" 
      : "Cheia";

      result.innerHTML += `<p>${statusBateria}</p>`
 
}


