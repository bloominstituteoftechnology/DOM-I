let counter = 100;
let msTen = 0;
let second = 0;
let subNum = 0;

let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let timer = window.setInterval(() => {

    if (counter !== 1100) {
        document.getElementById('msTens').innerHTML = counter - subNum;
        document.getElementById('msHundreds').style.display = 'none';
        if (counter % 100 === 0) {
            document.getElementById('secondOnes').innerHTML = second;
            second++;
            counter++;
            subNum += 100;
            if (second === 11) {
                document.getElementById('secondOnes').innerHTML = 10;
                document.getElementById('msTens').innerHTML = 00;
                document.querySelector('#secondTens').style.display = 'none';
                document.querySelector('.digits').style.color = 'red';
                return second;
            }
        }
        counter++;
    }
}, 10);