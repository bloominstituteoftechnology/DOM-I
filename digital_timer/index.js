// create variable for digits
// creative indiv variables for second placeholders (const)

const ms10s = document.getElementById("msTens");
const ms100s = document.getElementById("msHundreds");
const second1s = document.getElementById("secondOnes");
const second10s = document.getElementById("secondTens");
const digits = document.querySelector(".digits");

clockCounter();

function clockCounter () {
    init();

    function init () {
        let totalMs = 0;
        ms10s.innerHTML = "0";
        ms100s.innerHTML = "0";
        second1s.innerHTML = "0";
        second10s.innerHTML = "0";

    }

    const clockInterval = window.setInterval(() => {
        totalMs += 10;
        //if totalMs === 10000 -- go to stop function
        //else go to updater function

    }, 10);

    function increment () {
        //incremements numbers -- called from updateTimer?
    }

    function endTimer () {
        //stop function - once 10,000 ms is reached within setInterval, stop function will run clearInterval and set each element to red by adding .redDigit to digit.classList

    }

    function updateTimer () {
        //updater function - take totalMs and updates .innerHTML for each element based on total ms that has passed, using if statements?

    }

}



