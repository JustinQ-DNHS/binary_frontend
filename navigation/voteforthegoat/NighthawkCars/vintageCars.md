---
layout: page
title: Vintage Cars
description: Vinatage Information and Chatroom
permalink: /voteforthegoat/nighthawkCars/vintageCars/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Cars</title>
    <style>
        body {
            background: linear-gradient(135deg, #333333, #2c6e0b, #ffffff); /* 180deg for top-to-bottom gradient */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 4px solid #000000;
            font-weight: bold; /* Bold text */
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px; /* Rounded effect */
            padding: 10px; /* Space around the text */
        }
        p {
            color: white;   
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 420px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        table {
            width: 100%;
            text-align: center;
            border-collapse: separate;
            border-spacing: 10px;
            border: none; /* Remove any borders from the table */
        }
        td {
            background-color: transparent !important; /* Remove background color */
            padding: 0 !important; /* Remove padding */
            border: none !important; /* Remove borders from table cells */
        }
        .button {
            background-color: white; /* Light red */
            color: black !important; /* White text */
            text-decoration: none;
            font-weight: bold;
            font-family: Arial, sans-serif;
            display: inline-block;
            padding: 15px 20px;
            border-radius: 20px;
            transition: transform 0.2s ease, background-color 0.2s ease;
            text-align: center;
        }
        .button:hover {
            transform: scale(1.05); /* Slightly larger on hover */
            background-color: lightgrey; /* Darker red on hover */
            color: black !important;
        }
        .button:active {
            transform: scale(0.95); /* Shrinks a bit on click */
            background-color: grey; /* Even darker red on click */
            color: black !important;
        }
        img {
            max-width: 1000px; /* Adjust maximum width as desired */
            max-height: 1000px; /* Adjust maximum height as desired */
            object-fit: contain; /* Keeps images within the max dimensions without cropping */
        }
        .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }
        .image-gallery img {
            max-height: 150px;
            object-fit: cover;
        }
        .message-box1 {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        .message-box1p{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        #comment {
            width: 100%;      /* Full width of the container */
            height: 100px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #commentInput {
            width: 100%;      /* Full width of the container */
            height: 90px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #nameInput {
            width: 100%;      /* Full width of the container */
            height: 59px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #optionSelect {
            width: 50%;      /* Full width of the container */
            height: 58px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
                .regularButton {
        all: unset; /* Removes all default styles */
        background-color: white !important;
        border: 2px solid #ccc;
        border-radius: 12px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.1s ease;
        font-weight: bold;
        color: black !important;
        }
        .regularButton:hover {
            background-color: lightgray !important; /* Light gray on hover */
            transform: scale(1.05);
        }
        .regularButton:active {
            background-color: grey !important; /* Slightly darker gray when clicked */
            transform: scale(0.95); /* Slight scale-down effect on click */
        }
        .buttonP {
            all: unset !important;
            color: black !important;
        }
    </style>
</head>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar</title>
</head>
<body>
        <table style="width: 100%; text-align: center; border-collapse: separate; border-spacing: 10px;">
            <tr>
                <td><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars" class="button">Nighthawk Cars (Home Page)</a></td>
                <td><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/studentCars" class="button">Student Cars</a></td>
                <td><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/vintageCars" class="button">Vintage Cars</a></td>
                <td><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/luxuryCars" class="button">Luxury Cars</a></td>
                <td><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/economyCars" class="button">Economy Cars</a></td>
            </tr>
        </table>
</body>
</html>

<body>

<h3>Examples</h3>
<div>
    <p>Porsche</p>
    <img src="https://hagerty.co.uk/wp-content/uploads/2023/03/Electrogenic-electric-Porsche-911-scaled.jpg" alt="Porsche" style="width:300px;height:200px;">
    <p>Miata</p>
    <img src="https://cdn.dealeraccelerate.com/survivor/1/1101/98727/1920x1440/1990-mazda-miata-mx-5" alt="miata" style="width:300px;height:200px;">
    <p>Dodge</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6gqdzhunUvo-FAR4h8mEm8x49L3oteY7Ig&s" alt="Dodge" style="width:300px;height:200px;">
    <p>Toyota</p>
    <img src="https://www.southern441toyota.com/static/dealer-14409/4th_Generation_Toyota_Supra.jpg" alt="Toyota" style="width:300px;height:200px;">
</div>

<h3>Pricing</h3>
<p>Some prices are incorrect and some prices are affected by variables like pre owned, rarity, mods, or limited models.</p>
<table>
    <tr>
        <td><p></p></td>
        <td><p>Lowest Price</p></td>
        <td><p>Average Price</p></td>
        <td><p>Highest Price</p></td>
    </tr>
    <tr>
        <td><p>Porshe</p></td>
        <td><p>$36,000</p></td>
        <td><p>$341,000</p></td>
        <td><p>$850,000</p></td>
    </tr>
    <tr>
        <td><p>Miata</p></td>
        <td><p>$11,000</p></td>
        <td><p>$36,000</p></td>
        <td><p>$62,000</p></td>
    </tr>
    <tr>
        <td><p>Dodge</p></td>
        <td><p>$23,000</p></td>
        <td><p>$90,000</p></td>
        <td><p>$210,000</p></td>
    </tr>
    <tr>
        <td><p>Toyota</p></td>
        <td><p>$28,000</p></td>
        <td><p>$88,000</p></td>
        <td><p>$230,000</p></td>
    </tr>
</table>

<body>

<h3>Voting</h3>
<div>
    <button id="button1" class="regularButton"><p class="buttonP">Porshe</p></button>
    <button id="button2" class="regularButton"><p class="buttonP">Miata</p></button>
    <button id="button3" class="regularButton"><p class="buttonP">Dodge</p></button>
    <button id="button4" class="regularButton"><p class="buttonP">Toyota</p></button>
</div>

<script>
        // Define messages for each button
        const messages = {
            button1: "You voted for Porshe! Thank you for voting!",
            button2: "You voted for Miata! Thank you for voting!",
            button3: "You voted for Dodge! Thank you for voting!",
            button4: "You voted for Toyota! Thank you for voting!",
        };

        // Add event listeners to each button
        for (let buttonId in messages) {
            const button = document.getElementById(buttonId);
            button.addEventListener('click', function() {
                alert(messages[buttonId]);
            });
        }
    </script>

<h3>Discussion</h3>
<p>   </p>
<textarea placeholder="Enter your thoughts about cars here..." id="comment"></textarea>
<br><br>
<button class="regularButton" onclick="addComment()"><p class="buttonP">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>

 <script type="module">
        import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';
        const channelID = 24;
        const commentTitle = "vintageCars";
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