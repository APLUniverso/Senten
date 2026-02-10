const btn = document.getElementById("morse-btn");

//OUTPUT DONDE SE VE EL MORSE
const morseSalida = document.getElementById("morse");

//OUTPUT DONDE SE VE EL MORSE TRADUCIDO
const textoSalida = document.getElementById("texto");

//MODIFICAR EL TEXTO
const espacio = document.getElementById("espacio");
const borrar = document.getElementById("borrar")

const morseDiccionario = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z"
};

const PAUSA_LETRA = 800;
const UMBRAL = 300;

let tiempoInicio = 0;
let temporizadorLetra = null;

function iniciar() {
  if (temporizadorLetra) {
    clearTimeout(temporizadorLetra);
  }

  tiempoInicio = Date.now();
}

function terminar() {
  const duracion = Date.now() - tiempoInicio;

  if (duracion < UMBRAL) {
    morseSalida.textContent += ".";
  } else {
    morseSalida.textContent += "-";
  }

  temporizadorLetra = setTimeout(() => {
    traducir();
  }, PAUSA_LETRA);
}

function eliminar(){
  textoSalida.textContent = textoSalida.textContent.slice(0, -1);
}

function putEspacio(){
  textoSalida.textContent += " ";
}

function traducir() {
  const morse = morseSalida.textContent;

  if (morseDiccionario[morse]) {
    textoSalida.textContent += morseDiccionario[morse];
  }
  
  morseSalida.textContent = "";
}

espacio.addEventListener("click", putEspacio);
borrar.addEventListener("click", eliminar)

// Eventos móvil
btn.addEventListener("pointerdown", iniciar);
btn.addEventListener("pointerup", terminar);
