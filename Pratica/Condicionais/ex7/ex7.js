const result = document.getElementById('result');

const carrinhoVazio = false;
 
function carrinho() {
    if (!carrinhoVazio) {
        result.innerHTML += <p>Compra finalizada com sucesso!</p>
      
      } else {
        result.innerHTML += <p>Não é possível finalizar a compra: carrinho vazio.</p>
    
      }

}