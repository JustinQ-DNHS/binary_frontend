---
layout: page
title: REVVIT (Polls)
description: Review polls
permalink: /share_and_care/revvit/polls
---

{%- include nav/revvit.html -%}
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Car Enthusiasts Polls</title>
  <style>
    /* General Poll Section Styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #333;
      color: #ffffff;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      flex-direction: column;
    }
    .poll-section {
      max-width: 700px;
      width: 100%;
      background-color: #444444;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      margin-bottom: 20px;
    }
    h2, h3 {
      text-align: center;
      color: #cfe2ff;
    }
    .poll {
      background-color: #222222;
      border-radius: 8px;
      padding: 15px;
      margin: 20px 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }
    .poll img {
      width: 100%;
      height: auto;
      border-radius: 5px;
      margin: 10px 0;
    }
    .poll-options label {
      display: block;
      padding: 8px 10px;
      background-color: #666666;
      color: #ffffff;
      border-radius: 4px;
      margin: 8px 0;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .poll-options label:hover {
      background-color: #888888;
    }
    .poll button {
      display: block;
      width: 100%;
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 1em;
      color: #ffffff;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .poll button:hover {
      background-color: #0056b3;
    }
    .poll-result {
      text-align: center;
      font-weight: bold;
      color: #28a745;
      margin-top: 15px;
    }
    .text-block {
      background-color: #ffcc00;
      padding: 20px;
      border-radius: 10px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #333;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    .text-block:hover {
      background-color: #ffbb00;
    }
  </style>
</head>
<body>

<div class="poll-section">
  <h2>🚗 Car Enthusiasts Polls 🚗</h2>

  <!-- Poll: Top Muscle Car -->
  <div class="poll" id="poll-muscle-car">
    <h3>🏆 Top Muscle Car</h3>
    <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/1578086878/a9829624-fe48-49cf-864b-5722cd0a6351/20d37e9e-0e2a-4404-ba9d-bd6af970d325/1920x1080/match/image.jpg" alt="Muscle Car">
    <form onsubmit="return false;">
      <div class="poll-options">
        <label><input type="radio" name="muscleCar" value="Mustang"> Mustang</label>
        <label><input type="radio" name="muscleCar" value="Camaro"> Camaro</label>
        <label><input type="radio" name="muscleCar" value="Challenger"> Challenger</label>
      </div>
      <button type="button" onclick="handleVote('poll-muscle-car', 'Top Muscle Car', 'muscleCar')">Vote</button>
    </form>
    <p class="poll-result" id="pollResult-muscle-car"></p>
  </div> 

  <!-- Poll: Favorite Engine Type -->
  <div class="poll" id="poll-engine-type">
    <h3>🔋 Favorite Engine Type</h3>
    <img src="data:image/jpeg;base64,..." alt="Engine">
    <form onsubmit="return false;">
      <div class="poll-options">
        <label><input type="radio" name="engineType" value="V6"> V6</label>
        <label><input type="radio" name="engineType" value="V8"> V8</label>
        <label><input type="radio" name="engineType" value="Electric"> Electric</label>
      </div>
      <button type="button" onclick="handleVote('poll-engine-type', 'Favorite Engine Type', 'engineType')">Vote</button>
    </form>
    <p class="poll-result" id="pollResult-engine-type"></p>
  </div>

  <!-- Poll: Classic vs Modern Cars -->
  <div class="poll" id="poll-car-type">
    <h3>🚘 Classic vs. Modern Cars</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNHGcf3IKiAc2HS3eKhDUV04ktfF8qnooVA&s" alt="Classic vs Modern Cars">
    <form onsubmit="return false;">
      <div class="poll-options">
        <label><input type="radio" name="carType" value="Classic"> Classic</label>
        <label><input type="radio" name="carType" value="Modern"> Modern</label>
      </div>
      <button type="button" onclick="handleVote('poll-car-type', 'Classic vs Modern Cars', 'carType')">Vote</button>
    </form>
    <p class="poll-result" id="pollResult-car-type"></p>
  </div> 
</div>

<!-- Link to create your own poll -->
<a class="text-block" href="create_poll">Create Your Own Poll Here</a>

<script>
  function handleVote(pollId, pollName, choiceName) {
    const pollDiv = document.getElementById(pollId);
    const selectedOption = pollDiv.querySelector(`input[name="${choiceName}"]:checked`);
    if (!selectedOption) {
      alert("Please select an option before voting!");
      return;
    }
    const vote = selectedOption.value;

    fetch('/poll/vote', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({poll: pollName, vote: vote})
    })
    .then(response => response.json())
    .then(data => {
      const resultText = data.leadingOption 
        ? `Thanks for voting! Current leader: ${data.leadingOption}`
        : "Thanks for voting!";
      document.getElementById(`pollResult-${pollId}`).textContent = resultText;
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error submitting vote. Please try again later.");
    });
  }
</script>

</body>
</html>
