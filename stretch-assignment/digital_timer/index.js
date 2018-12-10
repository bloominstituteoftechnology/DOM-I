let ten = document.getElementById("secondTens");
ten.innerHTML = 0;
let one = document.getElementById("secondOnes");
one.innerHTML = 0;
let msHun = document.getElementById("msHundreds");
msHun.innerHTML = 0;
let msTen = document.getElementById("msTens");
msTen.innerHTML = 0;

setInterval(function() {
        if (ten < 1) {
            ten += 1;
        }
    }, 1000
)

const redNums = document.querySelector('digits');

if(ten.innerHTML === 1) {
    redNums.classname = redNums.className + " redDigit";
}