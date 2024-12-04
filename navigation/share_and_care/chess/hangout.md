---
layout: post
title: Chess Hangout
permalink: /chess/hangout
comments: true
authors: Ahaan, Xavier, Spencer, Vasanth
---




<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chess Hangout Zone - Chess Game with Chat</title>
  <style>
    /* General Styles */
    body {
      background-color: #2c3e50;
      color: #ecf0f1;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }

    .container {
      text-align: center;
      margin-top: 20px;
      width: 100%;
      max-width: 1200px;
      padding: 20px;
    }

    h2 {
      color: #e67e22;
      font-size: 2em;
      margin-bottom: 10px;
    }

    p.intro {
      color: #ecf0f1;
      font-size: 1.2em;
      margin-top: 5px;
      font-style: italic;
    }

    /* Buttons */
    .btn {
      padding: 12px 24px;
      margin: 10px;
      cursor: pointer;
      background-color: #2980b9;
      color: #ecf0f1;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #3498db;
    }

    /* Chessboard */
    .chessboard {
      display: grid;
      grid-template-columns: repeat(8, 70px);
      grid-template-rows: repeat(8, 70px);
      border: 3px solid #34495e;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    }

    .chessboard div {
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-weight: bold;
      cursor: pointer;
    }

    .yellow {
      background-color: #f7c6a5;
    }

    .orange {
      background-color: #e67e22;
    }

    /* Piece Colors */
    .white-piece {
      color: #f0f0f0;
    }

    .black-piece {
      color: #333;
    }

    /* Chat Container */
    .chat-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      gap: 20px;
      margin-top: 20px;
    }

    .chat-box {
      width: 45%;
      background-color: #34495e;
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #2c3e50;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }

    .chat-messages {
      height: 300px;
      overflow-y: auto;
      background-color: #2c3e50;
      padding: 12px;
      border-radius: 10px;
      border: 2px solid #34495e;
    }

    .message {
      margin: 8px 0;
      padding: 8px;
      font-size: 15px;
      color: #ecf0f1;
      border-radius: 10px;
    }

    .message.user-message {
      background-color: #2980b9;
      text-align: right;
    }

    .message.bot-message {
      background-color: #e67e22;
      text-align: left;
    }

    /* Captured Pieces */
    .captured-pieces {
      margin-top: 20px;
    }

    .captured-pieces div {
      margin: 5px 0;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <p class="intro">Freely test out your Chess Skills with drills and experimenting your moves to become a chess champion.</p>
    <p id="turnIndicator">Turn: White</p>

    <div class="chat-container">
      <div>
        <div class="chessboard" id="chessboard"></div>
        <div class="captured-pieces">
          <div>White's Captured Pieces: <span id="whiteCaptured"></span></div>
          <div>Black's Captured Pieces: <span id="blackCaptured"></span></div>
        </div>
      </div>
      <div class="chat-box">
        <h4>Chess-Themed Chat Room</h4>
        <div id="chatMessages" class="chat-messages"></div>
        <div class="message-input">
          <input type="text" id="messageInput" placeholder="Type your message">
          <button id="sendBtn" class="btn">Send</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    const pieces = {
      R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙",
      r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
    };
    const boardLayout = [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ];

    let selectedSquare = null;
    let turn = "white";
    const chessboard = document.getElementById("chessboard");
    const turnIndicator = document.getElementById("turnIndicator");
    const whiteCaptured = document.getElementById("whiteCaptured");
    const blackCaptured = document.getElementById("blackCaptured");
    let whiteCapturedPieces = [];
    let blackCapturedPieces = [];

    function drawBoard() {
      chessboard.innerHTML = "";
      boardLayout.forEach((row, rowIndex) => {
        row.forEach((piece, colIndex) => {
          const square = document.createElement("div");
          square.classList.add((rowIndex + colIndex) % 2 === 0 ? "yellow" : "orange");
          square.textContent = pieces[piece] || "";

          if (piece === piece.toUpperCase() && piece) {
            square.classList.add("white-piece");
          } else if (piece === piece.toLowerCase() && piece) {
            square.classList.add("black-piece");
          }

          square.addEventListener("click", () => selectSquare(rowIndex, colIndex));
          chessboard.appendChild(square);
        });
      });
    }

    function selectSquare(row, col) {
      const piece = boardLayout[row][col];
      if (selectedSquare) {
        movePiece(row, col);
        selectedSquare = null;
      } else if (
        piece &&
        ((turn === "white" && piece === piece.toUpperCase()) ||
        (turn === "black" && piece === piece.toLowerCase()))
      ) {
        selectedSquare = { row, col, piece };
      }
    }

    function movePiece(newRow, newCol) {
      const { row, col, piece } = selectedSquare;
      const targetPiece = boardLayout[newRow][newCol];

      if (targetPiece && piece.toUpperCase() !== targetPiece.toUpperCase()) {
        capturePiece(targetPiece);
      }
      
      boardLayout[newRow][newCol] = piece;
      boardLayout[row][col] = "";
      drawBoard();

      turn = turn === "white" ? "black" : "white";
      turnIndicator.textContent = `Turn: ${turn.charAt(0).toUpperCase() + turn.slice(1)}`;
    }

    function capturePiece(piece) {
      if (piece === piece.toUpperCase()) {
        blackCapturedPieces.push(piece);
        blackCaptured.textContent = blackCapturedPieces.join(" ");
      } else {
        whiteCapturedPieces.push(piece);
        whiteCaptured.textContent = whiteCapturedPieces.join(" ");
      }
    }

// Chat functionality
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(content, type = "user") {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = content;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message, "user");
    messageInput.value = "";
    setTimeout(botResponse, 2000); // Bot responds after 2 seconds
  }
});

function botResponse() {
  const motivationalMessages = [
    "Keep it up! Your next move could be a game-changer.",
    "Great effort! Remember, every master was once a beginner.",
    "You're doing fantastic. Stay focused and enjoy the game!",
    "Patience and strategy will always lead to victory!",
    "Trust your instincts and keep making moves!",
    "Think a few steps ahead, and you'll be unstoppable.",
    "Even the best players make mistakes; keep learning and moving forward.",
    "Take a deep breath and stay calm – you're doing great!",
    "Chess is a journey, enjoy every move you make.",
    "Don't rush – a wise move is worth the wait!"
  ];
  const randomMessage =
    motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  addMessage(randomMessage, "bot");
}
    

    drawBoard();
  </script>
</body>
</html>





<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Post with Group Selection</title>
    <style>
        /* Container and form styling */
        .container {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 1200px;
            padding: 20px;
            box-sizing: border-box;
        }
        .form-container {
            display: flex;
            flex-direction: column;
            max-width: 800px;
            width: 100%;
            background-color: #2c3e50;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #ecf0f1;
        }
        .form-container label {
            margin-bottom: 5px;
        }
        /* Style for the dropdown */
        .form-container select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            width: 100%;
            background-color: #34495e;
            color: #ecf0f1;
            font-size: 16px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
        }
        /* Button styling */
        .form-container button {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #34495e;
            color: #ecf0f1;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-container">
            <h2>Select Group and Create Post</h2>
            <form id="postForm">
                <label for="group_id">Group:</label>
                <select id="group_id" name="group_id" required>
                    <option value="">Select a group</option>
                </select>
                
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required>
                
                <label for="content">Content:</label>
                <textarea id="content" name="content" required></textarea>
                
                <button type="submit">Add Post</button>
            </form>
            <div id="details"></div>
        </div>
    </div>

    <script type="module">
        // Import server URI and standard fetch options
        const pythonURI = "https://flocker.nighthawkcodingsociety.com";
        const fetchOptions = {
            headers: {
                'Authorization': 'Bearer YOUR_AUTH_TOKEN' // Replace with actual auth token if required
            }
        };

        // Function to fetch groups for dropdown selection
        async function fetchGroups() {
            try {
                const response = await fetch(`${pythonURI}/api/groups`, fetchOptions);
                if (!response.ok) {
                    throw new Error('Failed to fetch groups: ' + response.statusText);
                }
                const groups = await response.json();
                const groupSelect = document.getElementById('group_id');
                groups.forEach(group => {
                    const option = document.createElement('option');
                    option.value = group.id;
                    option.textContent = group.name;
                    groupSelect.appendChild(option);
                });
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        }

        // Handle form submission
        document.getElementById('postForm').addEventListener('submit', async function(event) {
            event.preventDefault();

            // Extract data from form
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const group_id = document.getElementById('group_id').value;

            // Create API payload
            const postData = {
                title: title,
                content: content,
                group_id: group_id
            };

            try {
                // Send POST request to backend to add the new post
                const response = await fetch(`${pythonURI}/api/post`, {
                    ...fetchOptions,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });

                if (!response.ok) {
                    throw new Error('Failed to add post: ' + response.statusText);
                }

                alert('Post added successfully!');
                document.getElementById('postForm').reset();
            } catch (error) {
                console.error('Error adding post:', error);
                alert('Error adding post: ' + error.message);
            }
        });

        // Fetch groups when the page loads
        fetchGroups();
    </script>


<h2>Discussion</h2>
<textarea placeholder="Enter your thoughts or comments here..." id="comment"></textarea>
<button class="regularButton" onclick="addComment()"><p class="buttonP">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>

 <script type="module">
        import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';
        const channelID = 23;
        const commentTitle = "luxuryCars";
async function addComment() {
    const argumentText = document.getElementById('comment').value.trim();
    if (!argumentText) {
        alert('Please enter a comment.');
        return;
    }
    const argumentData = {
        title: commentTitle,
        comment: argumentText,
        channel_id: channelID,
        user_name: localStorage.getItem('username') || 'Guest'
    };
    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(argumentData)
        });
        if (!response.ok) throw new Error('Failed to submit comment: ' + response.statusText);
        document.getElementById('comment').value = ''; // Clear input field
        fetchComments(); // Refresh comments list
    } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Error submitting comment: ' + error.message);
    }
}
async function fetchComments() {
    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel_id: channelID })
        });
        if (!response.ok) throw new Error('Failed to fetch comments: ' + response.statusText);
        const argumentsData = await response.json();
        // Reverse the order of the comments so the latest comes first
        argumentsData.reverse();
        const messageBox = document.getElementById('messageBox');
        messageBox.innerHTML = "<p><strong>Messages :</strong></p>"; // Clear existing comments
        argumentsData.forEach(arg => {
            const commentElement = document.createElement("p");
            commentElement.textContent = `${arg.user_name}: ${arg.comment}`;
            messageBox.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        alert('Error fetching comments: ' + error.message);
    }
}
window.addEventListener('load', () => {
    fetchComments(channelID); // Fetch initial comments on page load
});
window.addComment = addComment; // Expose the function globally
    </script>

</body>
</html>
