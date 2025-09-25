let score = 0;
let timeLeft = 30;

const btn = document.getElementById("clickBtn");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

// Move button to random position
function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

// Click handler
btn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Score: " + score;
  moveButton();
});

// Countdown timer
const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = "Time left: " + timeLeft + "s";

  if (timeLeft <= 0) {
    clearInterval(countdown);
    btn.disabled = true;
    timerDisplay.textContent = "Game Over!";
    alert("Final Score: " + score);
  }
}, 1000);

// Start with random position
moveButton();
