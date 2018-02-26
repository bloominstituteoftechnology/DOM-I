//Get the digits divs from the DOM
//declare four variables to hold the time interval counter for each digit part

let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let digits = document.getElementsByClassName("digits"); 
//Counter
//Inside counter: increment the digits
//Stop at 10 seconds

let vmsHundreds = 0;
let vmsTens = 0;
let vsecondOnes = 0;
let vsecondTens = 0;
var id = setInterval(function () {
    if (vsecondTens < 1){
        vmsHundreds++;
        msHundreds.innerHTML = vmsHundreds;
        if (vmsHundreds === 10) {
            vmsTens++;
            msTens.innerHTML = vmsTens;
            vmsHundreds = msHundreds.innerHTML = 0;
        }
        if (vmsTens === 10) {
            vsecondOnes++;
            secondOnes.innerHTML = vsecondOnes;
            vmsTens = msTens.innerHTML = 0;            
        }
        if (vsecondOnes === 10) {
            vsecondTens++;
            secondTens.innerHTML = vsecondTens;
            vsecondOnes = secondOnes.innerHTML = 0;
        }
        if (vsecondTens === 1) {
            let newTens = document.getElementById("secondTens");
            newTens.innerHTML = 1;
            for (let i = 0; i < ; i++)
            digits.classList.add("redDigit");
        }
    }
}
, 10);