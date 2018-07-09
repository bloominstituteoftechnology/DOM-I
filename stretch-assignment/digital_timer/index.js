let st = 0,
  so = 0,
  mo = 0,
  mt = 0;
let intervalID;
let nums = document.getElementsByClassName("digits");
let secondTen = document.getElementById('secondTens');
let secondOne = document.getElementById('secondOnes');
let msHund = document.getElementById('msHundreds');
let msTen = document.getElementById('msTens');
let btn = document.querySelector('button');


function start() {
  if (st === 0) {
    intervalID = window.setInterval(timerGo, 10);
  }
}

function stop() {
  clearInterval(intervalID);
  btn.removeAttribute('disabled');
}

function reset() {
  st = 0, so = 0, mo = 0, mt = 0;
  secondTen.innerHTML = st;
  secondOne.innerHTML = so;
  msHund.innerHTML = mo;
  msTen.innerHTML = mt;
  nums = document.getElementsByClassName("redDigit");
  console.log(nums);
  if (nums.length > 0) {
    nums[0].setAttribute('class', 'digits');
  }
  nums = document.getElementsByClassName("digits");
  btn.removeAttribute('disabled');

}

function timerGo() {
  mt++;
  if (mt == 10) {
    mt = 0;
    mo++;
  }
  if (mo == 10) {
    mo = 0;
    so++;
  }
  if (so == 10) {
    so = 0;
    st++;
  }
  if (mt > 0 || mo > 0 || so > 0) {
    btn.setAttribute('disabled', 'true');
  }
  secondTen.innerHTML = st;
  secondOne.innerHTML = so;
  msHund.innerHTML = mo;
  msTen.innerHTML = mt;
  console.log(st, so, ':', mo, mt);
  if (st == 1) {
    nums[0].setAttribute('class', 'redDigit');
    stop();
  }
}