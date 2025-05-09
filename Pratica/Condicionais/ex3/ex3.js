const result = document.getElementById('result');

const idade = 15;

function idades() {
    const digite = Number(prompt('Digite a idade:'));

    if (digite < 12) {
        result.innerHTML += `<p>${digite} , Infantil.</p>`;
    } else if (digite >= 12 && digite < 18) {
        result.innerHTML += `<p>${digite} , Juvenil.</p>`;
    } else {
        result.innerHTML += `<p>${digite} , Adulto.</p>`;
    }
}



 
if (idade < 12) {
  console.log("Infantil");
} else if (idade >= 12 && idade < 18) {
  console.log("Juvenil");
} else {
  console.log("Adulto");
}
