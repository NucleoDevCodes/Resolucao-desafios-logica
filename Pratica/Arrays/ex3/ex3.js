const rest = document.getElementById('rest');

const listaEstudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

function mostrarEstudantes() {
    for (let name of listaEstudantes) {
        rest.innerHTML += `<p>Estudante: ${name}</p>`;
    }
}

mostrarEstudantes();
