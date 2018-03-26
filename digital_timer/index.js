let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let counter = 0;

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

// setInterval(timerSeconds, 1000);
// setInterval(timerTen, 10000);
