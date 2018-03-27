// definitions
const allDigits = document.querySelectorAll('.digit');
let sTens = document.getElementById('secondTens');
let sOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

// const startButton = documents.getElementById('startButton');
// const resetButton = document.getElementById('resetButton');

// 0 for all digits
msTens.innerHTML = 0;
msHundreds.innerHTML = 0;
sOnes.innerHTML = 0;
sTens.innerHTML = 0;

timeStart();

// function; adds 1 msTens per 10ms and adjusts other digits accordingly
function add() {
    msTens.innerHTML++; // don't forget to specify what you're changing. eg.: '.innerHTML'
    if (msTens.innerHTML >= 10 ) {
        // msHundreds: to int, +1, then to string
        msHundreds.innerHTML++;
        // msTens: to int, +1, then to string
        msTens.innerHTML = 0; // reset msTens to 0
    }
    if (msHundreds.innerHTML >= 10) {
        sOnes.innerHTML++;
        msHundreds.innerHTML = 0;
    }
    if (sOnes.innerHTML >= 10) {
        sTens.innerHTML++;
        sOnes.innerHTML =0;
    }
    if (sTens.innerHTML >= 1) {
        window.clearInterval(timer);
        allDigits.forEach((element) => element.classList.add("redDigit"));
    }
}

// function; timer to start the clock
function timeStart() {
    timer = window.setInterval(add, 10);
}


// function; 
// startButton.onclick = timeStart();