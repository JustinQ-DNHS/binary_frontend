---
layout: post
title: Chat Room for Doodle
description: Chat freely with everyone
menu: nav/doodle.html
permalink: /moderation/chat_doodle/
author: Arshia, Prajna, Mirabelle, Alex
---
<div id="mainContainer">
  <div id="sidebar">
    <div class="chatBox" onclick="loadConversation('Alex')">
      <h3>Alex</h3>
      <p>"Check out this doodle!"</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Prajna')">
      <h3>Prajna</h3>
      <p>"I tried a new shading technique!"</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Arshia')">
      <h3>Arshia</h3>
      <p>"Let’s brainstorm more ideas!"</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Mirabelle')">
      <h3>Mirabelle</h3>
      <p>"Look at the details on this one!"</p>
    </div>
  </div>

  <div id="chatContainer">
    <div id="doodleImageContainer">
      <img id="doodleImage" src="{{site.baseurl}}/images/notebooks/foundation/doodle-images/doodle.png" alt="Doodle Image">
    </div>
    <div id="messages"></div>
    <div id="inputContainer">
      <!-- File upload input for the image -->
      <input type="file" id="imageUpload" accept="image/*" />
      <input type="text" id="inputMessage" placeholder="Type a message..." />
      <button id="sendButton">Send</button>
    </div>
  </div>

  <button id="fullscreenButton" onclick="toggleFullscreen()">&#x26F6;</button>
  <button id="exitFullscreenButton" onclick="toggleFullscreen()">X</button>
</div>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Comic Sans MS', sans-serif;
  }
  body {
    background-color: #f7f4f9;
  }#mainContainer {
    width: 90vw;
    height: 90vh;
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border: 3px solid #ffcbdb;
  }
  #sidebar {
    width: 30%;
    background: #ffe4e1;
    padding: 20px;
    overflow-y: auto;
  }
  .chatBox {
    padding: 20px;
    margin: 10px 0;
    background-color: rgba(255, 248, 220, 0.9);
    border-radius: 8px;
    border: 2px dashed #ffcbdb;
    transition: transform 0.2s ease, background-color 0.3s;
    color: #2f4858;
    cursor: pointer;
  }
  .chatBox:hover {
    background-color: #ffdde1;
    transform: scale(1.05);
  }
  .chatBox h3, .chatBox p {
    color: black;
  }
  #chatContainer {
    flex: 1;
    padding: 20px;
    background-color: #fdf6e3;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #doodleImageContainer {
    width: 100%;
    max-height: 180px;
    overflow: hidden;
  }

  #doodleImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid #ffcbdb;
    display: block;
  }

  #messages {
    flex: 1;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.05);
    border: 2px dashed #ffcbdb;
  }
  .message {
    margin: 10px 0;
    padding: 12px;
    border-radius: 8px;
    font-size: 15px;
    max-width: 70%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    color: #2f4858;
    background-color: #fbe8e7;
  }
  .message:nth-child(odd) {
    background-color: #ffe4e1;
  }
  .message:nth-child(even) {
    background-color: #ffdde1;
    align-self: flex-end;
  }
  #inputContainer {
    display: flex;
    gap: 10px;
  }
  #inputMessage {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: 2px dashed #ffcbdb;
    border-radius: 8px;
    outline: none;
    background-color: #fff4f7;
    color: #2f4858;
    transition: box-shadow 0.3s;
  }
  #inputMessage:focus {
    box-shadow: 0px 0px 8px rgba(255, 123, 123, 0.5);
  }
  #sendButton {
    padding: 12px 18px;
    font-size: 16px;
    background-color: #ff869a;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  #sendButton:hover {
    background-color: #ff7184;
    transform: translateY(-2px);
  }
  #fullscreenButton, #exitFullscreenButton {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #ff7184;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 100;
  }
  #fullscreenButton:hover, #exitFullscreenButton:hover {
    background-color: #ff869a;
  }
  #exitFullscreenButton {
    display: none;
  }
  .fullscreen #mainContainer {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: #f7f4f9;
  }
  .fullscreen #fullscreenButton {
    display: none;
  }
  .fullscreen #exitFullscreenButton {
    display: block;
  }
</style>

<script>
  const messages = document.getElementById('messages');
  const inputMessage = document.getElementById('inputMessage');
  const sendButton = document.getElementById('sendButton');
  const doodleImage = document.getElementById('doodleImage');
  const imageUpload = document.getElementById('imageUpload');

  const conversations = {
    'Alex': ["Alex: Check out this doodle!", "You: Wow! Did you use ink?", "Alex: Yes, and some shading too."],
    'Prajna': ["Prajna: I tried a new shading technique!", "You: Looks amazing! It adds depth.", "Prajna: Thanks! I've been practicing!"],
    'Arshia': ["Arshia: Let’s brainstorm more ideas!", "You: How about some abstract doodles?", "Arshia: Great idea! I'll sketch something."],
    'Mirabelle': ["Mirabelle: Look at the details on this one!", "You: That’s so intricate!", "Mirabelle: Thanks! It took ages."]
  };

  // Handle the file upload
  imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        doodleImage.src = e.target.result;  // Update the image source to the uploaded file
      };
      reader.readAsDataURL(file);
    }
  });

  function loadConversation(chatName) {
    messages.innerHTML = '';
    const chatMessages = conversations[chatName] || [];
    chatMessages.forEach((msg) => {
      addMessage(msg);
    });
  }

  function addMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const messageText = inputMessage.value.trim();
    if (messageText) {
      addMessage(`You: ${messageText}`);
      inputMessage.value = '';
    }
  });

  inputMessage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendButton.click();
  });

  function toggleFullscreen() {
    document.body.classList.toggle('fullscreen');
  }

  loadConversation('Alex');
</script>
