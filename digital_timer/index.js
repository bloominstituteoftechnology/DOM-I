//Get the digits divs from the DOM
let secondTens = document.getElementById("secondTens").innerHTML;
let secondOnes = document.getElementById("secondOnes").innerHTML;
let msHundreds = document.getElementById("msHundreds").innerHTML;
let msTens = document.getElementById("msTens").innerHTML;
//Counter
//Inside counter: increment the digits
//Stop at 10 seconds

var ms = 0;
let seconds = document.getElementById("secondOnes");
var id = setInterval(function () {
    if (ms <10000) {
    ms += 10; 
    console.log(ms);
    seconds.innerHTML = ms;
    }
}, 10);


