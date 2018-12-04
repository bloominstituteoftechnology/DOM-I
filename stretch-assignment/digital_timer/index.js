const msTens = document.querySelector('#msTens')
const msHundreds = document.querySelector('#msHundreds')
const secondOnes = document.querySelector('#secondOnes')
const secondTens = document.querySelector('#secondTens')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

console.log(start);
let time = 0;

const startTimer = setInterval(function startTimer (){
    if(time <= 60){
        msTens.textContent = time
        time++
    }else{
        time = 0;
    }},100);

    function stopTimer(){
        msTens = 0;
    }

start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)