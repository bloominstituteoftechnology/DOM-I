
//------------------------------------------------
const startButton = document.createElement('button');
const stopButton  = document.createElement('button');
const resetButton = document.createElement('button');
startButton.innerText = 'Start';
stopButton .innerText = 'Stop' ;
resetButton.innerText = 'reset';
startButton.addEventListener('click', event => { timer.start();});
stopButton .addEventListener('click', event => { timer.stop( );});
resetButton.addEventListener('click', event => { timer.reset();});
const controls = document.createElement('div');
controls.appendChild(startButton);
controls.appendChild(stopButton );
controls.appendChild(resetButton);
document.body.appendChild(controls);
document.body.style.flexDirection = 'column';

//------------------------------------------------
const timer = {
    timeLimit: 10000,
    timeElapsed: null,
    intervalDelay: 10,
    intervalId: null,
    warning: false,
    start () {
        // End any previous timer count.
        this.stop();
        // Begin a new timer count.
        this.timeElapsed = 0;
        this.intervalId = setInterval(
            this.iterate.bind(this),
            this.intervalDelay
        );
    },
    stop () {
        if(this.intervalId){
            clearInterval(this.intervalId);
        }
    },
    reset () {
        this.stop();
        this.timeElapsed = 0;
        this.updateDisplay();
    },
    iterate () {
        this.timeElapsed = Math.min(this.timeLimit, this.timeElapsed + this.intervalDelay);
        if(this.timeElapsed >= this.timeLimit){
            this.stop();
        }
        this.updateDisplay();
    },
    updateDisplay (){
        //
        if(this.timeElapsed >= this.timeLimit){
            this.warning = true;
            document.querySelector('.digits').classList.add('redDigit');
        } else if(this.warning === true){
            document.querySelector('.digits').classList.remove('redDigit');
            this.warning = false;
        }
        //
        document.querySelector('#secondTens').innerText = Math.floor((this.timeElapsed%100000)/10000);
        document.querySelector('#secondOnes').innerText = Math.floor((this.timeElapsed%10000)/1000);
        document.querySelector('#msHundreds').innerText = Math.floor((this.timeElapsed%1000)/100);
        document.querySelector('#msTens'    ).innerText = Math.floor((this.timeElapsed%100)/10);
    }
};
