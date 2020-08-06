
// ADDED TITLEHOME CLASS 
const titleHome = document.createElement('div'); 
titleHome.classList.add('titleHome');

const bodyTitle = document.querySelector('.digits');
bodyTitle.prepend(titleHome);
console.log(bodyTitle, 'Added Title To digits');

// ADDED TITLE TO CLASS DIV
const newTitle = document.createElement('h1'); 
newTitle.textContent = 'Online Stopwatch ';
newTitle.style.fontSize = '3.5rem'
newTitle.style.color = '#011627'
newTitle.style.textAlign = 'center';
newTitle.style.marginRight = '15rem'
newTitle.style.fontFamily = '"Raleway", sans-se rif'
console.log(newTitle, 'Title For Stop Watch');

titleHome.prepend(newTitle)
console.log(titleHome, 'Title Inside Div')
////////////////////////////////////////////////////////

// ADDED BUTTONHOME CLASS
const buttonHome = document.createElement('div');
buttonHome.style.marginTop = '3rem'
buttonHome.style.marginRight = '2rem'

titleHome.classList.add('buttonHome');

const digitButtons = document.querySelector('.digits'); 
digitButtons.appendChild(buttonHome);
console.log(digitButtons, 'Buttons Div For Stop Watch' );

// ADDED BUTTONS TO CLASS

//Start Button
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.style.marginLeft = '2rem';
startButton.style.backgroundColor = '#dad2d8';
startButton.style.borderRadius = '0.3rem';
startButton.style.padding = '0.4rem';
startButton.style.color = '#355070';
startButton.style.fontSize = '2.5rem';
startButton.style.fontFamily = '"Raleway", sans-se rif'
console.log(startButton, 'Start');


buttonHome.prepend(startButton);
console.log(buttonHome, 'Added to Start BTN to ButtonHome');

//Stop Button
const stopButton = document.createElement('button');
stopButton.textContent = 'Stop'; 
stopButton.style.marginLeft = '1rem';
stopButton.style.borderRadius = '0.3rem';
stopButton.style.padding = '0.4rem';
stopButton.style.backgroundColor = '#dad2d8';
stopButton.style.color = '#355070';
stopButton.style.fontSize = '2.5rem';
stopButton.style.fontFamily = '"Raleway", sans-se rif'
console.log(stopButton, 'Stop');


buttonHome.appendChild(stopButton);
console.log(buttonHome, 'Added Stop BTN To buttonHome');

//Reset Button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.style.marginLeft = '1rem';
resetButton.style.borderRadius = '0.3rem';
resetButton.style.padding = '0.4rem';
resetButton.style.backgroundColor = '#dad2d8';
resetButton.style.color = '#355070';
resetButton.style.fontSize = '2.5rem';
resetButton.style.fontFamily = '"Raleway", sans-se rif'
console.log(resetButton, 'Reset'); 


buttonHome.appendChild(resetButton);
console.log(buttonHome, 'Added Reset BTN to buttonHome')

// BODY STYLING
const newBodyColor = document.querySelector('body'); 
newBodyColor.style.backgroundImage = 'url(https://i.postimg.cc/jqNLqVCm/pexels-burst-373893.jpg)'
newBodyColor.style.backgroundRepeat = 'no-repeat'
newBodyColor.style.backgroundSize = '1600px'
newBodyColor.style.marginTop = '5rem';
newBodyColor.style.marginLeft = '2rem';
newBodyColor.style.marginRight = '2rem';
newBodyColor.style.marginBottom = '2rem';


// DIGITS CLASS DIV STYLING
const getDigits = document.querySelector('.digits'); 
getDigits.style.marginLeft = '15rem'

const digitNums = document.querySelector('.digit'); 
digitNums.style.marginLeft = '20%'






