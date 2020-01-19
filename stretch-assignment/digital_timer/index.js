

    //selecting elements 
    const digitsContainer = document.querySelector('.digits');

    const tens = document.getElementById('secondTens');

    const ones = document.getElementById('secondOnes');

    const colon = document.getElementById('colon');

    const hundreds = document.getElementById('msHundreds');

    const mstens = document.getElementById('msTens');


//text content: so digits start at 

tens.textContent = "0";
ones.textContent = "0";
hundreds.textContent = "0";
mstens.textContent = "0";








//setting each number on digital timer to 0

let countUp;

// let timeSecondTens = 0;
// let timeSecondOnes = 0;
// let timemsHundreds = 0;
// let timemsTens = 0;


//WINDOW 
//setInterval updates the timer every 10ms

let windowInterval =  window.setInterval(time, 10); 

// using window's cb function to execute function

function time() {
  
var rightnow = new Date().getTime();

if (countUp > 0 ) {
    var miliseconds = rightnow.getMilliseconds();
     miliseconds +=1;
}

}






