const rest = document.getElementById('rest');

function numeros() {
    let n  = Number(prompt('Digite um número:'));

    if ((n) => n % 2 === 0 ? "Par" : "Ímpar") {
        rest.innerHTML += `<p>Você digitou o número ímpar: ${n}</p>`;
        return;
    }

   
}



const verificarParidade = (numero) => {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  };
   
  console.log(verificarParidade(8));
  console.log(verificarParidade(5)); 
