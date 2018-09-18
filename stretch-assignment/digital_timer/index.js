// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM I</title>
//     <link rel="stylesheet" href="./styles.css">
//   </head>
//   <body>
//     <div class="digits">
//       <div class="digit" id="secondTens">-</div>
//       <div class="digit" id="secondOnes">-</div>
//       <div class="digit" id="colon">:</div>
//       <div class="digit" id="msHundreds">-</div>
//       <div class="digit" id="msTens">-</div>
//     </div>
//   </body>
// </html>

let secTens = document.querySelector("secondTens");
secTens.innerText = 1;

let secOnes = document.querySelector("secondOnes");
secOnes.innerText = 0;

let colon = document.querySelector("colon");
secTens.innerText = ':'

let msHuns = document.querySelector("msHundreds");
msHuns.innerText = 0;

let msTens = document.querySelector("msTens");
msTens.innerText = 0;


// <p>A script on this page starts this clock:</p>

// <p id="demo"></p>

// <button onclick="clearInterval(myVar)">Stop time</button>

// <script>
// var myVar = setInterval(myTimer ,1000);
// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }
// </script>
