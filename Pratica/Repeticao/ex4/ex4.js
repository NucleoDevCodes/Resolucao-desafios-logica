const rest = document.getElementById('rest');

const senha = "seguranç@2025";

function senhas() {
    for (let i = 0; i < senha.length; i++) {
        rest.innerHTML += `Caractere ${i + 1}: ${senha[i]} </p>`
     
    }

}
  
