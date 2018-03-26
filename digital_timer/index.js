// function countdown() {
//     var seconds = 60;
//     function tick() {
//         var counter = document.getElementById("counter");
//         seconds--;
//         counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//         if( seconds > 0 ) {
//             setTimeout(tick, 1000);
//         } else {
//             alert("Game over");
//         }
//     }
//     tick();
//// function countdown () {
    //var seconds = document.getElementById('secondOnes');
    // seconds.innerHTML = "0";



// let digits 


// function theTimer () {
//     countUp = setInterval (func, 0){
        
//     }
// }

// countdown();

  //setInterval(function, 1000)
  setInterval(timeUp, 1000);
  let count = document.getElementById('secondOnes').innerHTML = "0";


function timeUp() {  
    //let count = document.getElementById('secondOnes');
    count = parseInt(count, 10);
    if (count <10) {
        count++;
    }
    document.getElementById("secondOnes").innerHTML = count;
};

//console.log(count);

// pseudo code 

// 1. select the counter elements 
// 2. set a count variable to zero
// 3. write a function that lets the counter count up to 10 seconds, 
// 4. turn all digits and colon red at 10 seconds and
// 5. stop (clearInterval ?)

// Hints // 

// SET INTERVAL //

// setInterval(function, 0)
// same as setTimeout(), but repeats the execution of the function continuously.

// CLEAR INTERVAL //

// The window.clearInterval() method can be written without the window prefix.
// The clearInterval() method uses the variable returned from setInterval():
// myVar = setInterval(function, 10000);
// clearInterval(myVar);