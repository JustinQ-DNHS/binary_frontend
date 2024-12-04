---
toc: true
layout: post
title: Update the Nest
description:
permalink: /rate_and_relate/update_the_nest/
menu: nav/rate_and_relate.html
---
<style>
.feedContainer {
    transform: translateY(-90px);
}

.postFeed {
    border: 6px solid black;
    background-color: #FBC3C3;
    border-color: #F5E1E7;
    border-radius: 50px;
    height: 350px;
    margin-bottom: 12px;
    margin-left: 12px;
    margin-right: 12px;
}

.textContainer {
    transform: translateY(20px)
}

.textInfo {
    transform: translateY(30px)
}

.imageContainer {
    height: auto;
    display: inline;
    float: left;
    width: 55%;
    transform: translateX(5px) translateY(50px);
    text-align: center;
}

.imageContainer > img {
    width: 50%;
    display: inline-block;
}

.feed {
    border: 10px solid black;
    border-radius: 50px;
    background-color: pink;
    text-align: center;
    padding: 100px 0 3px 0;
    height: auto;
    font-family: 'Playfair Display', serif;
    float: left;
}

.header {
        border: 10px solid black;
        border-radius: 50px;
        background-color: pink;
        text-align: center;
        padding: 5px 0 3px 0;
        height: 200px;
        font-family: 'Playfair Display', serif;
    }

  .headerImage > img {
    height: auto;
    display: inline;
    width: 15%;
    float: left;
    transform: translateX(30px) translateY(-80px);
  }

.styled-button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
            transition: background-color 0.3s, transform 0.2s;
            transform: translateX(-70px) translateY(10px);
        }
 .upload_box {
    position: fixed;            
    top: 50%;                   
    left: 50%;                
    transform: translate(-50%, -30%);
    background-color: #FBC3C3;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 50px;
    height: auto;
    text-align: center;
}

.upload_box #textInput {
    width: 100%; 
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    margin-bottom: 10px; 
}

.upload_box .post-button {
   transform: translateX(150px)
}

.upload_box .exit-button {
   transform: translateX(125px) translateY(-100px);
}

</style>

<div style="text-align: center;" class="header">
    <h1> Update the Nest </h1>
    <div class="headerImage">
        <img src="{{site.baseurl}}/images/about/CSP_LOGO-removebg-preview.png" style="display: block; margin: 0 auto;" alt="Logo">
    </div>
    <div class="headerText">
        <button class="styled-button"><a href="">Upload Media</a></button>
    </div>
</div>

<div class="feed">
    <div class="feedContainer" id="feedContainer">
    <h1> Feed </h1>
        <div class="postFeed">
            <div class="imageContainer">
                <img src="{{site.baseurl}}/images/tempPhoto.jpg">
            </div>
            <div class="textContainer">
                <h3>Caption</h3><br>
                <div class="textInfo">
                    <p>Posted by: Abby Manalo</p><p>Date Posted: 10/25/24</p>
                </div>
            </div>
        </div>
</div>

<div class="upload_box">
    <button class="toggle-button" onclick="toggleDiv()">Camera</button> <br>
    <text class="content-div"></text>
    <label for="textInput">Enter caption:</label>
    <input type="text" id="textInput" placeholder="Type something...">
    <button class="post-button">post</button>
    <button class="exit-button">x</button>
</div>

<script type="module">
import { createImagePost } from '{{site.baseurl}}/assets/js/createRateAndRelateFeedList.js';
import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

const postApiUrl = `${pythonURI}/api/nestPost`;

async function generatePosts() {
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

        // Iterate over the postData and create HTML elements for each item
        const feedList = document.getElementById("feedContainer")
        // Create an array of promises
        const postPromises = [];

        postData.forEach(postItem => {
            // Use imported function
            postPromises.push(createImagePost(postItem).then(postElement => {
                feedList.appendChild(postElement);
            }));
        });
        await Promise.all(postPromises);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

generatePosts()
</script>