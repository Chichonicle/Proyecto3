
let filaActual = 1;
const maxFilas = 10;
let combinacionSecreta = [];
let colores = JSON.parse(sessionStorage.getItem("gameColours"));

function generarCombinacionSecreta() {
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * colores.length);
    combinacionSecreta.push(colores[randomIndex]);
  }
}
generarCombinacionSecreta()

let coloresSecretosHTMLElements = document.querySelectorAll(".combsecreta .color-secreto");
let coloresSecretosHTMLElementsArray = Array.from(coloresSecretosHTMLElements);
coloresSecretosHTMLElementsArray.forEach((spanColor, index) => {
  spanColor.style.backgroundColor = combinacionSecreta[index];
});

const coloresSeleccionados = document.querySelectorAll(".color-seleccionado");
coloresSeleccionados.forEach((spanColor, index) => {
  spanColor.style.backgroundColor = colores[index];
});
const botones = document.querySelectorAll(".color-seleccionado");
let elementosFilaActual = document.querySelectorAll(`.fila-${filaActual}`);
const elementosPintados = new Set();
let indiceElementoActual = 0;

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const colorSeleccionado = boton.style.backgroundColor;

    if (elementosPintados.has(elementosFilaActual[indiceElementoActual])) {
      return;
    }

    elementosFilaActual[indiceElementoActual].style.backgroundColor = colorSeleccionado;
    elementosPintados.add(elementosFilaActual[indiceElementoActual]);

    indiceElementoActual++;

    if (indiceElementoActual === elementosFilaActual.length) {
    }
  });
});

const botonBorrar = document.querySelector(".borrar");

botonBorrar.addEventListener("click", () => {
  if (elementosPintados.size > 0) {
    const ultimoElementoPintado = elementosFilaActual[indiceElementoActual - 1];
    ultimoElementoPintado.style.backgroundColor = "";

    elementosPintados.delete(ultimoElementoPintado);
    indiceElementoActual--;
  }
});

document.querySelector("#aceptar1").addEventListener("click", () => {
  if (indiceElementoActual === elementosFilaActual.length) {
    compararCombinacion();
    bloquearFilaActual();
    pasarSiguienteFila();
  } else {
  }
});

function bloquearFilaActual() {
    const elementosFila = document.querySelectorAll(`.fila-${filaActual}`);
    elementosFila.forEach((elemento) => {
      elemento.style.pointerEvents = "none";
    });
  }

  function pasarSiguienteFila() {
    filaActual++;
    const maxFilasVisible = maxFilas;
    if (filaActual > maxFilasVisible) {
      window.location.href = "../pages/loser.html";
      return;
    }
  
    elementosFilaActual = document.querySelectorAll(`.fila-${filaActual}`);
    elementosFilaActual.forEach((elemento) => {
      elemento.style.pointerEvents = "auto";
    });
    indiceElementoActual = 0;
  }
  
  