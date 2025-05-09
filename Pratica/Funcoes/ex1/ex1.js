const rest = document.getElementById('rest');


function nomes() {

   let nome = prompt('Digite seu nome:')

    rest.innerHTML += `<p>Olá, ${nome}! Bem-vindo(a)! </p>`

    

}



function saudacao(nome = "") {
    if (nome) {
      console.log(`Olá, ${nome}! Boas vindas!`);
    } else {
      console.log("Olá! Boas vindas!");
    }
  }
 
saudacao("Lucas");    
saudacao();