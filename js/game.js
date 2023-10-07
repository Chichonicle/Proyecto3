
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
