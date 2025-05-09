const rest = document.getElementById('rest');

function parar() {
    for (let i = 1; i <= 20; i++) {
        if (i === 10) {
            rest.innerHTML += `<p>"Número proibido encontrado! Encerrando..."</p>`;

            break;
        }
        rest.innerHTML += `<p>${i}</p>`;
    }
}