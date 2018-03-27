// Counts up to 10 seconds
// Increments every 10 ms
// Has digits change to red when it gets to 10 seconds
// Should not count past 10 seconds

//  ______VARIABLES______
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
const colon = document.getElementById('colon');
const timerAll = document.getElementsByClassName('digit');
let currentmsTens = 0;
let currentmsHundreds = 0;
let currentSecondOnes = 0;
let currentSecondTens = 0;
msHundreds.innerHTML = currentmsHundreds;
msTens.innerHTML = currentmsTens;
secondOnes.innerHTML = currentSecondOnes;
secondTens.innerHTML = currentSecondTens;
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function timerIncrement(){
    if(currentSecondTens < 1) { // if under 10 seconds, increment msHundreds
        ++currentmsHundreds;
        if(currentmsHundreds === 10){
            currentmsHundreds = 0;
        }
        msHundreds.innerHTML = currentmsHundreds;
        if(currentmsHundreds === 0){ // if over 10msHundreds, increment msTens
            ++currentmsTens;
            if(currentmsTens === 10){
                currentmsTens = 0;
            }
            msTens.innerHTML = currentmsTens;
            if(currentmsTens === 0){ //if over 10msTen, increment 1sec
                ++currentSecondOnes;
                secondOnes.innerHTML = currentSecondOnes;
                if(currentSecondOnes === 10){  // when you reach 10 seconds, stop, and turn red
                    currentmsHundreds = 0;
                    currentmsTens = 0;
                    currentSecondOnes = 0;
                    currentSecondTens = 1;
                    msHundreds.innerHTML = currentmsHundreds;
                    msHundreds.style.color = 'red';
                    msTens.innerHTML = currentmsTens;
                    msTens.style.color = 'red';
                    secondOnes.innerHTML = currentSecondOnes;
                    secondOnes.style.color = 'red';
                    secondTens.innerHTML = currentSecondTens;
                    secondTens.style.color = 'red';
                    colon.style.color = 'red';
                    window.clearInterval(runClock);
                }
            }
        }
    }
}

// Reset to 0, color to black, and clear runClock interval.
function resetClock() {
    window.clearInterval(runClock);
    let currentmsTens = 0;
    let currentmsHundreds = 0;
    let currentSecondOnes = 0;
    let currentSecondTens = 0;
    msHundreds.innerHTML = currentmsHundreds;
    msHundreds.style.color = 'black';
    msTens.innerHTML = currentmsTens;
    msTens.style.color = 'black';
    secondOnes.innerHTML = currentSecondOnes;
    secondOnes.style.color = 'black';
    secondTens.innerHTML = currentSecondTens;
    secondTens.style.color = 'black';
    colon.style.color = 'black';
    startButton.setAttribute('disabled', 'false');
}

// start runClock interval for timerIncrement
function startTimer() {
    var runClock = window.setInterval(timerIncrement, 10)
    startButton.setAttribute('disabled', 'true');
}

startButton.addEventListener('click', startTimer);

resetButton.addEventListener('click', resetClock);