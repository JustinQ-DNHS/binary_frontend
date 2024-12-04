---
layout: base
title: Football
permalink: /shared_interests/football/
menu: nav/shared_interests.html
---

<!-- FOR THE NAV MENU AS IT IS NOT WORKING ON YOUR PAGE -->
<table>
    <tr>
        <td id="sharedinterests">
            <a href="{{site.baseurl}}/shared_interests/home">
                <img src="{{site.baseurl}}/images/school_logo.png" alt="logo" width="150" height="150">
            </a>
        </td>
        <td id="Limitless Connections"><a href="{{site.baseurl}}/shared_interests/limitconnect">Limitless Connections</a></td>
        <td id="DNHS Football"><a href="{{site.baseurl}}/shared_interests/football">DNHS Football</a></td>
        <td id="School Subjects"><a href="{{site.baseurl}}/shared_interests/jupyter/chatroom">School Subjects</a></td>
        <td id="Music"><a href="{{site.baseurl}}/music/">Music</a></td>
        <td id="Satire"><a href="{{site.baseurl}}/shared_interests/satire">Satire</a></td>
        <td id="AGK"><a href="{{site.baseurl}}/shared_interests/agk/agk.html">AGK</a></td>
    </tr>
</table>
<!-- END OF NAV MENU -->

<style>
    .page-header {
        text-align: center;
        padding: 20px;
        background-color: #001F3F;
        color: #FFD700;
        border-radius: 8px;
        border: 2px solid #C5B358;
    }

    .main-container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
    }

    .posts-wrapper {
        width: 45%;
    }

    .post {
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #008504;
        padding: 15px;
        margin-bottom: 15px;
        color: white;
    }

    .post-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .post-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #FFD700;
        display: inline-block;
        margin-right: 10px;
    }

    .post-username {
        font-weight: bold;
        color: #FFD700;
    }

    .reaction-icons {
        margin-top: 10px;
        cursor: pointer;
    }

    .chatroom-container {
        width: 45%;
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #001F3F;
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-height: 725px;
        overflow: hidden;
    }

    .chatroom-header {
        text-align: center;
        color: #FFD700;
        margin-bottom: 10px;
    }

    .chat-area {
        flex-grow: 1;
        min-height: 450px;
        max-height: 450px;
        overflow-y: auto;
        background-color: #008504;
        border: 2px solid #C5B358;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 10px;
        color: white;
    }

    .message-form {
        display: flex;
        align-items: center;
    }

    #messageInput {
        flex: 1;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        background-color: #FFD700;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #C5B358;
    }

    /* Styles for Post Submission Form */
    .post-form-container {
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #008504;
        padding: 15px;
        margin-top: 20px;
    }

    #roleSelect {
        width: 100%;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    #postInput {
        width: 100%;
        height: 100px;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-bottom: 10px;
        resize: none;
    }
</style>

<!-- Page Header -->
<div class="page-header">
    <h1>Welcome to the Football Flocker Room</h1>
    <p>View announcements, posts, or engage with others in the chat!</p>
</div>

<div class="main-container">
    <!-- Posts Section on the Left -->
    <div class="posts-wrapper" id="postsWrapper">
        <!-- Posts will be dynamically loaded here -->
    </div>
    <!-- Chatroom Section on the Right -->
    <div class="chatroom-container">
        <header class="chatroom-header">
            <h2>Flocker Chatroom</h2>
        </header>
        <div class="chat-area" id="chatArea">
            <!-- Messages will appear here -->
        </div>
        <form class="message-form" id="messageForm">
            <input type="text" id="messageInput" placeholder="Enter your message..." required>
            <button type="submit">Send</button>
        </form>
    </div>
</div>





<!-- POST -->





<style>
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
        background-color: #008504;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #FFD700;
        border: 2px solid #C5B358;
        border-radius: 8px;
    }
    .form-container label {
        margin-bottom: 5px;
    }
    .form-container input, .form-container textarea, .form-container select {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 100%;
    }
    .form-container button {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #34495e;
        color: #FFD700;
        cursor: pointer;
    }
</style>

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
                body: JSON.stringify({ section_name: "Shared Interest" }) // Adjust the section name as needed
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
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name: groupName })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            const channelSelect = document.getElementById('channel_id');
            channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
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
