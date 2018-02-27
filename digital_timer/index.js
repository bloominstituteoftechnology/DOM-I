const digits = document.querySelectorAll(".digit";)
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

timer();
function timer (number) {
    init();
    function init() {
        secondTens.innerHTML = "0";
        secondOnes.innerHTML = "0"
        msHundreds.innerHTML = "0"
        msTens.innerHTML = "0"

        let ms = 0;
        const timerInterval = window.setInterval(() => {
            ms += 10;
            if (ms === 10000) {
                endTimer(timerInterval);
            }
            updateTimer(ms);
        }, 10);
    }

    increment();
    function increment (string) {
        let number = Number(string) + 1;
        return number.toString();
        
    }

    function endTimer (intervalId) {
        clearInterval(intervalId);
        Array.from(digits.children).forEach(digit => {
            digit.classList.add("redDidgit")
        });
    }

    function updateTimer (ms) {
        if (ms === 10000) {
            secondsTens.innerHTML = "1";
            secondOnes.innerHTML = "0";
            msHundreds.innerHTML = "0";
            msTens.innerHTML = "0";
        } else if (ms % 1000 === 0) {
            secondOnes.innerHTML = increment(secondOnes.innerHTML);
            msHundreds.innerHTML = "0";
            msTens.innerHTML = "0";
        } else if (ms % 100 === 0) {
            ms.Hundreds.innerHTML = increment(secondOnes.innerHTML);
            msHundreds.innerHTML = "0";
        } else {
            msTens.innerHTML = increment(msTens.innerHTML);
        }

    }
}

