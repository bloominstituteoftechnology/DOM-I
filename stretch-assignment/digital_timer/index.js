{
    this.duration = 10000
    this.time = 0;

    function iterate() {
        this.time += 10;
        format(this.time);
    }

    function format(timeinMiliseconds) {
        const time = new Date(timeinMiliseconds);
        let seconds = time.getSeconds().toString();

        if(seconds === '10'){
            this.reset();
            document.querySelector('.digits').style.color = 'red';
        }

        if (seconds.length === 0) {
            seconds = `00`;
        } else if (seconds.length === 1) {
            const holder = seconds;
            seconds = `0${holder}`;
        }

        const secondsArr = seconds.split(''); 
        let mili = time.getMilliseconds().toString();

        if (mili.length === 0) {
            mili = `000`;
        } else if (mili.length === 1) {
            const holder = mili;
            mili = `00${holder}`;
        } else if (mili.length === 2) {
            const holder = mili;
            mili = `0${holder}`;
        }

        let miliArr = mili.split('', 2);

        secondTens.innerHTML = secondsArr[0];
        secondOnes.innerHTML = secondsArr[1];
        msHundreds.innerHTML = miliArr[0];
        msTens.innerHTML = miliArr[1];
    }

    function reset() {
        this.time = 0;
        secondTens.innerText = 0;
        secondOnes.innerText = 0;
        msHundreds.innerText = 0;
        msTens.innerText = 0;
        clearInterval(this.timer);
        startButton.disabled = false;
        document.querySelector('.digits').style.color = 'black';
    }

    let secondTens = document.querySelector('#secondTens');
    let secondOnes = document.querySelector('#secondOnes');
    let msHundreds = document.querySelector('#msHundreds');
    let msTens = document.querySelector('#msTens');
    let startButton = document.querySelector('.buttons > .start');
    let resetButton = document.querySelector('.buttons > .reset');

    startButton.addEventListener('click', () => {
        reset();
        this.timer = setInterval(iterate, 10);
        startButton.disabled = true;
    });

    resetButton.addEventListener('click', () => {
        clearInterval(this.timer);
        reset();
    });

    reset();

}