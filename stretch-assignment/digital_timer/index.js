
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let semicolon = document.querySelector("#colon");

msTens.textContent = 0;
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

function secTens() {
    if (secondTens.textContent === "0") {
        secondTens.textContent = 1;
        msTens.style.color = "red";
        msHundreds.style.color = "red";
        secondOnes.style.color = "red";
        secondTens.style.color = "red";
        colon.style.color = "red";
        clearInterval(timer);
    } 
    else{
        secondTens.textContent = parseInt(secondTens.textContent) + 1;
    }
}

function secOnes() {
    if (secondOnes.textContent === "-") {
        secondOnes.textContent = 1;
    } 
    else if (secondOnes.textContent === "9") {
        secondOnes.textContent = 0;
        secTens();
    }
    else{
        secondOnes.textContent = parseInt(secondOnes.textContent) + 1;
    }
}

function msHund() {
    if (msHundreds.textContent === "-") {
        msHundreds.textContent = 0;
    } 
    else if (msHundreds.textContent === "6") {
        msHundreds.textContent = 0;
        secOnes();
    }
    else{
        msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
    }
}

function msTen() {
    if (msTens.textContent === "-") {
        msTens.textContent = 0;
    } 
    else if (msTens.textContent === "9") {
        msTens.textContent = 0;
        msHund();
    }
    else{
        msTens.textContent = parseInt(msTens.textContent) + 1;
    }
}

let timer = setInterval(msTen, 10);
