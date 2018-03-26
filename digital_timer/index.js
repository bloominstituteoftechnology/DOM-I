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


// ----------- Alternate Solution Using Modulus --------------

// let secondOnes = document.querySelector("#secondOnes");
// let secondTens = document.querySelector("#secondTens");
// let msHundreds = document.querySelector("#msHundreds");
// let msTens = document.querySelector("#msTens");
// let digits = document.querySelector(".digits");

// secondOnes.innerHTML = 0;
// secondTens.innerHTML = 0;
// msHundreds.innerHTML = 0;
// msTens.innerHTML = 0;

// tenSecondTimer = () => {
//   if (msTens.innerHTML < 9) {
//     msTens.innerHTML++;
//   } else if (msTens.innerHTML % 9 === 0 && msHundreds.innerHTML < 9) {
//     msTens.innerHTML = 0;
//     msHundreds.innerHTML++;
//   } else if (msHundreds.innerHTML % 9 === 0 && secondOnes.innerHTML < 9) {
//     msHundreds.innerHTML = 0;
//     secondOnes.innerHTML++;
//   } else if (secondOnes.innerHTML % 9 === 0) {
//     secondOnes.innerHTML = 0;
//     clearInterval(timer);
//     msTens.innerHTML = 0;
//     msHundreds.innerHTML = 0;
//     ++secondTens.innerHTML;
//     document.getElementsByClassName("digits")[0].style.color ="red";
//   }
// }

// const timer = setInterval(tenSecondTimer, 10);