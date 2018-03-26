// * Counts up to 10 seconds
// * Increments every 10 ms
// * Has digits change to red when it gets to 10 seconds
// * Should not count past 10 seconds
// document.getElementById("secondTens").innerHTML = "Paragraph changed!";

let sTens = document.getElementById('secondTens');
let sOnes = document.getElementById('secondOnes');
let mHundreds = document.getElementById('msHundreds');
let mTens = document.getElementById('msTens');
const counter = {
    sTens: 0,
    sOnes: 0,
    mHundreds: 0,
    mTens:0
}

getMst: () => inc(Timer.msT, 10, msT, null, Timer.mstInt),
getMsh: () => inc(Timer.msH, 100, msH, null, Timer.mshInt),
getSeconds: () => inc(Timer.sO, 1000, sO, null, Timer.sOInt),
getTenSeconds: () => inc(Timer.sT, 1000, sT, Timer.stop, Timer.stInt),