let tens = document.getElementById("secondTens");
let ones = document.getElementById('secondOnes');
let hundreds = document.getElementById('msHundreds');
let tenths = document.getElementById('msTens');
const element = document.getElementById('stopWatch');

let a = setInterval(count, 10000);
let b = setInterval(count2, 1000);
let c = setInterval(count3, 100);
let d = setInterval(count4, 10);
let e = setInterval(changeColor, 10000);

let tracker = 0;
let tracker2 = 0;
let tracker3 = 0;
let tracker4 = 0;

function count() {
    if (tracker === 0) {
        clearInterval(a);
    }
    tracker++;
    tens.innerHTML = tracker;
}

function count2() {
    if (tracker2 === 9) {
        tracker2 = -1;
        clearInterval(b);
    }
    tracker2++;
    ones.innerHTML = tracker2;
}

function count3() {
    if (tracker3 === 99) {
        tracker3 = -1;
        clearInterval(c);
    }
    tracker3++;
    hundreds.innerHTML = tracker3 % 10;
}

function count4() {
    if (tracker4 === 999) {
        tracker4 === -1;
        clearInterval(d);
    }
    tracker4++;
    tenths.innerHTML = tracker4 % 10;
}

function changeColor() {
    element.style.color = "red";
}
