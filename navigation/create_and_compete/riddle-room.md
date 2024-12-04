---
layout: post 
title: Create and Compete - Riddle Room
search_exclude: true
permalink: /create_and_compete/riddle
menu: nav/create_and_compete.html
author: Kush, Tarun, Vincent, and Nolan
---

<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/riddle.css">

<details>
  <br>
  <summary>Room Details</summary>

  <a href="{{site.baseurl}}/moderation/rules_riddle/">Moderation Rules</a>

  <p>The main purpose of our riddle room is to have people think critically and collaborate with the other members of the channel to solve the riddle as fast as possible.</p>

  <p>Room will consist of:</p>
  <ul>
    <li>Daily riddle which is optionally pinned to the top of our channel</li>
    <li>Answers will be posted at the end of the day</li>
    <li>Chat box where members of the channel can collaborate to solve the riddle</li>
    <li>AI which posts the answer if someone gets it, else posts the answer at the end of the day</li>
    <li>Profanity is censored</li>
  </ul>
</details>


<div id="riddle-container">
    <h4 style="text-align: center;">Riddle of the Day</h4>
    <p id="riddle-text"></p>
</div>

<div id="chat-container">
    <div id="chat-box"></div>
    <div id="users-list">
        <h4 style="color: #4A4848;" >Users</h4>
        <ul id="userList">
            <li>System</li>
        </ul>
    </div>
</div>

<div class="input-group">
    <input type="text" id="message-input" placeholder="Type your message...">
    <button id="send-button" onclick="sendMessage()">Send</button>
</div>

<div class="input-group">
    <input type="text" id="answer-input" placeholder="Enter your answer(with no extra characters)...">
    <button id="check-answer" onclick="checkAnswer()">Check Answer</button>
</div>

<script>
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const answerInput = document.getElementById('answer-input');
    const userList = document.getElementById('userList');
    const riddleText = document.getElementById('riddle-text');
    const users = new Set(['System']);
    let username;
    let currentRiddle;

    function displayRiddle() {
        const riddles = [
            { question: "What has keys but can't open locks?", answer: "piano" },
            { question: "What has a head, a tail, but no body?", answer: "coin" },
            { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
            { question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "candle" },
            { question: "What has to be broken before you can use it?", answer: "egg" }
        ];
        const riddleIndex = new Date().getDate() % riddles.length;
        currentRiddle = riddles[riddleIndex];
        riddleText.textContent = currentRiddle.question;
    }

    function requestUsername() {
        while (true) {
            const enteredUsername = prompt("Enter your username:");
            if (enteredUsername && !users.has(enteredUsername)) {
                username = enteredUsername;
                addUser(username);
                displayMessage(`You have joined as ${username}.`, true);
                break;
            } else {
                alert("Username is taken or invalid. Please try again.");
            }
        }
    }

    function displayMessage(message, isSystem = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', isSystem ? 'system-message' : 'user-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addUser(newUsername) {
        users.add(newUsername);
        const userItem = document.createElement('li');
        userItem.textContent = newUsername;
        userList.appendChild(userItem);
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            displayMessage(`${username}: ${messageText}`);
            messageInput.value = '';
        }
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === currentRiddle.answer) {
            displayMessage(`${username} got it right!`, true);
        } else {
            displayMessage(`${username} guessed wrong! Try again.`, true);
        }
        answerInput.value = '';
    }

    displayMessage("Welcome to the Riddle Room Chat!", true);
    requestUsername();
    displayRiddle();
</script>