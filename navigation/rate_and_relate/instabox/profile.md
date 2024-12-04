---
layout: post 
title: Profile
search_exclude: true
permalink: rate_and_relate/instabox/profile
menu: nav/rate_and_relate.html
author: Aadi, Aaditya, Aditya, Kanhay
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
<style>
    body {
        font-family: "Poppins", sans-serif;
        background-color: #333;
        color: white;
        margin: 0;
        padding: 0;
    }
    hr {
        border-color: #333;
    }
    /* Navbar styling */
    .navbar {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .navbar a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 18px;
    }
    .navbar a:hover {
        background-color: #6a59a3;
        border-radius: 5px;
    }
    /* Profile container */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        margin-top: 20px;
    }
    /* Profile card */
    .profile-card {
        background-color: #444;
        border-radius: 10px;
        padding: 20px;
        width: 80%;
        max-width: 600px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        text-align: center;
        margin-bottom: 20px;
        position: relative;
    }
    .profile-card label {
        position: relative;
        display: inline-block;
    }
    .profile-card img {
        margin-bottom: 15px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease;
    }
    .profile-card img:hover {
        filter: brightness(0.7);
    }
    .profile-card h2 {
        margin: 10px 0;
        color: #6a59a3;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 auto;
        max-width: 80%;
    }
    .info-item {
        display: flex;
        align-items: center;
        margin: 5px 0;
    }
    .info-item label {
        font-weight: bold;
        margin-right: 10px;
        min-width: 80px; /* Ensures labels are aligned */
        text-align: right;
    }
    .info-item .hometown, .info-item .status {
        background-color: #121212;
        resize: none;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        border: none;
        color: white;
    }
    .file-input {
        display: none;
    }
    .hometown, .status {
        background-color: #121212;
        resize: none;
        width: calc(100% - 10px); /* Adjusted width */
        padding: 5px;
        border-radius: 5px;
        border: none;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        margin-left: 10px; /* Slight offset to center */
    }
    /* Profile stats */
    .stats-card {
        background-color: #555;
        border-radius: 10px;
        padding: 20px;
        width: 80%;
        max-width: 600px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        text-align: left;
    }
    .stats-card h3 {
        color: #6a59a3;
    }
    .stats-list {
        list-style-type: none;
        padding: 0;
    }
    .stats-list li {
        margin: 10px 0;
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .profile-card,
        .stats-card {
            width: 95%;
        }
    }
</style>
<body>
    <hr>
    <!-- Navbar -->
    <div class="navbar">
        <a href="{{site.baseurl}}/rate_and_relate/instabox">Home</a>
        <a href="">Profile</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/settings">Settings</a>
    </div>
    <div class="container">
        <!-- Profile card -->
        <div class="profile-card">
            <label for="file-upload">
                <img id="profile-pic" src="{{site.baseurl}}/images/rate_and_relate/instabox/pfp_placeholder.jpg" alt="Profile Picture">
            </label>
            <input id="file-upload" type="file" class="file-input" accept="image/*" onchange="updateProfilePic(event)">
            <h2 id="username">Username</h2>
            <div class="info">
                <div class="info-item">
                    <label for="hometown">Hometown:</label>
                    <span id="hometown" class="hometown" contenteditable="true" onkeydown="checkEnter(event)">🌍 Earth</span>
                </div>
                <div class="info-item">
                    <label for="status">Status:</label>
                    <span id="status" class="status" contenteditable="true" onkeydown="checkEnter(event)">👋 Hello! I am using Instabox.</span>
                </div>
            </div>
        </div>
        <!-- Stats card -->
        <div class="stats-card">
            <h3>Your Stats</h3>
            <ul class="stats-list">
                <li><strong>Current Score:</strong> 63</li>
                <li><strong>Weekly Average:</strong> 104</li>
                <li><strong>Monthly Average:</strong> 251</li>
                <li><strong>Leaderboard Appearances:</strong> 13</li>
                <li><strong>Podium Finishes:</strong> 2</li>
                <li><strong>Friends:</strong> 24</li>
            </ul>
        </div>
    </div>
    <script>
        // Load the profile picture from localStorage if available
        window.onload = function() {
            const savedImage = localStorage.getItem("profilePicture");
            if (savedImage) {
                document.getElementById("profile-pic").src = savedImage;
            }
            const username = localStorage.getItem("username");
            if (username) {
                document.getElementById("username").innerText = username;
            }
            const hometown = localStorage.getItem("hometown");
            if (hometown) {
                document.getElementById("hometown").textContent = hometown;
            }
            const status = localStorage.getItem("status");
            if (status) {
                document.getElementById("status").textContent = status;
            }
        };
        function updateProfilePic(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('profile-pic').src = e.target.result;
                    localStorage.setItem("profilePicture", e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        function checkEnter(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent adding a new line
                const statusElement = event.target;
                statusElement.blur(); // Unfocus the element
                onHometownUpdate();
                onStatusUpdate();
            }
        }
        function onHometownUpdate() {
            const hometownValue = document.getElementById("hometown").textContent;
            localStorage.setItem("hometown", hometownValue);
        }
        function onStatusUpdate() {
            const statusValue = document.getElementById("status").textContent;
            localStorage.setItem("status", statusValue);
        }
    </script>
</body>