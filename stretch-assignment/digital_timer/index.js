
//setting each number on digital timer to 0

let timeSecondTens = 0;
let timeSecondOnes = 0;
let timemsHundreds = 0;
let timemsTens = 0;




//WINDOW 
//setInterval updates the timer every 10ms

let windowInterval =  window.setInterval(time, 10); 

//using window's cb function to execute function

function time() {
    if(timemsHundreds === 10) {
        timemsHundreds += 10;
}





const mainelement = document.querySelector('div');

const tens = document.getElementById('secondTens');

const ones = document.getElementById('secondOnes');

const colon = document.getElementById('colon');

const hundreds = document.getElementById('msHundreds');

const mstens = document.getElementById('msTens');



