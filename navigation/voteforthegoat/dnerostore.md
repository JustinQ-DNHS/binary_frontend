---
layout: post
title: Dnero Store
description: Dnero Store
menu: nav/vote_for_the_goat.html
permalink: /voteforthegoat/dnerostore/
author: Risha Guha, Vibha Mandayam, Ava Shalon
comments: true
---

<img src="{{ site.baseurl }}/images/dnerostore/Dnero_Store_Header_Updated.png" alt="Dnero Store Header" style="width: 100%; height: auto;">
<h2><a href="{{ site.baseurl }}/dnerostore-mod/" class="mod-rules-button"> Mod Rules </a></h2> 

<details>
  <summary style="color: white;">Room Details</summary>
  <p style="color: white;">Discuss your favorite D'Nero store items here!</p>
</details>

<div class="container">
  <div class="category-box">
    <!-- Food and Drink Category -->
    <div class="category-row" onclick="toggleItems('food-drink-items')">
      <h3>Food and Drink</h3>
      <div id="food-drink-items" class="item-list-container" style="display: none;">
        <p>Please select your favorite item from this list:</p>
        <div class="item-list">
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Trail Mix</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Nutella</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Famous Amos</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Chips</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Sports Drinks</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Fruit Snacks</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Water</button>
          <button onclick="selectItem(this, 'most', 'Food and Drink')" data-channel-id="28">Pizza</button>
        </div>
        <p>Please select your LEAST favorite item from this list:</p>
        <div class="item-list">
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Trail Mix</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Nutella</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Famous Amos</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Chips</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Sports Drinks</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Fruit Snacks</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Water</button>
          <button onclick="selectItem(this, 'least', 'Food and Drink')" data-channel-id="28">Pizza</button>
        </div>
      </div>
    <div id="food-drink-posts" class="category-posts"></div>
    </div>
  <!-- Spirit Category -->
  <div class="category-box">
  <div class="category-row" onclick="toggleItems('spirit-items')">
    <h3>Spirit</h3>
    <div id="spirit-items" class="item-list-container" style="display: none;">
      <p>Please select your favorite item from this list:</p>
      <div class="item-list">
        <button onclick="selectItem(this, 'most', 'Spirit')" data-channel-id="29">Morning Song</button>
        <button onclick="selectItem(this, 'most', 'Spirit')" data-channel-id="29">DNHS T-shirt</button>
        <button onclick="selectItem(this, 'most', 'Spirit')" data-channel-id="29">1 Pom Pom</button>
      </div>
      <p>Please select your LEAST favorite item from this list:</p>
      <div class="item-list">
        <button onclick="selectItem(this, 'least', 'Spirit')" data-channel-id="29">Morning Song</button>
        <button onclick="selectItem(this, 'least', 'Spirit')" data-channel-id="29">DNHS T-shirt</button>
        <button onclick="selectItem(this, 'least', 'Spirit')" data-channel-id="29">1 Pom Pom</button>
      </div>
    </div>
    <div id="spirit-posts" class="category-posts"></div>
  </div>

  <!-- Limited Edition Category -->
  <div class="category-box">
  <div class="category-row" onclick="toggleItems('limited-edition-items')">
    <h3>Limited Edition</h3>
    <div id="limited-edition-items" class="item-list-container" style="display: none;">
      <p>Please select your favorite item from this list:</p>
      <div class="item-list">
        <button onclick="selectItem(this, 'most', 'Limited Edition')" data-channel-id="30">Candy</button>
        <button onclick="selectItem(this, 'most', 'Limited Edition')" data-channel-id="30">Squishmallow mini</button>
        <button onclick="selectItem(this, 'most', 'Limited Edition')" data-channel-id="30">Starbucks SDSU Tumbler</button>
      </div>
      <p>Please select your LEAST favorite item from this list:</p>
      <div class="item-list">
        <button onclick="selectItem(this, 'least', 'Limited Edition')" data-channel-id="30">Candy</button>
        <button onclick="selectItem(this, 'least', 'Limited Edition')" data-channel-id="30">Squishmallow mini</button>
        <button onclick="selectItem(this, 'least', 'Limited Edition')" data-channel-id="30">Starbucks SDSU Tumbler</button>
      </div>
    </div>
    <div id="limited-edition-posts" class="category-posts"></div>

  </div>
  <!-- Gift Cards Category -->
  <div class="category-box">
  <div class="category-row" onclick="toggleItems('gift-card-items')">
    <h3>Gift Cards</h3>
    <div id="gift-card-items" class="item-list-container" style="display: none;">
      <p>Please select your favorite item from this list:</p>
      <div class="item-list">
        <button onclick="selectItem(this, 'most', 'Gift Cards')" data-channel-id="31">Chik-fil-a</button>
        <button onclick="selectItem(this, 'most', 'Gift Cards')" data-channel-id="31">Canes</button>
      </div>
      <p>Please select your LEAST favorite item from this list:</p>
      <div class="item-list">
        <button onclick="selectItem(this, 'least', 'Gift Cards')" data-channel-id="31">Chik-fil-a</button>
        <button onclick="selectItem(this, 'least', 'Gift Cards')" data-channel-id="31">Canes</button>
      </div>
    </div>
    <div id="gift-card-posts" class="category-posts"></div>

  </div><!-- New Post Form -->
<div class="post-form-container" id="post-form" style="display: none;">
  <h2>Create a Post</h2>
  <form id="postForm">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" required>
    <p></p>
    <label for="comment">Comment:</label>
    <textarea id="comment" name="comment" required></textarea>
    <!-- Dropdowns for Group and Channel Selection -->
    <div class="dropdown-container">
      <label for="group-select">Group:</label>
      <select id="group-select" name="group">
        <option value="Dnero Store">Dnero Store</option>
      </select>
      <label for="channel-select">Channel:</label>
      <select id="channel-select" name="channel">
        <option value="Food and Drink">Food and Drink</option>
        <option value="Spirit">Spirit</option>
        <option value="Limited Edition">Limited Edition</option>
        <option value="Gift Cards">Gift Cards</option>
      </select>
    </div>

    <button type="submit">Add Post</button>
  </form>
  </div>
</div>

<script>
  // Toggle visibility of item lists
  function toggleItems(id) {
    const selectedItem = document.getElementById(id);
    const currentState = selectedItem.style.display;
    selectedItem.style.display = currentState === 'none' ? 'block' : 'none';
  }

  // Handle item selection
  function selectItem(button, type, category) {
    const color = type === 'most' ? 'green' : 'red';
    button.style.backgroundColor = color;
    button.style.color = 'white';

    // Show the post form
    const formContainer = document.getElementById('post-form');
    formContainer.style.display = 'block';

    // Pre-fill form data based on the selected category
    document.getElementById('title').value = `${category} - ${type} favorite`;
    document.getElementById('comment').value = `I selected ${button.innerText} as my ${type} favorite because`;
    // Set the group to "Dnero Store" and set the category for the dropdown
    document.getElementById('group-select').value = 'Dnero Store';
    document.getElementById('channel-select').value = category;

    const channelID = button.getAttribute('data-channel-id');
    document.getElementById('postForm').setAttribute('data-channel-id', channelID); // Save the channel ID to the form
  }
</script>

<script type="module">
  import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

  // Fetch all arguments for a specific channel
  async function fetchArguments(channelId) {
    try {
      const response = await fetch(`${pythonURI}/api/posts/filter`, {
        ...fetchOptions,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ channel_id: channelId })
      });

      if (!response.ok) throw new Error('Failed to fetch arguments: ' + response.statusText);

      const argumentsData = await response.json();
      argumentContainer.innerHTML = ""; // Clear existing arguments

      argumentsData.forEach(arg => {
        const card = document.createElement("div");
        card.classList.add("argument-card");

        const text = document.createElement("p");
        text.innerHTML = `<strong>${arg.user_name}:</strong> ${arg.comment}`; // Adjusted to match backend response structure

        card.appendChild(text);
        argumentContainer.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching arguments:', error);
    }
  }

  // Handle item selection
  function selectItem(button, type, category) {
    const color = type === 'most' ? 'green' : 'red';
    button.style.backgroundColor = color;
    button.style.color = 'white';

    // Create a post when an item is selected
    if (type === 'most') {
      document.getElementById('group-select').value = "Dnero Store";
      document.getElementById('channel-select').value = category;

      const postForm = document.getElementById('post-form');
      postForm.style.display = "block"; // Display post form
    }
  }

  // Handle form submission
  document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;
    const group = document.getElementById('group-select').value;
    const channel = document.getElementById('channel-select').value;
    const channelID = document.getElementById('postForm').getAttribute('data-channel-id'); // Retrieve the saved channel ID
    const postData = {
      title: title,
      comment: comment,
      channel_id: channelID
    }

    try {
      const response = await fetch(`${pythonURI}/api/post`, {
        ...fetchOptions,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });

      if (!response.ok) throw new Error('Failed to add post: ' + response.statusText);
      alert("Post added successfully!");

    } catch (error) {
      console.error('Error adding post:', error);
    }
  });
</script>


<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
  }
    .data {
        display: flex;
        align-items: flex-start;
        max-width: 800px;
        width: 100%;
        background-color: #2c3e50;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .left-side {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px;
    }
    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .post-item {
        background-color: #0e4184;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        color: #ffffff;
    }
    .post-item h3 {
        margin: 0 0 5px 0;
    }
    .post-item p {
        margin: 0;
    }
    .category-box {
  width: 100%; /* Set a consistent width */
  max-width: 800px; /* Adjust based on desired box width */
  background-color: #000000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px 0; /* Add space between boxes */
}

.category-box h3 {
  text-align: center;
  background-color: #007BFF;
  color: white;
  padding: 10px;
}
body {
  background-image: url("{{ site.baseurl }}/images/dnerostore/bkgd.png");
  background-size: cover; /* Ensures the image covers the entire screen */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

</style>


<!-- Analytics Page -->
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
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // URLs to fetch profile links, user data, and commits
    const postApiUrl = `${pythonURI}/api/posts`;

   // Fetch posts by category
    async function fetchPosts() {
      try {
        const response = await fetch(`${pythonURI}/api/posts`);
        const data = await response.json();

        // Clear existing posts
        document.getElementById("food-drink-posts").innerHTML = "";
        document.getElementById("spirit-posts").innerHTML = "";
        document.getElementById("limited-edition-posts").innerHTML = "";
        document.getElementById("gift-card-posts").innerHTML = "";

        // Loop through posts and categorize them
        data.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post-item');
          postElement.innerHTML = `
            <p><strong>User:</strong> ${post.user_name}</p>
            <p><strong>Comment:</strong> ${post.comment}</p>
          `;          
          if (post.channel_name === "Food and Drink") {
            document.getElementById("food-drink-posts").appendChild(postElement);
          } else if (post.channel_name === "Spirit") {
            document.getElementById("spirit-posts").appendChild(postElement);
          } else if (post.channel_name === "Limited Edition") {
            document.getElementById("limited-edition-posts").appendChild(postElement);
          } else if (post.channel_name === "Gift Cards") {
            document.getElementById("gift-card-posts").appendChild(postElement);
          }
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
</script>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .left-side {
    width: 48%;
    padding-right: 20px;
  }

  .right-side {
    width: 56%;
    padding-left: 10px;
  }

  .category-row {
    margin-bottom: 20px;
    border: 1px solid #45abf5;
    padding: 10px;
  }

  .category-row h3 {
    background-color: #000;
    color: white;
    padding: 10px;
    text-align: center;
  }

  .item-list-container {
    display: none;
  }

  .item-list {
    display: flex;
    flex-direction: column;
  }

  .item-list button {
    margin: 5px;
    padding: 10px;
    background-color: #f1f1f1;
    border: 1px solid #007BFF;
    cursor: pointer;
  }

  .post-form-container {
    background-color: #020b40;
    border: 2px solid #007BFF;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }

  #details {
    margin-top: 20px;
  }
</style>
