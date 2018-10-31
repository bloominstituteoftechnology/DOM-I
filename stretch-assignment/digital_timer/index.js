//GET VARIABLES-------------------------------------------
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

//SETUP COUNTER VARIABLES-------------------------------
let counter_secondTens = 0;
let counter_secondOnes = 0;
let counter_msHundreds = 0;
let counter_msTens = 0;




function secondOnesFunction(){
    if(counter_secondOnes === 9){
        counter_secondOnes = 0;
    } else {
        counter_secondOnes += 1;
    }
    secondOnes.textContent = counter_secondOnes;
}

function msHundredsFunction(){
    if(counter_msHundreds === 9){
        counter_msHundreds = 0;
    } else {
        counter_msHundreds += 1;
    }
    msHundreds.textContent = counter_msHundreds;
}

function msTensFunction(){
    if(counter_msTens === 9){
        counter_msTens = 0;
    } else {
        counter_msTens += 1;
    }
    msTens.textContent = counter_msTens;
}



setInterval(secondOnesFunction, 1000);
setInterval(msHundredsFunction, 100);
setInterval(msTensFunction, 1);



