const tens = document.getElementById ('secondTens');
const ones = document.getElementById ('secondOnes');
const msHundreds = document.getElementById ('msHundreds');
const msTens = document.getElementById ('msTens');
const digits = document.querySelectorAll('.digits')

ones.textContent = 0;
tens.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;
let where = 0;


const timer = function () {
    if(msTens.textContent < 9)
    msTens.textContent++
    else if(msHundreds.textContent < 9){
        msHundreds.textContent++;
        msTens.textContent = 0;
    }
    else if (ones.textContent < 9){
        ones.textContent++
        msTens.textContent = 0;
        msHundreds.textContent =0;
    }
    else{
        tens.textContent = 1;
        msTens.textContent = 0;
        msHundreds.textContent = 0;
        ones.textContent =0;
        clearInterval(interval)
        digits[0].style.color = 'red';

    }
    
}



let start = function(){
     interval = setInterval(timer, 10);

}

let reset = function(){
    ones.textContent = 0;
    tens.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    digits[0].style.color = 'black';

}

 







