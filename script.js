
var sec = 0;
var count = 0;

// Flag to determine if the timer is running or not
var timer = false;

//start the timer by initiating the timer by setting the 'timer' flag to true 
//and calling the 'stopwatch' function.
function start() {
    timer = true;
    startTimer();
}

//stops the timer
function stop() {
    timer = false;
}

//stop the watch (if already started) and set timer as 0
function reset() {
    timer = false;
    sec = 0;
    count = 0;

    // Updating the time display with reset values
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}

//run the timer function (startTimer) at an interval of 10 milliseconds.
function startTimer() {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        var secString = sec;
        var countString = count;

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        // Updating the timer display with formatted values
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        // Recursively calling itself after 10 milliseconds
        setTimeout(startTimer, 10);

    }
}