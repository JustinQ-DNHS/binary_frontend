const levels = {
  easy: { range: [1, 15], formats: ["decimal", "binary"] },
  medium: { range: [16, 255], formats: ["decimal", "binary"] },
  hard: { range: [10, 31], formats: ["decimal", "binary", "hexadecimal"] },
  extreme: { range: [32, 255], formats: ["decimal", "binary", "hexadecimal"] },
};

let currentLevel = "easy";
let correctCounts = 0;
let lives = 3;
window.highScore = 0;
let currentQuestion;

import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';




const questionText = document.getElementById("question-text");
const convertFromFormat = document.getElementById("convert-from-format");
const convertToFormat = document.getElementById("convert-to-format");
const totalScoreDisplay = document.getElementById("total-score");
const totalHighScoreDisplay = document.getElementById("high-score");
const message = document.getElementById("message");
const answerInput = document.getElementById("answer-input");
const difficultyHeader = document.querySelector(".difficulty-header");
const submitButton = document.getElementById("submit-answer");
const chimeSound = document.getElementById("chime-sound");
const alarmSound = document.getElementById("alarm-sound");
const gameOverSound = document.getElementById("game-over-sound");

function updateHighScoreDisplay() {
  totalHighScoreDisplay.textContent = highScore;
}

function getRandomNumber(range) {
  return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

function calculateScore() {
  return correctCounts;
}

function generateQuestion() {
  const range = levels[currentLevel].range;
  const formats = levels[currentLevel].formats;
  const number = getRandomNumber(range);

  let inputFormat, outputFormat, questionValue, correctAnswer;

  if (currentLevel === "easy" || currentLevel === "medium") {
    [inputFormat, outputFormat] = ["decimal", "binary"];
    if (Math.random() > 0.5) [inputFormat, outputFormat] = [outputFormat, inputFormat];
  } else {
    inputFormat = "hexadecimal";
    outputFormat = Math.random() > 0.5 ? "binary" : "decimal";
  }

  if (inputFormat === "decimal") {
    questionValue = number.toString(10);
  } else if (inputFormat === "binary") {
    questionValue = number.toString(2);
  } else {
    questionValue = number.toString(16).toUpperCase();
  }

  if (outputFormat === "decimal") {
    correctAnswer = parseInt(number, 10).toString(10);
  } else if (outputFormat === "binary") {
    correctAnswer = parseInt(number, 10).toString(2);
  } else {
    correctAnswer = parseInt(number, 10).toString(16).toUpperCase();
  }

  currentQuestion = { questionValue, inputFormat, outputFormat, correctAnswer };
  questionText.textContent = questionValue;
  convertFromFormat.textContent = inputFormat.charAt(0).toUpperCase() + inputFormat.slice(1);
  convertToFormat.textContent = outputFormat.charAt(0).toUpperCase() + outputFormat.slice(1);
  message.textContent = "";
  answerInput.value = "";
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toUpperCase();
  const gameContainer = document.querySelector(".game-container");

  if (userAnswer === currentQuestion.correctAnswer) {
    correctCounts++;

    if (correctCounts > highScore) {
      highScore = correctCounts;
      updateHighScoreDisplay();
    }

    gameContainer.style.backgroundColor = "lightgreen";
    chimeSound.play();
  } else {
    lives--;
    updateHearts();

    if (lives === 0) {
      gameOverSound.play();
      gameOver();
      return;
    }

    message.textContent = `Wrong! The correct answer was ${currentQuestion.correctAnswer}.`;
    gameContainer.style.backgroundColor = "red";
    alarmSound.play();
  }

  setTimeout(() => {
    gameContainer.style.backgroundColor = "white";
    message.textContent = "";
    generateQuestion();
  }, 2000);

  totalScoreDisplay.textContent = calculateScore();
}

submitButton.addEventListener("click", checkAnswer);

generateQuestion();
totalScoreDisplay.textContent = calculateScore();

window.onload = function () {
  const popup = document.getElementById("difficulty-popup");
  const levelButtons = document.querySelectorAll(".level-button");

  updateHighScoreDisplay();

  popup.classList.add("visible");

  levelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLevel = this.getAttribute("data-level");
      currentLevel = selectedLevel;
      difficultyHeader.setAttribute("data-level", selectedLevel);
      difficultyHeader.querySelector("h1").textContent = `Level: ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}`;
      popup.classList.remove("visible");
      updateHighScoreDisplay();
      generateQuestion();
    });
  });
};

function restartGame() {
  location.reload();
}

// Expose restartGame to the global scope
window.restartGame = restartGame;


function gameOver() {
  document.getElementById("final-score").textContent = `Your Score: ${correctCounts}`;
  document.getElementById("game-over-popup").classList.add("visible");
}

function updateHearts() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart${i}`);
    if (i <= lives) {
      heart.src = "images/heart.png";
      heart.style.visibility = "visible";
      heart.classList.remove("jiggle");
    } else {
      heart.src = "images/emptyHeart.png";
      heart.style.visibility = "visible";
      heart.classList.add("jiggle");
    }
  }
}

async function getHighScoreForCurrentUser() {
  try {
    const response = await fetch(`${pythonURI}/api/binaryGameApi`, fetchOptions);

    if (!response.ok) throw new Error("Failed to fetch scores: " + response.statusText);

    const scores = await response.json();
    const userId = getCurrentUserId();
    const userScores = scores.filter((entry) => entry.userId === userId);
    const highestScore = Math.max(...userScores.map((entry) => entry.score), 0);
    return highestScore;
  } catch (error) {
    console.error("Error fetching scores:", error);
    alert("Error fetching scores: " + error.message);
    return null;
  }
}

document.querySelectorAll(".level-button").forEach((button) => {
  button.addEventListener("click", async (event) => {
    const level = event.target.dataset.level;
    await getHighestScoreForLevel(level);
  });
});


const currentUserApi = `${pythonURI}/api/id`;
const scoresApi = `${pythonURI}/api/binaryLearningGameScores`;


async function getHighestScoreForLevel(currentLevel) {
  try {
    const currentUserResponse = await fetch(currentUserApi, fetchOptions);
    const currentUser = await currentUserResponse.json();

    const scoresResponse = await fetch(scoresApi, fetchOptions);
    const scores = await scoresResponse.json();

    const userScores = scores.filter((entry) => entry.userId === currentUser.id);
    const levelScores = userScores.filter((entry) => entry.level === currentLevel);

    const highestScore = Math.max(...levelScores.map((entry) => entry.score), 0);

    highScore = highestScore;
  } catch (error) {
    console.error("Error fetching scores:", error);
    return null;
  }
}
