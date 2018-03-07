const secondTens  = document.querySelector('#secondTens')
const secondOnes  = document.querySelector('#secondOnes')
const msHundreds  = document.querySelector('#msHundreds')
const msTens      = document.querySelector('#msTens')
const digits      = document.querySelector('.digits')
const startButton = document.querySelector('.start-button')
const stopButton = document.querySelector('.stop-button')
const resetButton = document.querySelector('.reset-button')
const enterMs = document.querySelector('.enter-ms')


const reset = () => {
    secondTens.innerHTML = '0'
    secondOnes.innerHTML = '0'
    msHundreds.innerHTML = '0'
    msTens.innerHTML     = '0'
    digits.style.color = 'black';
    
}

reset();

let timer;

let counter = 0

const incrementString = str => (Number(str) + 1).toString()

function createTimer(stopTime) {

   timer = setInterval(() => {
    counter = counter + 10;

    if (counter % 10 === 0) {
      msTens.innerHTML = incrementString(msTens.innerHTML);
    }

    if (counter % 100 === 0) {
      msTens.innerHTML = 0;
      msHundreds.innerHTML = incrementString(msHundreds.innerHTML);
    }

    if(counter % 1000 == 0) {
      msHundreds.innerHTML = 0;
      secondOnes.innerHTML = incrementString(secondOnes.innerHTML);
    }

    if(counter % 10000 == 0) {
      secondOnes.innerHTML = 0;
      secondTens.innerHTML = incrementString(secondTens.innerHTML);
    }
  }, 10)

  setTimeout(() => {
    clearTimeout(timer);
    digits.style.color = 'red';
  }, stopTime);
}

startButton.addEventListener('click', (event) => {
  let ms = enterMs.value;
  createTimer(ms);
})

stopButton.addEventListener('click', (event) => {
    clearTimeout(timer);

})

resetButton.addEventListener('click', (event) => {
    reset();
//    clearTimeout(timer);
})

