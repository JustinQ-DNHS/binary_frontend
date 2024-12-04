---
layout: page
title: REVVIT Poll Creation
description: Home Page of Revvit Hangout
permalink: /share_and_care/revvit/create_pull
---
 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Poll</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f0f0f0;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .poll-form {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            max-width: 100%;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            margin-bottom: 5px;
            font-weight: bold;
            display: block;
        }
        input[type="text"],
        input[type="file"],
        textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #ffcc00;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            color: #fff;
        }
        button:hover {
            background-color: #ffbb00; /* Darker shade on hover */
        }
    </style>
</head>
<body>

    <h1>Create a Poll</h1>
    <form class="poll-form">
        <div class="form-group">
            <label for="poll-question">Poll Question:</label>
            <input type="text" id="poll-question" placeholder="Enter your question here" required>
        </div>
        <div class="form-group">
            <label for="poll-options">Poll Options (comma-separated):</label>
            <textarea id="poll-options" placeholder="Option 1, Option 2, Option 3" required></textarea>
        </div>
        <div class="form-group">
            <label for="poll-image">Upload Image:</label>
            <input type="file" id="poll-image" accept="image/*">
        </div>
        <button type="submit">Create Poll</button>
    </form>

</body>
</html>





