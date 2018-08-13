const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");

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

window.setTimeout(function() {
    clearInterval(msTensInterval);
    clearInterval(msHundredsInterval);
    clearInterval(secondOnesInterval);
    this.secondTens.innerText = 1;
    for (let digit of document.getElementsByClassName("digit")) {
        digit.style.color = "red";
    }
}, 10000);
