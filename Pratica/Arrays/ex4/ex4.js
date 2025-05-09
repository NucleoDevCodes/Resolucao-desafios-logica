const rest = document.getElementById('rest');

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

function ticket() {
    mensagens.forEach((element) =>
        rest.innerHTML += `<p>Notificação: ${element}</p>`      
       );
}