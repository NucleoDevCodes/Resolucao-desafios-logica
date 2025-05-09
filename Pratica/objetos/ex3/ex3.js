const rest = document.getElementById('rest')

const receita = {
    nome: "Bolo de Cenoura",
    ingredientes: ["cenoura ralada", "açúcar", "farinha de trigo", "ovos", "fermento"],
    tempoPreparo: "45 minutos"
  };
  
  console.log("Ingrediente complementar:", receita.ingredientes[2]);


  function receitas() {

    rest.innerHTML = `
    <p>Ingrediente complementar:", ${receita.ingredientes[2]}</p>
  
  `;


  }

  receitas()