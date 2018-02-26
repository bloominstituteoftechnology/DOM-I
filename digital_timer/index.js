const ms10 = document.querySelector("#msTens");
const ms100 = document.querySelector("#msHundreds");
const seconds = document.querySelector("#secondOnes");
const secondsTens = document.querySelector("#secondTens");

ms10.innerHTML = 0;
ms100.innerHTML = 0;
seconds.innerHTML = 0;
secondsTens.innerHTML = 0;

function counter() {  
  if (ms10.innerHTML < 9) {
    ++ms10.innerHTML;
  } else {
    ms10.innerHTML = 0;
    if (ms100.innerHTML < 9) {
      ++ms100.innerHTML;
    } else {
      ms100.innerHTML = 0;
      if (seconds.innerHTML < 9) {
        ++seconds.innerHTML;
      } else {
        seconds.innerHTML = 0;
        clearInterval(countThis);
        ++secondsTens.innerHTML
        document.getElementsByClassName("digits")[0].classList.add("redDigit");
      }
    }
  }
}

const countThis = setInterval(function() { counter() }, 10);