let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let ist = 0;
let iso = 0;
let imh = 0;
let imt = 0;
setInterval(() => {
  ist++;
  ist >= 1 ? (secondTens.innerText = 1, secondTens.style.color = 'red') : secondTens.innerText = ist;
}, 10000)
setInterval(() => {
  iso++;
  iso > 9 ? (secondOnes.innerText = 0, secondOnes.style.color = 'red') : secondOnes.innerText = iso;
}, 1000)
setInterval(() => {
  imh++;
  iso > 9 ? (msHundreds.innerText = 0, msHundreds.style.color = 'red') : imh > 9 ? (imh = 0, msHundreds.innerText = imh) : msHundreds.innerText = imh;
}, 100)
setInterval(() => {
  imt++;
  iso > 9 ? (msTens.innerText = 0, msTens.style.color = 'red') : imt > 9 ? (imt = 0, msTens.innerText = imt) : msTens.innerText = imt;
}, 10)