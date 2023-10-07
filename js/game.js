
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

