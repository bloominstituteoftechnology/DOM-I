// JavaScript Timer
// Get contents of each digit
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

document.body.style.cssText = 'display: flex; flex-flow: column wrap;'
document.querySelector('.digits').style.cssText = 'margin: 10px; width: 100%; display: flex; justify-content: center;';

// Assign a counter for each digit
let msTensCount = 0;
let msHundredsCount = 0;
let secondOnesCount = 0;
let secondTensCount = 0;

// On page load, set isPaused and isFinished to true
let isPaused = true;
let isFinished = true;

// Create a reset button for the clock
let start = document.createElement('button');
let startText = document.createTextNode('Start Clock');
start.appendChild(startText);
start.classList.add('start-btn');
document.body.appendChild(start);
start.style.cssText = 'background: green; color: white;'

// Create a reset button
let reset = document.createElement('button');
let resetText = document.createTextNode('Reset Clock');
reset.appendChild(resetText);
reset.classList.add('reset-btn');
document.body.appendChild(reset);
reset.style.cssText = 'background: blue; color: white;';

// Style the button
let buttonStyle = document.createElement('style');
buttonStyle.innerHTML = "button {border: 2px solid black; cursor: pointer; width: 100px; height: 50px; margin: 10px; outline: none; border-radius: 10px;}";
document.body.appendChild(buttonStyle);

// Create a function to change digit colors at 10s
let digits = document.querySelector('div.digits').children;
function digitColor() {
    for (let i = 0; i < digits.length; i++) {
        digits[i].classList.add('redDigit');
    }
}

document.querySelector('.reset-btn').addEventListener('click', function(){
    isPaused = true;
    setTimeout(function(){
        toZero();
    }, 20);
    isFinished = false;
    start.innerText = 'Start Clock';
});

// Function that resets the timer
function toZero(){
    msTens.innerText = 0;
    msHundreds.innerText = 0;
    secondOnes.innerText = 0;
    secondTens.innerText = 0;
    msTensCount = 0;
    msHundredsCount = 0;
    secondOnesCount = 0;
    secondTensCount = 0;
    for (let i = 0; i < digits.length; i++) {
        digits[i].classList.remove('redDigit');
    }
}
// Assign a click listener for the button
document.querySelector('.start-btn').addEventListener('click', function(){
    if(isPaused == true){
        start.innerText = 'Stop Clock';
        startClock();
        isPaused = false;
        isFinished = false;
        start.style.background = 'red';
    } else if (isPaused == false){
        start.innerText = 'Start Clock';
        isPaused = true;
        start.style.background = 'green';
    }
});

// Create the function that starts the clock
function startClock() {
    if(isFinished == true){
        toZero();
        isFinished = false;
    }
    let timer = setInterval(function () {
        msTensCount += 1;
        msTens.innerText = msTensCount;
        if (msTensCount == 10) {
            msTens.innerText = 0;
            msHundredsCount += 1;
            msHundreds.innerText = msHundredsCount;
            msTensCount = 0;
        }

        if (msHundredsCount == 10) {
            msHundreds.innerText = 0;
            secondOnesCount += 1;
            secondOnes.innerText = secondOnesCount;
            msHundredsCount = 0;
        }

        if (secondOnesCount == 10) {
            secondOnes.innerText = 0;
            secondTensCount += 1;
            secondTens.innerText = secondTensCount;
            secondOnesCount = 0;
        }

        if (secondTensCount == 1) {
            clearInterval(timer);
            digitColor();
            isFinished = true;
            isPaused = true;
            start.innerText = 'Reset & Start';
            start.style.background = 'green';
        }
        if (isPaused == true){
            clearInterval(timer);
        }
    }, 10);
}