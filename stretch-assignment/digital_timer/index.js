// ## Project Description
//  You will be making a timer that:
//   * Counts up to 10 seconds
//   * Increments every 10 ms
//   * Has digits change to red when it gets to 10 seconds
//   * Should not count past 10 seconds

let digits = document.querySelector('.digits');
let insideDigits = digits.querySelectorAll('.digit') ; 
insideDigits.forEach(e => e.textContent = 0);
digits.querySelector('#colon').textContent = ':';

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

// function secondT(){
//     for(let i = 0; i<1;i++){
//         secondTens.textContent++;
//     }
// }

function count(){
    let counter = 0;
    let intervalTenSec = setInterval(() =>{ if (Number(secondTens.textContent) === 9) {
        // secondOnes.textContent = 0; counter = 0;
        console.log(secondTens.textContent);
        return 'yo';
    }}, 1000);
    console.log(secondTens.textContent);

    // let intervalSec = setInterval(() =>{secondOnes.textContent++; counter ++; if (counter >9) {secondOnes.textContent = 0; counter = 0;}}, 1000);
    let intervalmsHun = setInterval(() => {msHundreds.textContent++; counter ++; if (Number(msTens.textContent) == 9) {msHundreds.textContent = 0; counter = 0;}},100);
    let intervalmsTens = setInterval(() => {msTens.textContent++; counter ++; if (msTen.textContent > 9) {msTens.textContent = 0; counter = 0;}},10);
    }


    // let single = setInterval(secondT() , 1000);
    // let msTen = setInterval(() => msHundreds.textContent++, 100);
    // let msSingle = setInterval(() => msTens.textContent++, 10);

count();

