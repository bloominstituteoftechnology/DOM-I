let clock = document.querySelector('.digits');

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');

// view
const div = document.createElement('div');
document.body.appendChild(div);

const startButton = document.createElement('button');
startButton.innerText = 'start';
div.appendChild(startButton);

const resetButton = document.createElement('button');
resetButton.innerText = 'reset';
div.appendChild(resetButton);

// handler
startButton.addEventListener('click', startCounting, { once: true });

resetButton.addEventListener('click', function() {
  secondTens.innerHTML = '-';
  secondOnes.innerHTML = '-';
  msTens.innerHTML = '-';
  msHundreds.innerHTML = '-';
  clock.classList.remove('redDigit');
  
  // alternative approach: .disabled = true 
  startButton.removeEventListener('click', startCounting, { once: true });
  startButton.addEventListener('click', startCounting, { once: true });
})

// method
function startCounting () {
  counter = 0; 

  let countInterval = setInterval(count, 10);

  function count() {
    counter += 1;
  
    if (counter % 1000 === 0) {
      clock.classList.add('redDigit');
      clearInterval(countInterval);
    }

    let str = counter.toString();
    let strLength = counter.toString().length;
    
    secondTens.innerHTML = counter % 1000 === 0 ? 1 : 0;
    secondOnes.innerHTML = counter.toString().slice(strLength - 3, strLength - 2) || 0;;
    msTens.innerHTML = counter.toString().slice(strLength - 2, strLength - 1) || 0;;
    msHundreds.innerHTML = counter.toString().slice(strLength - 1, strLength) || 0;
  }
}
