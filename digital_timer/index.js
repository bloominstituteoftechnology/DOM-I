const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')

let counter = 0

const interval = setInterval(() => {
  counter++;
  msTens.innerHTML = counter;
    }, 1000)

setTimeout(() => {
  clearTimeout(interval);
    msTens.style.color = 'red';
    }, 10000);





