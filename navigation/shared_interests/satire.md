---
layout: base
title: Satire
permalink: /shared_interests/satire/
menu: nav/shared_interests.html
author: Bailey, Travis, Leon, Anyi
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
        <td id="PLACEHOLDER6"><a href="{{site.baseurl}}/shared_interests/agk.html">AGK</a></td>
    </tr>
</table>
<!-- END OF NAV MENU -->

<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Background and text color */
  html {
    font-family: Arial, sans-serif;
    background-color: #1e1e1e; /* Dark background */
    color: #e0e0e0; /* Light text */
  }

  /* Container to center everything */
.container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  /* Banner */
  .banner {
    width: 100%;
    background-color: #3b5998; /* Deep blue */
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px #3b5998;
  }

  /* Intro Blurb */
  .intro-blurb {
    background-color: #2b2b2b; /* Dark grey */
    padding: 15px;
    text-align: center;
    font-size: 18px;
    color: #cccccc;
    border-radius:10px;
    box-shadow: 0px 0px 10px 5px #2b2b2b;
  }

  /* Main layout - Sidebar and Feed */
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }

  /* Left Sidebar */
  .left-sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 200px;
    align-items: center;
    padding: 15px;
    background-color: #333333;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 5px #333333;
  }

  .add-post {
    background-color: #3b5998 !important;
    color: white;
    font-size: 24px;
    padding: 5px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    vertical-align: middle;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;
    box-shadow: 0px 0px 10px 5px #3b5998;
  }
  .add-post:hover{
    background-color: #5c79f8 !important;
    box-shadow: 0px 0px 15px 7.5px #5c79f8;
  }

  .search-bar input {
    padding: 10px;
    width: 100%;
    background-color: #444444;
    border: 1px solid #555;
    border-radius: 5px;
    color: #ffffff;
  }

  /* Add Post Form */
  .post-form {
    display: none;
    flex-direction: column;
    gap: 10px;
    background-color: #333333;
    padding: 15px;
    border-radius: 8px;
    color: #ffffff;
    width: 100%;
  }

  .post-form textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #555;
    background-color: #444444;
    color: #ffffff;
  }

  .post-form button {
    background-color: #ff5722;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Center Feed */
  .feed {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .post {
    background-color: #333333;
    padding: 20px;
    border-radius: 8px;
    font-size: 18px;
    color: #e0e0e0;
    box-shadow: 0px 0px 10px 5px #333333;
  }

  .post-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }

  .post-actions button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
  }

  .like {
    background-color: #ff4081;
  }

  .comment {
    background-color: #1e88e5;
  }

  .share {
    background-color: #7e57c2;
  }

  /* Right Sidebar */
  .right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background-color: #444444;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 5px #444444;
  }

  .profile {
    background-color: #d81b60;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0px 0px 5px 2.5px #d81b60;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #e91e63;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .activity, .followers-following {
    width: 100%;
  }

  .activity button, .followers-following button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333333;
    color: #ffffff;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px 5px #333333;
  }

  #postButton{
    cursor: pointer;
    transition: all 0.5s;
    background-color:#455545 !important;
    box-shadow: 0px 0px 1px 1px #455545;
  }
  #postButton:hover{
    background-color:#407540 !important;
    box-shadow: 0px 0px 5px 2.5px #407540;
  }

  .like{
    transition: all 0.5s;
    background-color:#555555 !important;
    box-shadow: 0px 0px 1px 1px #555555;
  }
  .like:hover{
    background-color:#705555 !important;
    box-shadow: 0px 0px 5px 2.5px #705555;
  }

  .comment{
    transition: all 0.5s;
    background-color:#555555 !important;
    box-shadow: 0px 0px 1px 1px #555555;
  }
  .comment:hover{
    background-color:#656565 !important;
    box-shadow: 0px 0px 5px 2.5px #656565;
  }

  .share{
    transition: all 0.5s;
    background-color:#555555 !important;
    box-shadow: 0px 0px 1px 1px #555555;
  }
  .share:hover{
    background-color:#555570 !important;
    box-shadow: 0px 0px 5px 2.5px #555570;
  }


</style>

<!-- HTML Structure -->

  <!-- Intro Blurb -->
  <div class="intro-blurb">
    <h1>DNHS Satire Home Page</h1>
    <p>Login and explore our Satire hub for everything DNHS</p>
  </div>

  <!-- Banner Section -->
  <div class="banner">
    Skibidi Toilet
  </div>

  <!-- Main Layout with Sidebar and Feed -->
  <div class="main-layout">
    
  <!-- Left Sidebar (Add Post and Search Bar) -->
  <div class="left-sidebar">
      <button class="add-post" onclick="togglePostForm()"><img src="{{site.baseurl}}//images/p1group5images/plusicon.png"></button>
      <p>Add new temporary post</p>
      <div class="search-bar">
        <input type="text" placeholder="Search...">
      </div>

<!-- Add Post Form -->
<div class="post-form" id="postForm">
  <textarea id="postContent" placeholder="What's on your mind?"></textarea>
  <button onclick="addPost()" id="postButton">Post</button>
  <button onclick="toggleHashtags()" id="hashtagButton"># Hashtag</button>
  
  <!-- Hashtag List (Hidden by default) -->
  <div id="hashtagList" style="display: none;">
    <button onclick="addHashtag('#Satire')">#Satire</button>
    <button onclick="addHashtag('#DNHS')">#DNHS</button>
    <button onclick="addHashtag('#Fun')">#Fun</button>
    <button onclick="addHashtag('#Community')">#Community</button>
    <!-- Add more hashtags as needed -->
  </div>
</div>

<script>
  function togglePostForm() {
    const form = document.getElementById("postForm");
    form.style.display = form.style.display === "flex" ? "none" : "flex";
  }

  function toggleHashtags() {
    const hashtagList = document.getElementById("hashtagList");
    hashtagList.style.display = hashtagList.style.display === "none" ? "block" : "none";
  }

  function addHashtag(hashtag) {
    const postContent = document.getElementById("postContent");
    postContent.value += " " + hashtag; // Add the hashtag to the post content
  }

  function addPost() {
    const content = document.getElementById("postContent").value;
    if (content.trim() === "") {
      alert("Please enter some content for your post!");
      return;
    }

    const feed = document.getElementById("feed");

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.textContent = content;

    // Add post actions (like, comment, share)
    const postActions = document.createElement("div");
    postActions.className = "post-actions";

    const likeButton = document.createElement("button");
    likeButton.className = "like";
    likeButton.textContent = "Like";

    const commentButton = document.createElement("button");
    commentButton.className = "comment";
    commentButton.textContent = "Comment";

    const shareButton = document.createElement("button");
    shareButton.className = "share";
    shareButton.textContent = "Share";

    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);
    postActions.appendChild(shareButton);

    // Append actions to the post and post to the feed
    newPost.appendChild(postActions);
    feed.prepend(newPost);

    // Clear the form and hide it
    document.getElementById("postContent").value = "";
    togglePostForm();
  }
</script>

  <!-- Center Feed (Posts) -->
  <div class="feed" id="feed">
      <!--<div class="post">This is a sample post content. Users can post here.</div>
      <div class="post-actions">
        <button class="like">Like</button>
        <button class="comment">Comment</button>
        <button class="share">Share</button>
      </div>-->
    </div>

  <!-- Right Sidebar (Profile and Activity) -->
   <div class="right-sidebar">
      <div class="profile">
        <div class="profile-pic">Profile</div>
        <p>Account Information + Satire Score + Age (click profile)</p>
      </div>
      <div class="activity">
        <button>Activity</button>
      </div>
      <div class="followers-following">
        <button>Followers/Following</button>
      </div>
    </div>
  </div>
</div>

<script>
  function togglePostForm() {
    const form = document.getElementById("postForm");
    form.style.display = form.style.display === "flex" ? "none" : "flex";
  }

  function addPost() {
    const content = document.getElementById("postContent").value;
    if (content.trim() === "") {
      alert("Please enter some content for your post!");
      return;
    }

    const feed = document.getElementById("feed");

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.textContent = content;

    // Add post actions (like, comment, share)
    const postActions = document.createElement("div");
    postActions.className = "post-actions";

    const likeButton = document.createElement("button");
    likeButton.className = "like";
    likeButton.textContent = "Like";

    const commentButton = document.createElement("button");
    commentButton.className = "comment";
    commentButton.textContent = "Comment";

    const shareButton = document.createElement("button");
    shareButton.className = "share";
    shareButton.textContent = "Share";

    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);
    postActions.appendChild(shareButton);

    // Append actions to the post and post to the feed
    newPost.appendChild(postActions);
    feed.prepend(newPost);

    // Clear the form and hide it
    document.getElementById("postContent").value = "";
    togglePostForm();
  }
</script>

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
        background-color: #2c3e50;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #ecf0f1;
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
        color: #ecf0f1;
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
