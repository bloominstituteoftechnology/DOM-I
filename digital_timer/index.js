const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

secondTens.innerHTML = "0";
secondOnes.innerHTML = "0";
msHundreds.innerHTML = "0";
msTens.innerHTML = "0";

function countUp() {
    if (msTens.innerHTML < 9) {
        ++msTens.innerHTML;
    } else {
        msTens.innerHTML = 0;
        if (msHundreds.innerHTML < 9) {
            ++msHundreds.innerHTML;
        } else {
            msHundreds.innerHTML = 0;
            if (secondOnes.innerHTML < 9) {
                ++secondOnes.innerHTML;
            } else {
                secondOnes.innerHTML = 0;
                clearInterval(count);
                secondTens.innerHTML = '1';
                document.querySelector(".digits").classList.add("redDigit");
            }
        }
    }
}

const count = setInterval(() => countUp(), 10);