const btn = document.getElementById("morse-btn");

//OUTPUT DONDE SE VE EL MORSE
const morseSalida = document.getElementById("morse");

//OUTPUT DONDE SE VE EL MORSE TRADUCIDO
const textoSalida = document.getElementById("texto");

//MODIFICAR EL TEXTO
const espacio = document.getElementById("espacio");
const borrar = document.getElementById("borrar")

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
  if (morse === ".-") {textoSalida.textContent += "A";}
  else if (morse === "-...") { textoSalida.textContent += "B";}
  else if (morse === "-.-.") { textoSalida.textContent += "C";}
  else if (morse === "-..")  { textoSalida.textContent += "D";}
  else if (morse === ".")    { textoSalida.textContent += "E";}
  else if (morse === "..-.") { textoSalida.textContent += "F";}
  else if (morse === "--.")  { textoSalida.textContent += "G";}
  else if (morse === "....") { textoSalida.textContent += "H";}
  else if (morse === "..")   { textoSalida.textContent += "I";}
  else if (morse === ".---") { textoSalida.textContent += "J";}
  else if (morse === "-.-")  { textoSalida.textContent += "K";}
  else if (morse === ".-..") { textoSalida.textContent += "L";}
  else if (morse === "--")   { textoSalida.textContent += "M";}
  else if (morse === "-.")   { textoSalida.textContent += "N";}
  else if (morse === "---")  { textoSalida.textContent += "O";}
  else if (morse === ".--.") { textoSalida.textContent += "P";}
  else if (morse === "--.-") { textoSalida.textContent += "Q";}
  else if (morse === ".-.")  { textoSalida.textContent += "R";}
  else if (morse === "...")  { textoSalida.textContent += "S";}
  else if (morse === "-")    { textoSalida.textContent += "T";}
  else if (morse === "..-")  { textoSalida.textContent += "U";}
  else if (morse === "...-") { textoSalida.textContent += "V";}
  else if (morse === ".--")  { textoSalida.textContent += "W";}
  else if (morse === "-..-") { textoSalida.textContent += "X";}
  else if (morse === "-.--") { textoSalida.textContent += "Y";}
  else if (morse === "--..") { textoSalida.textContent += "Z";}
  else {textoSalida.textContent += "";}

  morseSalida.textContent = "";
}

espacio.addEventListener("click", putEspacio);
borrar.addEventListener("click", eliminar)

// Eventos móvil
btn.addEventListener("pointerdown", iniciar);
btn.addEventListener("pointerup", terminar);
