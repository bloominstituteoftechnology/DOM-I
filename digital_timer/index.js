function updateTime() {
    var time = 0;
    setInterval(function() {
        document.querySelector(".digits").value = time;
        time++;
        if (time > 10) {
            time = 1;
        }
    }, 200);
}
updateTime();