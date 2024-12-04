---
layout: page
title: Nighthawk Cars
description: A site all about cars
permalink: /voteforthegoat/nighthawkCars/
comments: true
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
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .popup-overlay.active {
            visibility: visible;
            opacity: 1;
        }
        .popup-content {
            background-color: black;
            padding: 20px;
            width: 80%;
            max-width: 400px;
            border-radius: 8px;
            text-align: center;
        }
        .popup-content h3 {
            margin-top: 0;
            color: #ff5050;
        }
        .popup-content button {
            background-color: #ff5050;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        body {
            background: linear-gradient(135deg, #333333, #ff4d4d, #ffffff); /* 180deg for top-to-bottom gradient */
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
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
            vertical-align: middle; /* Centers content vertically */
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
        .iframe-container {
            align-items: center;
            padding-top: 20px; /* Add padding if you want to adjust vertical centering */
            transform: translateX(-50px);
        }
    </style>
</head>
<body>

<h2> Welcome to the Nighthawk Cars Page! </h2>
<p>   </p>
A set of pages created by Lars Andre Lindain, Arnav Mittal, Weston Gardener, and Shaurya Singh
<p>   </p>
Here is a game to keep you entertained:

<div class="iframe-container">
    <iframe src="https://voyager162.github.io/carGame/index.html"
            width="1000" 
            height="800" 
            frameborder="0" 
            allowfullscreen>
    </iframe>
</div>

<div class="popup-overlay" id="popup">
    <div class="popup-content">
        <h3>Welcome to Nighthawk Cars!</h3>
        <p>Please read and accept the following rules:</p>
        <ul style="text-align: left; padding-left: 20px;">
            <li>Respect other users' opinions on cars.</li>
            <li>No spamming or irrelevant links.</li>
            <li>Use appropriate language at all times.</li>
        </ul>
        <button onclick="closePopup()">I Agree</button>
    </div>
</div>

<script>
    // Show popup on page load
    window.onload = function() {
        if (!localStorage.getItem("seenCarsPopup") || false) {
            document.getElementById('popup').classList.add('active');
            localStorage.setItem("seenCarsPopup", true)
        }

    };

    // Close popup function
    function closePopup() {
        document.getElementById('popup').classList.remove('active');
    }
</script>