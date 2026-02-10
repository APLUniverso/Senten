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
    salida.textContent = "";

    const mensaje = inputText.value.toUpperCase() + " ";
    let codigoMorse = [];
    let palabra = [];

    for (const letra of mensaje) {
        if (letra === " ") {
            codigoMorse.push("(" + palabra.join("/") + ")");
            palabra = [];
        } else if (letraAMorse[letra]) {
            palabra.push(letraAMorse[letra]);
        }
    }

    inputText.value = "";
    salida.textContent = codigoMorse.join(" | ");
}

btnTraducir.addEventListener("click",crearMensaje)

inputText.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        crearMensaje();
    }
});