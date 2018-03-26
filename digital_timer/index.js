const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const colon = document.getElementById('colon');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
const counter = setInterval(function() {timer()}, 10)

secondTens.innerHTML = '0';
secondOnes.innerHTML = '0';
msHundreds.innerHTML = '0';
msTens.innerHTML = '0';

function timer() {
    if (msTens.innerHTML < 9 ) {
        ++msTens.innerHTML;
    }else{
        msTens.innerHTML = 0;
        if(msHundreds.innerHTML < 9 ) {
            ++msHundreds.innerHTML;
        }else{
            msHundreds.innerHTML = 0;
            if(secondOnes.innerHTML < 9 ) {
                ++secondOnes.innerHTML;
            }else{
                secondOnes.innerHTML = 0;
                ++secondTens.innerHTML;
                secondTens.style.color = 'red';
                secondOnes.style.color = 'red';
                msHundreds.style.color = 'red';
                msTens.style.color = 'red';
                colon.style.color = 'red';
                clearInterval(counter);
            }
        }
    }
}