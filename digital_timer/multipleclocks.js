
function runClock(msTens, msHundreds, seconds, secondsTens, newDiv, countThis) {
  // console.log(msTens);
  if (msTens.innerHTML < 9) {
    ++msTens.innerHTML;
  } else {
    msTens.innerHTML = 0;
    if (msHundreds.innerHTML < 9) {
      ++msHundreds.innerHTML;
    } else {
      msHundreds.innerHTML = 0;
      if (seconds.innerHTML < 9) {
        ++seconds.innerHTML;
      } else {
        seconds.innerHTML = 0;
        clearInterval(countThis);
        ++secondsTens.innerHTML
        newDiv.classList.add("redDigit");
      }
    }
  }
}






let clockNumber = 1;

const createClock = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("digits", `digits${clockNumber}`);

  const secondsTens = document.createElement("div");
  secondsTens.classList.add("digit", `secondTens${clockNumber}`);
  
  secondsTens.innerHTML = 0;

  const seconds = document.createElement("div");
  seconds.classList.add("digit", `second${clockNumber}`);
  
  seconds.innerHTML = 0;
  
  const colon = document.createElement("div");
  colon.classList.add("digit", `colon${clockNumber}`);
  
  colon.innerHTML = ':';
  
  const msHundreds = document.createElement("div");
  msHundreds.classList.add("digit", `msHundreds${clockNumber}`);
  
  msHundreds.innerHTML = 0;
  
  const msTens = document.createElement("div");
  msTens.classList.add("digit", `msTens${clockNumber}`);
  
  msTens.innerHTML = 0;
  
  newDiv.appendChild(secondsTens);
  newDiv.appendChild(seconds);
  newDiv.appendChild(colon);
  newDiv.appendChild(msHundreds);
  newDiv.appendChild(msTens);
  console.log(msTens);
  document.querySelector('body').appendChild(newDiv);

  var countThis = setInterval(function() { runClock(msTens, msHundreds, seconds, secondsTens, newDiv, countThis) }, 10);
  
  clockNumber++;
}

document.addEventListener("click", function () {
  createClock();
});