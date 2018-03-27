

//individual ids, called by getElementById
const indDigit1 = document.getElementById("secondTens");
indDigit1.style.color = 'red';
const indDigit2 = document.getElementById("secondOnes");
indDigit2.style.color = 'blue';
const indDigit3 = document.getElementById("colon");
indDigit3.style.color = 'red';
//Next ids called by querySelector
const indDigit4 = document.querySelector("#msHundreds");
indDigit4.style.color = 'blue';
const indDigit5 = document.querySelector("#msTens");
indDigit5.style.color = 'red';
//quearySelectorAll fails to set style...
//  const indDigit5 = document.querySelectorAll("#msTens");
//  indDigit5.style.color = 'red';



//class digits, fails to set style
const digitContainer = document.getElementsByClassName("digits");

let msTinterv;
let secTinterv;
let tms = 0;
// setInterval(function(){ indDigit1.innerHTML = msTinterv++ }, 10000);
//  setInterval(function(){ indDigit2.innerHTML = msTinterv++ }, 1000);


//  setInterval(function(){ indDigit3.innerHTML = msTinterv++ }, 100);
//  setInterval(function(){ indDigit4.innerHTML = msTinterv++ }, 100);
function digitFunction() {

    if (msTinterv >= 1000) {
        terminate();
    } else {
        // indDigit2.innerHTML = 0;
        ++msTinterv
        // terminate()
    }



    // console.log('100ms');


    if (msTinterv < 10) {
        indDigit5.innerHTML = "";
    }

    if (msTinterv <= 1000) {

        indDigit4.innerHTML = Math.floor((msTinterv / 10) % 10)
        indDigit5.innerHTML = Math.floor((msTinterv / 1) % 10)
        // indDigit4.innerHTML = Math.round(msTinterv);           
        if (msTinterv === 1000) {
            indDigit5.style.color = 'red';
            indDigit4.style.color = 'red';
            indDigit3.style.color = 'red';
            indDigit2.style.color = 'red';
            indDigit1.style.color = 'red';
            indDigit2.innerHTML = 0;
            indDigit1.innerHTML = msTinterv / 1000
        } else {
            indDigit1.innerHTML = "";
            indDigit2.innerHTML = Math.round(msTinterv / 100);
        }
    }





}
function count() { msTinterv = setInterval(function () { digitFunction() }, 10) };
function terminate() {
    clearInterval(msTinterv)
}
count()
 // 1000 = 10sec
 // 100 == 1sec
 // 10 = .1 sec
 // 1 == .01sec