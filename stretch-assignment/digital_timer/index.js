let count = 0;

let timer = setInterval(function(){
  if (count === 1000) {
    clearInterval(timer);
  }

  let secondTens = document.getElementById("secondTens");
  let secondOnes = document.getElementById("secondOnes");
  let colon = document.getElementById("colon");
  let msHundreds = document.getElementById("msHundreds");
  let msTens = document.getElementById("msTens");
  let ms = count.toString();

  if (count < 10) {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0"
    msTens.innerHTML = ms;
  }

  if (count < 100 && count >= 10) {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = ms[0];
    msTens.innerHTML = ms[1];
  }

  if (count < 1000 && count >= 100) {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = ms[0];
    msHundreds.innerHTML = ms[1];
    msTens.innerHTML = ms[2];
  }

  if (count === 1000) {
    secondTens.innerHTML = ms[0];
    secondTens.style.color = "red";
    secondOnes.innerHTML = ms[1];
    secondOnes.style.color = "red";
    colon.style.color = "red";
    msHundreds.innerHTML = ms[2];
    msHundreds.style.color = "red";
    msTens.innerHTML = ms[3];
    msTens.style.color = "red";
  }

  count += 10;

}, 100);
