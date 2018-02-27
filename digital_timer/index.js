const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

timer()
function timer () {
    let counter = 0;
    init();
    function init () {
       secondTens.innerHTML = "0";
       secondOnes.innerHTML = "0";
       msHundreds.innerHTML = "0";
       msTens.innerHTML = "0";
    }
    
    var setTimer = setInterval(function(){ updateTimer() }, 10);

    function increment (divIncrement) {
        // helper function that gets called by updateTimer
        if (divIncrement.innerHTML === "9") {
            divIncrement.innerHTML = "0";
        } else divIncrement.innerHTML = ++divIncrement.innerHTML;
    }

    function updateTimer () {
        increment(msTens) 
        ++counter;

        if (counter % 10 === 0) {
            increment(msHundreds);
        }
        if (counter % 100 === 0) {
            increment(secondOnes);
        }
        if (counter % 1000 === 0) {
            increment(secondTens);
        }
        if (counter === 1000) {
            clearInterval(setTimer);
            
            let element = document.getElementsByClassName("digit")
                for (let i = 0; i < element.length; i++) {
                element[i].className += " redDigit";
                }
        }
    }
};