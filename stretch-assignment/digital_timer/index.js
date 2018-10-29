
// ====Create Const variable for getElementById====


const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");


// ====Counter variables====

let counter_msTens = 0;
let counter_msHundreds = 0;
let counter_secondOnes = 0;
let counter_secondTens = 0;


// ====textContent Counter====

msTens.textContent = counter_msTens;
msHundreds.textContent = counter_msHundreds;
secondOnes.textContent = counter_secondOnes;
secondTens.textContent = counter_secondTens;


// ====Create function if/else for 'tens'====

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