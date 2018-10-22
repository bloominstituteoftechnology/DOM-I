const digits = document.querySelector('.digits');

//msTens
const msTens = document.querySelector('#msTens');
const contentMsTens = 0; 
msTens.textContent = contentMsTens;

//msHundreeds
const msHundreeds = document.querySelector('#msHundreds');
msHundreeds.textContent = contentMsTens;

//secondsOnes
const secondsOnes = document.querySelector('#secondOnes');
secondsOnes.textContent = contentMsTens;

//secondsTens
const secondsTens = document.querySelector('#secondTens');
secondsTens.textContent = contentMsTens;

setInterval(function(){
    msTens.textContent++;
}, 10);

setInterval(function(){
    msTens.textContent = 0;
    msHundreeds.textContent++;
}, 100);

setInterval(function(){
    msHundreeds.textContent = 0;
    secondsOnes.textContent++;
}, 1000);


const lastInterval = setInterval(function(){
    secondsOnes.textContent = 0;
    secondsTens.textContent++;
    secondsTens.style.color = 'red';
    secondsOnes.style.color = 'red';
    msHundreeds.style.color = 'red';
    msTens.style.color = 'red';
    
}, 10000);




