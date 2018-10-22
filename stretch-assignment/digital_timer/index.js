
console.log(`Hello World`);

const digitsElement = document.querySelectorAll('.digits');
console.log(digitsElement);

const secTenElem = document.querySelector('#secondTens');
const secOneElem = document.querySelector('#secondOnes');
const msHundElem = document.querySelector('#msHundreds');
const msTensElem = document.querySelector('#msTens');

secTenElem.textContent = 0;
secOneElem.textContent = 0;
msHundElem.textContent = 0;
msTensElem.textContent = 0;


// console.log(intervalTime);

console.log(msTensElem.innerHTML);

let msTcount = 0;
let msHcount = 0;
let secOcount = 0;
let secTcount = 0;
let bRunning = true;
const intervalTime = window.setInterval(timerCount, 10);

function timerCount () {
    // intervalTime;
    // let tempMStens += parseInt(msTensElem.innerHTML);

    if (bRunning) {
        msTcount += 1;
        msTensElem.textContent = msTcount;
        // if (intervalTime)
        // {       
        //     msTcount += 1;
        //     msTensElem.textContent = msTcount;
        // }
        if (msTensElem.innerHTML == '10') {
            msTensElem.textContent = 0;
            msTcount = 0;

            msHcount += 1;
            msHundElem.textContent = msHcount;
        }
        if(msHundElem.innerHTML == "10")
        {
            msHundElem.textContent = 0;
            msHcount = 0;

            secOcount += 1;
            secOneElem.textContent = secOcount;
        }
        if(secOneElem.innerHTML == "10")
        {
            secOneElem.textContent = 0;
            secOcount = 0;

            secTcount += 1;
            secTenElem.textContent = secTcount;
        }
        if(secTenElem.innerHTML == '1')
        {
            secOneElem.style.color = 'red';
            secTenElem.style.color = 'red';
            msHundElem.style.color = 'red';
            msTensElem.style.color = 'red';
            clearInterval(intervalTime);
            bRunning = false;
        }
    }
}

timerCount();