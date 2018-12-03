const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");

setInterval(() => {
  const date = new Date();

  secondOnes.textContent = date.getSeconds().toString()[1];
  secondTens.textContent = date.getSeconds().toString()[0];
}, 1000);

setInterval(() => {
  const date = new Date();
  msTens.textContent = date.getMilliseconds().toString();
  msTens.textContent = date.getMilliseconds().toString();
}, 1);
