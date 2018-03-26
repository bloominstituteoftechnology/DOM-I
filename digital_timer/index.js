const hundredths = document.getElementById('msHundreds');
const tenths = document.getElementById('msTens');
const ones = document.getElementById('secondOnes');
const tens = document.getElementById('secondTens');
const digits = document.getElementsByClassName('digit');

let hundredthsCount = 1;
let tenthsCount = 1;
let onesCount = 1;
let tensCount = 1;

int = setInterval(() => {
    if (hundredthsCount <= 9) {
        hundredths.innerHTML = hundredthsCount++;
    } else if (tenthsCount <= 9) {
        hundredthsCount = 0;
        tenths.innerHTML = tenthsCount++;
    } else if (onesCount <= 9) {
        tenthsCount = 0;
        ones.innerHTML = onesCount++;
    } else {
        clearInterval(int);
        hundredths.innerHTML = '0';
        tenths.innerHTML = '0';
        ones.innerHTML = '0';
        tens.innerHTML = '1';
        for(let i=0; i<digits.length; i++){
            digits[i].style.color = 'red';
        }
    }
}, 10);


//---------------- Failed Attempts! ---------------//

// int1 = setInterval(() => {
//     if(hundredths.innerHTML < 10)
//         hundredths.innerHTML++;
//     hundredths.innerHTML = '0';
// }, 10);

// int2 = setInterval(() => {
//     if(tenths.innerHTML < 10)
//         tenths.innerHTML++;
//     tenths.innerHTML = '0';
// }, 100);

// int3 = setInterval(() => {
//     if(ones.innerHTML < 10)
//         ones.innerHTML++;
//     ones.innerHTML = '0';
// }, 1000);

// int4 = setInterval(() => {
//     if(tens.innerHTML < 1)
//         tens.innerHTML++;
//     tens.innerHTML = 1;
// }, 10000);