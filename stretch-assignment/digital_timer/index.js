let numbers = document.getElementsByClassName('digit');

const interval = setInterval(myTimer, 1000);
function myTimer() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementsByClassName('digit').innerHTML = t;
};
