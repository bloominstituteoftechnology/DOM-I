let hundredths = document.getElementById('mstens');
let tenths = document.getElementById('msTens');
let ones = document.getElementById('secondOnes');
let tens = document.getElementById('secondTens');

let hundredthsCount = 0;
let tenthsCount = 0;
let onesCount = 0;
let tensCount = 0;

int = setInterval(() => {
    if (tenthsCount <= 9) {
        tenthsCount.innerHTML = tenthsCount++;
    } else if (hundredthsCount <= 9) {
        tenthsCount = 0;
        hundredthsCount.innerHTML = hundredthsCount++;
    } else if (onesCount <= 9) {
        hundredthsCount = 0;
        onesCount.innerHTML = onesCount++;
    } else {
        onesCount = 0;
        tensCount.innerHTML = tensCount++;
    }
    if (tensCount === 1) {
        clearInterval(int);
        hundredths.innerHTML = '0';
        tenths.innerHTML = '0';
        ones.innerHTML = '0';
        tens.innerHTML = '1';
    }
}
}, 10);

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

// if(tens)