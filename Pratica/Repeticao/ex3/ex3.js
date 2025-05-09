const rest = document.getElementById('rest');


let numeroFinal = 10;


function numeros() {
   for(let i = 1 ; i <= numeroFinal ; i++)  {
    if(i % 2 === 0) {

        rest.innerHTML += `<p>${i} </p>`
    }

   }
}
