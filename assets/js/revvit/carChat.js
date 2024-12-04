import { pythonURI, fetchOptions } from "../../js/api/config.js";
// Import functions from config.js
import {
  putUpdate,
  postUpdate,
  deleteData,
  logoutUser,
} from "../../js/api/profile.js";
const redirectLoginLink = `${window.location.origin}/flocker_frontend/login`;

const sendBtn = document.getElementById("sendBtn");
const messageText = document.getElementById("chat");
const messageBox = document.getElementById("chatMessages");

async function sendMessage() {
  const message = messageText.value;
  if (message.length === 0) {
    return;
  }
  messageText.value = "";

  const sendMessageOptions = {
    method: "POST",
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "include", // include, same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Origin": "client", // New custom header to identify source
    },
    body: JSON.stringify({
      message: message,
    }),
  };

  const URL = pythonURI + "/api/car_chat"; // Endpoint to fetch user profile data
  try {
    // 1. Fetch the data from the endpoint
    const response = await fetch(URL, sendMessageOptions);

    // 2. Make sure the response is ok
    if (!response.ok) {
      if (response.status == 401) {
        window.location.replace(redirectLoginLink);
        return null;
      }
      throw new Error(`Failed to send Message: ${response.status}`);
    }

    // 3. Return the data
    updateMessageDisplay();
    return response.json();
    // 4. If we had an error anywhere in the try (stuff above), we will log an error.
  } catch (error) {
    console.error("Error Sending Message:", error.message);
    return null;
    // Handle error display or fallback mechanism
  }
}

async function getMessages() {
  const URL = pythonURI + "/api/car_chat"; // Endpoint to fetch user profile data
  try {
    // 1. Fetch the data from the endpoint
    const response = await fetch(URL, fetchOptions);

    // 2. Make sure the response is ok
    if (!response.ok) {
      if (response.status == 401) {
        window.location.replace(redirectLoginLink);
        return null;
      }
      throw new Error(`Failed to get Messages: ${response.status}`);
    }

    // 3. Return the data
    return response.json();
    // 4. If we had an error anywhere in the try (stuff above), we will log an error.
  } catch (error) {
    console.error("Error Getting Messages:", error.message);
    return null;
    // Handle error display or fallback mechanism
  }
}

// <div class="message user">Hello!</div>
function displayMessages(messages) {
  messageBox.innerHTML = "";
  messages.forEach((message) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("user");
    messageElement.innerText = message.message;
    messageBox.appendChild(messageElement);
  });
}

updateMessageDisplay();

function updateMessageDisplay() {
  getMessages().then((messages) => {
    displayMessages(messages);
  });
}

sendBtn.addEventListener("click", sendMessage);

setInterval(updateMessageDisplay, 1000); // Update the message display every second
