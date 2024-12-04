---
layout: page
title: REVVIT (Chat)
description: Chat about your car
permalink: /share_and_care/revvit/carChat
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatroom Box</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        .chatbox {
            width: 350px;
            height: 500px;
            border: 1px solid #ccc;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background-color: #fff;
            color: black;
        }
        .chat-header {
            color: black;
            padding: 15px;
            text-align: center;
            font-size: 18px;
        }
        .chat-messages {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
        }
        .message {
            margin: 5px 0;
            padding: 8px;
            border-radius: 5px;
            max-width: 80%;
        }
        .message.user {
            background-color: #DCF8C6;
            align-self: flex-end;
        }
        .message.other {
            background-color: #F1F0F0;
            align-self: flex-start;
        }
        .chat-input {
            display: flex;
            padding: 10px;
            border-top: 1px solid #ddd;
            background-color: #f9f9f9;
        }
        .chat-input input {
            flex: 1;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
        }
        .chat-input button {
            margin-left: 10px;
            padding: 10px 15px;
            font-size: 16px;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="chatbox">
    <div class="chat-header">
        Chatroom
    </div>
    <div id="chatMessages" class="chat-messages">
        <div class="message user">Hello!</div>
        <div class="message other">Hi! How can I help you?</div>
    </div>
    <div class="chat-input">
        <input id="chat" type="text" placeholder="Type a message...">
        <button id="sendBtn">Send</button>
    </div>
</div>

</body>

<script type="module" src="{{site.baseurl}}/assets/js/revvit/carChat.js">
