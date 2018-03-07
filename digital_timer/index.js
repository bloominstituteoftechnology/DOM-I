let secondTens = document.querySelector('#secondTens')
let secondOnes = document.querySelector('#secondOnes')
let msHundreds = document.querySelector('#msHundreds')
let msTens = document.querySelector('#msTens')
let digits = document.querySelector('.digits')

secondTens.innerHTML = '0'
secondOnes.innerHTML = '0'
msHundreds.innerHTML = '0'
msTens.innerHTML     = '0'


let counter = 0

function incrementString(str) {
  let num = Number(str) + 1;
  return num.toString();
}


const interval = setInterval(() => {
  counter = counter + 10;
    
 if (counter % 10 === 0) {
     msTens.innerHTML = incrementString(msTens.innerHTML);

  }
      if (counter % 100 === 0) {
          msTens.innerHTML = 0;
       msHundreds.innerHTML = 
        incrementString(msHundreds.innerHTML);

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

// Stops timer at 10 seconds
setTimeout(() => {
  clearTimeout(interval);
  digits.style.color = 'red';
}, 10000);





