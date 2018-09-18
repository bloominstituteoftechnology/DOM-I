let hundreths = 0;
let tenths = 0;
let seconds = 0;
let push;

document.getElementById("msTens").innerHTML = 0;
document.getElementById("msHundreds").innerHTML = 0;
document.getElementById("secondOnes").innerHTML = 0;
document.getElementById("secondTens").innerHTML = 0;
document.getElementById("reset").style.display = 'none';

function timerStart() {
    push = setInterval(myTimer, 10);
    document.getElementById("start").style.display = 'none';
    document.getElementById("reset").style.display = 'initial';
}

document.getElementById('start').addEventListener("click", timerStart);

function resetButton() {
    clearInterval(push);
    document.getElementById("start").style.display = 'initial';
    document.getElementById("reset").style.display = 'none';
    document.getElementById("msTens").innerHTML = 0;
    document.getElementById("msHundreds").innerHTML = 0;
    document.getElementById("secondOnes").innerHTML = 0;
    document.getElementById("secondTens").innerHTML = 0;
    hundreths = 0;
    tenths = 0;
    seconds = 0;
    let redDigits = document.getElementsByClassName("digit");
    for (let i = 0; i < redDigits.length; i++) {
        redDigits[i].classList.remove("redDigit");
    }
}

document.getElementById('reset').addEventListener("click", resetButton);

function myTimer() {
    document.getElementById("msTens").innerHTML = hundreths;
    document.getElementById("msHundreds").innerHTML = tenths;
    document.getElementById("secondOnes").innerHTML = seconds;

    if (hundreths < 9) {
        hundreths++;
    }
    else {
        hundreths = 0;    
        if (tenths < 9) {
            tenths++;
        } 
        else {
            tenths = 0;
            if (seconds < 9) {
                seconds++;
            }
            else {
                document.getElementById("msTens").innerHTML = 0;
                document.getElementById("msHundreds").innerHTML = 0;
                document.getElementById("secondOnes").innerHTML = 0;
                document.getElementById("secondTens").innerHTML = 1;
                let redDigits = document.getElementsByClassName("digit");
                for (let i = 0; i < redDigits.length; i++) {
                    redDigits[i].classList.add("redDigit");
                }
                clearInterval(push);
            }
        }
    }
}