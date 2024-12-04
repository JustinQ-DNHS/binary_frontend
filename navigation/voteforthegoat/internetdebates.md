---
layout: post
title: Internet Debates
description: internet Debates
permalink: /voteforthegoat/internetdebates
menu: nav/vote_for_the_goat.html
comments: true
---
<script type="module" src="{{site.baseurl}}/navigation/voteforthegoat/debate.js"></script>

<div class="sidebar">
    <h3>Debate Topics</h3>
    <button class="debate-btn" data-debate="Milk or Cereal First?" data-channel-id="17">Milk or Cereal First?</button>
    <button class="debate-btn" data-debate="Is a Hot Dog a Sandwich?" data-channel-id="18">Is a Hot Dog a Sandwich?</button>
    <button class="debate-btn" data-debate="Pineapple on Pizza?" data-channel-id="19">Pineapple on Pizza?</button>
    <button class="debate-btn" data-debate="Cats or Dogs?" data-channel-id="20">Cats or Dogs?</button>
    <button class="debate-btn" data-debate="Coffee or Tea?" data-channel-id="21">Coffee or Tea?</button>
</div>
<div class="rulebar">
    <a href="{{site.baseurl}}/voteforthegoat/internetdebatesrules">
        <button class="rule-btn">Rules</button>
    </a>
</div>

<div id="rules-popup" class="modal">
    <div class="modal-content">
        <h2>Community Rules/Guidelines</h2>
        <ul>
            <li>Be Respectful: Keep things light and friendly. Make sure to respect others' views, and avoid any rude or offensive comments.</li>
            <li>Keep it Family-Friendly: Use clean language—no offensive words, hate speech, or harassment allowed.</li>
            <li>Stay On-Topic: Focus on the debate question. Stick to points that add to the discussion.</li>
            <li>Vote Honestly: Vote once per debate, whether it’s in the main chat or Timer Debate. All votes are anonymous.</li>
            <li>One Account Only: Just one account per person—no extra accounts to sway votes.</li>
        </ul>
        <button id="acknowledge-rules" class="acknowledge-btn">I have read and acknowledged the rules</button>
    </div>
</div>

<div class="container">
    <h1>Choose Your Side</h1>

    <section id="debate-selection">
        <h2 id="current-debate">Current Debate: Milk or Cereal First?</h2>
        <div class="buttons">
            <button id="side1" class="side-btn">Milk First</button>
            <button id="side2" class="side-btn">Cereal First</button>
        </div>
    </section>

    <section id="argument-section" class="hidden">
        <h2 id="selected-side">Your Side:</h2>
        <textarea id="argument-input" placeholder="Submit your argument"></textarea>
        <button id="submit-argument" class="submit-btn">Submit Argument</button>
    </section>

    <section id="arguments-list" class="hidden">
        <h2>Arguments</h2>
        <ul id="argument-container"></ul>
    </section>
</div>

<style>
    .sidebar {
        width: 200px;
        background: #222;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 50px; 
        left: 20px;
    }

    .sidebar h3 {
        color: #00e5ff;
    }
    .rulebar {
        width: 200px;
        height: 80px;
        background: #000000;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 650px; 
        left: 20px;
    }

    .debate-btn {
        display: block;
        background: #00e5ff;
        color: #fff;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .rule-btn {
        display: block;
        background: #00e5ff;
        color: #fff;
        width:166px;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .debate-btn:hover {
        background: #0099cc;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to right, #013b54, #4b1f30);
        color: #fff;
        margin: 0; /* Remove default margin */
        min-height: 100vh; /* Ensure the body takes full height */
        display: flex;
        flex-direction: column;
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modal-content {
        background-color: #333;
        padding: 20px;
        border-radius: 10px;
        width: 80%;
        max-width: 600px;
        text-align: center;
    }

    .container {
        max-width: 800px;
        margin: auto;
        text-align: center;
        padding: 2rem;
        background: rgba(26, 26, 26, 0.9); /* Slightly transparent to see the background */
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 2rem;
        color: #00e5ff;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .side-btn, .submit-btn, .acknowledge-btn {
        padding: 1rem 2rem;
        border-radius: 10px;
        color: #fff;
        transition: background 0.3s ease;
        background: linear-gradient(45deg, #00e5ff, #0099cc);
        border-radius: 10px;
    }

    .side-btn:hover {
        background: linear-gradient(45deg, #0099cc, #006699);
    }

    #argument-input {
        width: 100%;
        height: 100px;
        border: 2px solid #00e5ff;
        border-radius: 10px;
        background: #0a0a0a;
        color: #fff;
        padding: 1rem;
        resize: none;
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        background: #1a1a1a;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    li .rate {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .rate button {
        background: none;
        border: none;
        font-size: 1.2rem;
        color: #00e5ff;
        cursor: pointer;
        border-radius: 10px;
    }

    .hidden {
        display: none;
    }
</style>