const result = document.getElementById('result');

const temperatura = 22;


function teperatura() {
    const digite = Number(prompt('Digite a temperatura:'))
    if (digite <= temperatura) {
        result.innerHTML += `<p>${digite} , Frio!</p>`


    }else if(digite >= temperatura) {
        result.innerHTML += `<p>${digite} , Quente!</p>`

    } else if (digite >= temperatura ) {
          result.innerHTML += `<p>${digite} , Agradável!</p>`

    }

}


if (temperatura < 15) {
    console.log("Frio");
  } else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Agradável");
  } else {
    console.log("Quente");
  }

