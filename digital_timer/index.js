timer = () => {
  msTens.innerHTML++;
  
  // Once 100 milliseconds have passed
  if (msTens.innerHTML === '10') {
    // Reset msTens value and increment msHundreds
    msTens.innerHTML = 0;
    msHundreds.innerHTML++;
  } 
  // Once 1000 milliseconds have passed
  if (msHundreds.innerHTML === '10') {
    // Reset msHundreds value and increment secondOnes
    msHundreds.innerHTML = 0;
    secondOnes.innerHTML++;
  }
  // Once 10 seconds have passed
  if (secondOnes.innerHTML === '10') {
    secondOnes.innerHTML = 0;
    secondTens.innerHTML++;
  }
  if (secondTens.innerHTML === '1') {
    // Stop timer
    stopTimer();
    // Turn digits color red
    document.querySelector('.digits').className += ' redDigit';
  }
}

zeroOut = () => {
  secondOnes.innerHTML = 0;
  secondTens.innerHTML = 0;
  msHundreds.innerHTML = 0;
  msTens.innerHTML = 0;
}

reset = () => {
  if (resetBtn.className === 'active') {
    secondOnes.innerHTML = '-';
    secondTens.innerHTML = '-';
    msHundreds.innerHTML = '-';
    msTens.innerHTML = '-';
    resetBtn.className = 'inactive';
    stopBtn.className = 'inactive';
    startBtn.className = 'active';
  }
}

let timeInterval; // <- So that stopTimer can clearInterval
startTimer = () => {
  if (startBtn.className === 'active') {
    zeroOut();
    timeInterval = setInterval(timer, 10);
    startBtn.className = 'inactive';
    stopBtn.className = 'active';
  }
}

stopTimer = () => {
  if (stopBtn.className === 'active') {
    clearInterval(timeInterval);
    resetBtn.className = 'active';
  }
}

// ---------- Stretch Goals ----------

// - DOM references - //
const body = document.querySelector('body');
const digits = document.querySelector('.digits');

// - Newly created elements - //
// .container
const container = document.createElement('div');
container.className = 'container';
// .buttons
const buttons = document.createElement('div');
buttons.className = 'buttons';
// .startBtn
const startBtn = document.createElement('button');
startBtn.id = 'startBtn';
startBtn.className = 'active';
startBtn.innerHTML = 'Start';
// .stopBtn
const stopBtn = document.createElement('button');
stopBtn.id = 'stopBtn';
stopBtn.className = 'active';
stopBtn.innerHTML = 'Stop';
// .resetBtn
const resetBtn = document.createElement('button');
resetBtn.id = 'resetBtn';
resetBtn.className = 'active';
resetBtn.innerHTML = 'Reset';

// - Managment of DOM - //
// Wrap everything in a .container element
digits.remove();
body.appendChild(container);
container.appendChild(digits);

// Add buttons below digits
container.appendChild(buttons);
buttons.appendChild(startBtn);
buttons.appendChild(stopBtn);
buttons.appendChild(resetBtn);

// - Event Listeners - //
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', reset);