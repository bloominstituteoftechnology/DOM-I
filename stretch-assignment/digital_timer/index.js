//Storing the textContent of each digit
let secondTens = document.getElementById('secondTens').textContent;
let secondOnes = document.getElementById('secondOnes').textContent;
let msHundreds = document.getElementById('msHundreds').textContent;
let msTens = document.getElementById('msTens').textContent;

class Timer {
    constructor() {
        this.elapsed = 0;
        this.tickInterval = undefined;
    }

    start() {
        this.tickInterval = setInterval(() => { //Stores interval in object property so it can be used in every method
                this.elapsed += 10;
                let elapsedSec = (this.elapsed / 1000);
                this.setDisplay();
                console.log(elapsedSec);
        }, 10); //Invoke tick() every 10ms
    }

    stop() {
        clearInterval(this.tickInterval); //Stops the interval from looping/deletes it
    }

    setDisplay() {
        
    }
}

let currentTimer = new Timer();

let pageBody = document.querySelector('body');
pageBody.style.display = 'block';
pageBody.style.width = '50%';
pageBody.style.margin = '0 auto';
pageBody.style.textAlign = 'center';
//Adding Start Timer Button
let startButton = document.createElement('button');
startButton.textContent = 'Start Timer';
pageBody.appendChild(startButton);