const rest = document.getElementById('rest')

const manutencao = {
    jan: 2,
    fev: 0,
    mar: 5,
    abr: 4,
    mai: 0,
    jun: 7
  };
  
  let totalDias = 0;
  let mesesComParada = 0;
  
  for (let mes in manutencao) {
    const dias = manutencao[mes];
    totalDias += dias;
  
    if (dias > 0) {
      mesesComParada++;
    }
  }
  
  rest.innerHTML += `<p>Total de dias parados: ${totalDias}</p>`
  rest.innerHTML += `Meses com manutenção registrada: ${mesesComParada}</p>`

  
  if (totalDias > 20) {
      rest.innerHTML += '<p>Status: Atenção! Acima do limite anual.</p>'

  } else {
     rest.innerHTML += '<p>Status: Dentro do limite anual.</p>'    
  }