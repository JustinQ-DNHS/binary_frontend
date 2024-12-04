---
layout: post
title: Feedback - Interactive Chat Room
search_exclude: true
permalink: /create_and_compete/feedback
menu: nav/create_and_compete.html
---

<script>
const response = await fetch(`${pythonURI}/api/post`, {
    ...fetchOptions,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ section_name: "Home Page" })
});
</script>

<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/feedback.css">

<div class="chat-room-container">
<p>Share your feedback, discuss guesses, and chat with others in real time!</p>

<!-- Chat Box -->
<div id="chat-box" class="chat-box"></div>

<!-- Chat Input -->
<div class="chat-input">
    <input type="text" id="chat-message" placeholder="Type your message here...">
    <button id="send-message" class="send-button">Send</button>
</div>
</div>

<!-- Username Modal -->
<div id="username-modal" class="modal">
    <div class="modal-content">
        <h2>Enter Your Username</h2>
        <input type="text" id="username-input" placeholder="Enter username..." required>
        <button id="username-submit">Enter Chat</button>
    </div>
</div>

<!-- Chat Room Container (Initially Hidden) -->
<div class="chat-room-container" style="display: none;">
    <p class="chat-header">Interactive Chat Room</p>
    <div id="chat-box" class="chat-box"></div>
    <div class="chat-input">
        <input type="text" id="chat-message" placeholder="Type your message here...">
        <button id="send-message" class="send-button">Send</button>
        <button id="clear-chat" class="send-button">Clear Chat</button>
    </div>
</div>

<script src="{{site.baseurl}}/navigation/create_and_compete/chat.js"></script>

<style>
/* General Container Styling */
.chat-room-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  font-family: 'Arial', sans-serif;
}

/* Header Styling */
.chat-header {
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Chat Box Styling */
.chat-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 300px;
  overflow-y: scroll;
  padding: 15px;
  font-size: 1.2em;
  background-color: #000;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Message Styling */
.message {
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #eef2f7;
  color: #f5f0f0
;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Input Box Styling */
.chat-input {
  display: flex;
  margin-top: 15px;
}

.chat-message {
  flex: 1;
  padding: 10px;
  font-size: 1.2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}

.send-button {
  padding: 10px 15px;
  font-size: 1.2em;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.send-button:hover {
  background-color: #0056b3;
}
</style>
