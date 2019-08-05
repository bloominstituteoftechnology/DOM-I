//Variables
let ms10 = document.querySelector("#msTens");
let ms100 = document.querySelector("#msHundreds");

let s1 = document.querySelector("#secondOnes");
let s10 = document.querySelector("#secondTens");

ms10.textContent = 0;
ms100.textContent = 0;
s1.textContent = 0;
s10.textContent = 0;

msCount = setInterval(timer, 10);

var timer = () => ms10.stepUp(1);

if (ms10.textContent == 9){
    clearInterval(msCount);
}