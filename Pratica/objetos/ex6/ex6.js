const rest = document.getElementById('rest')

const maquina = {
    nome: 'Esteira Transportadora',
    funcionando: true,
    exibirStatus: function () {
        if (this.funcionando) {
           rest.innerHTML = `<p>A máquina ${this.nome} está em funcionamento.</p>`;
        } else {
           rest.innerHTML = `<p>A máquina ${this.nome} está parada.</p>`;
        }
      }
  };
  
  maquina.exibirStatus();








