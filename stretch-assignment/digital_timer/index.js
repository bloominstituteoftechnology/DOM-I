// JavaScript Timer
// Get contents of each digit
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

// Assign a counter for each digit
let msTensCount = 0;
let msHundredsCount = 0;
let secondOnesCount = 0;
let secondTensCount = 0;


// Create a button for the clock
let button = document.createElement('button');
let buttonText = document.createTextNode('Start Clock');
button.appendChild(buttonText);
document.body.appendChild(button);

// Style the button
let clockBtn = document.createElement('style');
clockBtn.innerHTML = "button {border: 2px solid black; display: block; position: absolute; margin-top: 50px; cursor: pointer;}";
document.body.appendChild(clockBtn);
button.classList.add('clockBtn');




// Create a function to change digit colors
let digits = document.querySelector('div.digits').children;
function digitColor() {
    for (let i = 0; i < digits.length; i++) {
        digits[i].classList.add('redDigit');
    }
}


// Create the function that starts the clock
function startClock() {
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
        }

    }, 10);
}

// Assign a click listener for the button
document.querySelector('button').addEventListener('click', function(){
    startClock();
});

// TO-DO
// Add pause functionality to clock button
// Add a reset button
// Add auto-reset if time is at 10 seconds