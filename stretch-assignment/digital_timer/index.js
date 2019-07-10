//console.log(document.querySelector('.digits')) // lets me know that I have js file targeted correctly in the html file and in the right place.

//Use .setInterval() => runs callback after a certain (or for a fixed)amount of time, and then keeps running it after that certain amount of time.


/*
//Steps: 
1.) Give .setInterval a callback that will do something every     10ms
2.) Set timer value to 0
3.) Increment the timer by 10ms
4.) Tie the incrementing behavior to start button > add onclick     event listener
    a) grab the button and save to a variable called button
    b)

*/

const button = document.querySelector('button');

let timer = 0;
setInterval(() => {
    timer += 10;
    console.log(timer)//so we can see the timer incrementing this will keep running though in console.
}, 10);

