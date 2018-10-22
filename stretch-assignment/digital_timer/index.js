(function() {
  console.log('Digital Timer is Running');

  const timer = {
    currentTime: 0,
    timer: null,
    stopTimer: function() {
      clearInterval(this.timer);
    }
  }

  const controller = {
    init: function() {
      timerView.init();
      this.runTimer();
    },

    getTime() {
      let time = timer.currentTime;
      let timeArr = [];

      for (let i=4; i>=1; i--) {
        let num = Math.floor(time/Math.pow(10,i));
        time -= num * Math.pow(10,i);
        timeArr.push(num);
      }

      return timeArr;
    },

    runTimer: function() {
      if (false) {
        clearInterval(timer.timer);
      } else {
        timer.timer = setInterval(function() {
          timer.currentTime += 10;
          if (timer.currentTime >= 10000) {
            timer.stopTimer();
          }
          timerView.render();
        }, 10);
      }
    }
  }


  const timerView = {
    init: function() {
      this.secondTens = document.getElementById('secondTens');
      this.secondOnes = document.getElementById('secondOnes');
      this.msHundreds = document.getElementById('msHundreds');
      this.msTens = document.getElementById('msTens');

      this.render();
    },

    render: function() {
      const currentTime = controller.getTime();

      this.secondTens.textContent = currentTime[0];
      this.secondOnes.textContent = currentTime[1];
      this.msHundreds.textContent = currentTime[2];
      this.msTens.textContent = currentTime[3];
    }
  }

  controller.init();
})();