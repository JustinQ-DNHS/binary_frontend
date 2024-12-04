---
layout: post
title: Shared Interests - AGK
search_exclude: true
permalink: /shared_interests/agk/agk.html
menu: nav/shared_interests.html
author: Mihir, Pradyun, Derek, Ansh
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #FDF5E6;
        }
        .header {
            background: linear-gradient(to right,#001F3F, #073461); 
            color: #ff4747;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .category {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #ff7a7a;
            border-radius: 8px;
            background: linear-gradient(to right,#001F3F, #073461);
            color: white;
            position: relative; 
        }
        .post {
            margin: 10px 0;
            padding: 15px;
            border: 1px solid #ff7a7a;
            border-radius: 5px;
            background-color: #121212; 
        }
        .chatroom-link {
            position: absolute;
            top: 640px;
            right: 460px;
            padding: 10px;
            background-color: #1A2A6C;
            color: black;
            text-decoration: none;
            border-radius: 5px;
        }
        .chatroom-link:hover {
            background-color: #C5B358;
            color: black;
        }
        .form-container {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #ff7a7a;
            border-radius: 8px;
            background: linear-gradient(to right,#001F3F, #073461);
            color: white;
        }
        .form-container h2 {
            margin-bottom: 15px;
        }
        .form-container label {
            display: block;
            margin-bottom: 8px;
        }
        .form-container input,
        .form-container select,
        .form-container textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ff7a7a;
            border-radius: 5px;
        }
        .form-container button {
            padding: 10px 20px;
            background-color: #FFD700;
            border: none;
            color: black;
            cursor: pointer;
            border-radius: 5px;
        }
        .form-container button:hover {
            background-color: #C5B358;
        }
        .data {
            display: flex;
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #ff7a7a;
            border-radius: 8px;
            background: linear-gradient(to right,#001F3F, #073461);
            color: white;
        }
        .left-side {
            width: 50%;
            padding-right: 20px;
        }
        .details {
            width: 50%;
        }
    </style>
</head>

<body>
    <div class="header">
        <h1>Welcome to AGK</h1>
        <p>Your platform for exploring extracurricular activities!</p>
    </div>
    <div class="container">
        <div class="category">
            <h2>Cyber Club</h2>
            <div class="post">
                <h3>Weekly Meeting Update</h3>
                <p>Join us every Monday at 4 PM in Room A101 to discuss upcoming events.</p>
            </div>
            <div class="post">
                <h3>New Competition Announced!</h3>
                <p>We're excited to announce that the next CyberPatriot competition will be held on January 25th. Prepare your teams!</p>
            </div>
        </div>
        <br>
        <div class="category">
            <h2>Robotics Club</h2>
            <div class="post">
                <h3>Weekly Meeting Update</h3>
                <p>Join us every Tuesday immediately after school in Room A107 (Mr. Campillo's) to discuss upcoming events and work on improving the robot.</p>
            </div>
            <div class="post">
                <h3>New Competition Announced!</h3>
                <p>We're excited to announce that the next FRC competition will be held on December 12th. Prepare your robots!</p>
            </div>
        </div>
        <!--<a href="{{site.baseurl}}/shared_interests/agk/agk-chatroom.html" class="chatroom-link">Join the currently available chatrooms!</a>-->
    </div>
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
</body>

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