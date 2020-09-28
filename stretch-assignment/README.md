# Stretch Assignment - Digital Timer

Topics:
 * Interacting with the DOM
 * Selectors
  * selectElementsByClassname
  * selectElementbyId
  * querySelector
  * querySelectorAll
 * NodeList
 * HTMLCollection

## Objectives
 * Manipulate the DOM using JavaScript
 * Choose selectors for a given problem
 * Work with the object the different selectors return

## Beginning Project
 * You'll be working in the `digital_timer` directory
 * Add your script tag into your index.html
 * You can open your `index.html` file in your browser to see your work, but you may also work in codepen.io first if you'd like
 * All your work will be done in `index.js`
 * Make sure to read both the `index.html` and `styles.css` files so that you know what you're working with
 * Organization of your code in `index.js` will be up to you. There will be suggestions provided later in the day

## Project Description
 You will be making a timer that:
  * Counts up to 10 seconds
  * Increments every 10 ms
  * Has digits change to red when it gets to 10 seconds
  * Should not count past 10 seconds

 You will also need to look up and use `window.setInterval`. For this method, and any of those listed in the "Topics" section of this README, you are encouraged to use MDN as your resource for Documentation. MDN can be challenging to consume at first, so you may also use something like W3schools if the MDN documentation on a given subject is a bit too complicated.

 ## Stretch On The Stretch!
  If you compelete the timer with time to spare:
  * Self study and research DOM `events` and `event listeners`
  * SG1: Implement a start button. The digital timer should not start until the button is pressed.
  * SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
  * SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
  * SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons.