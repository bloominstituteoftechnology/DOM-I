 
 
const digits = document.querySelector(".digits"); 
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

function timer() {
    window.setInterval(msTens, 10);
    window.setInterval(secondTens, 10000);
    
    const msTensTimer = setInterval(() => {
        let counter = 10; 
        for (counter <= 10000) ( {
        counter +=10, 
        msTens:innerHTML = tens.toString(),
    }, 10000);
    },

    if(counter >= 10000) {
        digits.style.redDigit; 
        clearInterval(msTens); 
        clearInterval(secondTens); 

    }
};
timer(); 