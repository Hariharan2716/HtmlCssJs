let score = 0;
let timeLeft = 30;
let player = "";

const btn = document.getElementById("clickBtn");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

const intro = document.getElementById("intro");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");
const playerNameInput = document.getElementById("playerName");

function moveButton(){
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

btn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Score: " + score;
  moveButton();
});

function startGame(){
  player = playerNameInput.value || "Good";
  intro.style.display = "none";
  game.style.display = "block";
  moveButton();

  let countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = "Time left: " + timeLeft + "s";

    if(timeLeft <= 0){
      clearInterval(countdown);
      btn.disabled = true;
      game.style.display = "none";
      message.style.display = "block";
      message.textContent = `🎉 Happy Birthday, ${player.toUpperCase()}!🎉 Your Score: ${score}`;
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);