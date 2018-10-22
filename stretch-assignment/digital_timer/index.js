

const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");

let counter_msTens = 0;
let counter_msHundreds = 0;
let counter_secondOnes = 0;
let counter_secondTens = 0;

msTens.textContent = counter_msTens;
msHundreds.textContent = counter_msHundreds;
secondOnes.textContent = counter_secondOnes;
secondTens.textContent = counter_secondTens;

function msTens_func(){
    if(counter_msTens === 9){
        counter_msTens = 0;
        msHundreds_func();
        return msTens.textContent = counter_msTens;
    } else {
        counter_msTens += 1;
        return msTens.textContent = counter_msTens;
    }
}
function msHundreds_func(){
    if(counter_msHundreds === 9){
        counter_msHundreds = 0;
        secondOnes_func();
        return msHundreds.textContent = counter_msHundreds;
    } else {
        counter_msHundreds += 1;
        return msHundreds.textContent = counter_msHundreds;
    }
}
function secondOnes_func(){
    if(counter_secondOnes === 9){
        counter_secondOnes = 0;
        secondTens_func();
        return secondOnes.textContent = counter_secondOnes;
    } else {
        counter_secondOnes += 1;
        return secondOnes.textContent = counter_secondOnes;
    }
}
function secondTens_func(){
    if(counter_secondTens === 9){
        counter_secondTens = 0;
        return secondTens.textContent = counter_secondTens;
    } else {
        counter_secondTens += 1;
        return secondTens.textContent = counter_secondTens;
    }
}

function timeAdder(){
    if(counter_secondTens === 1){
        clearInterval(theInterval);
    } else {
        msTens_func();
    }
}

startTimer = function(){
    theInterval = window.setInterval(timeAdder, 10);
    button.setAttribute('onclick', "resetTimer()")
    button.textContent = "Reset Timer";
}

resetTimer = function(){
    clearInterval(theInterval);
    counter_msTens = 0;
    counter_msHundreds = 0;
    counter_secondOnes = 0;
    counter_secondTens = 0;

    msTens.textContent = counter_msTens;
    msHundreds.textContent = counter_msHundreds;
    secondOnes.textContent = counter_secondOnes;
    secondTens.textContent = counter_secondTens;
    button.setAttribute('onclick', "startTimer()")
    button.textContent = "Start Timer";
}

let button = document.querySelector(".button");
button.setAttribute('onclick', "startTimer()")

// object.addEventListener("click", myScript);
