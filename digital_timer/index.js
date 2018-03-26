let allClass = document.getElementsByClassName('digits');

let hundreth = document.getElementById('msTens');
let tenths = document.getElementById('msHundreds');
let ones = document.getElementById('secondOnes');
let tens = document.getElementById('secondTens');

hundreth.innerHTML = 0;
tenths.innerHTML = 0;
ones.innerHTML = 0;
tens.innerHTML = 0;

let hundrethInterval = window.setInterval(() => {
  hundreth.innerHTML++;
  
    if (hundreth.innerHTML > 9) {
        hundreth.innerHTML = 0;
        tenths.innerHTML++;
    }

    if (tenths.innerHTML > 9) {
        tenths.innerHTML = 0;
        ones.innerHTML++;
    }

    if (ones.innerHTML > 9) {
        ones.innerHTML = 0;
        tens.innerHTML++;
    }

    if (tens.innerHTML > 0) {
        tens.innerHTML = 1     
        window.clearInterval(hundrethInterval);
        document.getElementById('msTens').className += ' redDigit';
        document.getElementById('msHundreds').className += ' redDigit';
        document.getElementById('secondOnes').className += ' redDigit';
        document.getElementById('secondTens').className += ' redDigit';
        document.getElementById('colon').className += ' redDigit';
        }
}, 10);
