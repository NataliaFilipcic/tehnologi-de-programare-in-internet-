var timeLeft, timer;

function startTimer() {
  var interval = document.getElementById("interval").value;
  if (interval > 0) {
    timeLeft = interval;
    timer = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Intervalul a expirat!";
      } else {
        document.getElementById("timer").innerHTML = "Timp rămas: " + timeLeft + " secunde";
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById("timer").innerHTML = "Cronometrul a fost oprit.";
}
