// function updateTime() {
//     var time = 0;
//     setInterval(function() {
//         document.querySelector(".digits").value = time;
//         time++;
//         if (time > 10) {
//             time = 1;
//         }
//     }, 10);
// }
// updateTime();


// let num = window.setInterval( function() {
//     console.log('Look at this');
// }, 1000);


var timer = {
    currentTime: 1,
    startTime: 1,
    maxTime: 12,
    interval: 200,
    target: ".digits",
    updateTime: function() {
        document.querySelectorAll(this.target).value = this.currentTime;
        this.currentTime++;
        if (this.currentTime > this.maxTime) {
            this.currentTime = this.startTime;
        }
    },
    start: function() {
        this.currentInterval = setInterval(this.updateTime.bind(this), this.interval);
    },
    stop: function() {
        clearInterval(this.currentInterval);
    }
};

timer.start();
timer.stop();