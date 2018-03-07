const secondTens  = document.querySelector('#secondTens');
const secondOnes  = document.querySelector('#secondOnes');
const msHundreds  = document.querySelector('#msHundreds');
const msTens      = document.querySelector('#msTens');
const digits      = document.querySelector('.digits');
const startButton = document.querySelector('.start-button');
const stopButton  = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const enterMs     = document.querySelector('.enter-ms');

let timer,
    counter;

const incrementString = str => (Number(str) + 1).toString();

const reset = () => {
  secondTens.innerHTML = 0;
  secondOnes.innerHTML = 0;
  msHundreds.innerHTML = 0;
  msTens.innerHTML     = 0;
  digits.style.color = 'black';
  counter = 0;
}

const timeout = (ms, timer) => {
  setTimeout(() => {
    clearInterval(timer);
    digits.style.color = 'red';
  }, ms);
}

reset();

//deleted stopTime bc its not needed
const createTimer = ms => {

  timer = setInterval(() => {
    counter = counter + 10;

    if (counter % 10 === 0) {
      msTens.innerHTML = incrementString(msTens.innerHTML);
    }

    if (counter % 100 === 0) {
      msTens.innerHTML = 0;
      msHundreds.innerHTML = incrementString(msHundreds.innerHTML);
    }

    if(counter % 1000 === 0) {
      msHundreds.innerHTML = 0;
      secondOnes.innerHTML = incrementString(secondOnes.innerHTML);
    }

    if(counter % 10000 === 0) {
      secondOnes.innerHTML = 0;
      secondTens.innerHTML = incrementString(secondTens.innerHTML);
    }
  }, 10);

  timeout(ms, timer);
}

startButton.addEventListener('click', (event) => {
  reset();
  createTimer(enterMs.value);
  // we can also make setTimeout a method and call it here
  //if the counter is not 0, counter needs to be the difference of ms and the time already in the counter.
  //    if(counter != 0 null, ){
  //    timer = ms - counter;
  //    }
});

stopButton.addEventListener('click', (event) => {
  clearTimeout(timer);
});

resetButton.addEventListener('click', (event) => {
  reset();
  clearTimeout(timer);
  clearInterval(timer);
    
  enterMs.value = '';
  counter = 0;
  //must also delete the stored history
});

