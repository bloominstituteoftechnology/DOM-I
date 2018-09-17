{
    this.secondTens = 0;
    this.secondOnes = 0;
    this.msHundreds = 0;
    this.msTens = 0;

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
            clearInterval(this.timer);
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

    this.timer = setInterval(iterate, 10);

    let secondTens = document.querySelector('#secondTens');
    let secondOnes = document.querySelector('#secondOnes');
    let msHundreds = document.querySelector('#msHundreds');
    let msTens = document.querySelector('#msTens');

    secondTens.innerText = this.secondTens;
    secondOnes.innerText = this.secondOnes;
    msHundreds.innerText = this.msHundreds;
    msTens.innerText = this.msTens;
}