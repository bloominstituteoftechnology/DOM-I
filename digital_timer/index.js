let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let counter = 0
let counterMs = 0;
let counterMsHundreds = 0;
function timerSeconds() {
    if(counter<9) {
        counter++
        secondOnes.innerHTML = counter;
    }
    else {
        secondOnes.innerHTML = "0";
    }
};

function timerTen() {
    secondTens.innerHTML = "1";
};

let a = setInterval(timerSeconds, 1000);
let b = setInterval(timerTen, 10000);
let c = setInterval(timerMsTens, 10)
let d = setInterval(timerMsHunreds, 100);

// function timerMsTens() {
//     if(counterMs < 100) {
//         counterMs = counterMs+10;
//         msTens.innerHTML = counterMs;
//     } else {
//         counterMs = 0;
//     }
// };

function timerMsTens() {
    if(counterMs < 90) {
        counterMs = counterMs+10;
        msTens.innerHTML = counterMs;
    } else {
        counterMs = 0;
    }
};



function timerMsHunreds() {
    if(counterMsHundreds < 9) {
        counterMsHundreds++;
        msHundreds.innerHTML = counterMsHundreds;
    } else {
        counterMsHundreds = 0;
    }
};

function atTen () {
    clearInterval(c);
    clearInterval(d);
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;

};

setInterval(atTen, 10000);