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

        const clockInterval = window.setInterval(() => {
            totalMs += 10;
            //if totalMs === 10000 -- go to stop function
            if (totalMs === 10000) {
                endTimer(clockInterval);
            }
            //else go to updater function
            updateTimer(totalMs);
    
        }, 10);

    }

    function increment (num) {
        //incremements numbers -- called from updateTimer?
        //  let time = Number(num + 1);
         let time = Number(num) + 1;
        return time;
    }

    function endTimer (intervalID) {
        //stop function - once 10,000 ms is reached within setInterval, stop function will run clearInterval and set each element to red by adding .redDigit to digit.classList
        clearInterval(intervalID);
        digits.classList.add("redDigit")
    }

    function updateTimer (totalMs) {
        //updater function - take totalMs and updates .innerHTML for each element based on total ms that has passed, using if statements?
        if(totalMs === 10000){
            ms10s.innerHTML = "0";
            ms100s.innerHTML = "0";
            second1s.innerHTML = "0";
            second10s.innerHTML = "1";
        } 
        else if (totalMs % 1000 === 0) {
            ms10s.innerHTML = "0";
            ms100s.innerHTML = "0";
            second1s.innerHTML = increment(second1s.innerHTML);
            // second10s.innerHTML = "1";
        }
        
        else if (totalMs %100 === 0) {
            ms10s.innerHTML = "0";
            ms100s.innerHTML = increment(ms100s.innerHTML);
            // second1s.innerHTML = "0";
            // second10s.innerHTML = "1";
        }

        else {
            ms10s.innerHTML = increment(ms10s.innerHTML);
            // ms100s.innerHTML = "0";
            // second1s.innerHTML = "0";
            // second10s.innerHTML = "1";
        }

    }

}



