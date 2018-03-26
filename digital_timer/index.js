class Timer { //Used a class because it was simpler than using several more functions in my opinion. 
    constructor() {
        this.count = 0; //This is the count. I dont know how to explain that further.
        this.on = false; //Basically whether the function is running or not, I prefer off or on.
        
        this.startButton = document.querySelector('button#start'); //These are the buttons used just <button></button> in the html gave them ids and here we have it.
        this.stopButton = document.querySelector('button#stop');
        this.resetButton = document.querySelector('button#reset');
    
        this.startButton.addEventListener('click', (event) => timer.start()); // These are the onclick events that relate to functions to be expaned upon.
        this.stopButton.addEventListener('click', (event) => timer.stop());
        this.resetButton.addEventListener('click', (event) => timer.reset());

        this.digits = Array.from(document.querySelectorAll('.digit:not(#colon)')); // Uses all digits except colon. The :not() is really useful. This part is used in the update.
        this.allChars = Array.from(document.querySelectorAll('.digit')); //This is the digits used in coloring which does include the colon.
    }
    initiate() {
        window.setInterval(this.tick.bind(this), 10); // This sets the interval to 10ms. 
    }
    start() {
        this.on = true; // turns the count on
        this.startButton.setAttribute('disabled', 'disabled'); //This sets the button to disabled so you cannot redo start.
        this.stopButton.removeAttribute('disabled'); //This removes stopButton's disabled attribute allowing stop to be used again.
    }
    stop() {
        this.on = false; // sets the count to stop ie false
        this.stopButton.setAttribute('disabled', "disabled");// Basically the same as above and below
        this.startButton.removeAttribute('disabled');
    }
    reset() {
        this.stop(); // stops the functions
        this.count = 0; // sets the count to 0 but does not update
        this.startButton.removeAttribute('disabled'); // This allows the start button to be enabled.
        this.allChars.forEach((element) => element.classList.remove('redDigit')); //This is to remove the red digit upon reset.
        this.update(); // updates the count at 0.
    }
    tick() {
        if (this.count < 1000 && this.on) { //since we set 10ms intervals. 1000 10ms intervals would equal 10 seconds. This basically checks if its under 10 seconds and running.
            this.count += 1; //Allows for the turnover of digits as long as it === ^^^
            this.update(); //Updates the count to the above
        }       
    }
    update() {
        let timerString = this.count.toString().padStart(4, '0'); // sets the timerSTring to 4 digits and a pad of 0
        this.digits.forEach((element, index) => element.innerHTML = timerString[index]); //Checks the digits for each element of the index and sets the elements to the timerString. It makes more sense in my head.
        if(timerString === '1000') { //These two lines are the red lines for the timerString turning the digits red when it hits a threshold.
            this.allChars.forEach((element) => element.classList.add('redDigit'));
        }
    }
}

let timer = new Timer();
timer.initiate(); //Sets the timer interval
document.querySelectorAll('.button').forEach((element, index) => element.setAttribute('style','font-size: 1rem; font-family: san francisco, display: flex, align-content: center')); // Just a bit of styling but in order to touch each button I had to use queryselectorall and a for each.
document.querySelector('.digits').setAttribute('style','display: flex, align-content: center');//I tried a bunch of funny things with this but I would need to spend a lot more time with it to get it the way I want it.
//I loved my group this week, Jared was really helpful in explaining all this. It greatly helped to have some guidance and someone to explain some of the more difficult to understand parts of DOM. The Arrow functions are still giving me headaches but I'm working on them. If you read this far I hope you have a nice day!