const rest = document.getElementById('rest')

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    modeloAntigo: 'Corolla XEi'
  };

function carros() {
  rest.innerHTML = `
    <p>marca: : ${carro.marca}</p>
     <p>modelo: ${carro.modelo}</p>
     <p>ano: ${carro.ano}</p>

    
  `;
}

carros()






//const carro = {
   // marca: 'Toyota',
   // modelo: 'Corolla',
   // ano: 2022,
   // modeloAntigo: 'Corolla XEi'
  //};
  
  //delete carro.modeloAntigo;
  
  //console.log(carro);