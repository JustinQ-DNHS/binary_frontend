---
layout: post 
title: History of Posts
permalink: /history
menu: nav/home.html
search_exclude: true
---
<style>
    .container {
        display: flex;
        justify-content: center;
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
        background-color: #34495e;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        color: #ecf0f1;
    }
    .post-item h3 {
        margin: 0 0 5px 0;
    }
    .post-item p {
        margin: 0;
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

    async function fetchData() {
        try {
            // Define the fetch requests
            const postApiRequest = fetch(postApiUrl, fetchOptions);

            // Run all fetch requests concurrently
            const [postApiResponse] = await Promise.all([
                postApiRequest
            ]);

            // Check for errors in the responses
            if (!postApiResponse.ok) {
                throw new Error('Failed to fetch post API links: ' + postApiResponse.statusText);
            }

            // Parse the JSON data
            const postData = await postApiResponse.json();

            // Extract commits count
            const postCount = postData.length || 0;

            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Count ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');

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

    // Call the fetchData function to initiate the requests
    fetchData();
</script>
