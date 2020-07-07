const digits = document.querySelectorAll('.digit')
const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')

setTimeout(function () {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () { msTens.textContent = i }, 500)
    setTimeout(function () { msHundreds.textContent = i }, 1000)
    setTimeout(function () { secondOnes.textontent = i }, 1000)
    setTimeout(function () { secondTens.textContent = i }, 10000)
  }
}, 10000)

// initialize your variables outside the function var count = 0; var clearTime; var seconds = 0, minutes = 0, hours = 0; var clearState; var secs, mins, gethours ; function startWatch( ) { /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */ if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; } /* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */ mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */ if ( minutes === 60 ) { minutes = 0; hours = hours + 1; } /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */ gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); // display the stopwatch var x = document .getElementById("timer"); x.innerHTML = 'Time: ' + gethours + mins + secs; /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */ seconds++; /* call the setTimeout( ) to keep the stop watch alive ! */ clearTime = setTimeout( "startWatch( )", 1000 ); } // startWatch( ) //create a function to start the stop watch 
function startTime() { /* check if seconds, minutes, and hours are equal to zero and start the stop watch */
  if (seconds === 0 && minutes === 0 && hours === 0) { /* hide the fulltime when the stop watch is running */ var fulltime = document.getElementById("fulltime"); fulltime.style.display = "none"; /* hide the start button if the stop watch is running */ this.style.display = "none"; /* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */ startWatch(); } // if () } // startTime() /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */ window.addEventListener( 'load', function ( ) { var start = document .getElementById("start"); start.addEventListener( 'click', startTime ); }); // startwatch.js end 
  The clearTimeout() Method
  To stop the timer, you need to call in the clearTimeout() timing event method and this comes in very handy.

  It has just one parameter: the return ID of the setTimeout() method

  Syntax:

  clearTimeout( return ID of setTimeout() );
  Note: The setTimeout() timing method always returns a value, and that value is pass to the clearTimeout() timing event method.

  The ClearTimeout() Parameter

  var clearTime = setTimeout("JavaScript Statements", 100);

  clearTime variable is returned as a value by the setTimeout() timing method, which can be pass to the clearTimeout(ID) as an ID to reference it - clearTimeout(clearTime);

  How It Works
  Whenever the clearTimeout() timing method is called on a setTimeout() timing method that is active, the clearTimeout() timing method will stop the execution of the setTimeout() timing method but without destroying its execution entirely.

  The setTimeout() timing method is left idle during the period that the clearTimeout() timing method is called, and when you re - execute the setTimeout() timing method, it will start from the point its execution was stopped, not starting all over from the beginning.

  Just like when you pause a mp3 media player, and then play it back, it continues playing from previous position, but not starting all over from beginning.

  For example, let's say I have a running timer that was created using the setTimeout( ) timing method, and its starting point is 00. I run the timer, and it's now reading 41.

  If I call in the clearTimeout() timing method on this active setTimout() method, it will make it idle during that period, and whenever I re - execute the setTimeout() timing method, it will start counting from 41, not from 00.

  To make the timer start from 00, you've to resets its counter. That's the logic.

    Example: Stop The Time - stopwatch.js
  //create a function to stop the time function stopTime( ) { /* check if seconds, minutes and hours are not equal to 0 */ if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { /* display the full time before reseting the stop watch */ var fulltime = document .getElementById( "fulltime" ); //display the full time fulltime.style.display = "block"; var time = gethours + mins + secs; fulltime.innerHTML = 'Fulltime: ' + time; // reset the stop watch seconds = 0; minutes = 0; hours = 0; secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': '; /* display the stopwatch after it's been stopped */ var x = document.getElementById ("timer"); var stopTime = gethours + mins + secs; x.innerHTML = stopTime; /* display all stop watch control buttons */ var showStart = document.getElementById ('start'); showStart.style.display = "inline-block"; var showStop = document.getElementById ("stop"); showStop.style.display = "inline-block"; /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ clearTimeout( clearTime ); } // if () } // stopTime() /* you need to call the stopTime( ) function to terminate the stop watch */ window.addEventListener( 'load', function ( ) { var stop = document.getElementById ("stop"); stop.addEventListener( 'click', stopTime ); }); // stopwatch.js end 
  The CSS
 #stopWatch { width: 280px; height: auto; text - align: center; display: block; padding: 5px; margin: 0 auto; } #timer, #fulltime { width: auto; height: auto; padding: 10px; font - weight: bold; font - family: tahoma; display: block; border: 1px solid #eee; text - align: center; box - shadow: 0 0 5px #ccc; background: #fbfbf0; color: darkblue; border - bottom: 4px solid darkgrey; } button { cursor: pointer; font - weight: 700; } #fulltime { display: none; font - size: 16px; font - weight: bold; }
  The HTML
    < !DOCTYPE html > <html lang="en"> <head> <title> JavaScript Stop Watch </title> <style text="text/css"> </style> <script type="text/javascript"> </script> </head> <body> <section id="stopWatch"> <p id="timer"> Time : 00:00:00 </p> <button id="start"> Start </button> <button id="stop"> Stop </button> <p id="fulltime"> </p> </section> </body> </html>
  The stop watch is completed, and this is how it should look.

  A small timer with start and stop buttons


  About the author

  John Zenith is a front - end developer, writer, speaker, and a code builder who loves Javascript, CSS and PHP.He lives in the southern part of Nigeria.

    Comments(7)

  Leave a comment

  Max_Max Friday, 24 February 2017
  cool


  John zenith Tuesday, 11 April 2017
  Thanks Max.


  ProsaicHacker Tuesday, 12 June 2018
  I need a single page browser stopwatch and no external dependencies.this looked promising.

  For us mere mortals to whom building a page is a rare and therefore new experience each time, could you have a single page version of the final product.Cutting and pasting the piece together I had to add closing braces for both "start" and "stop" functions to get the console to stop complaining.No yet sure if it was my mistake or yours.Also the buttons do not work I do not know why.



  Joe Hawthorn Friday, 21 February 2020
  Please see stopwatch.js for a clean vanilla JS solution.


  Kalalakshmi Thursday, 07 November 2019
    < !DOCTYPE html >
      <html>
        <head>
          <title>Page Title</title>
          <script>
            var upgradeTime = 1;
            var seconds = upgradeTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft  = Math.floor((seconds) - (days*86400));
  var hours      = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes    = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);

  }
  document.getElementById('countdown').innerHTML =pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
              clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
              seconds++;
  }
}
var countdown = setInterval('timer()', 1000);

</script>
        </head>
        <body>
          <span id="countdown" class="timer"></span>
        </body>

      </html>


  indraraj Thursday, 23 April 2020
  how can we stop it.Can you reply with code
 

Meera 4 weeks ago.
  How can we stop it ? and how we can start it ?
    Can we Provide button with a timer class?
  I already tried ?


    Join OSTraining and get the MySQL Explained book!


  Popular New Posts
  How to Integrate a Sliding Menu in Your Drupal 8 Site
  How to Add a Table of Contents to Your WordPress Posts and Pages
  Open Source Alternatives for Creatives
 4 Useful Features of Discord for Businesses
 How to Use The Views Bulk Operations Module in Drupal 8
  Blog Categories
  WordPress Tutorials
  WooCommerce Tutorials
  Drupal Tutorials
  Joomla Tutorials
  Magento Tutorials
  General
  Coding Tutorials
  OSTraining News
  Web Design News
  Podcasts
  Blog License
  All our blog posts are published under the Creative Commons Attribution - NonCommercial license:

  You can re - use these tutorials.
  You can modify these tutorials.
  You must link back to our original tutorial.
  You can't use these tutorials commercially.
  Full license details.