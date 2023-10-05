const siguiente = document.getElementById('siguiente');
const playerName = document.getElementById('playerName');

 siguiente.addEventListener('click', () => {
    if (playerName.value !== "") {
        window.location.href = './colours.html';
    } else {
        alert("Escribe un nombre por favor.");
    }
    sessionStorage.setItem("playerName", playerName.value)
});

const colorPickers = document.querySelectorAll('.inputColours');
const colorBall = document.querySelectorAll('.colour');
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener('click', () => {
    const arrayColorPickers = Array.from(colorPickers);
    const gameColours = arrayColorPickers.map(element => element.value);
    sessionStorage.setItem(colours.toString(gameColours));
    window.location.href = './game.html';
});


