class Timer {
    constructor(htmlElement) {
        this.display = htmlElement;
    
        this.secondTens = this.display.querySelector("#secondTens");
        this.secondOnes = this.display.querySelector("#secondOnes");
        this.msHundreds = this.display.querySelector("#msHundreds");
        this.msTens = this.display.querySelector("#msTens");

        this.resetIncrements();
        this.updateDisplay();
    }

    resetIncrements() {
        this.incSecondTens = 0;
        this.incSecondOnes = 0;
        this.incMsHundreds = 0;
        this.incMsTens = 0;
    }

    start() {
        let _this = this;
        _this.interval = setInterval(function() {
            _this.incMsTens++;
            if (_this.incMsTens > 9) {
                _this.incMsHundreds++;
                _this.incMsTens = 0;
            }
            if (_this.incMsHundreds > 9) {
                _this.incSecondOnes++;
                _this.incMsHundreds = 0;
            }
            if (_this.incSecondOnes > 9) {
                _this.incSecondTens++;
                _this.incSecondOnes = 0;
            }

            _this.updateDisplay();

            if (_this.incSecondTens === 1) {
                clearInterval(_this.interval);
            }
        }, 10);
    }

    stop() {
        clearInterval(this.interval);
        this.resetIncrements();
        this.updateDisplay();
    }

    updateDisplay() {
        this.secondTens.innerText = this.incSecondTens;
        this.secondOnes.innerText = this.incSecondOnes;
        this.msHundreds.innerText = this.incMsHundreds;
        this.msTens.innerText = this.incMsTens;

        if (this.incSecondTens === 1) {
            this.display.classList.add("redDigit");
        } else {
            this.display.classList.remove("redDigit");
        }
    }
}

let timer = new Timer(document.querySelector(".digits"));

let buttonStart = document.querySelector("button.start");
buttonStart.addEventListener("click", function(e) {
    timer.start();
    buttonStart.disabled = true;
});

let buttonReset = document.querySelector("button.reset");
buttonReset.addEventListener("click", function(e) {
    timer.stop();
    buttonStart.disabled = false;
});