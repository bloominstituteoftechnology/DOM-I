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

    const interval = window.setInterval(function () {
        if (counter === 9) {
            clearInterval(interval);
            counter = counter + 1;
            msHundreds.innerHTML = 1;
            msTens.innerHTML = counter++;
            return;
        }
        msTens.innerHTML = counter++;
    }, 100);

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