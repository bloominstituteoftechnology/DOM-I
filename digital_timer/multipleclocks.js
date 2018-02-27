






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






let clockNumber = 1;

const createClock = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("digits", `digits${clockNumber}`);

  const secondsTens = document.createElement("div");
  secondsTens.classList.add("digit", `secondTens${clockNumber}`);
  
  secondsTens.innerHTML = '-';

  const seconds = document.createElement("div");
  seconds.classList.add("digit", `second${clockNumber}`);
  
  seconds.innerHTML = '-';
  
  const colon = document.createElement("div");
  colon.classList.add("digit", `colon${clockNumber}`);
  
  colon.innerHTML = ':';
  
  const msHundreds = document.createElement("div");
  msHundreds.classList.add("digit", `msHundreds${clockNumber}`);
  
  msHundreds.innerHTML = '-';
  
  const msTens = document.createElement("div");
  msTens.classList.add("digit", `msTens${clockNumber}`);
  
  msTens.innerHTML = '-';
  
  newDiv.appendChild(secondsTens);
  newDiv.appendChild(seconds);
  newDiv.appendChild(colon);
  newDiv.appendChild(msHundreds);
  newDiv.appendChild(msTens);
  console.log(newDiv);
  document.querySelector('body').appendChild(newDiv);
  clockNumber++;
}

document.addEventListener("click", function () {
  createClock();
});