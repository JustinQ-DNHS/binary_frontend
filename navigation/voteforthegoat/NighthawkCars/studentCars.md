---
layout: page
title: Student Cars
description: Student Car Information and Chatroom
permalink: /voteforthegoat/nighthawkCars/studentCars/
---

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

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Cars</title>
    <style>
        body {
            background: linear-gradient(135deg, #333333, #009dff, #ffffff); /* 180deg for top-to-bottom gradient */
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
        /* Images will adjust in size up to a maximum width and height */
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
        .box11{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            max-height: 200px; /* Maximum height */
            overflow-y: auto; /* Scrollable */
            margin-top: 10px; /* Space above message box */
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

<body>
<h3>Examples</h3>
<div>
    <p>Honda Civic</p>
    <img src="data:image/jpeg;base64,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" alt="civic" style="width:300px;height:200px;">
    <p>Subaru BRZ</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7seAOJ1enUPfIIW_BvNNziV2UTiazl9zCqw&s" alt="Subaru" style="width:300px;height:200px;">
    <p>Toyota GR86</p>
    <img src="data:image/jpeg;base64,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"  alt="Toyota" style="width:300px;height:200px;">
    <p>Honda Accord</p>
    <img src="data:image/jpeg;base64,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" alt="Accord" style="width:300px;height:200px;">
</div>
<h3>Voting</h3>

<div>
    <button id="button1" class="regularButton"><p class="buttonP">Honda Accord</p></button>
    <button id="button2" class="regularButton"><p class="buttonP">Toyota GR86</p></button>
    <button id="button3" class="regularButton"><p class="buttonP">Honda Civic</p></button>
    <button id="button4" class="regularButton"><p class="buttonP">Subaru BRZ</p></button>
</div>

<script>
        // Define messages for each button
        const messages = {
            button1: "You voted for Honda Accord! Thank you for voting!",
            button2: "You voted for Toyata GR86! Thank you for voting!",
            button3: "You voted for Honda Civic! Thank you for voting!",
            button4: "You voted for Subaru BRZ! Thank you for voting!",
        };

        // Add event listeners to each button
        for (let buttonId in messages) {
            const button = document.getElementById(buttonId);
            button.addEventListener('click', function() {
                alert(messages[buttonId]);
            });
        }
    </script>

<h2>Discussion</h2>
<textarea placeholder="Enter your thoughts or comments here..." id="comment"></textarea>
<button class="regularButton" onclick="addComment()"><p class="buttonP">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>
 <script type="module">
        import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';
        const channelID = 25;
        const commentTitle = "studentCars";
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