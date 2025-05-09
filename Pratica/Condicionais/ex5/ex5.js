const result = document.getElementById('result');

function admin() {
    const digite = prompt('Digite o nome do usuário:').toLowerCase();
    const mensagem = (digite === "admin") ? "Login bem-sucedido!" : "Usuário inválido.";
    result.innerHTML += `<p>${mensagem}</p>`;
}