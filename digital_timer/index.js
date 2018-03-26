// constants
const allDigits = document.getElementsByClassName('digits')
let sTens = document.getElementById('secondTens')
let sOnes = document.getElementById('secondOnes')
let msHundreds = document.getElementById('msHundreds')
let msTens = document.getElementById('msTens')

timer();

// 0 for all digits
msTens.innerHTML = 0;
msHundreds.innerHTML = 0;
sOnes.innerHTML = 0;
sTens.innerHTML = 0;
    

// add() function; adds 1 msTens per 10ms and adjusts other digits accordingly
function add() {
    parseInt(msTens.innerHTML);
    msTens++;
    console.log('function is working');
    if (msTens >= 10) {
        // msHundreds: to int, +1, then to string
        parseInt(msHundreds.innerHTML);
        msHundreds++;
        toString(msHundreds.innerHTML);
        // msTens: to int, +1, then to string
        parseInt(msTens.innerHTML);
        msTens = 0; // reset msTens to 0
        toString(msTens.innerHTML);
    }
    if (msHundreds >= 10) {
        parseInt(sOnes.innerHTML);
        sOnes++;
        toString(sOnes.innerHTML);
        parseInt(msHundreds.innerHTML);
        msHundreds = 0;
        toString(msTens.innerHTML);
    }
    if (sOnes >= 10) {
        parseInt(sTens.innerHTML);
        sTens++;
        toString(sTens.innerHTML);
        parseInt(sOnes.innerHTML);
        sOnes =0;
        toString(sOnes.innerHTML);
    }
    if (sTens === 1) {
        clearInterval(timer);
        allDigits.classList.add("redDigit");
    }
    toString(msTens.innerHTML);
}

// timer to start the clock
function timer() {
    window.setInterval(add, 10);
}

