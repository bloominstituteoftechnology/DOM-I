//Storing the textContent of each digit
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');
let digits = document.querySelector('.digits');

// digits.style.fontFamily = "Orbitron, sans-serif"; //Headache to look at...

let pageBody = document.querySelector('body');
pageBody.style.display = 'block';
pageBody.style.width = '50%';
pageBody.style.margin = '0 auto';
pageBody.style.textAlign = 'center';
//Adding Start Timer Button
let startButton = document.createElement('button');
startButton.textContent = 'Start Timer';
pageBody.appendChild(startButton);
let stopButton = document.createElement('button');
stopButton.textContent = 'Pause Timer';
pageBody.appendChild(stopButton);
let restartButton = document.createElement('button');
restartButton.textContent = 'Reset Timer';
pageBody.appendChild(restartButton);

//Timer logic
let elapsed = 0;
let elapsedSec = 0;
let tickInterval = undefined;
let active = false;

function startTimer() {
    if(!active){
        startButton.disabled = 'true';
        active = true;
        tickInterval = setInterval(() => { //Stores interval in object property so it can be used in every method
            if(elapsed >= 10000) {
                stopTimer();
                elapsed = 10000;
                digits.style.color = 'red';
                setDisplay();
            } else {
                elapsed += 10;
                elapsedSec = (elapsed / 1000);
                let time = elapsedSec.toFixed(2);
                setDisplay();
            }
        }, 10); //Every 10ms this function will run
    }
}

function stopTimer() {
    active = false;
    startButton.disabled = '';
    clearInterval(tickInterval); //Stops the interval from looping/deletes it
}

function setDisplay() {
    let time = elapsedSec.toFixed(2);
    if(time >= 10) {
        secondTens.textContent = '1';
        secondOnes.textContent = '0';
        msHundreds.textContent = '0';
        msTens.textContent = '0';
    } else {
        let timeArray = time.split('');
        secondTens.textContent = '0';
        secondOnes.textContent = timeArray[0];
        msHundreds.textContent = timeArray[2];//Skip 1 due to decimal point
        msTens.textContent = timeArray[3];
    }
}

function resetTimer() {
    elapsed = 0;
    elapsedSec = 0;
    active = false;
    clearInterval(tickInterval);
    setDisplay();
    digits.style.color = 'black';
}

startButton.onclick = startTimer;
stopButton.onclick = stopTimer;
restartButton.onclick = resetTimer;

//Styling
let buttons = document.querySelectorAll('button');
buttons.forEach(b => {
    b.style.padding = '12px';
    b.style.display = 'block';
    b.style.margin = '12px auto';
    b.style.width = '200px';
    b.style.boxShadow = '0px 2px 3px black';
    b.style.backgroundColor = 'white';
    b.style.outline = 'none';
    b.style.border = '1px solid black';
    b.style.borderRadius = '4px';
    b.style.transition = 'all .3s';
    b.onmouseover = function() {
        b.style.backgroundColor = 'silver';
    }
    b.onmouseleave = function() {
        b.style.backgroundColor = 'white';
    }
});

pageBody.style.backgroundColor = 'grey';