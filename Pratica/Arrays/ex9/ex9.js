const rest = document.getElementById('rest');

const participantes = [
    { nome: 'Ana', idade: 17 },
    { nome: 'Bruno', idade: 22 },
    { nome: 'Carla', idade: 19 },
    { nome: 'Daniel', idade: 15 },
    { nome: 'Eduarda', idade: 25 }
];

function aprova() {
    // Limpa o conteúdo anterior
    rest.innerHTML = '';

    const autorizados = participantes.filter(p => p.idade >= 18);

    autorizados.forEach(p => {
        rest.innerHTML += `<p>Acesso liberado para: ${p.nome}</p>`;
    });

    const aprovados = autorizados.map(p => p.nome).join(', ');
    
    rest.innerHTML += `<p>Lista de aprovados: ${aprovados}</p>`;
}




  
  const autorizados = participantes.filter(p => {
    p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
    return p.idade >= 18;
  });
  
  const aprovados = autorizados.map(p => p.nome);
  
  console.log("Lista de aprovados:", aprovados);

  
