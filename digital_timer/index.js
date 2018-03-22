let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let secondOnes = document.getElementById("secondOnes");
let secondTens = document.getElementById("secondTens");

let msTensNum = 0;
let msHundredsNum = 0;
let secondOnesNum = 0;
let secondTensNum = 0;

let timer = setInterval(function () {
    if (msTens.innerHTML === "-") msTens.innerHTML = "0";
    if (msHundreds.innerHTML === "-") msHundreds.innerHTML = "0";
    if (secondOnes.innerHTML === "-") secondOnes.innerHTML = "0";
    if (secondTens.innerHTML === "-") secondTens.innerHTML = "0";


    if (msTens.innerHTML !== "9") {
        msTensNum++;
        msTens.innerHTML = msTensNum.toString();
    } else {
        msTens.innerHTML = "0";
        msTensNum = 0;
        if (msHundreds.innerHTML !== "9") {
            msHundredsNum++;
            msHundreds.innerHTML = msHundredsNum.toString()
        } else {
            msHundreds.innerHTML = "0";
            msHundredsNum = 0;
            if (secondOnes.innerHTML !== "9") {
                secondOnesNum++;
                secondOnes.innerHTML = secondOnesNum.toString()
            } else {
                secondOnes.innerHTML = "0";
                secondOnesNum = 0;
                secondTensNum++;
                secondTens.innerHTML = secondTensNum.toString();
                msTens.className = "redDigit";
                msHundreds.className = "redDigit";
                secondOnes.className = "redDigit";
                secondTens.className = "redDigit";
                clearInterval(timer);
            }
        }
    }
}, 10);

const changeColors = () => {

}