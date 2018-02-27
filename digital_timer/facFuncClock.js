class Clock {
  constructor(options) {
    this.ClockNum = options.ClockNum;
    this.secondsTens = options.secondsTens;
    this.seconds = options.seconds;
    this.msHundreds = options.msHundreds;
    this.msTens = options.msTens;
  }

  createClock() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('digits', `digits${this.clockNum}`);

    this.secondsTens = document.createElement('div');
    this.secondsTens.classList.add('digit', `secondTens${this.clockNum}`);
    this.secondsTens.innerHTML = '-';
    newDiv.appendChild(this.secondsTens);

    this.seconds = document.createElement('div');
    this.seconds.classList.add('digit', `second${this.clockNum}`);
    this.seconds.innerHTML = '-';
    newDiv.appendChild(this.seconds);

    this.colon = document.createElement('div');
    this.colon.classList.add('digit', `colon${this.clockNum}`);
    this.colon.innerHTML = ':';
    newDiv.appendChild(this.colon);

    this.msHundreds = document.createElement('div');
    this.msHundreds.classList.add('digit', `msHundreds${this.clockNum}`);
    this.msHundreds.innerHTML = '-';
    newDiv.appendChild(this.msHundreds);

    this.msTens = document.createElement('div');
    this.msTens.classList.add('digit', `msTens${this.clockNum}`);
    this.msTens.innerHTML = '-';
    newDiv.appendChild(this.msTens);
  }


  counter() {
    if (this.msTens.innerHTML < 9) {
      ++this.msTens.innerHTML;
    } else {
      this.msTens.innerHTML = 0;
      if (this.msHundreds.innerHTML < 9) {
        ++this.msHundreds.innerHTML;
      } else {
        this.msHundreds.innerHTML = 0;
        if (this.seconds.innerHTML < 9) {
          ++this.seconds.innerHTML;
        } else {
          this.seconds.innerHTML = 0;
          ++this.secondsTens.innerHTML;
          // clearInterval(countThis);
          // document.getElementsByClassName('digits')[0].classList.add('redDigit');
        }
      }
    }
  }

  // countThis() {
  //   setInterval(() => { counter(); }, 10);
  // }
}
