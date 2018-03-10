
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

digitalTimer();

function digitalTimer () {
    initialize();

initialize => { /* set initial counter numbers to zero */
    let millsec = 0;
    msHundreds.innerHTML = "0";
    msTens.InnerHTML = "0";
}
}

let setTime = setInterval(()  => {
    millsec +=10;
    if(millsec === 1000) {
        stopTimer(setTime);
    }
}

