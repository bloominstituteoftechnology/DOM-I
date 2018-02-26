//Get the digits divs from the DOM
//declare four variables to hold the time interval counter for each digit part

let secondTens = document.getElementById("secondTens").innerHTML;
let secondOnes = document.getElementById("secondOnes").innerHTML;
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens").innerHTML;
//Counter
//Inside counter: increment the digits
//Stop at 10 seconds

let vmsHundreds = 0;
let vmsTens = 0;
let vsecondOnes = 0;
let vsecondTens = 0;
var id = setInterval(function () {
    vmsHundreds++;
    msHundreds.innerHTML = vmsHundreds;
    if (vmsHundreds === 10) {
        vmsTens++;
        vmsHundreds = 0;
    }
    if (vmsTens === 10) {
        vsecondOnes++;
        vmsTens = 0;
    }
    if (vsecondOnes === 10) {
        vsecondTens++;
        vsecondOnes = 0;
        // break;
    }


    //increment the hundreth ms
    //if the hundreth ms is equal to 10 => increment the tenth ms
    //if the tenth ms is equal to 10 => increment the second ones
    //if the second ones is equal to 10 => increment the tenth seconds
    console.log(ms);
    seconds.innerHTML = ms;
}
, 10);


