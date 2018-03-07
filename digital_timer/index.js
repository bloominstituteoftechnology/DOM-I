let s = 0;
let mhs = 0;
let ms = 0;
let count = 0;

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
const intervalMHS = () => {
const milliHundredSeconds = setInterval(() => {
    mhs++;
        if(mhs === 10) {    
            clearInterval(milliHundredSeconds);
            document.querySelector("#msHundreds").innerHTML = `0`;
            return; 
        } 
        document.querySelector("#msHundreds").innerHTML = `${mhs}`
        // let value = document.querySelector("#msHundreds").innerHTML
        // value = parseInt(value)
        //     if( value > 9) {
        //         document.querySelector("#msHundreds").innerHTML = `0`;
        //     }
    }, 100)
}

const intervalMS = () => {
const milliSeconds = setInterval(() => {
    ms++;
        if(ms === 10) {    
            clearInterval(milliSeconds);
            document.querySelector("#msTens").innerHTML = `0`;
            return; 
        } 
        document.querySelector("#msTens").innerHTML = `${ms}`
    }, 10)
}

const run = () => {
    for (let i = 0; i < 10; i++) {
        if (i < 10) {
            intervalMS();
        }
        return intervalMS();
    }
    clearInterval();
}
run();

// if (count < 10) {
//     return intervalMHS();
// }
// if (count < 100) {
//    return intervalMS();
// }
// while( count < 10 ) {
//     intervalMHS();
//     count++
// }

// while (count < 100 ) {
//     test
//     count++
//     }

