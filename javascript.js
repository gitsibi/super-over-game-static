const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");

const scoreTeam1= document.getElementById("score-team1");
const wicketsTeam1 = document.getElementById("wickets-team1");

const scoreTeam2 = document.getElementById("score-team2");
const wicketsTeam2 = document.getElementById("wickets-team2");


var team1Score = 0;
var team2Score = 0;

var team1Wickets = 0;
var team2Wickets = 0;

var team1Ball = 0;
var team2Ball = 0;
var turn = 1;

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

function gameOver() {
  gameOverAudio.play();
  if (team1Score > team2Score) alert("IND wins");
  if (team2Score > team1Score) alert("PAK wins");
  if (team2Score === team1Score) alert("It is another superover!");
}

function updateScore() {
  scoreTeam1.textContent = team1Score;
  wicketsTeam1.textContent = team1Wickets;
  scoreTeam2.textContent = team2Score;
  wicketsTeam2.textContent = team2Wickets;
}

resetButton.onclick = () => {
  window.location.reload();
};

strikeButton.onclick = () => {
  // strikeAudio.pause();
  strikeAudio.currentTime = 0;
  strikeAudio.play();

  const randomElement =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

  if (turn === 2) 
  {
    team2Ball++;
    document.querySelector(
      `#team2-superover div:nth-child(${team2Ball})`
    ).textContent = randomElement;

    if (randomElement === "W") 
    {
      team2Wickets++;
    }

    else 
    {
      team2Score += randomElement;
    }
    if (
      team2Ball === 6 ||
      team2Wickets === 2 ||
      team2Score > team1Score
    )
     {
      turn = 3;
      gameOver();
    }
  }

  if (turn === 1) {
    team1Ball++;
    document.querySelector(
      `#team1-superover div:nth-child(${team1Ball})`
    ).textContent = randomElement;

    if (randomElement === "W") 
    {
      team1Wickets++;
    } 
    else 
    {
      team1Score += randomElement;
    }
    if (team1Ball === 6 || team1Wickets === 2) 
        turn = 2;
  }
  updateScore();
};

