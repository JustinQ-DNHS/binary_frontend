const levels = {
  play: { range: [0, 0], formats: ["decimal", "binary"] },
  easy: { range: [1, 15], formats: ["decimal", "binary"] },
  medium: { range: [16, 255], formats: ["decimal", "binary"] },
  hard: { range: [10, 31], formats: ["decimal", "binary", "hexadecimal"] },
  extreme: { range: [32, 255], formats: ["decimal", "binary", "hexadecimal"] },
};

let currentLevel = "play";
let previousLevel = "play";
let correctCounts = 0;
let lives = 3;
let currentQuestion;
let userName;
let isSubmitMode = true;
let isUserAdmin = false;

window.highScore = 0;

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
const gameOverSound = document.getElementById("gameOver-sound");

const rulesButton = document.getElementById("rules-btn");
const rulesPopup = document.getElementById("rules-popup");
const closeButton = rulesPopup.querySelector("button");

const scoresButton = document.getElementById("scores-btn");
const scoresPopup = document.getElementById("scores-popup");
const closeScoresButton = scoresPopup.querySelector("button");

const adminScoresPopup = document.getElementById("admin-scores-popup");
const closeAdminScoresButton = adminScoresPopup.querySelector("button");

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
  } 
  
  else {
    inputFormat = "hexadecimal";
    outputFormat = Math.random() > 0.5 ? "binary" : "decimal";
  }

  if (inputFormat === "decimal") {
    questionValue = number.toString(10);
  } 
  
  else if (inputFormat === "binary") {
    questionValue = number.toString(2);
  } 
  
  else {
    questionValue = number.toString(16).toUpperCase();
  }

  if (outputFormat === "decimal") {
    correctAnswer = parseInt(number, 10).toString(10);
  } 
  
  else if (outputFormat === "binary") {
    correctAnswer = parseInt(number, 10).toString(2);
  } 
  
  else {
    correctAnswer = parseInt(number, 10).toString(16).toUpperCase();
  }


  currentQuestion = { questionValue, inputFormat, outputFormat, correctAnswer };
  questionText.textContent = questionValue;
  convertFromFormat.textContent = inputFormat.charAt(0).toUpperCase() + inputFormat.slice(1);
  convertToFormat.textContent = outputFormat.charAt(0).toUpperCase() + outputFormat.slice(1);
  message.textContent = "";
  answerInput.value = "";

}

function updateButtonMode() {
  if (isSubmitMode) {
    submitButton.textContent = "Submit";
  } 
  
  else {
    submitButton.textContent = "Next";
  }
}

function goToNextQuestion() {
  const gameContainer = document.querySelector(".game-container");
  gameContainer.style.backgroundColor = "";
  message.textContent = "";
  generateQuestion();
  isSubmitMode = true;
  updateButtonMode();
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toUpperCase();
  const gameContainer = document.querySelector(".game-container");

  if (userAnswer === currentQuestion.correctAnswer) {
    correctCounts++;
    totalScoreDisplay.textContent = calculateScore(); // Update score display

    if (correctCounts > highScore) {
      highScore = correctCounts;
      updateHighScoreDisplay();
    }

    gameContainer.style.backgroundColor = "lightgreen";
    chimeSound.play();
    message.textContent = "Correct!";
    message.style.color = "green";
  } else {
    lives--;
    updateHearts();

    if (lives === 0) {
      createScores(userName, correctCounts, currentLevel);
      gameOver();
      return;
    }
    message.style.color = "red";
    message.textContent = `Wrong! The answer was ${currentQuestion.correctAnswer}.`;
    gameContainer.style.backgroundColor = "red";
    alarmSound.play();
  }

  isSubmitMode = false;
  updateButtonMode();
}



submitButton.addEventListener("click", () => {
  if (currentLevel === "play" && isSubmitMode) return; // Prevent submission in "play" mode on game load
  if (isSubmitMode) {
    checkAnswer();
  } else {
    goToNextQuestion();
  }
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (currentLevel === "play" && isSubmitMode) return; // Prevent submission in "play" mode on game load
    if (isSubmitMode) {
      checkAnswer();
    } else {
      goToNextQuestion();
    }
  }
});

updateButtonMode();

generateQuestion();
totalScoreDisplay.textContent = calculateScore();

window.onload = function () {
  const popup = document.getElementById("difficulty-popup");
  const levelButtons = document.querySelectorAll(".level-button");

  answerInput.disabled = true;
  submitButton.disabled = true;

  difficultyHeader.addEventListener("click", function () {
    popup.classList.add("visible");
  });

  levelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLevel = this.getAttribute("data-level");

      if (selectedLevel !== previousLevel) {
        correctCounts = 0;
        lives = 3;
        updateHearts();
        totalScoreDisplay.textContent = calculateScore();
      }

      previousLevel = selectedLevel;

      currentLevel = selectedLevel;
      popup.classList.remove("visible");
      answerInput.disabled = false;
      submitButton.disabled = false;

      difficultyHeader.setAttribute("data-level", selectedLevel);
      difficultyHeader.querySelector("h1").textContent =
        selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1);

      generateQuestion();
    });
  });

  generateQuestion();
  totalScoreDisplay.textContent = calculateScore();

  isAdmin();
};

function restartGame() {
  location.reload();
}

window.restartGame = restartGame;

function gameOver() {
  gameOverSound.play()
    .then(() => {
      console.log("Sound played successfully");
    })
    .catch((error) => {
      console.error("Error playing sound:", error);
    });
  document.getElementById("final-score").textContent = `Your Score: ${correctCounts}`;
  document.getElementById("game-over-popup").classList.add("visible");
}

function updateHearts() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart${i}`);
    if (i <= lives) {
      heart.src = "../images/heart.png";
      heart.style.visibility = "visible";
      heart.classList.remove("jiggle");
    } else {
      heart.src = "../images/emptyHeart.png";
      heart.style.visibility = "visible";
      heart.classList.add("jiggle");
    }
  }
}

document.querySelectorAll(".level-button").forEach((button) => {
  button.addEventListener("click", async (event) => {
    const scores = await readScores();

    const userScores = scores.filter((entry) => String(entry.username) === String(userName));

    const levelScores = userScores.filter((entry) => entry.user_difficulty === currentLevel);

    highScore = levelScores.length > 0 ? Math.max(...levelScores.map((entry) => entry.user_score)) : 0;

    updateHighScoreDisplay();

  });
});

async function isAdmin() {

  try {
    const currentUserResponse = await fetch(`${pythonURI}/api/user`, fetchOptions);
    if (!currentUserResponse.ok) throw new Error('Failed to fetch current user');
    const currentUser = await currentUserResponse.json();

    if (currentUser.role == "Admin") {
      isUserAdmin = true;
      return
    }

    else {
      return
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    alert('Error retrieving user: ' + error.message);
    return
  }
}

async function readScores() {
  try {
    const currentUserResponse = await fetch(`${pythonURI}/api/id`, fetchOptions);
    if (!currentUserResponse.ok) throw new Error('Failed to fetch current user');
    const currentUser = await currentUserResponse.json();
    userName = currentUser.uid;

    const scoresResponse = await fetch(`${pythonURI}/api/binaryLearningGameScores`, fetchOptions);
    if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
    const scores = await scoresResponse.json();

    return(scores);

  } catch (error) {
    console.error('Error fetching scores:', error);
    return null;
  }
}


async function createScores(inputName, inputScore, inputDifficulty) {

  const scoreData = {
    username: inputName,
    score: inputScore,
    difficulty: inputDifficulty,
  };

  try {
    const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
      ...fetchOptions,
      method: 'POST',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit score: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Score submitted:', result);
  } catch (error) {
    console.error('Error submitting score:', error);
    alert('Error submitting score: ' + error.message);
  }
}


async function deleteScores(inputId) {

  const scoreData = {
    id: inputId
  }

  try {
    const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
      ...fetchOptions,
      method: 'DELETE',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete score: ${response.statusText}`);
    }
  } 
  
  catch (error) {
    console.error('Error deleting score:', error);
    alert('Error deleting score: ' + error.message);
  }
}

async function updateScores(inputId, inputScore, inputDifficulty) {
  const scoreData = {
    id: inputId,
    user_score: inputScore,
    user_difficulty: inputDifficulty
  }

  try {
    const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
      ...fetchOptions,
      method: 'PUT',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update score: ${response.statusText}`);
    }
  } 
  
  catch (error) {
    if (error = "Forbidden") {
      alert("You do not have access to perform that function");
    }
    else {
      console.error('Error updating score:', error);
      alert('Error updating score: ' + error.message);
    }
  }
}

// Close rules popup
rulesButton.addEventListener("click", function () {
  rulesPopup.classList.add("visible");
});

closeButton.addEventListener("click", function () {
  rulesPopup.classList.remove("visible");
});


scoresButton.addEventListener("click", function () {
  if (isUserAdmin) {
    getScoreTableData();
    adminScoresPopup.classList.add("visible");
  }
  else {
    getScoreTableData();
    scoresPopup.classList.add("visible");
  }
});

closeAdminScoresButton.addEventListener("click", function () {
  adminScoresPopup.classList.remove("visible");
});

closeScoresButton.addEventListener("click", function () {
  scoresPopup.classList.remove("visible");
});

async function getScoreTableData() {

  const scores = await readScores();

  let userScores = scores;

  if (!isUserAdmin) {
    userScores = scores.filter((entry) => String(entry.username) === String(userName));
  }
  else {
    userScores = scores;
  }

  let table;

  if (isUserAdmin) {
    table = document.getElementById("admin-table");
  }
  else {
    table = document.getElementById("table");
  }

    // Clear the table before adding new rows
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

userScores.forEach(score => {
    // build a row for each user
    const tr = document.createElement("tr");

    // td's to build out each column of data
    let usernamesTable;
    if (isUserAdmin) {
      usernamesTable = document.createElement("td");
    }
    const scores = document.createElement("td");
    const difficulty = document.createElement("td");
    const action = document.createElement("td");
           
    // add content from user data
    if (isUserAdmin){
      usernamesTable.innerHTML = score.username;
    }          
    scores.innerHTML = score.user_score; 
    difficulty.innerHTML = score.user_difficulty; 

    // add action for update button if it is an admin
    if (isUserAdmin) {
      var updateBtn = document.createElement('input');
      updateBtn.type = "button";
      updateBtn.className = "button";
      updateBtn.value = "Update";
      updateBtn.style = "margin-right:16px";
      updateBtn.onclick = function () {
        let updatedScore = prompt("Updated score");
        while (true) {
          if (isNaN(updatedScore)) {
            updatedScore = prompt("Please enter a number");
          }
          else if (updatedScore < 0) {
            updatedScore = prompt("Please enter a number above 0");
          }
          else {
            break
          }
        }
        let updatedDifficulty = prompt("Updated difficulty");
        while (true) {
          if (updatedDifficulty == "easy" || updatedDifficulty == "medium" || updatedDifficulty == "hard" || updatedDifficulty == "extreme" || updatedDifficulty == "") {
            break
          }
          else {
            updatedDifficulty = prompt("please enter a valid difficulty");
          }
        }
        updateScores(score.id, updatedScore, updatedDifficulty);
        getScoreTableData();
      };
      action.appendChild(updateBtn);
    }

    // add action for delete button
    var deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.className = "button";
    deleteBtn.value = "Delete";
    deleteBtn.style = "margin-right:16px"
    deleteBtn.onclick = function () {
      deleteScores(score.id);
      getScoreTableData();
    };
    action.appendChild(deleteBtn);  

    // add data to row
    if (isUserAdmin) {
      tr.appendChild(usernamesTable);
    }
    tr.appendChild(scores);
    tr.appendChild(difficulty);
    tr.appendChild(action);

    // add row to table
    table.appendChild(tr);
  });
}