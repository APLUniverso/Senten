const inputText = document.getElementById("text")
const salida = document.getElementById("salida")
const btnTraducir = document.getElementById("traducir")

const letraAMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--.."
  };

function crearMensaje(){
    salida.textContent = ""

    const mensaje = inputText.value
    const textoMayus = mensaje.toUpperCase();

    codigoMorse = []
    for (const letra of textoMayus) {
        codigoMorse.push(letraAMorse[letra])
    }

    salida.textContent = codigoMorse.join("/")
}



btnTraducir.addEventListener("click",crearMensaje)

inputText.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        crearMensaje();
    }
  });