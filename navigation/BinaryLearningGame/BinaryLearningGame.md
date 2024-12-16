---
layout: page
permalink: /binaryGame
---


{% comment %}
```html
{% endcomment %}


<html lang="en">

<head>
  <link rel="stylesheet" type="text/css" href="{{site.baseurl}}/navigation/BinaryLearningGame/BinaryLearningGameCSS.css">
</head>

<body>

  <br>
  <div id="difficulty-popup" class="popup">
    <div class="popup-content">
      <h2>Select Difficulty Level</h2>
      <button id="easy-btn" class="level-button" data-level="easy" style="background-color: var(--easy);">Easy</button>
      <button id="medium-btn" class="level-button" data-level="medium" style="background-color: var(--medium);">Medium</button>
      <button id="hard-btn" class="level-button" data-level="hard" style="background-color: var(--hard);">Hard</button>
      <button id="extreme-btn" class="level-button" data-level="extreme" style="background-color: var(--extreme);">Extreme</button>
    </div>
  </div>

  <div class="popup" id="game-over-popup">
    <div class="popup-content">
      <h2>Game Over</h2>
      <p id="final-score" style="color: black;"></p>
      <button onclick="restartGame()">OK</button>
    </div>
  </div>

  <div class="game-container">
    <div class="hearts-container" id="hearts-container">
      <img src="{{site.baseurl}}/images/heart.png" class="heart" id="heart1" alt="Heart1">
      <img src="{{site.baseurl}}/images/heart.png" class="heart" id="heart2" alt="Heart2">
      <img src="{{site.baseurl}}/images/heart.png" class="heart" id="heart3" alt="Heart3">
  </div>
    <div class="difficulty-header" data-level="easy">
      <h1>Level: Easy</h1>
    </div>

    <div class="scoreboard">
      <p style="color: black">High Score: <span id="high-score" style="color: black;">0</span></p>
      <p style="color: black;">Score: <span id="total-score" style="color: black;">0</span></p>
    </div>

    <div class="question">
      Convert: <span id="question-text"></span><br>
      <strong>From: <span id="convert-from-format"></span></strong><br>
      <strong>To: <span id="convert-to-format"></span></strong>
    </div>

    <div class="input-container">
      <input type="text" id="answer-input" placeholder="Your answer">
      <button id="submit-answer">Submit</button>
    </div>

    <div class="message" id="message"></div>
  </div>

  <audio id="chime-sound" src="sounds/chime.mp3" type="audio/mpeg"></audio>
  <audio id="alarm-sound" src="sounds/alarm.mp3" type="audio/mpeg"></audio>

<script src="{{site.baseurl}}/navigation/BinaryLearningGame/BinaryLearningGameJS.js" type="module">


import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

document.querySelectorAll('.level-button').forEach(button => {
  button.addEventListener('click', async (event) => {
    const level = event.target.dataset.level;
    await getHighestScoreForLevel(level);
  });
});

async function getHighestScoreForLevel(currentLevel) {
  try {
    const currentUserResponse = await fetch(currentUserApi, fetchOptions);
    const currentUser = await currentUserResponse.json();

    const scoresResponse = await fetch(scoresApi, fetchOptions);
    const scores = await scoresResponse.json();

    const userScores = scores.filter(entry => entry.userId === currentUser.id);
    const levelScores = userScores.filter(entry => entry.level === currentLevel);

    const highestScore = Math.max(...levelScores.map(entry => entry.score), 0);

    highScore = highestScore;
  } catch (error) {
    console.error('Error fetching scores:', error);
    return null;
  }
}

</script>

</body>

</html>
