/* ## Project Description
 You will be making a timer that:
  * Counts up to 10 seconds
  * Increments every 10 ms
  * Has digits change to red when it gets to 10 seconds
  * Should not count past 10 seconds

 You will also need to look up and use `window.setInterval`. For this method, and any of those listed in the "Topics" section of this README, you are encouraged to use MDN as your resource for Documentation. MDN can be challenging to consume at first, so you may also use something like W3schools if the MDN documentation on a given subject is a bit too complicated. */

let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let secondOnes = document.getElementById("secondOnes");
let secondTens = document.getElementById("secondTens");
let digits = document.querySelectorAll(".digit");

function counter() {
        let count = 0;
    
        return function() {
            if (count < 9) {
                return count++;
            } else {
                count = 0;
                return 9;
            }
        };
}
const newTimer = counter();


// Setting Timer to 00:00
msTens.innerText = 0;
msHundreds.innerText = 0;
secondOnes.innerText = 0;
secondTens.innerText = 0;

    
// Object Literal holding the timer with a start function and a stop function for being able to start and stop from anywhere in the javascript. 
const timer =  {

    stopwatch: null, // Sets the variable for stopwatch for creating the setInterval
    
    // Calling timer.start(1) will start the timer and stop at 10 seconds.
    // @param max - tells when the timer should stop in multiples of 10, e.g. 1 = 10, 2 = 20... etc.
    start: function(max) {
        /* if(digits[0].className.includes("redDigit")) {
            resetTimer();
        } */
        startBtn.setAttribute("disabled", "disabled"); // Disable start button upon starting timer
        digits.forEach(digit => digit.classList.remove("redDigit")); // removes redDigit class if pressing start again after stops

        // sets the interval for incrementing every 10ms
        this.stopwatch = setInterval(function(){
            if(msTens.innerText < 9) {
                msTens.innerText = newTimer();
            } else {
                msTens.innerText = newTimer();

                if(msHundreds.innerText < 9) {
                    msHundreds.innerText++;
                } else {
                    msHundreds.innerText = 0;

                    if(secondOnes.innerText < 9) {
                        secondOnes.innerText++;
                    } else {
                        secondOnes.innerText = 0;
                        secondTens.innerText++;
                        
                        if(secondTens.innerText >= max) {
                            //secondTens.innerText = 1;
                            clearInterval(timer.stopwatch);
                            digits.forEach(digit => digit.classList.add("redDigit"));
                            startBtn.removeAttribute("disabled");
                            
                        }

                    }
                }

            }
            

        }, 10);
    },
    stop: function() { // calling timer.stop() will stop the timer at the current count.
        clearInterval(this.stopwatch);
    }    
}

/* ## Stretch On The Stretch!
If you compelete the timer with time to spare:
* Self study and research DOM `events` and `event listeners`
* SG1: Implement a start button. The digital timer should not start until the button is pressed.
* SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
* SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
* SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons. */

// button selectors
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");

// Setting event listener onclick to buttons and calling corresponding functions.
startBtn.setAttribute("onclick", "timer.start(1)");
resetBtn.setAttribute("onclick", "resetTimer()");
stopBtn.setAttribute("onclick", "stopTimer()");

// Reset the timer to 00:00, removes redDigit class, stops the timer, and enables start button.
function resetTimer() {
    timer.stop();
    msTens.innerText = 0;
    msHundreds.innerText = 0;
    secondOnes.innerText = 0;
    secondTens.innerText = 0;
    digits.forEach(digit => digit.classList.remove("redDigit"));
    startBtn.removeAttribute("disabled");
}

// stops the timer at current count, enables start button.
function stopTimer() {
    timer.stop();
    startBtn.removeAttribute("disabled");
}


