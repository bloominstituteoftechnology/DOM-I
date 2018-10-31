//GET VARIABLES-------------------------------------------
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

//SETUP COUNTER VARIABLES-------------------------------
let counter_secondTens = 0;
let counter_secoundOnes = 0;
let counter_msHunders = 0;
let counter_msTens = 0;




let testInterval = setInterval(tester, 1000);
function tester() {
    if(counter_secondTens===9) {
        counter_secondTens=0;
    }
    else {
        counter_secondTens += 1;
    }
    console.log(counter_secondTens);
    secondTens.textContent = counter_secondTens;

}
