
let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let arrayDOM = [secondTens, secondOnes, msHundreds, msTens];

document.querySelector(".digits").appendChild(document.createElement("button"));
let button = document.querySelector("button");
button.textContent = "Start";
button.addEventListener("click", buttonClick);

function runTimer () {
    let start = Date.now();
    let interval = window.setInterval(function timer() {
        let elapsed = Date.now() - start;
        button.textContent = "disabled"
        if (Math.floor(elapsed/10) < 1000) {
            secondTens.textContent = `${Math.floor(elapsed / 10000)}`;
            secondOnes.textContent = `${Math.floor((elapsed % 10000) / 1000)}`; 
            msHundreds.textContent = `${Math.floor((elapsed % 1000) / 100)}`;
            msTens.textContent = `${Math.floor((elapsed % 100) / 10)}`;
        }
        else  {
            for (let i of arrayDOM) {
                i.classList.add("redDigit");
            }
            secondTens.textContent = "1";
            secondOnes.textContent = "0";
            msHundreds.textContent = "0";
            msTens.textContent = "0";
            button.textContent = "Reset"
            window.clearInterval(interval);
        }
    }, 10);
    interval();
}


function reset() {
    for (let i of arrayDOM) {
        i.textContent = "-";
        i.classList.remove("redDigit");
    }
}


function buttonClick(e) {
    if (secondTens.textContent === "-") {
        runTimer();
    }
    else if (secondTens.classList.contains("redDigit")) {
        reset();
        runTimer();
    }
}


