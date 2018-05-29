//set initial counter to 10 seconds
// display 2 digits


let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let secondOnes = document.getElementById("secondOnes");
let secondTens = document.getElementById("secondTens");

let msTensNum = 0;
let msHundredsNum = 0;
let secondOnesNum = 0;
let secondTensNum = 0;

let counter = 0;  // initial counter is 0 seconds but stops at 10 seconds



              

              function startCount() {
                  
                  let runningTimer = setInterval(function(){

                      if (msTens.innerHTML === "-") msTens.innerHTML = "0";
                      if (msHundreds.innerHTML === "-") msHundreds.innerHTML = "0";
                      if (secondOnes.innerHTML === "-") secondOnes.innerHTML = "0";
                      if (secondTens.innerHTML === "-") secondTens.innerHTML = "0";


                      if (msTens.innerHTML !== "9") {
                          msTensNum++;
                          msTens.innerHTML = msTensNum.toString();
                      } else {
                          msTens.innerHTML = "0";
                          msTensNum = 0;
                          if (msHundreds.innerHTML !== "9") {
                              msHundredsNum++;
                              msHundreds.innerHTML = msHundredsNum.toString()
                          } else {
                              msHundreds.innerHTML = "0";
                              msHundredsNum = 0;
                              if (secondOnes.innerHTML !== "9") {
                                  secondOnesNum++;
                                  secondOnes.innerHTML = secondOnesNum.toString()
                              } else {
                                  secondOnes.innerHTML = "0";
                                  secondOnesNum = 0;
                                  secondTensNum++;
                                  secondTens.innerHTML = secondTensNum.toString();
                                  msTens.className = "redDigit";
                                  msHundreds.className = "redDigit";
                                  colon.className = "redDigit";
                                  secondOnes.className = "redDigit";
                                  secondTens.className = "redDigit";
                                  enableRefreshButton()
                                  clearInterval(runningTimer);
                              }
                          }
                      }
                  }, 10);
              }

              function refreshCount() {

                      msTens.innerHTML = "0";
                      msHundreds.innerHTML = "0";
                      secondOnes.innerHTML = "0";
                      secondTens.innerHTML = "0";

                        msTens.className = "blueDigit";
                        msHundreds.className = "blueDigit";
                        colon.className = "blueDigit";
                        secondOnes.className = "blueDigit";
                        secondTens.className = "blueDigit";
                                  
                        msTensNum = 0;
                        msHundredsNum = 0;
                        secondOnesNum = 0;
                        secondTensNum = 0;

                      
              }


function disablePlayButton() {
    document.getElementById("playButton").disabled = true;    
    document.getElementById("playButton").style.color = "grey"
}
function enablePlayButton() {
    document.getElementById("playButton").disabled = false;    
    document.getElementById("playButton").style.color = "green"
}
function disableRefreshButton() {
    document.getElementById("refreshButton").disabled = true;
    document.getElementById("refreshButton").style.color = "grey"
}
function enableRefreshButton() {
    document.getElementById("refreshButton").disabled = false;
    document.getElementById("refreshButton").style.color = "blue"
}