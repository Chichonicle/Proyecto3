
const saveName = () => {
    let name = document.getElementById("playerName").value;

    if (name == "") {
        sessionStorage.setItem("name", "Player 1");
    } else {
        sessionStorage.setItem("name", name);
    }
}


let name = sessionStorage.getItem("playerName")



const saveLevelBeginner = () => {
    sessionStorage.setItem("level", "beginnerRow");
    window.location.href = "./colours.html";
}
const saveLevelIntermediate = () => {
    sessionStorage.setItem("level", "intermediateRow");
    window.location.href = "./colours.html";
}
const saveLevelAdvanced = () => {
    sessionStorage.setItem("level", "advancedRow");
    window.location.href = "./colours.html";
}

let selectedLevel = sessionStorage.getItem("level");
let selected = document.getElementById(selectedLevel);

window.onload = (event) => {
    selected.style.display = "flex";
}

window.addEventListener("load", () => startup());

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
let objectChosenColours = {};
let arrayChosenColours = [];

const startup = () => {
    arrayColorPicker.map(
        (element) => {
            element.value = "#000000";
            element.addEventListener("input", (event) => updateSquare(event, element));
            element.select();
        }
    )
}

const updateSquare = (event, element) => {
    let colorSquare = document.getElementById(`square${element.id}`);
    colorSquare.style.backgroundColor = event.target.value;
    let color = getComputedStyle(colorSquare).backgroundColor;
    objectChosenColours[element.id] = color;
}





