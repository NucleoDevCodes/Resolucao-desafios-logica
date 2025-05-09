const rest = document.getElementById('rest')

const dispositivos = [
  { nome: 'Impressora', status: 'ativo' },
  { nome: 'Scanner', status: 'inativo' },
  { nome: 'Projetor', status: 'ativo' }
];

function device() {
  for (const dispositivo of dispositivos) {
    rest.innerHTML = `
    <p>Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}</p>   
  `;
}
}

device()

