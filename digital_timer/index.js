const ms10 = document.querySelector("#msTens");
const ms100 = document.querySelector("#msHundreds");
const seconds = document.querySelector("#secondOnes");
const secondsTens = document.querySelector("#secondTens");
ms10.innerHTML = 4;
console.log(ms10);

ms10.innerHTML = 0;
ms100.innerHTML = 0;
seconds.innerHTML = 0;
secondsTens.innerHTML = 0;

// const active = () => {
//   // if ms is less than 10 we want to increment
//   if (ms10.innerHTML < 1000) {
//     ++ms10.innerHTML;
//   }
  

// }

// we want to change all digits to 0 before func call
// 




setInterval(() => {
  // if ms is less than 10 we want to increment
  if (ms10.innerHTML < 10) {
    ++ms10.innerHTML;
  }
  

}, 10);