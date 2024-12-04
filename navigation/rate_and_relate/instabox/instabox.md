---
layout: post
title: Instabox
search_exclude: true
permalink: rate_and_relate/instabox
menu: nav/rate_and_relate.html
author: Aadi, Aaditya, Aditya, Kanhay
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
<style>
    body {
        font-family: "Poppins", sans-serif;
        background-color: #333;
        color: white;
        margin: 0;
        padding: 0;
    }
    hr {
        border-color: #333;
    }
    /* Navbar styling */
    .navbar {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .navbar a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 18px;
    }
    .navbar a:hover {
        background-color: #6a59a3;
        border-radius: 5px;
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: calc(100vh - 60px);
    }
    /* Added margin for each box */
    .leaderboard-box,
    .instabox-box {
        margin: 10px;
    }
    .leaderboard-box {
        background-color: #444;
        border-radius: 10px;
        padding: 10px;
        height: 100%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    .instabox-box {
        background-color: #555;
        border-radius: 10px;
        padding: 20px;
        width: 65%;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    /* Instabox chatbox */
    .instabox {
        flex-grow: 1;
        overflow-y: auto;
        padding: 20px;
        background-color: #666;
        border-radius: 5px;
    }
    .instabox p {
        margin: 10px 0;
    }
    .chatinput {
        background-color: #121212;
        resize: none;
        width: 100%;
        height: 85px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        overflow: hidden;
        text-overflow: none;
    }
    .questionBox {
        background-color: #444;
        border-radius: 5px;
        padding: 10px;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
        color: white;
        font-size: 16px;
        transition: background-color 0.3s;
    }
    .questionBox:hover {
        background-color: #6a59a3;
    }
    #charCount {
        bottom: 5px;
        right: 10px;
        font-size: 12px;
        color: #aaa;
    }
    .leaderboard-box h2 {
        text-align: center;
        margin-bottom: 10px;
    }
    .leaderboard ul li {
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    .leaderboard ul {
        list-style: none;
        padding: 0;
    }
    /* Send button styling */
    #sendMessageBtn {
        background-color: #6a59a3;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    #sendMessageBtn:hover {
        background-color: #594a93;
    }
    #sendMessageBtn {
        transition: all 0.3s ease;
    }
    #sendMessageBtn.clicked {
        background-color: #6a59a3; /* Color change on click */
        transform: scale(0.95); /* Shrink the button */
    }
    /* Responsive design */
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;
        }
        .leaderboard-box {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
        .instabox-box {
            width: 100%;
        }
    }
</style>

<body>
    <hr>
    <!-- Navbar -->
    <div class="navbar">
        <a href="">Home</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/profile">Profile</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/settings">Settings</a>
    </div>
    <div class="container">
        <!-- Instabox chatbox -->
        <div class="instabox-box">
            <h2>Instabox 💬</h2>
            <div class="instabox" id="chat-messages">
                <p>Chat Messages: </p>
                <div id="messages-container"></div>
            </div>
            <br>
            <div class="input-container">
                <div class="chatinput" id="chatinput" contenteditable="true"></div>
                <button id="sendMessageBtn">Send</button>
            </div>
            <!-- New question button -->
            <div class="questionBox" onclick="getTriviaQuestion()">Get new question</div>
            <span id="charCount">100</span>
        </div>
        <!-- Leaderboard box -->
        <div class="leaderboard-box">
            <h2>Leaderboard 🏆</h2>
            <div class="leaderboard">
                <ul>
                    <li>🥇 Rama Kama Jamabama - 63</li>
                    <li>🥈 Jenneth Jabberson - 159</li>
                    <li>🥉 Googly Moogly - 203</li>
                    <li>🔺 Shannon Cannonball - 443</li>
                    <li>🔺 Shish Kabob - 652</li>
                    <li>🔺 Frenk Bonobo - 654</li>
                    <li>🔺 Galvin Ized-Steel - 730</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- JavaScript -->
<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    const chatInput = document.getElementById("chatinput");
    const charCount = document.getElementById("charCount");
    const messagesContainer = document.getElementById('messages-container');
    // Fetch and display messages
    function fetchMessages() {
        fetch(`${pythonURI}/api/messages`, {
            ...fetchOptions,
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            messagesContainer.innerHTML = '';  // Clear previous messages
            data.messages.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.textContent = message;
                messagesContainer.appendChild(messageDiv);
            });
        })
        .catch(error => console.error("Error fetching messages:", error));
    }
    // Post a new message
    function postMessage(newMessage) {
        fetch(`${pythonURI}/api/messages`, {
            ...fetchOptions,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: newMessage })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Append the new message immediately without re-fetching
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.textContent = newMessage;
                messagesContainer.appendChild(messageDiv);
                // Scroll to the latest message
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                // Clear input and reset character count
                chatInput.textContent = "";
                charCount.textContent = "100";
                charCount.style.color = "#aaa";
            } else {
                console.error("Error posting message:", data.error);
            }
        })
        .catch(error => console.error("Error in postMessage:", error));
    }
    function getTriviaQuestion() {
        fetch(`${pythonURI}/api/trivia`, {
            ...fetchOptions,
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            const messagesContainer = document.getElementById('messages-container'); //in the id defined earlier
            messagesContainer.innerHTML = '';
            let question = data["question"];
            const messageDiv = document.createElement('div');
            messageDiv.textContent = question;
            messagesContainer.appendChild(messageDiv);
        });
    }
    window.getTriviaQuestion = getTriviaQuestion;
    // Event listener for Send button (Send button click handler)
    document.getElementById("sendMessageBtn").addEventListener("click", () => {
        const newMessage = chatInput.textContent.trim();
        if (newMessage !== "") {
            // Trigger the button animation by adding 'clicked' class
            const sendButton = document.getElementById("sendMessageBtn");
            sendButton.classList.add("clicked");
            // Post the message
            postMessage(newMessage);
            // Remove the 'clicked' class after the animation
            setTimeout(() => {
                sendButton.classList.remove("clicked");
            }, 300);  // This should match the duration of the CSS transition
        }
        fetchMessages();
    });
    // Event listener for Enter key (Keyboard handler)
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();  // Prevent default behavior (new line in the input box)
            const newMessage = chatInput.textContent.trim();
            if (newMessage !== "") {
                // Post the message
                postMessage(newMessage);
            }
        }
        fetchMessages();
    });
    // Load messages on window load
    window.onload = fetchMessages;
</script>
</body>
