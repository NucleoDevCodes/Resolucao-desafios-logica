const rest = document.getElementById('rest')

const configuracoes = {
  tema: 'Escuro',
  notificacoes: true,
  idioma: 'pt-BR' 
};

function config() {
  rest.innerHTML = `
    <p>Tema: ${configuracoes.tema}</p>
    <p>Notificações: ${configuracoes.notificacoes}</p>
    <p>Idioma: ${configuracoes.idioma}</p>
  `;
}

config()