


let clockNumber = 1;

const createClock = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("digits", `digits${clockNumber}`);

  const secondsTens = document.createElement("div");
  secondsTens.classList.add("digit", `secondTens${clockNumber}`);

  const seconds = document.createElement("div");
  seconds.classList.add("digit", `second${clockNumber}`);
  
  const colon = document.createElement("div");
  colon.classList.add("digit", `colon${clockNumber}`);
  
  const msHundreds = document.createElement("div");
  msHundreds.classList.add("digit", `msHundreds${clockNumber}`);
  
  const msTens = document.createElement("div");
  msTens.classList.add("digit", `msTens${clockNumber}`);
  
  newDiv.appendChild(secondsTens);
  newDiv.appendChild(seconds);
  newDiv.appendChild(colon);
  newDiv.appendChild(msHundreds);
  newDiv.appendChild(msTens);

  document.querySelector("body").appendChild("newDiv");
  console.log(newDiv);
}
createClock();