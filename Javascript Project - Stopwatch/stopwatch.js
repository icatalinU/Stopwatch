// JavaScript for the Stopwatch

// Initialize variables
let timer;         // Variable to store the interval timer
let isRunning = false;   
let isPaused = false;    8
let seconds = 0;       // Initialize seconds to 0
let minutes = 0;       // Initialize minutes to 0
let hours = 0;         // Initialize hours to 0

// Function to start or stop the stopwatch
function startStop() {
  if (isRunning) {
    // If running, stop the stopwatch
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStopBtn").innerHTML = "Start";
  } else {
    // If not running, start the stopwatch
    timer = setInterval(runStopwatch, 1000);
    document.getElementById("startStopBtn").innerHTML = "Stop";
    isRunning = true;
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    isPaused = true;
    document.getElementById("startStopBtn").innerHTML = "Resume";
  }
}

// Function to run the stopwatch
function runStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startStopBtn").innerHTML = "Start";
}

// Function to update the stopwatch display
function updateDisplay() {
  const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById("timer").innerHTML = time;
}

// Event listeners for the buttons
document.getElementById("startStopBtn").addEventListener("click", startStop);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
document.getElementById("pauseBtn").addEventListener("click", pauseStopwatch);

// Initialize the display
updateDisplay();
