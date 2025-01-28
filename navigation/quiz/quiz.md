---
layout: post
title: Quiz Page
search_exclude: true
description: Take our quiz to test your knowledge!
hide: true
menu: nav/home.html
permalink: /quiz
---

 <!-- <link rel="stylesheet" href="{{site.baseurl}}/navigation/quiz/style.css">  -->
 <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Page</title>
    </head>
    <body>
    <div id="quizgrading"></div>
    <div class="quiz-container">
        <h2>Binary Quiz</h2>
        <div id="quiz"></div>
        <button id="submit">Submit Quiz</button>
        <div id="results"></div>
    </div>
    </body>



<div class="quiz-container">
    <h3>Quiz Attempt History</h3> 
    <table id="attemptsTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Quizgrade</th>
                <th>Attempt</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table rows will be populated here -->
        </tbody>
    </table>
</div>

<script src="{{site.baseurl}}/navigation/quiz/script.js" type="module"></script>
 <style>
        .quiz-container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .quiz-container h2 {
            text-align: center;
        }
        .question {
            margin-bottom: 15px;
        }
        .answers {
            margin-bottom: 20px;
        }
        .answers label {
            display: block;
            margin: 5px 0;
        }
        table {
            width: 100%;
            margin-top: 30px;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: center;
        }
    </style>