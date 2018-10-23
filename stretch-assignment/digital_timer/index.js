class Clock {
    constructor(wholeClock) {
        this.clock = document.querySelectorAll('.digits *:not(#colon)');
        this.wholeClock = wholeClock;
        this.start = document.querySelector('.start');
    }
    init() {
        let _this = this;
        this.startTime = new Date();
        console.log(this);
        this.start.disabled = true;
        this.clockInt = setInterval(function() {
            _this.updateClock();
        }, 10);
    }
    updateClock() {
        let currentTime = new Date();
        let currentDifference = Math.floor((currentTime - this.startTime) / 10)
            .toString()
            .padStart(4, '0')
            .split('');
        for (let i = 0; i < this.clock.length; i++) {
            this.clock[i].textContent = currentDifference[i];
        }
        if (currentDifference[0] == '1') {
            this.stop();
            this.wholeClock.classList.add('redDigit');
        }
    }
    stop() {
        clearInterval(this.clockInt);
        this.start.disabled = false;
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     start.addEventListener('click', event => {
//         startTime = new Date();
//         setInterval(() => {
//             updateClock(startTime, clock);
//         }, 10);
//     });

//     function updateClock(startTime, clock) {
//         let currentTime = new Date();
//         let currentDifference = Math.floor((currentTime - startTime) / 10)
//             .toString()
//             .padStart(4, '0')
//             .split('');
//         for (i = 0; i < clock.length; i++) {
//             clock[i].textContent = currentDifference[i];
//         }
//         if (currentDifference[0] == '1') {
//             clearInterval(working.updateClockInt);
//             wholeClock.classList.add('redDigit');
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const wholeClock = document.querySelector('.digits');
    const mainClock = new Clock(wholeClock);
    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    start.addEventListener('click', init => mainClock.init());
    stop.addEventListener('click', stop => mainClock.stop());
});
