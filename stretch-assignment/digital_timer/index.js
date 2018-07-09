let timerInt = 100000;

function runTimer() {
    setInterval(function() { 
        if (timerInt < 110000) {
            document.getElementById("startButton").disabled = true;
            timerInt += 10;
            timer = timerInt.toString();
            document.querySelector("#msHundreds").textContent = timer.slice(4,5);
            document.querySelector("#msTens").textContent = timer.slice(3,4);
            document.querySelector("#secondOnes").textContent = timer.slice(2,3);
            document.querySelector("#secondTens").textContent = timer.slice(1,2);
            console.log(timerInt);
        } else {
            document.getElementById("startButton").disabled = false;
            document.querySelector("#secondTens").className = "digit redDigit";
            document.querySelector("#secondOnes").className = "digit redDigit";
            document.querySelector("#msTens").className = "digit redDigit";
            document.querySelector("#msHundreds").className = "digit redDigit";
        }
    }, 10);
}

function resetTimer() {
    timerInt = 100000;
}
