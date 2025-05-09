const rest = document.getElementById('rest');


const totalDias = 10;

let dia = 1;
let economia = 0;
 
do {
  economia += dia;
  dia++;
} while (dia <= totalDias);

rest.innerHTML += `<p>Total economizado: R$ ${economia}</p>`;
 


