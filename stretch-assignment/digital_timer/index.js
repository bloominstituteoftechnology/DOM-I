
// setup the elements
const digits = document.querySelector(".digits");
const sT = document.getElementById("secondTens");
const sO = document.getElementById("secondOnes");
const colon = document.getElementById("colon");
const mH = document.getElementById("msHundreds");
const mT = document.getElementById("msTens");
const mO = document.getElementById("msOnes");

// digital timer function
function digitalTimer() {

  // startup function to set all the startup data
  function startUp() {
    let ms = 0;
    sT.innerHTML = "0";
    
    sO.innerHTML = "0";
    
    mH.innerHTML = "0";
    
    mT.innerHTML = "0";

    
    // set a timer interval to this timer interval and add a call to update
    const timerInterval = this.setInterval(() => {
      // increment ms by 10
     ms += 10;

     // if ms hits the end at 10000 ms the finalize the digital timer
     if(ms === 10000) { finalize(timerInterval); } 
     // update timer by ms ammount
     update(ms);
    }, 10); // tick every 10ms
  }

  // incrementer function takes in a string then turns it in to a number adds 1 to it turns it back in to a string and returns the output
  function inc(string) { return (Number(string) + 1).toString(); }

  // update function
  function update(ms) {
    if (ms === 10000) { // final condition. if the timer reaches the goal then set the inner html numbers correctly
      sT.innerHTML = "1";
      sO.innerHTML = "0";
      mH.innerHTML = "0";
      mT.innerHTML = "0";
      // turn the numbers and colon red
      sT.style.color = "red";
      sO.style.color = "red";
      mH.style.color = "red";
      mT.style.color = "red";
      colon.style.color = "red";
      // else if the remainder of ms / 1000 = 0 then encrement sO
    } else if (ms % 1000 === 0) {
      sO.innerHTML = inc(sO.innerHTML);
      mH.innerHTML = "0";
      mT.innerHTML = "0";

      // else if the ramainder of ms / 100 = 0 then increment mH
    } else if (ms % 100 === 0) {
      mH.innerHTML = inc(mH.innerHTML);
      mT.innerHTML = "0";
      // otherwise increment mT
    } else {
      mT.innerHTML = inc(mT.innerHTML);
    }
  }
  

}