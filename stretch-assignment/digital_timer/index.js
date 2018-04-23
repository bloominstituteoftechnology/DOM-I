// ======================  My Solution  ======================
let counter = 100;
let msTen = 0;
let second = 0;
let subNum = 0;

let timer = window.setInterval(() => {

    if (counter !== 1101) {
        document.getElementById('msTens').innerHTML = counter - subNum;
        document.getElementById('msHundreds').style.display = 'none';
        if (counter % 100 === 0) {
            document.getElementById('secondOnes').innerHTML = second;
            second++;
            counter++;
            subNum += 100;
            if (second === 11) {
                document.getElementById('msTens').innerHTML = '00';
                document.querySelector('#secondTens').style.display = 'none';
                document.querySelector('.digits').style.color = 'red';
                return second;
            }
        }
        counter++;
    }
}, 10);


// ========================= Lambda Solution  ============================

// const digits = document.querySelector(".digits");
// const secondTens = document.getElementById("secondTens");
// const secondOnes = document.getElementById("secondOnes");
// const msHundreds = document.getElementById("msTens");
// const msTens = document.getElementById("msHundreds");
// const msOnes = document.getElementById("msOnes");

// timer();

// function timer() {
//     init();

//     function init() {
//         let ms = 0;
//         secondTens.innerHTML = "0";
//         secondOnes.innerHTML = "0";
//         msHundreds.innerHTML = "0";
//         msTens.innerHTML = "0";

//         const timerInterval = window.setInterval(() => {
//             ms += 10;
//             if (ms === 10000) {
//                 endTimer(timerInterval);
//             }
//             updateTimer(ms);
//         }, 10);
//     }

//     function increment(string) {
//         let number = Number(string) + 1;
//         return number.toString();
//     }

//     function endTimer(intervalId) {
//         clearInterval(intervalId);
//         Array.from(digits.children).forEach(digit => {
//             digit.classList.add("redDigit");
//         })
//     }

//     function updateTimer(ms) {
//         if (ms === 10000) {
//             secondTens.innerHTML = "1";
//             secondOnes.innerHTML = "0";
//             msHundreds.innerHTML = "0";
//             msTens.innerHTML = "0";
//         } else if (ms % 1000 === 0) {
//             secondOnes.innerHTML = increment(secondOnes.innerHTML);
//             msHundreds.innerHTML = "0";
//             msTens.innerHTML = "0";
//         } else if (ms % 100 === 0) {
//             msHundreds.innerHTML = increment(msHundreds.innerHTML);
//             msTens.innerHTML = "0";
//         } else {
//             msTens.innerHTML = increment(msTens.innerHTML);
//         }
//     }
// }