let s = 0;
let mhs = 0;
let ms = 0;
let mhsCount = 0;

const tenSeconds = setTimeout (() => {
        document.querySelector("#secondTens").innerHTML = `1`;
    }, 10000
)

const seconds = setInterval(() => {
    s++;
        if(s === 10) {    
            clearInterval(seconds);
            document.querySelector("#secondOnes").innerHTML = `0`;
            return; 
        } 
        document.querySelector("#secondOnes").innerHTML = `${s}`
    }, 1000
)

const milliHundredSeconds = setInterval(() => {
    mhs++;
        if(mhs === 10) {    
            clearInterval(milliHundredSeconds);
            document.querySelector("#msHundreds").innerHTML = `0`;
            return; 
        } 
        document.querySelector("#msHundreds").innerHTML = `${mhs}`
    }, 100
)

const milliSeconds = setInterval(() => {
    ms++;
        if(ms === 10) {    
            clearInterval(milliSeconds);
            document.querySelector("#msTens").innerHTML = `0`;
            return; 
        } 
        document.querySelector("#msHundreds").innerHTML = `${ms}`
    }, 10
)
