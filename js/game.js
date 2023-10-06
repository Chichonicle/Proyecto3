let nRows = 10;
let winnerChoice = [];
const colours = sessionStorage.getItem("gameColours")
console.log(colours);

let availableColours = colours.split(',')
console.log(availableColours);
const calculateRandom = () => {
    let randomNumber = [];
    for (let i = 0; i < 4; i++) {
        randomNumber.push(Math.floor(Math.random() * availableColours.length));
    }
    return randomNumber;
}



