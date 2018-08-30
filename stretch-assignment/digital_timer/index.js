
let clock = document.body.setAttribute('onLoad', 'initClock()');


Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var milli = now.getMilliseconds(),
      sec = now.getSeconds();
    var digit = [ "secondTens","secondOnes", "msHundreds","msTens"],
      corr = [sec.pad(2), milli];
    for (var i = 0; i < digit.length; i++)
      document.getElementsByClassName(digit[i]).firstChild.nodeValue = corr[i];
 
    }
  
  function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  }





// Number.prototype.pad = function(n) {
//     for (var r = this.toString(); r.length < n; r = 0 + r);
//     return r;

// };


// function timer() {

//     var now = new Date();
//     var milli = 
//     now.getMilliseconds(),
//     sec = now.getSeconds();
// var digit = [
//     "secondTens","secondOnes", "msHundreds","msTens"]
//     cou = [sec.pad(2), milli];
//     for(var i = 0; i < digit.length; i++)
//    document.getElementsByClassName(digit[i]).firstChild = cou[i];
    


// function initClock() {
//   timer();
//   window.setInterval("timer()", 1);
// }



// function timer(seconds) {

//     const now = Date.now();
//     const then = now + seconds * 1000;
//     displayTimeLeft(seconds);

//     countup = setInterval(() => {

//         const secondsLeft = Math.round((then + Date.now()) / 1000);
//         if(secondsLeft < 10) {
//             clearInterval(countdown);
//             return;
//         }
//       displayTimeLeft(secondsLeft);
//     }, 1000);
// }

// function displayTimeLeft(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainderSeconds= seconds % 60;
//  console.log({minutes, remainderSeconds});

