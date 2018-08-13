// captire the html elements
const digits = document.querySelectorAll(".digit");
const secondT = document.getElementById('secondTens');
const secondO = document.getElementById('secondOnes');
const msH = document.getElementById('msHundreds');
const msT = document.getElementById('msTens');

// set the counters to 0
let counter = 0
let counterMillis = 0;
let counterMillisH = 0;


// Digit mover setups for callbacks on the timer interval 

//setup a digit mover for the seconds
function digitsSeconds() {
    if(counter<9) {
        counter++
        secondO.innerHTML = counter;
    }
    else {
        secondO.innerHTML = "0";
    }
};

// setup digits mover for tens
function digitsTen() {
    secondT.innerHTML = "1";
};

// setup digit mover for hundreds of ms
function timerMsHunreds() {
    if(counterMillisH < 9) {
        counterMillisH++;
        msH.innerHTML = counterMillisH;
    } else {
        counterMillisH = 0;
    }
};

// setup digit mover for tens of ms
function digitsMsTens() {
    if(counterMillis < 90) {
        counterMillis = counterMillis + 10;
        msT.innerHTML = counterMillis;
    } else {
        counterMs = 0;
    }
};



