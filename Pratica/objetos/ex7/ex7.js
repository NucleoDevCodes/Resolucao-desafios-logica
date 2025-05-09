const rest = document.getElementById('rest')

function montarObjeto(arrPares) {
  const resultado = {};

  for (const [chave, valor] of arrPares) {
      resultado[chave] = valor;
  }

  return resultado;
}

const dados = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
];

rest.innerHTML += `<p>${montarObjeto(dados)}</p>`

