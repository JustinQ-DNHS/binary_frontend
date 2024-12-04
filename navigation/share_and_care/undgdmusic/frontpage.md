---
layout: page
title: Underground Music
description: Share music with others!
permalink: /undgdmusic/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underground Music Vibes</title>
   <style>
    /* General Styling */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: Arial, sans-serif;
        background-color: #000000;
        color: #FFD700;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }
    header {
        padding: 20px;
        width: 100%;
        max-width: 900px;
        background-color: #1F1F1F;
        text-align: center;
        border-bottom: 3px solid #FFD700;
        border-radius: 8px;
        margin-bottom: 30px;
    }
    header h1 {
        font-size: 2.5rem;
        color: #FFD700;
        text-shadow: 0px 2px 8px rgba(255, 215, 0, 0.6);
    }
    header p {
        color: #AAA;
        font-size: 1.1rem;
    }
    /* Chatroom Container */
    .chatroom-container {
        background-color: #1A1A1A;
        padding: 25px;
        border-radius: 10px;
        border: 2px solid #FFD700;
        margin-bottom: 30px;
        max-width: 800px;
        width: 100%;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
    }
    .chatroom-container h2 {
        color: #FFD700;
        text-align: center;
        margin-bottom: 20px;
    }
    #messages {
        height: 250px;
        overflow-y: auto;
        padding: 10px;
        background-color: #0D0D0D;
        border-radius: 6px;
        margin-bottom: 20px;
        border: 1px solid #FFD700;
    }
    #username, #message {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border-radius: 6px;
        border: 1px solid #FFD700;
        background-color: #333;
        color: #FFD700;
    }
    .message-form button {
        width: 100%;
        padding: 12px;
        border-radius: 6px;
        border: none;
        background-color: #FFD700;
        color: #000;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .message-form button:hover {
        background-color: #FFC700;
    }
    /* Form Container */
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin-bottom: 30px;
    }
    .form-container {
        background-color: #1A1A1A;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
        width: 100%;
        border: 2px solid #FFD700;
    }
    .form-container label {
        color: #FFD700;
        font-weight: bold;
        margin-top: 10px;
    }
    .form-container input,
    .form-container textarea,
    .form-container select {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        border-radius: 6px;
        border: 1px solid #FFD700;
        background-color: #333;
        color: #FFD700;
    }
    .form-container button {
        width: 100%;
        padding: 12px;
        margin-top: 15px;
        border-radius: 6px;
        border: none;
        background-color: #FFD700;
        color: #000;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .form-container button:hover {
        background-color: #FFC700;
    }
    /* Data Display Area */
    .data {
        background-color: #1A1A1A;
        padding: 25px;
        border-radius: 10px;
        border: 2px solid #FFD700;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
        margin-top: 20px;
        max-width: 800px;
        width: 100%;
    }
    .post-item {
        background-color: #0D0D0D;
        border: 1px solid #FFD700;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
    }
</style>

<a href="{{ site.baseurl }}/undgdmusic/moderation/" style="color: #FFD700; text-decoration: none; font-size: 1rem;">Moderation Page</a>
</head>
<body>
<header>
    <h1>Welcome to the Underground Vibes!</h1>
    <p>Chat with others in real-time!</p>

</header>
<div class="container">
    <div class="form-container">
        <h2>Select Group and Channel</h2>
        <form id="selectionForm">
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <label for="channel_id">Channel:</label>
            <select id="channel_id" name="channel_id" required>
                <option value="">Select a channel</option>
                <option value="Artists">Artists</option>
                <option value="Songs">Songs</option>
                <option value="Genres">Genres</option>
            </select>
            <button type="submit">Select</button>
        </form>
    </div>
</div>

<div class="container">
    <div class="form-container">
        <h2>Add New Post</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

<div class="container">
    <div id="data" class="data">
        <div class="left-side">
            <p id="count"></p>
        </div>
        <div class="details" id="details">
        </div>
    </div>
</div>

<div class="container">
  <div class="category-box">
    <!-- Food and Drink Category -->
    <div class="category-row" onclick="toggleItems('Channels')">
      <h3>Channels</h3>
      <div id="Channels" class="item-list-container" style="display: none;">
        <div class="item-list">
          <button onclick="selectItem(this, 'most', 'Artists')" data-channel-id="1">Artists</button>
          <button onclick="selectItem(this, 'most', 'Songs')" data-channel-id="2">Songs</button>
          <button onclick="selectItem(this, 'most', 'Genres')" data-channel-id="3">Genres</button>
        </div>
    </div>
</div>
<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    /**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Share and Care" }) // Adjust the section name as needed
            });
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.name; // Use group name for payload
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }
    /**
     * Fetch channels based on selected group
     * User picks from dropdown
     */
async function fetchChannels(groupName) {
    try {
        console.log("Fetching channels for group:", groupName);
        const response = await fetch(`${pythonURI}/api/channels/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ group_name: groupName })
        });
        if (!response.ok) {
            console.error('Failed to fetch channels:', response.statusText);
            return;
        }
        const channels = await response.json();
        console.log("Fetched channels:", channels);
        const channelSelect = document.getElementById('channel_id');
        channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset
        channels.forEach(channel => {
            const option = document.createElement('option');
            option.value = channel.id;
            option.textContent = channel.name;
            channelSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching channels:', error);
    }
}
    /**
      * Handle group selection change
      * Channel Dropdown refresh to match group_id change
      */
    document.getElementById('group_id').addEventListener('change', function() {
        const groupName = this.value;
        if (groupName) {
            fetchChannels(groupName);
        } else {
            document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        }
    });
    /**
     * Handle form submission for selection
     * Select Button: Computer fetches and displays posts
     */
    document.getElementById('selectionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const groupId = document.getElementById('group_id').value;
        const channelId = document.getElementById('channel_id').value;
        if (groupId && channelId) {
            fetchData(channelId);
        } else {
            alert('Please select both group and channel.');
        }
    });
    /**
     * Handle form submission for adding a post
     * Add Form Button: Computer handles form submission with request
     */
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        // Extract data from form
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const channelId = document.getElementById('channel_id').value;
        // Create API payload
        const postData = {
            title: title,
            comment: comment,
            channel_id: channelId
        };
        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
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
            // Successful post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
            fetchData(channelId);
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });
    /**
     * Fetch posts based on selected channel
     * Handle response: Fetch and display posts
     */
    async function fetchData(channelId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ channel_id: channelId })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts: ' + response.statusText);
            }
            // Parse the JSON data
            const postData = await response.json();
            // Extract posts count
            const postCount = postData.length || 0;
            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Count ${postCount}</h2>`;
            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts
            // Iterate over the postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Channel:</strong> ${postItem.channel_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.comment}</p>
                `;
                detailsDiv.appendChild(postElement);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    // Fetch groups when the page loads
    fetchGroups();
</script>

<!-- Discover New Artists Tab Content -->
<div class="tab-content" id="discover">
    <div class="chatroom-container">
        <h2>Discover New Artists</h2>
        <!-- Search Bar -->
        <div class="search-bar">
            <input type="text" id="searchQuery" placeholder="Search for more underground artists..." />
            <button onclick="searchGoogle()">Search</button>
        </div>
        <ul class="artist-list">
            <li class="artist-item">
                <strong>Artist Name:</strong> Lil Xtra <br>
                <span class="description">
                    Most Listened Track: "Under Pressure"<br>
                    Latest Album: *Lost in the Vibe*<br>
                    Monthly Listeners: 150,000<br>
                    Known for mixing emo with rap vibes.<br>
                    <a href="https://open.spotify.com/track/47DlkXm0LgQcJcz4nry9Gw" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Sad Frosty <br>
                <span class="description">
                    Most Listened Track: "ADHD"<br>
                    Latest Album: *Graveyard Shift*<br>
                    Monthly Listeners: 200,000<br>
                    A unique sound with heavy beats and dark lyrics.<br>
                    <a href="https://open.spotify.com/artist/4VQjfdCN5W8jvwy4AvEnin" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Tokyo's Revenge <br>
                <span class="description">
                    Most Listened Track: "GOODMORNINGTOKYO!"<br>
                    Latest Album: *From the Shadows*<br>
                    Monthly Listeners: 500,000<br>
                    Bringing aggressive energy and experimental rap.<br>
                    <a href="https://open.spotify.com/artist/spotify-artist-link" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Powfu <br>
                <span class="description">
                    Most Listened Track: "Death Bed"<br>
                    Latest Album: *Poems of the Past*<br>
                    Monthly Listeners: 3,000,000<br>
                    Known for blending lo-fi beats with heartfelt lyrics.<br>
                    <a href="https://open.spotify.com/artist/spotify-artist-link" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Shinigami <br>
                <span class="description">
                    Most Listened Track: "Lovers and Friends"<br>
                    Latest Album: *Eternal Nightmare*<br>
                    Monthly Listeners: 100,000<br>
                    Combines rap and emotional lyrics with a dark, gothic style.<br>
                    <a href="https://open.spotify.com/artist/spotify-artist-link" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <!-- Add more artists as needed -->
        </ul>
    </div>
</div>

<style>
    .chatroom-container h2 {
        font-size: 2rem;
        color: #FFD700;
        text-align: center;
        margin-bottom: 20px;
        text-shadow: 0 4px 12px rgba(255, 215, 0, 0.8);
    }
    /* Search Bar Styling */
    .search-bar {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .search-bar input[type="text"] {
        padding: 10px;
        width: 300px;
        border: 1px solid #FFD700;
        border-radius: 6px 0 0 6px;
        background-color: #333;
        color: #FFD700;
        outline: none;
    }
    .search-bar button {
        padding: 10px 15px;
        border: none;
        border-radius: 0 6px 6px 0;
        background-color: #FFD700;
        color: #000;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .search-bar button:hover {
        background-color: #FFC700;
    }

    .artist-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .artist-item {
        background: rgba(15, 15, 15, 0.9); /* Dark background */
        border: 1px solid #FFD700;
        color: #FFD700;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 10px;
        backdrop-filter: blur(4px); /* Adds slight blur to the background */
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .artist-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 215, 0, 0.1); /* Yellow overlay */
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .artist-item:hover::before {
        opacity: 1;
    }
    .artist-item:hover {
        transform: scale(1.05); /* Grows slightly on hover */
        background: rgba(255, 215, 0, 0.1); /* Slight yellow tint on hover */
        box-shadow: 0px 10px 20px rgba(255, 215, 0, 0.3); /* Glow effect */
    }
    .artist-item:hover .description {
        opacity: 1;
        transform: translateY(0); /* Slides in the description */
    }
    .description {
        display: block;
        margin-top: 5px;
        color: #AAA; /* Slightly lighter color for description */
        font-size: 0.9rem;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .description a {
        color: #FFD700;
        text-decoration: none;
        font-weight: bold;
    }
    .description a:hover {
        text-decoration: underline;
    }
</style>

<script>
    function searchGoogle() {
        const query = document.getElementById('searchQuery').value;
        if (query) {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}+underground+artists`;
            window.open(googleSearchUrl, '_blank'); // Opens Google search in a new tab
        } else {
            alert("Please enter a search term."); // Alert if search is empty
        }
    }
</script>

<!-- Mini AI Assistant -->
<div class="ai-assistant" id="aiAssistant">
    <h3>Your Music Assistant</h3>
    <div class="chat-window" id="chat-window">
        <!-- Messages will appear here -->
    </div>
    <!-- Predefined Response Buttons -->
    <div class="response-buttons">
        <button onclick="sendPredefinedMessage('recommend a song')">Recommend a Song</button>
        <button onclick="sendPredefinedMessage('suggest an artist')">Suggest an Artist</button>
        <button onclick="sendPredefinedMessage('lo-fi recommendation')">Lo-fi Recommendation</button>
        <button onclick="sendPredefinedMessage('recommend a rap artist')">Recommend a Rap Artist</button>
        <button onclick="sendPredefinedMessage('dark theme music')">Dark Theme Music</button>
        <button onclick="sendPredefinedMessage('tell me about underground music')">About Underground Music</button>
        <button onclick="sendPredefinedMessage('good playlist')">Good Playlist</button>
    </div>
</div>

<style>
    /* AI Assistant Styling */
    .ai-assistant {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        background-color: #1A1A1A;
        color: #FFD700;
        border: 2px solid #FFD700;
        border-radius: 10px;
        padding: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        font-family: Arial, sans-serif;
        cursor: move; /* Indicate draggable area */
    }
    .ai-assistant h3 {
        margin: 0 0 10px 0;
        color: #FFD700;
        text-align: center;
        cursor: move;
    }
    .chat-window {
        max-height: 200px;
        overflow-y: auto;
        background-color: #333;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 10px;
        font-size: 0.9rem;
        color: #FFF;
    }
    .chat-window p {
        margin: 5px 0;
    }
    .user-message {
        color: #FFD700;
        font-weight: bold;
    }
    .assistant-message {
        color: #FFF;
        margin-left: 10px;
    }
    /* Response Buttons Styling */
    .response-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
    }
    .response-buttons button {
        padding: 5px 10px;
        border: none;
        border-radius: 6px;
        background-color: #FFD700;
        color: #000;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    .response-buttons button:hover {
        background-color: #FFC700;
    }
    .follow-up-buttons {
        margin-top: 5px;
        display: flex;
        gap: 5px;
    }
    .follow-up-buttons button {
        padding: 4px 8px;
        border: none;
        border-radius: 4px;
        background-color: #FFD700;
        color: #000;
        cursor: pointer;
        font-size: 0.8rem;
        transition: background-color 0.3s ease;
    }
    .follow-up-buttons button:hover {
        background-color: #FFC700;
    }
</style>

<script>
    // Make the AI Assistant draggable
    dragElement(document.getElementById("aiAssistant"));

    function dragElement(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // Mouse down event on the header to start dragging
        el.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();

            // Get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;

            // Call a function whenever the cursor moves
            document.onmousemove = elementDrag;
            document.onmouseup = closeDragElement;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();

            // Calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // Set the element's new position
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // Stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // Define possible responses for each type of question
    const responses = {
        "recommend a song": [
            "I recommend checking out 'Under Pressure' by Lil Xtra!",
            "How about 'Sad!' by XXXTentacion?",
            "Try listening to 'Moonlight' by XXXTentacion."
        ],
        "suggest an artist": [
            "You might like Sad Frosty if you're into dark lyrics with heavy beats.",
            "Check out Powfu for lo-fi vibes and heartfelt lyrics.",
            "Tokyo's Revenge has some aggressive energy and experimental rap."
        ],
        "lo-fi recommendation": [
            "Try listening to Powfu's 'Death Bed' if you enjoy lo-fi vibes.",
            "You might enjoy 'Lofi Beats' on Spotify for chill, relaxing tracks.",
            "Check out 'Cold Nights' by Saib for some smooth lo-fi vibes."
        ],
        "recommend a rap artist": [
            "Tokyo's Revenge brings a lot of energy and unique style in rap.",
            "Sad Frosty has some unique dark rap beats.",
            "Lil Darkie is experimental with a unique sound in underground rap."
        ],
        "dark theme music": [
            "Shinigami's 'Lovers and Friends' has a dark, gothic style that fits the vibe.",
            "'Stressed Out' by Twenty One Pilots has a melancholic, dark feel.",
            "Try 'Hurt' by Oliver Tree for a darker theme."
        ],
        "tell me about underground music": [
            "Underground music is often created by independent artists. It's a space for raw, unique styles!",
            "Underground music is usually outside the mainstream, with artists experimenting with different sounds.",
            "It's where unique sounds flourish, often without commercial influence."
        ],
        "good playlist": [
            "Check out 'Chill Rap' on Spotify for some mellow beats and chill vibes.",
            "'Lofi Chill & Study' on Spotify is great for relaxing background music.",
            "Try 'Rap Caviar' on Spotify for a mix of popular and underground hits."
        ]
    };

    // Track the current index of responses for each type of message
    const responseIndex = {};

    // Function to send a predefined message and cycle through responses
    function sendPredefinedMessage(message) {
        const chatWindow = document.getElementById('chat-window');
        
        // Display user message
        const userMessage = document.createElement('p');
        userMessage.className = 'user-message';
        userMessage.innerText = "You: " + message;
        chatWindow.appendChild(userMessage);
        
        // Get the response list and cycle through it
        const responseList = responses[message];
        if (!responseIndex[message]) responseIndex[message] = 0;
        const response = responseList[responseIndex[message]];
        responseIndex[message] = (responseIndex[message] + 1) % responseList.length; // Cycle to the next response

        // Display AI response
        const assistantMessage = document.createElement('p');
        assistantMessage.className = 'assistant-message';
        assistantMessage.innerHTML = "AI Assistant: " + response;
        chatWindow.appendChild(assistantMessage);
        
        // Add follow-up options
        const followUp = document.createElement('div');
        followUp.className = 'follow-up-buttons';
        followUp.innerHTML = `
            <button onclick="sendPredefinedMessage('${message}')">Another suggestion</button>
            <button onclick="sendPredefinedMessage('tell me about underground music')">Tell me about underground music</button>
        `;
        chatWindow.appendChild(followUp);
        
        // Scroll to the latest message
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
</script>

<!-- Now Playing Section -->
<div class="now-playing">
    <h3>Now Playing</h3>
    <div id="song-info">
        <p><strong>Title:</strong> <span id="song-title">Loading...</span></p>
        <p><strong>Artist:</strong> <span id="song-artist">Loading...</span></p>
    </div>
    <div id="player"></div>
    <div class="controls">
        <button onclick="prevSong()">⏮️ Previous</button>
        <button onclick="playPause()">⏯️ Play/Pause</button>
        <button onclick="nextSong()">⏭️ Next</button>
    </div>
</div>

<style>
    /* Now Playing Section Styling */
    .now-playing {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 300px;
        background-color: #1A1A1A;
        color: #FFD700;
        border: 2px solid #FFD700;
        border-radius: 10px;
        padding: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        font-family: Arial, sans-serif;
    }
    .now-playing h3 {
        margin: 0 0 10px 0;
        color: #FFD700;
        text-align: center;
    }
    #song-info p {
        margin: 5px 0;
    }
    #player {
        margin-top: 10px;
    }
    .controls {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .controls button {
        background-color: #FFD700;
        color: #000;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    .controls button:hover {
        background-color: #FFC700;
    }
</style>

<script>
    // List of YouTube videos with real song titles and artist names
    const songs = [
        {
            title: "Dead Batteries",
            artist: "Astrophysics",
            videoId: "L0yzW9t2ixk" // Extracted from YouTube URL
        },
        {
            title: "Miss U",
            artist: "Watafami",
            videoId: "wjDtTv0n0Fw" // Extracted from YouTube URL
        },
        {
            title: "Galaxy 2002",
            artist: "Astrophysics",
            videoId: "-1TjqZC3TXo" // Extracted from YouTube URL
        }
    ];

    let currentSongIndex = 0;
    let player;

    // Load the YouTube IFrame API
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '0',  // Hidden initially
            width: '0',
            videoId: songs[currentSongIndex].videoId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        loadSong(currentSongIndex);
    }

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            nextSong(); // Auto play next song
        }
    }

    function loadSong(index) {
        const song = songs[index];
        document.getElementById('song-title').innerText = song.title;
        document.getElementById('song-artist').innerText = song.artist;
        player.loadVideoById(song.videoId);
        player.playVideo();
    }

    function playPause() {
        const playerState = player.getPlayerState();
        if (playerState === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
    }

    // Automatically advance to the next song when the current one ends
    audioPlayer.addEventListener('ended', nextSong);
</script>

<!-- YouTube IFrame API Script -->
<script src="https://www.youtube.com/iframe_api"></script>

