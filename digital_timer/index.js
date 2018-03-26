let msTens = document.getElementById("msTens");
let msHuns = document.getElementById("msHundreds");
let seconds = document.getElementById("secondOnes");
let secTen = document.getElementById("secondTens");
let digits = document.querySelector(".digits");

secTen.innerHTML = "0";
seconds.innerHTML = "0";
msHundreds.innerHTML = "0";
msTens.innerHTML = "0";

function timer() {
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
                    ++secTen.innerHTML;
                    document.getElementsByClassName("digits")[0].style.color = "red";
                }
            }
        }
    }
    const count = setInterval(function() { timer() }, 10); 