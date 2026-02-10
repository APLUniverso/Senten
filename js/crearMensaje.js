const inputText = document.getElementById("text")
const salida = document.getElementById("salida")
const btnTraducir = document.getElementById("traducir")


function crearMensaje(){
    mensaje = inputText.value
    salida.textContent = mensaje
}



btnTraducir.addEventListener("click",crearMensaje)