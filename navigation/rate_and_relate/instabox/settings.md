---
layout: post 
title: Settings
search_exclude: true
permalink: rate_and_relate/instabox/settings
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
    /* Container */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        margin-top: 20px;
    }
    /* Settings form */
    .settings-card {
        background-color: #444;
        border-radius: 10px;
        padding: 20px;
        width: 80%;
        max-width: 600px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        margin-bottom: 20px;
    }
    .settings-card h2 {
        text-align: center;
        color: #6a59a3;
        margin-bottom: 20px;
    }
    .settings-card label {
        display: block;
        margin: 10px 0 5px;
        color: #777;
    }
    .settings-card label span{
        color: #bbb;
    }
    .settings-card input[type="text"],
    .settings-card input[type="password"] {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        margin-bottom: 15px;
    }
    /* Divider styling */
    .divider {
        border-top: 1px solid #777;
        margin: 20px 0;
    }
    /* Password fields in row */
    .password-fields {
        display: flex;
        gap: 10px;
    }
    .password-fields input {
        width: 100%;
        margin-bottom: 0;
    }
    /* Button styling */
    .settings-card button {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
        margin-top: 15px;
    }
    .save-btn {
        background-color: #6a59a3;
    }
    .save-btn:hover {
        background-color: #5a4a8a;
    }
    .logout-btn {
        background-color: #aa4b4b;
    }
    .logout-btn:hover {
        background-color: #993c3c;
    }
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .settings-card {
            width: 95%;
        }
        .password-fields {
            flex-direction: column;
            gap: 0;
        }
    }
</style>
<body>
    <hr>
    <!-- Navbar -->
    <div class="navbar">
        <a href="{{site.baseurl}}/rate_and_relate/instabox">Home</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/profile">Profile</a>
        <a href="">Settings</a>
    </div>
    <div class="container">
        <!-- Settings card -->
        <div class="settings-card">
            <h2>Account Settings</h2>
            <!-- Username change -->
            <label for="username"><span>Change Username</span> (optional)</label>
            <input type="text" id="username" placeholder="Enter new username">
            <!-- Divider line -->
            <label for="new-password"><span>Change Password</span> (optional)</label>
            <div class="password-fields">
                <input type="password" id="new-password" placeholder="New password">
                <input type="password" id="confirm-password" placeholder="Confirm new password">
            </div>
            <div class="divider"></div>
            <!-- Password change section -->
            <label for="current-password"><span>Current Password</span> (mandatory)</label>
            <input type="password" id="current-password" placeholder="Enter current password">
            <!-- Save Changes button -->
            <button class="save-btn" onclick="updateInfo()">Save Changes</button>
            <!-- Log Out button -->
            <button class="logout-btn" onclick="logOut()">Log Out</button>
        </div>
    </div>
    <script>
        // Updates username or password if current password is entered
        function updateInfo() {  
            const username = document.getElementById("username").value;
            const newPassword = document.getElementById("new-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const currentPassword = document.getElementById("current-password").value;
            let usernameUpdated = false;
            if (currentPassword === "") {
                alert("Please enter your current password.");
                return;
            }
            if (username != "") {
                localStorage.setItem("username", username.trim());
                usernameUpdated = true;
            }
            if (newPassword === "" && confirmPassword === "") {
                if (usernameUpdated) {
                    alert("Username updated!");
                    return;
                }
            }
            if (newPassword !== confirmPassword) {
                alert("New passwords do not match.");
            } else {
                if (usernameUpdated) {
                    alert("Username and password updated!");
                    return;
                } else {
                    alert("Password updated!");
                    return;
                }
            }
        }
        // Clear saved data and reload page
        function logOut() {
            const usernameString = localStorage.getItem("username");
            localStorage.clear();
            location.reload();
            alert("You have been logged out from " + usernameString + ".");
        }
    </script>
</body>