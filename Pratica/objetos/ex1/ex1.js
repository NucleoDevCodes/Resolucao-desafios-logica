const rest = document.getElementById('rest')

const produto = {
    nome: 'Fone de ouvido',
    preco: 149.9,
    disponivel: true
  };

  function compra() {
    rest.innerHTML = `
    <p>Nome: ${produto.nome}</p>
    <p>Preco: ${produto.preco}</p>
    <p>Disponivel: ${produto.disponivel}</p>
  `;
    
  

  }

  compra()

