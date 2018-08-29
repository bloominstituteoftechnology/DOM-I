let countTensMS = 0;
let countHundredsMS = 0;
let countSecondOnes = 0;
let buttonPush;

document.getElementById("msTens").innerHTML = 0;
document.getElementById("msHundreds").innerHTML = 0;
document.getElementById("secondOnes").innerHTML = 0;
document.getElementById("secondTens").innerHTML = 0;



function buttonStart() {
    document.getElementById("start").disabled = true;
    document.getElementById("start").innerHTML = "Press Reset";
    buttonPush = setInterval(msTens, 10)
}

function resetButton() {
    document.getElementById("start").disabled = false;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("msTens").innerHTML = 0;
    document.getElementById("msHundreds").innerHTML = 0;
    document.getElementById("secondOnes").innerHTML = 0;
    document.getElementById("secondTens").innerHTML = 0;
    countTensMS = 0;
    countHundredsMS = 0;
    countSecondOnes = 0;
    let redDigits = document.getElementsByClassName("digit");
    for (let i = 0; i < redDigits.length; i++) {
        redDigits[i].classList.remove("redDigit");
    }
    clearInterval(buttonPush);
    buttonPush = null;
}

document.getElementById('start').addEventListener("click", buttonStart);
document.getElementById('reset').addEventListener("click", resetButton);

function msTens() {

    if (countTensMS < 9) {
        countTensMS++;
        document.getElementById("msTens").innerHTML = countTensMS;
    } else {
        countTensMS = 0;
        document.getElementById("msTens").innerHTML = countTensMS;
        if (countHundredsMS < 9) {
            countHundredsMS++;
            document.getElementById("msHundreds").innerHTML = countHundredsMS;
        } else {
            countHundredsMS = 0;
            document.getElementById("msHundreds").innerHTML = countHundredsMS;
            if (countSecondOnes < 9) {
                countSecondOnes++;
                document.getElementById("secondOnes").innerHTML = countSecondOnes;
            } else {
                document.getElementById("msTens").innerHTML = 0;
                document.getElementById("msHundreds").innerHTML = 0;
                document.getElementById("secondOnes").innerHTML = 0;
                document.getElementById("secondTens").innerHTML = 1;
                let redDigits = document.getElementsByClassName("digit");
                for (let i = 0; i < redDigits.length; i++) {
                    redDigits[i].classList.add("redDigit");
                }
                clearInterval(buttonPush);

            }

        }
    }
}