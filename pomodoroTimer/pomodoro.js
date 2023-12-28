let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let minute = 0;
let second = 0;
let id;
let onOff = true;

function startTimer() {
  if (onOff) {
    id = setInterval(() => {
      second++;
      if (second === 60) {
        second = 0;
      }
      if (second === 0) {
        minute++;
      }
      if (minute === 60) {
        resetTimer();
      }
      timer.innerHTML = `${minute < 10 ? "0" + minute : minute} : ${
        second < 10 ? "0" + second : second
      }`;
    }, 1000);
  }
  onOff = false;
}

function stopTimer() {
  clearInterval(id);
  onOff = true;
}

function resetTimer() {
  clearInterval(id);
  timer.innerHTML = "00 : 00";
  minute = 0;
  second = 0;
  onOff = true;
}

stopBtn.addEventListener("click", stopTimer);
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
