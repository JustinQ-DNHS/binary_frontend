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
      <img src="../images/heart.png" class="heart" id="heart1" alt="Heart1">
      <img src="../images/heart.png" class="heart" id="heart2" alt="Heart2">
      <img src="../images/heart.png" class="heart" id="heart3" alt="Heart3">
    </div>
    <div class="difficulty-header" data-level="play">
      <h1>Click To Play</h1>
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
      <input type="text" id="answer-input" placeholder="Your answer" autocomplete="off">
      <button id="submit-answer">Submit</button>
    </div>
    <div class="message" id="message"></div>
  </div>
<br>
<br>
<br>
<button id="rules-btn" class="rules-button">Rules</button>
<button id="scores-btn" class="rules-button">Scores</button>

<div class="popup" id="scores-popup">
  <div class="popup-content">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Scores</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table">
          <!-- JavaScript generated data -->
        </tbody>
      </table>
    </div>
    <button id="close-scores-btn">Close</button>
  </div>
</div>

<div class="popup" id="admin-scores-popup">
  <div class="popup-content">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Scores</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="admin-table">
          <!-- JavaScript generated data -->
        </tbody>
      </table>
    </div>
    <button id="close-admin-scores-btn">Close</button>
  </div>
</div>

<div class="popup" id="rules-popup">
    <div class="popup-content">
        <h2>Game Rules</h2>
        <p>
            <strong>Objective:</strong> The goal of the game is to answer as many binary conversion questions as possible. 
            You are asked to convert a number between different formats (e.g., binary to decimal, decimal to binary, hexadecimal to binary).
        </p>
        <p>
            <strong>Levels:</strong> The game has four difficulty levels:
                <p><strong>Easy:</strong> Numbers between 1 and 15</p>
                <p><strong>Medium:</strong> Numbers between 16 and 255</p>
                <p><strong>Hard:</strong> Numbers between 10 and 31 (includes hexadecimal)</p>
                <p><strong>Extreme:</strong> Numbers between 32 and 255 (includes hexadecimal)</p>
        </p>
        <p>
            <strong>Scoring:</strong> Each correct answer earns one point. If you get a wrong answer, you lose one life. You have three lives in total.
        </p>
        <p>
            <strong>Winning:</strong> The game ends when you lose all lives. Your highest score for each level will be saved and can be viewed on the scoreboard.
        </p>
        <button>Close</button>
    </div>
</div>


  <audio id="chime-sound" src="{{site.baseurl}}/sounds/chime.mp3"></audio>
  <audio id="alarm-sound" src="{{site.baseurl}}/sounds/alarm.mp3"></audio>
  <audio id="gameOver-sound" src="{{site.baseurl}}/sounds/gameOver.mp3" preload="auto"></audio>


  <!-- Include the config.js file before the game script -->
<script type="module" src="{{site.baseurl}}/navigation/BinaryLearningGame/BinaryLearningGameJS.js"></script>
<script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>


</body>

</html>
