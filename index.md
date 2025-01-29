---
layout: post
title: Login Page
search_exclude: true
description: Login and explore our social media hub to learn about Big Idead 2 about binary
hide: true
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Cars</title>
    <style>
        body {
            background: linear-gradient(135deg, #003366, darkred); /* 180deg for top-to-bottom gradient */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        p {
            color: white;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            text-align: center;
            border-collapse: separate;
            border-color: white
        }
        td {
            background-color: transparent !important; /* Remove background color */
            padding: 10px !important; /* Remove padding */
            border-color: white
        }
        .button {
            background-color: transparent;
            color: white !important; /* White text */
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
            background-color: #FFBF00; /* Darker green on hover */
            color: black !important;
        }
        .button:active {
            transform: scale(0.95); /* Shrinks a bit on click */
            background-color: #BA8E23; /* Even darker green on click */
            color: white !important;
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
    </style>
</head>

Welcome to the Binary Site! By Justin, Lars, Manahil, Rutvik, Shaurya, Shriya, Vincent, and Weston

<body>
    <table>
            <td><a href="{{site.baseurl}}/binaryGame" class="button">Binary Game</a></td>
            <td><a href="{{site.baseurl}}/logicgame" class="button">Logic Gates Games</a></td>
            <td><a href="{{site.baseurl}}/converter/" class="button">Binary Converter</a></td>
            <td><a href="{{site.baseurl}}/binary_history" class="button">The History of Binary...</a></td>
    </table>
</body>

<body>
    <table>
        <td><a href="{{site.baseurl}}/comments" class="button">Comments and Feedback</a></td>
        <td><a href="{{site.baseurl}}/leaderboard/" class="button">Leaderboard</a></td>
        <td><a href="{{site.baseurl}}/quiz" class="button">Binary Quiz</a></td>
        <td><a href="{{site.baseurl}}/navigation/binary-calculator" class="button">Binary Calculator</a></td>
    </table>
</body>