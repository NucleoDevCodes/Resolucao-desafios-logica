const rest = document.getElementById('rest');

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
let i = 0;

function nomes() {
  while (entradas[i] !== "fim") {
    rest.innerHTML += `<p>Nome: ${entradas[i]}</p>`;
    i++;
  }
}
