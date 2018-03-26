//count up to 10 seconds

  //incremement every 10 ms

  //has digits change to red when it gets to 10 seconds

  //should not count past 10 seconds

  //Let int = window.setInterval(callback, time)

  // increment .01 every .01 seconds 


  let hundreth = document.getElementById('msTens');
  let tenths = document.getElementById('msHundreds');
  let ones = document.getElementById('secondOnes');
  let tens = document.getElementById('secondTens');

  hundreth.innerHTML = 0;
  tenths.innerHTML = 0;
  ones.innerHTML = 0;
  tens.innerHTML = 0;

//   function clearTheInterval() {
//     window.clearInterval(hundrethInterval);
//     }

  let hundrethInterval = window.setInterval(() => {
    hundreth.innerHTML++;
    if (hundreth.innerHTML > 9) {
        hundreth.innerHTML = 0;
        tenths.innerHTML++;
    }

    if (tenths.innerHTML > 9) {
        tenths.innerHTML = 0;
        ones.innerHTML++;
    }

    if (ones.innerHTML > 9) {
        ones.innerHTML = 0;
        tens.innerHTML++;
    }

     if (tens.innerHTML > 0) {
        //allClass.style.color = 'red';
        //document.getElementsByClassName('digit').className = 'redDigit';

        document.getElementById('msTens').className += ' redDigit';
        document.getElementById('msHundreds').className += ' redDigit';
        document.getElementById('secondOnes').className += ' redDigit';
        document.getElementById('secondTens').className += ' redDigit';
        document.getElementById('colon').className += ' redDigit';
        window.clearInterval(hundrethInterval);
        
    }
}, 10);

//return to exit?
//we need to fix 0 & 1 problem
