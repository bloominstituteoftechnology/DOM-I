function createTimer(timerElement) {
    const display = timerElement;
    const secondTens = display.querySelector("#secondTens");
    const secondOnes = display.querySelector("#secondOnes");
    const msHundreds = display.querySelector("#msHundreds");
    const msTens = display.querySelector("#msTens");

    secondTens.innerText = 0;
    secondOnes.innerText = 0;
    msHundreds.innerText = 0;
    msTens.innerText = 0;

    let incSecondTens = 0;
    let incSecondOnes = 0;
    let incMsHundreds = 0;
    let incMsTens = 0;

    return function() {
        let interval = setInterval(function() {
            incMsTens++;
            if (incMsTens > 9) {
                incMsHundreds++;
                incMsTens = 0;
            }
            if (incMsHundreds > 9) {
                incSecondOnes++;
                incMsHundreds = 0;
            }
            if (incSecondOnes > 9) {
                incSecondTens++;
                incSecondOnes = 0;
            }

            secondTens.innerText = incSecondTens;
            secondOnes.innerText = incSecondOnes;
            msHundreds.innerText = incMsHundreds;
            msTens.innerText = incMsTens;

            if (incSecondTens === 1) {
                display.classList.add("redDigit");
                clearInterval(interval);
            }
        }, 10);
    }
}

let timer = createTimer(document.querySelector(".digits"));
timer();