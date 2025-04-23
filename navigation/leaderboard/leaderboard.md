---
layout: page
title: Player Analytics
permalink: /leaderboard/
---

<style>
            /* General Styling */
        body {
                background: linear-gradient(150deg, #0E3348, #247994, #147EA0, #0F547B
);
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #F6F6F6;
            }
</style>

{% comment %}
```html
{% endcomment %}

<html lang="en">
<head>
    <style>
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .form-container {
            background:rgb(191, 214, 251);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        #userForm {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
            color: #333;
        }

        input[type="text"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }

        #getAllLeaderboardButton {
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f4f4f4;
            font-weight: 600;
            color: #333;
        }

        tr:hover {
            background-color: #f8f9fa;
        }

        .actions-column {
            width: 100px;
        }

        .page-title {
            color: #2c3e50;
            margin-bottom: 30px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="page-title">Player Analytics Dashboard</h1>
        
        <div class="form-container">
            <h2>Add New Player</h2>
            <form id="userForm">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" required>
                </div>
                
                <div class="form-group">
                    <label for="uid">User ID:</label>
                    <input type="text" name="uid" id="uid" required>
                </div>
                
                <div class="form-group">
                    <label for="games-played">Games Played:</label>
                    <input type="text" name="games played" id="games played" required>
                </div>
                
                <div class="form-group">
                    <label for="average-score">Average Score:</label>
                    <input type="text" name="average score" id="average score" required>
                </div>
                
                <div class="form-group">
                    <label for="wins">Wins:</label>
                    <input type="text" name="wins" id="wins" required>
                </div>
                
                <div class="form-group">
                    <label for="losses">Losses:</label>
                    <input type="text" name="losses" id="losses" required>
                </div>
                
                <div class="form-group">
                    <label for="highest-score">Highest Score:</label>
                    <input type="text" name="highest score" id="highest score" required>
                </div>
                
                <div class="form-group">
                    <button type="submit">Add Player</button>
                </div>
            </form>
        </div>

        <button id="getAllLeaderboardButton">View Leaderboard</button>
        
        <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Games Played</th>
                        <th>Average Score</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Highest Score</th>
                        <th class="actions-column">Actions</th>
                    </tr>
                </thead>
                <tbody id="leaderboardTable">
                    <!-- javascript generated data -->
                </tbody>
            </table>
        </div>
        
        <div id="resultContainer"></div>
    </div>

    <script type="module" src="{{site.baseurl}}/navigation/leaderboard/leaderboard.js"></script>
    <script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>
</body>
</html>