const hundredths = document.getElementsByClassName('msHundreds');
const tenths = document.getElementsByClassName('msTens');
const ones = document.getElementsByClassName('secondOnes');
const hundreds = document.getElementsByClassName('secondTens');

int1 = setInterval(() => {if(hundredths.innerHTML < 10) hundredths.innerHTML += 1; hundredths.innerHTML = 0}, 10);
int2 = setInterval(() => {if(tenths.innerHTML < 10) tenths.innerHTML += 1; tenths.innerHTML = 0}, 100);
int3 = setInterval(() => {if(ones.innerHTML < 10) ones.innerHTML += 1; ones.innerHTML = 0}, 1000);
int4 = setInterval(() => {if(hundreds.innerHTML < 10) hundreds.innerHTML += 1; hundreds.innerHTML = 0}, 10000);