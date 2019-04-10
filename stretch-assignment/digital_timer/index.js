const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const digits = document.querySelectorAll(".digit")


function countZeroToNine(target, ms) {
  let count = 0;
  
  const counter = setInterval(function() {
    if(count < 9) {
      count += 1;
    } else {
      count = 0;
    }
    target.innerHTML = count;
    if(secondTens.innerHTML === '1'){
      clearInterval(counter);
      digits.forEach(item => item.style.color = "red");
    }
  }, ms)
}

countZeroToNine(secondTens, 10000);
countZeroToNine(secondOnes, 1000);
countZeroToNine(msHundreds, 100);
countZeroToNine(msTens, 10);