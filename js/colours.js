const colorPickers = document.querySelectorAll('.inputColours');
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener('click', () => {
    const gameColours = Array.from(colorPickers).map(element => element.value);
    sessionStorage.setItem('gameColours', JSON.stringify(gameColours));
    window.location.href = './game.html';
});




