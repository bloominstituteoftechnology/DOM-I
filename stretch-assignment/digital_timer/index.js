(function() {
  console.log('Digital Timer is Running');

  const timer = {
    currentTime: 0
  }

  const controller = {
    init: function() {
      timerView.init();
    },

    getTime() {
      return [0,0,0,0];
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