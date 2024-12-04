document.addEventListener("DOMContentLoaded", function() {
    const usernameModal = document.getElementById("username-modal");
    const usernameInput = document.getElementById("username-input");
    const usernameSubmitButton = document.getElementById("username-submit");
    const chatRoomContainer = document.querySelector(".chat-room-container");
    const chatBox = document.getElementById("chat-box");
    const chatMessage = document.getElementById("chat-message");
    const sendMessageButton = document.getElementById("send-message");

    let username = "";

    // Show chat room only after username is entered
    usernameSubmitButton.addEventListener("click", function() {
        if (usernameInput.value.trim() !== "") {
            username = usernameInput.value.trim();
            usernameModal.style.display = "none"; // Hide modal
            chatRoomContainer.style.display = "block"; // Show chat room
            loadMessages(); // Load stored messages from localStorage
        } else {
            alert("Please enter a username.");
        }
    });

    // Function to send the message
    function sendMessage() {
        const message = chatMessage.value.trim();

        if (message !== "") {
            // Create a new message element with the username
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = `${username}: ${message}`;
            
            // Append the message to the chat box
            chatBox.appendChild(messageElement);
            
            // Save message to localStorage
            saveMessage(`${username}: ${message}`);
            
            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Clear the input field
            chatMessage.value = "";
        }
    }

    // Save message to localStorage
    function saveMessage(message) {
        let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        messages.push(message);
        localStorage.setItem("chatMessages", JSON.stringify(messages));
    }

    // Load messages from localStorage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        messages.forEach((msg) => {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = msg;
            chatBox.appendChild(messageElement);
        });
        // Scroll to the bottom of the chat box after loading messages
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Send message when the Send button is clicked
    sendMessageButton.addEventListener("click", sendMessage);

    // Send message when Enter key is pressed in the chat input
    chatMessage.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents newline in the input field
            sendMessage();
        }
    });

    // Clear chat history from localStorage
    document.getElementById("clear-chat").addEventListener("click", function() {
        localStorage.removeItem("chatMessages");
        chatBox.innerHTML = ""; // Clear chat box content
    });
});
