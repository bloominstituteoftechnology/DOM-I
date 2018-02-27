
//  set each id as it's own variable
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

function timer () {
    let counter = 0;
    let a = 0, b = 0, c = 0;

    function increment() {
        counter++;
    }

    function endTimer () {
        // change color to red
        secondTens.parentElement.style.color = 'red';
        // clearInterval
        clearInterval(time);
    }

    function updateTimer() {
       // call increment
       increment();

        if (counter === 10){
            counter = 0;
            c++;
        }

        if (c === 10){
            c = 0;
            b++;
        }
        
        if (b === 10){
            b = 0;
            a++;
        }
        
        secondTens.innerHTML = a;
        secondOnes.innerHTML = b;
        msHundreds.innerHTML = c;
        msTens.innerHTML = counter;
        
       if(a === 1) endTimer();
    }

    function init() {
        secondTens.innerHTML = '0';
        secondOnes.innerHTML = '0';
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
        
    }

    // initialize variables, html display
    init();
    const time = window.setInterval(updateTimer, 10);
}

// initialize timer
timer();
/*// start time function
const timer = (current) => {
    console.log('timer start ', current);
    count++

    console.log('inside the timers' , count);
    if(count > 3) stopTimer();
};

// stop timer function, change color to red also stop timer at 10 sec
const stopTimer = () => {
    //change color;
    clearInterval(timeInterval);
};

const startTimer = (counter) => {
    timeInterval = setInterval(timer, 1000, counter);
};

//startTimer(counter);
*/