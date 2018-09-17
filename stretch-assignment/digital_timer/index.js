let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
msTens.innerText = 0;
msHundreds.innerText = 0;
secondOnes.innerText = 0;
secondTens.innerText = 0;


let incMSTens = window.setInterval(incrementMSTens, 10);
let incMSHundreds = window.setInterval(incrementMSHundreds, 100);
let incSecondOnes = window.setInterval(incrementSecondOnes, 1000);
let incSecondTens = window.setInterval(incrementSecondTens, 10000);

function incrementMSTens() {
    msTens.innerText++;
}

function incrementMSHundreds() {
    msHundreds.innerText++;
}

function incrementSecondOnes() {
    secondOnes.innerText++;
}

function incrementSecondTens() {
    window.clearInterval(incMSTens);
    window.clearInterval(incMSHundreds);
    window.clearInterval(incSecondOnes);
    msTens.innerText = 0;
    msHundreds.innerText = 0;
    secondOnes.innerText = 0;
    secondTens.innerText++;
    window.clearInterval(incSecondTens);
}

