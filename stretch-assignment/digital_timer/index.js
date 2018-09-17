/**
 * Timer Functionality:
 */
function timer() {
    let counter = 0;
    let msHundreds = document.querySelector("#msHundreds");
    let msTens = document.querySelector("#msTens");
    let secondOnes = document.querySelector("#secondOnes");
    let secondTens = document.querySelector("#secondTens");

    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    secondTens.innerHTML = 0;

    window.onload = function () {
        let i = 0;
        setInterval(function () {
            msTens.innerHTML = `${i++}`;
        }, 100);
    }

    /**
     * TODO: Timer counts to 10.
     */

    /**
     * TODO: Increments every 10ms
     */

    /**
     * TODO: Digits become red when it reaches 10s
     */

    /**
     * TODO: Stops at 10s
     */
}

timer();