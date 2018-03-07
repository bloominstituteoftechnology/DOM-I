let secondTens = document.querySelector('#secondTens')
let secondOnes = document.querySelector('#secondOnes')
let msHundreds = document.querySelector('#msHundreds')
let msTens = document.querySelector('#msTens')

secondTens.innerHTML = '0'
secondOnes.innerHTML = '0'
msHundreds.innerHTML = '0'
msTens.innerHTML     = '0'


let msCounter = 0

function incrementString(str) {
  let num = Number(str);
  return num.toString();
}


const interval = setInterval(() => {

  msCounter = msCounter + 10;

  if(msCounter === 10000) {
    secondTens.innerHTML = '1';
    secondOnes.innerHTML = '0';
    msHundreds.innerHTML = '0';
    msTens.innerHTML     = '0';
  }

  if(msCounter % 1000 === 0) {
    secondOnes.innerHTML = incrementString(secondOnes.innerHTML)
  }

  if (msCounter % 10 === 0) {

  }



  // msTens = how many tens of milliseconds
  msTens.innerHTML = msCounter;
}, 10)

// Stops timer at 10 seconds
setTimeout(() => {
  clearTimeout(interval);
  msTens.style.color = 'red';
}, 10000);





