const rest = document.getElementById('rest')
const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

function books() {
    if (livros.indexOf(livroProcurado) !== -1) {
        rest.innerHTML += `<p>O livro "${livroProcurado}" está disponível. <p>`
      } else {
        rest.innerHTML += `O livro "${livroProcurado}" não foi encontrado. <p>`
       
      }


}


//const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
//const livroProcurado = 'O Cortiço';

if (livros.indexOf(livroProcurado) !== -1) {
  console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}