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

