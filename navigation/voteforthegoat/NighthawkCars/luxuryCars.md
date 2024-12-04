---
layout: page
title: Luxury Cars
description: Luxury Car Information and Chatroom
permalink: /voteforthegoat/nighthawkCars/luxuryCars/
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
            background: linear-gradient(135deg, #333333, #fff947, #ffffff); /* 180deg for top-to-bottom gradient */
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
            height: 420px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        .message-box1p{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 420px; /* Fixed height */
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
    <p>Lamborghini</p>
    <img src="data:image/jpeg;base64,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">
    <p>Bugatti</p>
    <img src="data:image/jpeg;base64,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">
    <p>Ferrari</p>
    <img src="data:image/jpeg;base64,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">
    <p>McLaren</p>
    <img src="data:image/jpeg;base64,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">
</div>


<h3>Pricing</h3>
<table>
    <tr>
        <td><p></p></td>
        <td><p>Average Price</p></td>
        <td><p>Lowest Price</p></td>
        <td><p>Highest Price</p></td>
    </tr>
    <tr>
        <td><p>Lamborghini</p></td>
        <td><p>$212,000</p></td>
        <td><p>$209,000</p></td>
        <td><p>$8,300,000</p></td>
    </tr>
    <tr>
        <td><p>Bugatti</p></td>
        <td><p>$2,990,000</p></td>
        <td><p>$1,900,000</p></td>
        <td><p>$35,000,000</p></td>
    </tr>
    <tr>
        <td><p>Ferrari</p></td>
        <td><p>$230,950</p></td>
        <td><p>$50,000</p></td>
        <td><p>$70,000,000</p></td>
    </tr>
    <tr>
        <td><p>McLaren</p></td>
        <td><p>$310,500</p></td>
        <td><p>$195,000</p></td>
        <td><p>$3,500,000</p></td>
    </tr>

</table>

<h3>Voting</h3>
<div>
    <button id="button1" class="regularButton"><p class="buttonP">Lamborghini</p></button>
    <button id="button2" class="regularButton"><p class="buttonP">Bugatti</p></button>
    <button id="button3" class="regularButton"><p class="buttonP">Ferrari</p></button>
    <button id="button4" class="regularButton"><p class="buttonP">McLaren</p></button>
</div>

<script>
        // Define messages for each button
        const messages = {
            button1: "You voted for Lamborghini! Thank you for voting!",
            button2: "You voted for Bugatti! Thank you for voting!",
            button3: "You voted for Ferrari! Thank you for voting!",
            button4: "You voted for McLaren! Thank you for voting!",
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
        const channelID = 23;
        const commentTitle = "luxuryCars";
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