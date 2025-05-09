const rest = document.getElementById('rest');

const numeroFinal = 0;

function numero() {
    const rest = document.getElementById('rest'); 
    for (let i = 10; i >= 0; i--) {
        rest.innerHTML += `${i} Lançar!<br>`;
    }
}

numero();
