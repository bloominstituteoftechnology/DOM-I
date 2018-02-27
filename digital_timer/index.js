const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

let secondTensCounter = 0;
let secondOnesCounter = 0;
let msHundredsCounter = 0;
let msTensCounter = 0;

let timer = setInterval(function() {
    if (msTens.innerHTML !== '9') {
        msTensCounter++;
        msTens.innerHTML = msTensCounter.toString();
    } else {
        msTensCounter = 0;
        msTens.innerHTML = '0';
        if (msHundreds.innerHTML !== '9') {
            msHundredsCounter++;
            msHundreds.innerHTML = msHundredsCounter.toString();
        }
    }
}, 50)

























// timer();

// function timer () {
//     init();

//     function init () {
//         secondTens.innerHTML = '0';
//         secondOnes.innerHTML = '0';
//         msHundreds.innerHTML = '0';
//         msTens.innerHTML = '0';
//     }
//     // set an interval that calls updateTimer and calls endTimer after 10 seconds
// }

// function increment () {
//     // helper function that gets called by updateTimer
// }

// function endTimer () {

// }

// function updateTimer () {

// }
