// create variable for digits
// creative indiv variables for second placeholders (const)

const ms10s = document.getElementById("msTens");
const ms100s = document.getElementById("msHundreds");
const second1s = document.getElementById("secondOnes");
const second10s = document.getElementById("secondTens");
const digits = document.querySelector(".digits");

clockCounter();

function clockCounter () {

    let totalMs = 0;

    const clockInterval = window.setInterval(() => {
        totalMs += 10;
        //if totalMs === 10000 -- go to stop function
        //if not === 10000 then go to update function


    }, 10);

}

//updater function - take totalMs and update .innerHTML for each element based on total ms that has passed?
//stop function - once 10,000 ms is reached within setInterval, stop function will run clearInterval and set each element to red by adding .redDigit to digit.classList