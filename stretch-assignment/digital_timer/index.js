//grab timer divs
let digits = document.querySelector('.digits');
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

//global variables
let duration = 10000;
let count = 0;
let clock;
let isPaused = false;

//Create the buttons
let container = document.createElement('div');
container.id = 'btn-div';

let startButton = document.createElement('button');
let resetButton = document.createElement('button');
let pauseButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.id = 'start';
resetButton.innerText = 'Reset';
resetButton.id = 'reset';
pauseButton.innerText = 'Pause';
pauseButton.id = 'pause';
container.append(startButton);
container.append(resetButton);
container.append(pauseButton);

container.style = 'width: 100%; display: flex; justify-content: center;';
container.querySelectorAll('button').forEach(btn => {
  btn.style = 'background: lightblue; color: white; margin-right: 20px; font-size: 16px; text-align: center; border-radius: 5px; padding: 15px 32px;'
});

document.querySelector('body').style.flexWrap = 'wrap';

document.querySelector('body').append(container);

//functions
const updateClock = () => {
  if(!isPaused){
    count += 10;

    if(count == duration){
      clearInterval(clock);
      digits.style.color = 'red';
      startButton.disabled = false;
    }

    secondTens.textContent = Math.floor(count / 10000);
    secondOnes.textContent = Math.floor(count / 1000) % 10;
    msHundreds.textContent = Math.floor(count / 100) % 10;
    msTens.textContent = Math.floor(count/10) % 10;
  }
}

const startClock = () => {
  clock = setInterval(updateClock, 10);
  startButton.disabled = true;
  pauseButton.innerText = 'Pause';
  isPaused = false;
}

const reset = () => {
  clearInterval(clock);
  count = 0;
  isPaused = false;
  pauseButton.innerText = 'Pause';
  digits.style.color = 'black';

  secondTens.textContent = '-';
  secondOnes.textContent = '-';
  msHundreds.textContent = '-';
  msTens.textContent = '-';

  startButton.disabled = false;
}

const pauseToggle = () => {
  if(!isPaused){
    isPaused = true;
    pauseButton.innerText = 'Unpause';
  } else{
    isPaused = false;
    pauseButton.innerText = 'Pause';
  }
}

//event listeners
startButton.addEventListener('click', startClock);
pauseButton.addEventListener('click', pauseToggle);
resetButton.addEventListener('click', reset);
