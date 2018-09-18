//set selectors
const sTen = document.querySelector("#secondTens");
const sOne = document.querySelector("#secondOnes");
const msHun = document.querySelector("#msHundreds");
const msTen = document.querySelector("#msTens");
const bod = document.querySelector("body");
const digits = document.querySelector("#digits");
const timeColon = document.querySelector("colon");

//set initial state (hide tens and tenths)
sTen.style.display = "none";
msTen.style.display = "none";

//extra element for final state
const accuse = document.createElement("why");
accuse.innerText = "NO WAIT DON'T LET IT GET TO TEN";
accuse.style.paddingTop = "120px";
bod.appendChild(accuse);
accuse.style.fontSize = "90px";
bod.style.flexDirection = "column";

//set initial seconds to 0, invoke interval function
var totalSeconds = 0;
setInterval(setTime, 10);

function setTime() {
  ++totalSeconds;

  //calculating this modulo keeps the right side of the colon from going over 2 digits
  msHun.innerHTML = increment(totalSeconds % 60);
  sOne.innerHTML = increment(parseInt(totalSeconds / 60));
  if (sOne.innerHTML >= 10) {
    //once whole seconds reaches 10, stop timer by declaring static values, all change to red
    clearTimeout(setTime);
    msHun.innerHTML = 0;
    msTen.style.display = "initial";
    msTen.innerHTML = 0;
    sOne.innerHTML = 10;
    msHun.style.color = "red";
    msTen.style.color = "red";
    sOne.style.color = "red";

    //extra effects upon reaching 10s
    bod.style.backgroundImage =
      'url("https://images.alphacoders.com/305/thumb-1920-30521.jpg")';
    bod.style.backgroundSize = "cover";
    bod.style.backgroundRepeat = "no-repeat";
    accuse.style.color = "red";
    accuse.innerText = "WHAT HAVE YOU DONE!?";
  }
}

function increment(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
