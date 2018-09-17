{
    this.secondTens = 0;
    this.secondOnes = 0;
    this.msHundreds = 0;
    this.msTens = 0;

    function iterate() {
        this.msTens += 1;
        msTens.innerText = this.msTens;
        if (this.msTens === 9) {
            this.msTens = 0;
            this.msHundreds += 1;
            msHundreds.innerText = this.msHundreds;

            if (this.msHundreds === 9) {
                this.msHundreds = 0;
                this.secondOnes += 1;
                secondOnes.innerText = this.secondOnes;

                if (this.secondOnes === 9) {
                    this.secondTens += 1;
                    this.secondOnes = 0;
                    this.msHundreds = 0;
                    this.msTens = 0;

                    secondTens.innerText = this.secondTens;
                    secondOnes.innerText = this.secondOnes;
                    msHundreds.innerText = this.msHundreds;
                    msTens.innerText = this.msTens;

                    clearInterval(this.timer);
                    document.querySelector('.digits').style.color = 'red';
                }
            }
        }
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