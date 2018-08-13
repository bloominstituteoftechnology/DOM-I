const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");

function startTimer() {
    const msTensInterval = window.setInterval(function() {
        if (this.msTens.innerText === "9") {
            this.msTens.innerText = 0;
        } else {
            this.msTens.innerText = (Number(this.msTens.innerText) || 0) + 1;
        }
    }, 10);

    const msHundredsInterval = window.setInterval(function() {
        if (this.msHundreds.innerText === "9") {
            this.msHundreds.innerText = 0;
        } else {
            this.msHundreds.innerText = (Number(this.msHundreds.innerText) || 0) + 1;
        }
    }, 100);

    const secondOnesInterval = window.setInterval(function() {
        if (this.secondOnes.innerText === "9") {
            this.secondOnes.innerText = 0;
        } else {
            this.secondOnes.innerText = (Number(this.secondOnes.innerText) || 0) + 1;
        }
    }, 1000);

    resetButton.disabled = true;

    window.setTimeout(function() {
        clearInterval(msTensInterval);
        clearInterval(msHundredsInterval);
        clearInterval(secondOnesInterval);
        this.secondTens.innerText = 1;
        for (let digit of document.getElementsByClassName("digit")) {
            digit.style.color = "red";
        }
        resetButton.disabled = false;
    }, 10000);
} // startTimer()

// startButton
const body = document.getElementsByTagName("body")[0];

const buttonsDiv = document.createElement("DIV");
buttonsDiv.style.marginLeft = "50px";

body.appendChild(buttonsDiv);

const startButton = document.createElement("BUTTON");
startButton.innerText = "Start";
startButton.addEventListener("click", function() {
    startButton.disabled = true;
    return startTimer();
});

buttonsDiv.appendChild(startButton);

// resetButton
const resetButton = document.createElement("BUTTON");
resetButton.innerText = "Reset";
resetButton.addEventListener("click", function() {
    msTens.innerText = 0;
    msHundreds.innerText = 0;
    secondOnes.innerText = 0;
    secondTens.innerText = 0;
    for (let digit of document.getElementsByClassName("digit")) {
        digit.style.color = "black";
    }
    startButton.disabled = false;
    resetButton.disabled = true;
    return resetTimer();
});

buttonsDiv.appendChild(resetButton);

// Styles for startButton and resetButton
startButton.style.padding = "10px 30px";
resetButton.style.padding = "10px 30px";
startButton.style.border = "2px solid black";
resetButton.style.border = "2px solid black";

resetButton.style.marginLeft = "50px";
