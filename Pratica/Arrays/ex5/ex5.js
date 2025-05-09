const rest = document.getElementById('rest')

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

function tarefa() {
    

tarefas.push('Pagar boletos');
rest.innerHTML += `<p>Lista após adicionar:", ${tarefas}</p>`


tarefas.pop();
rest.innerHTML += `<p>Lista após remover a última tarefa:", ${tarefas} </p>`


}