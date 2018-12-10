let secondTens = document.getElementById("secondTens");
secondTens.innerHTML = 0;
let secondOnes = document.getElementById("secondOnes");
secondOnes.innerHTML = 0;
let msHundreds = document.getElementById("msHundreds");
msHundreds.innerHTML = 0;
let msTens = document.getElementById("msTens");
msTens.innerHTML = 0;

// const nums = document.getElementsByClassName("digit");
// for (let i = 0; i < nums.length; i++) {
//     nums[i].innerHTML = 0;
// }
// document.getElementById("colon").innerHTML = ":";

const addToCount = () => {
    setInterval(function() {
        if (secondTens.innerHTML < 1) {
            if (msTens.innerHTML < 9) {
                msTens.innerHTML++;
            } else {
                msTens.innerHTML = 0;
                if (msHundreds.innerHTML < 9) {
                    msHundreds.innerHTML++;
                } else {
                    msHundreds.innerHTML = 0;
                    if (secondOnes.innerHTML < 9) {
                        secondOnes.innerHTML++;
                    } else {
                        secondOnes.innerHTML = 0;
                        secondTens.innerHTML++;
                    }
                }
            }
        }
    }, 10)
}

resetCount = () => {
    clearInterval(addToCount);
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
}

const startButton = document.createElement("button");
startButton.appendChild(document.createTextNode("Start Count"));
startButton.id = "button";
document.body.appendChild(startButton);
document.getElementById("button").onclick = addToCount;

const resetButton = document.createElement("button");
resetButton.appendChild(document.createTextNode("Reset"));
resetButton.id="reset";
document.body.appendChild(resetButton);
document.getElementById("reset").onclick = resetCount;

//can't change text color
const redNums = document.querySelectorAll("div");
redNums.classname = redNums.classname + " redDigit";
if (secondTens.innerHTML === 1) {
    redNums.classname = redNums.className + " redDigit";
    console.log(redNums.className);
}