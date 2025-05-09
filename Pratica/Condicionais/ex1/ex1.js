const result = document.getElementById('result');
let idade = 18

function permitir() {
    const digite = Number(prompt('Digite sua idade:'))
    if (digite >= 18) {
        result.innerHTML += `<p>Vc tem ${digite} , Acesso permitido.</p>`


    } else  {
        result.innerHTML += `<p>Vc tem ${digite} , Acesso negado..</p>`

    }

}