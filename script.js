
const gato = document.getElementById("titulo"); 
const goofy = document.getElementById("texto"); 

const listaTextos = ["Soy un gato muy peculiar", "Tomo en vez de Churu, champús", "Y salgo el fincho a la Topa a bailar."];

let estadoInicial = true; 
let indice = 0; 

gato.addEventListener("click", () => {
    if(estadoInicial === true) {
    gato.innerText = "¡Hola, criaturitas del Señor!";
    gato.style.backgroundColor = "orange"; 
    gato.style.color = "blue"; 
    estadoInicial = false; 
}

    else {
    gato.innerText = "probando algo nuevo";
    gato.style.backgroundColor = "orange"; 
    gato.style.color = "yellow";
    estadoInicial = true; 
    }

}

)

//forma "elegante" el cambio al hacer clic: estadoInicial = !estadoInicial;  signo exclamación invierte el valor 


goofy.addEventListener ("click", () => {
    goofy.innerText = listaTextos[indice]; 
    if(indice < listaTextos.length) {
        indice = indice + 1; 
    } else {
        goofy.innerText = "FIN."; 
    }
    
}

)

                