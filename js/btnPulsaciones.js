const btn = document.getElementById("morse-btn");
const salida = document.getElementById("salida");

let tiempoInicio = 0;
const UMBRAL = 300; // ms (ajustable)

function iniciar() {
  tiempoInicio = Date.now();
}

function terminar() {
  const duracion = Date.now() - tiempoInicio;

  if (duracion < UMBRAL) {
    salida.textContent += "·";
  } else {
    salida.textContent += "—";
  }
}

// PC
btn.addEventListener("mousedown", iniciar);
btn.addEventListener("mouseup", terminar);

// Celular
btn.addEventListener("touchstart", iniciar);
btn.addEventListener("touchend", terminar);
