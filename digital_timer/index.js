let msTens = document.getElementById("msTens");
let msHuns = document.getElementById("msHundreds");
let seconds = document.getElementById("secondOnes");
let sseconds = document.getElementById("secondTens");
let digits = document.querySelector(".digits");

sseconds.innerHTML = "0";
seconds.innerHTML = "0";
msHundreds.innerHTML = "0";
msTens.innerHTML = "0";

function clockcounter() {
       if (msTens.innerHTML < 9) {
            ++msTens.innerHTML;
        } else {
            msTens.innerHTML = 0;
            if (msHuns.innerHTML < 9) {
                ++msHuns.innerHTML;
            } else {
                msHuns.innerHTML = 0;
                if (seconds.innerHTML < 9) {
                    ++seconds.innerHTML;
                } else {
                    seconds.innerHTML = 0;
                    clearInterval(count);
                    ++sseconds.innerHTML;
                    document.getElementsByClassName("digits")[0].classList.add("redDigit");
                }
            }
        }
    }
    const count = setInterval(function() { clockcounter() }, 10); 
