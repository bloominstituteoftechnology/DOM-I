//console.log(document.querySelector('.digits')) // lets me know that I have js file targeted correctly in the html file and in the right place.

//Use .setInterval() => runs callback after a certain (or for a fixed)amount of time, and then keeps running it after that certain amount of time.

/*
//Steps: 
1.) Give .setInterval a callback that will do something every 10ms

2.) Set timer value to 0

3.) Increment the timer by 10ms

4.) Tie the incrementing behavior to start button > add onclick event listener
    a) grab the button and save to a variable called button
        const button = document.querySelector('button');
    b) add event listener looks like this:
        button.addEventListener('click', event => {
            event.preventDefault();
        })
    c) .setInterval() inside click event

5.) Now we need to stop the timer using a feature of .setInterval()
    a) Returns a value that we can later reference: a clear interval that we     can use to stop it from running 
        const = interval
    b) Use if statement to check the value of our timer
    c) this is the implicit use of closures

6) Now we must get the numbers to display in the HTML file properly by:
    a) grabbing all the values
    b) setting them to proper values > use math method
        1) grab 10's place: 
            * timer/ 10 : shifts the decimal over to the left by 1 i.e(12340 becomes 1234.0)
            * then get the  % 10 (modulo: performs a division by 10 & gives the remainder...the value in the ones place)
        2) set msTens textContent to the above
        3) Use Math.floor() on msHundreds so that the value after the decimal from the hundreds of the hundreds place is the value of the 10s place rounds it down.
        4) repeat process for  secondOnes and secondTens
7) Need timer to restart when the start button is clicked

*/

const button = document.querySelector('button'),
    secondTens = document.querySelector('#secondTens'),
    secondOnes = document.querySelector('#secondOnes'),
    msHundreds = document.querySelector('#msHundreds'),
    msTens = document.querySelector('#msTens')

let timer = 0;

button.addEventListener("click", event => {
    event.preventDefault();
    const interval = setInterval(() => {
        timer += 10;
        // console.log(timer); //so we can see the timer incrementing this will keep running though in console.
        msTens.textContent = (timer / 10) % 10;
        msHundreds.textContent = Math.floor(timer / 100) % 10;
        secondOnes.textContent = Math.floor(timer / 1000) % 10;
        secondTens.textContent = Math.floor(timer / 10000) % 10;
        if (timer >= 3000) {
            clearInterval(interval);
        }
    }, 10);
});
