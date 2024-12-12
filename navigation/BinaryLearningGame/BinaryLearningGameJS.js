const levels = {
  easy: { range: [1, 15], formats: ["decimal", "binary"], weight: 0.1 },
  medium: { range: [16, 255], formats: ["decimal", "binary"], weight: 0.2 },
  hard: { range: [10, 31], formats: ["decimal", "binary", "hexadecimal"], weight: 0.3 },
  extreme: { range: [32, 255], formats: ["decimal", "binary", "hexadecimal"], weight: 0.4 },
};

let currentLevel = "easy";
let correctCounts = 0;
let lives = 3;

const questionText = document.getElementById("question-text");
const convertFromFormat = document.getElementById("convert-from-format");
const convertToFormat = document.getElementById("convert-to-format");
const totalScoreDisplay = document.getElementById("total-score");
const message = document.getElementById("message");
const answerInput = document.getElementById("answer-input");
const difficultyHeader = document.querySelector(".difficulty-header");
const submitButton = document.getElementById("submit-answer");
const chimeSound = document.getElementById("chime-sound");
const alarmSound = document.getElementById("alarm-sound");




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
  const gameContainer = document.querySelector('.game-container');

  if (userAnswer === currentQuestion.correctAnswer) {
    correctCounts++;
    gameContainer.style.backgroundColor = "lightgreen";
    chimeSound.play();
  } else {
    lives--;
    updateHearts();
    if (lives === 0) {
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

  popup.classList.add("visible");

  levelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLevel = this.getAttribute("data-level");
      currentLevel = selectedLevel;
      difficultyHeader.setAttribute("data-level", selectedLevel);
      difficultyHeader.querySelector("h1").textContent = `Level: ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}`;
      popup.classList.remove("visible");
      generateQuestion();
    });
  });

  const sounds = [chimeSound, alarmSound];
  sounds.forEach((sound) => {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
    }).catch(err => console.log('Preload prevented:', err));
  });
};




function restartGame() {
  location.reload();
}




function gameOver() {
  document.getElementById("final-score").textContent = `Your Score: ${correctCounts}`;
  document.getElementById("game-over-popup").classList.add("visible");
}




function updateHearts() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart${i}`);
    if (i <= lives) {
      heart.src = "images/heart.png";  // Path to normal heart image
      heart.style.visibility = 'visible';
      heart.classList.remove('jiggle');  // Remove jiggle effect if already applied
    } else {
      heart.src = "images/emptyHeart.png";  // Path to empty heart image
      heart.style.visibility = 'visible';
      heart.classList.add('jiggle');  // Add jiggle effect
    }
  }
}


