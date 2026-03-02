
const gato = document.getElementById("titulo"); 

gato.addEventListener("click", () => {
    gato.innerText = "¡Hola, criaturitas del Señor!";
    gato.style.backgroundColor = "orange"; 
    gato.style.color = "blue"; 
})