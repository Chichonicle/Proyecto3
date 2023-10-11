let usernameWin = document.getElementById('gameName');

let userLocal = localStorage.getItem("playerName");

usernameWin.innerText = userLocal;