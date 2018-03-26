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