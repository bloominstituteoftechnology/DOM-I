const msTens = document.querySelector('#msTens')
const msHundreds = document.querySelector('#msHundreds')
const secondOnes = document.querySelector('#secondOnes')
const secondTens = document.querySelector('#secondTens')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')


// let time = ''
let time = setInterval(function timer(){
//    for(let i = 0; i < 60; i++){
//     time = i;
    msTens.textContent = `${time}`;
   },1000)
// }
start.addEventListener('click', time)