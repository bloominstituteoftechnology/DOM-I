// ====Add const variables====

const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");

// ====Add counter variables====
let counter_msTens = 0;
let counter_msHundreds = 0;
let counter_secondOnes = 0;
let counter_secondTens = 0;

// ====Add counter textContent====

msTens.textContent = counter_msTens;
msHundreds.textContent = counter_msHundreds;
secondOnes.textContent = counter_secondOnes;
secondTens.textContent = counter_secondTens;

// ====Add msTens Function====

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

// ====Add msHundred function====
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

//====Add secondOnes function====


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

// ====Add secondTens function====


function secondTens_func(){
    if(counter_secondTens === 9){
        counter_secondTens = 0;
        return secondTens.textContent = counter_secondTens;
    } else {
        counter_secondTens += 1;
        return secondTens.textContent = counter_secondTens;
    }
}


// ====Add addTime====

function addTime(){
    if(counter_secondTens === 1){
        clearInterval(increment);
    } else {
        msTens_func();
    }
}


// ====Initiate Timer function====


startTimer = function(){
    increment = window.setInterval(addTime, 10);
    button.setAttribute('onclick', "resetTimer()")
    button.textContent = "Change it back";
}

// ====Restart Timer====
resetTimer = function(){
    clearInterval(increment);
    counter_msTens = 0;
    counter_msHundreds = 0;
    counter_secondOnes = 0;
    counter_secondTens = 0;

    msTens.textContent = counter_msTens;
    msHundreds.textContent = counter_msHundreds;
    secondOnes.textContent = counter_secondOnes;
    secondTens.textContent = counter_secondTens;
    button.setAttribute('onclick', "startTimer()")
    button.textContent = "Boom Diggity Clack";
}

let button = document.querySelector(".button");
button.setAttribute('onclick', "startTimer()")

