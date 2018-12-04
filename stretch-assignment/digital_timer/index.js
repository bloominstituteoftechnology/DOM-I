
function startTimer () {
  const digits = document.querySelectorAll(".digits");
  console.log(digits[0]);
  let count = 0;
  const stop = 100 * 10; // ms/s * s -- set stop time

  const delay = window.setInterval(() => {
    const msTens = count % 10;
    const msHundreds = Math.floor(count / 10) % 10;
    const secondOnes = Math.floor(count / 100) % 10;
    const secondTens = Math.floor(count / 1000) % 10;
    setDigits (msTens, msHundreds, secondOnes, secondTens);
    // digits[0].childNodes.forEach(element => {
    //   if (element.id === "msTens") {
    //     element.textContent = count % 10;
    //   } else if (element.id === "msHundreds") {
    //     element.textContent = Math.floor(count / 10) % 10;
    //   } else if (element.id === "secondOnes") {
    //     element.textContent = Math.floor(count / 100) % 10;
    //   } else if (element.id === "secondTens") {
    //     element.textContent = Math.floor(count / 1000) % 10;
    //   }
    // });
    if (count < stop) {
      count ++;
    } else {
      window.clearInterval(delay);
      digits[0].className = "redDigit";
    }
  }, 10); // execute every 10 ms
}
startTimer();

function resetTimer () {

}

function setDigits (msTens, msHundreds, secondOnes, secondTens) {
  const digits = document.querySelectorAll(".digits");
  digits[0].childNodes.forEach(element => {
    if (element.id === "msTens") {
      element.textContent = msTens;
    } else if (element.id === "msHundreds") {
      element.textContent = msHundreds;
    } else if (element.id === "secondOnes") {
      element.textContent = secondOnes;
    } else if (element.id === "secondTens") {
      element.textContent = secondTens;
    }
  });
}

