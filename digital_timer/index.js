const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

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
                ++secondTens.innerHTML;
                document.getElementsByClassName("digits")[0].classList.add("redDigit");
            }
        }
    }
}
const count = setInterval(function() { countUp() }, 10);