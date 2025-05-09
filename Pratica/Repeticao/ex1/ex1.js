const rest = document.getElementById('rest');
const numeroFinal = 5;

function numero() {
    for (let i = 1; i <= numeroFinal; i++) {
        rest.innerHTML += `${i}`
    }
}

numero();
