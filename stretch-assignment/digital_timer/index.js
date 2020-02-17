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

let timePassed = 0;
const interval = setInterval(()=>{
    timePassed += 10;
    const [secondTens,second,msHundreds,msTens] = getTimeParts(timePassed)
}, 10)