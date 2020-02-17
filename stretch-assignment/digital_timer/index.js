const getTimeParts = elapseTime => {
    const secondTens = Math.floor(elapseTime/10000);
    elapseTime -= secondTens * 10000;

    const second = Math.floor(elapseTime / 1000);
    elapseTime -= second * 1000;

    const msHundreds = Math.floor(elapseTime / 100);
    elapseTime -= msHundreds * 100;

    const msTens = Math.floor(elapseTime /10);

    return [secondTens,second,msHundreds,msTens];
};
const secondTensEl = document.getElementById('secondTens');
const secondOnesEl = document.getElementById('secondOnes');
const msHundsEl = document.getElementById('msHundreds');
const msTensEl = document.getElementById('msTens');

let timePassed = 0;
const interval = setInterval(()=>{
    timePassed += 10;
    const [secondTens,second,msHundreds,msTens] = getTimeParts(timePassed)
    secondTensEl.textContent = secondTens;
    secondOnesEl.textContent = second;
    msHundsEl.textContent = msHundreds;
    msTensEl.textContent = msTens;
    if (timePassed >= 10000){
        Array.from(document.getElementsByClassName('digit')).forEach((d)=>{
            d.style.color = "red";
        })
        clearInterval(interval);
    }
}, 10)