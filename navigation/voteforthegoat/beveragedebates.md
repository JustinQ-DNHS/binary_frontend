---
layout: post
title: Beverage Debates
menu: nav/vote_for_the_goat.html
permalink: /voteforthegoat/beveragedebates/
author: Thomas, Collin
---

Our group has chosen to focus on discussions about which drinks should be added to our school cafeteria menu. For instance, we might consider whether options like flavored water or fruit juices should be introduced alongside traditional choices like chocolate milk. By exploring these topics, we aim to engage students in conversations that reflect their preferences and encourage them to share their opinions on beverage options.


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beverage Voting</title>
    <style>
        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        /* Body Styling */
        body {
            background: linear-gradient(135deg, #1d2671, #c33764);
            background-attachment: fixed; /* Makes background fixed */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh; /* Ensures it covers the viewport height */
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /* Container Styling */
        .voting-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 30px;
            width: 100%;
            max-width: 800px; /* Increased to accommodate side-by-side layout */
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            margin: auto;
        }
        .voting-container:hover {
            transform: scale(1.05);
        }
        /* Header Styling */
        .voting-container h2 {
            color: #00c6ff;
            font-size: 24px;
            margin-bottom: 20px;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        /* Option Buttons Styling */
        .option-button {
            background: linear-gradient(135deg, #ff8a00, #e52e71);
            color: #ffffff;
            padding: 12px 20px;
            width: 200px;
            margin: 8px 0;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
            display: block;
        }
        .option-button:hover {
            background: linear-gradient(135deg, #e52e71, #ff8a00);
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(255, 138, 0, 0.3);
        }
        .option-button:active {
            transform: scale(0.95);
        }
        /* Selected Option Display */
        .selected-option {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #00e6ff;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
        /* Submit Button Styling */
        .submit-button {
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: #ffffff;
            padding: 12px 30px;
            margin-top: 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
        }
        .submit-button:hover {
            background: linear-gradient(135deg, #0072ff, #00c6ff);
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 198, 255, 0.3);
        }
        .submit-button:active {
            transform: scale(0.95);
        }
        /* Reasoning Input Box */
        .reasoning-container {
            display: none;
            margin-top: 20px;
            text-align: center;
        }
        .reasoning-container textarea {
            width: 100%;
            max-width: 350px;
            height: 100px;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #00c6ff;
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            font-size: 16px;
            resize: none;
            outline: none;
        }
        .reasoning-submit {
            margin-top: 10px;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: #ffffff;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
        }
        .reasoning-submit:hover {
            background: linear-gradient(135deg, #0072ff, #00c6ff);
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 198, 255, 0.3);
        }
        .reasoning-submit:active {
            transform: scale(0.95);
        }
        /* Add some basic styling for the clickable image */
        .clickable-image {
            cursor: pointer;
            max-width: 100%;
            height: auto;
            transition: opacity 0.3s ease;
        }
        .clickable-image:hover {
            opacity: 0.8;
        }
        /* Add these new styles */
        .beverage-details {
            display: none;
            padding: 15px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            text-align: left;
            position: sticky;
            top: 20px;
        }
        .beverage-details img {
            max-width: 200px;
            border-radius: 8px;
            margin: 10px 0;
        }
        .beverage-details p {
            font-size: 14px;
            line-height: 1.4;
            color: #ffffff;
        }
        /* Add new styles for the layout */
        .voting-layout {
            display: flex;
            gap: 20px;
            justify-content: space-between;
        }
        .options-container {
            flex: 0 0 40%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
        .details-container {
            flex: 0 0 55%;
            position: relative;
        }
        nav a:hover, .DNHS-title:hover {
            background: rgba(0, 0, 0, 0.7);
            color: #00e6ff;
            transform: scale(1.05);
        }
        .nav-container {
            border-bottom: 2px solid #00c6ff;
            background: transparent;
        }
        .header-container {
            background: transparent;
            padding: 20px;
        }
        /* Style for the DNHS Flocker title */
        .header-title, 
        h1, 
        .DNHS-title {  /* Use whichever class/element your title uses */
            background: transparent;
            color: #ffffff;
            font-family: Arial, sans-serif;
            padding: 12px 20px;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .header-title:hover,
        h1:hover,
        .DNHS-title:hover {
            transform: scale(1.1);
            text-shadow: 0 4px 8px rgba(255, 138, 0, 0.3);
        }
        .modal {
            display: none; /* Hidden by default */
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }
        .modal-content {
            background-color: #333;
            margin: 15% auto;
            padding: 20px;
            width: 80%;
            max-width: 600px;
            border-radius: 10px;
            color: #fff;
            text-align: center;
        }
        #closeModal {
            background-color: #00c6ff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
        }
        #closeModal:hover {
            background-color: #00e6ff;
        }
        /* Results Section Styling */
        .results-section {
            margin-top: 40px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
        }
        .results-chart {
            margin: 20px 0;
        }
        .beverage-result {
            margin: 10px 0;
        }
        .progress-bar {
            background: rgba(255, 255, 255, 0.2);
            height: 25px;
            border-radius: 12px;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            transition: width 0.5s ease;
            display: flex;
            align-items: center;
            padding-left: 10px;
        }
    </style>
        <!-- Community Guidelines Modal -->
    <div id="guidelinesModal" class="modal">
        <div class="modal-content">
            <h2>Community Guidelines</h2>
            <p>Welcome to the Beverage Debates! To maintain a respectful and productive discussion, please adhere to the following guidelines:</p>
            <ul>
                <li>Be respectful of others' opinions.</li>
                <li>Refrain from using offensive language.</li>
                <li>Focus on constructive feedback and sharing your preferences.</li>
                <li>Stay on topic and avoid unrelated discussions.</li>
            </ul>
            <button id="closeModal">I Agree</button>
        </div>
    </div>
<style>
    /* Updated styles with purple gradient background and orange text/button */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .modal-content {
        background: linear-gradient(135deg, #4b0082, #6a0dad); /* Purple gradient background */
        margin: 15% auto;
        padding: 20px;
        width: 80%;
        max-width: 600px;
        border-radius: 10px;
        text-align: center;
        color: white; /* Default color as fallback */
    }
    #closeModal {
        background: linear-gradient(135deg, #FFA500, #FF4500); /* Orange gradient button */
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 16px;
        transition: background 0.3s ease;
    }
    #closeModal:hover {
        background: linear-gradient(135deg, #FF4500, #FFA500); /* Reverse gradient on hover */
    }
</style>
</head>
    <div class="voting-container">
        <h2>Del Norte Cafeteria Beverage Options</h2>
        
        <!-- Voting Section -->
        <div class="voting-layout">
            <div class="options-container">
                <h3>Vote for a Beverage</h3>
                <button class="option-button" onclick="selectOption('Coke')">Coke</button>
                <button class="option-button" onclick="selectOption('Gatorade')">Gatorade</button>
                <button class="option-button" onclick="selectOption('Slushie')">Slushie</button>
                <button class="option-button" onclick="selectOption('Sparkling water')">Sparkling water</button>
                <div class="selected-option" id="selectedOption">Your Choice: None</div>
                <button class="submit-button" onclick="submitVote()">Submit Vote</button>
            </div>
            <div class="details-container">
                <div id="coke-details" class="beverage-details">
                    <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZXxlbnwwfHwwfHx8MA%3D%3D" alt="Coca Cola">
                    <p>Ingredients: Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine</p>
                </div>
                <div id="gatorade-details" class="beverage-details">
                    <img src="https://www.kroger.com/product/images/large/right/0005200012324" alt="Gatorade">
                    <p>Ingredients: Water, Sugar, Dextrose, Citric Acid, Natural and Artificial Flavor, Salt, Sodium Citrate, Monopotassium Phosphate, Modified Food Starch, Red 40</p>
                </div>
                <div id="slushie-details" class="beverage-details">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKttWx6W8_lfSWn8x7b7Yi1yByHLRYpiARA&s" alt="Slushie">
                    <p>Ingredients: Water, High Fructose Corn Syrup, Natural and Artificial Flavors, Citric Acid, Food Coloring</p>
                </div>
                <div id="sparkling-water-details" class="beverage-details">
                    <img src="https://m.media-amazon.com/images/I/81NJpYOskkL.jpg" alt="Sparkling Water">
                    <p>Ingredients: Carbonated Water, Natural Flavors</p>
                </div>
            </div>
        </div>

        <!-- Reasoning Container -->
        <div class="reasoning-container" id="reasoningContainer">
            <h3>Why did you choose this beverage?</h3>
            <textarea id="reasoningText" placeholder="Enter your reasoning here..."></textarea>
            <button class="reasoning-submit" onclick="submitReasoning()">Submit Reasoning</button>
        </div>

        <!-- New Separate Suggestion Section -->
        <div class="suggestion-section" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.2);">
            <h3>Suggest a New Beverage</h3>
            <p style="margin-bottom: 15px; font-size: 14px;">Don't see your preferred drink? Suggest it below!</p>
            <input type="text" id="suggestionInput" placeholder="Enter your beverage suggestion" style="margin-bottom: 10px; padding: 10px; border-radius: 8px; border: 1px solid #00c6ff; background: rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 16px; outline: none; width: 100%; max-width: 300px;">
            <button class="submit-button" onclick="submitSuggestion()">Submit Suggestion</button>
        </div>

        <!-- Results Section -->
        <div class="results-section">
            <h3>Current Results</h3>
            <div id="votingResults" class="results-chart">
                <!-- Results will be populated here -->
            </div>
            <button class="submit-button" onclick="refreshResults()">Refresh Results</button>
        </div>
    </div>
    <script>
        let selectedBeverage = null;
        function hideAllDetails() {
            const details = document.querySelectorAll('.beverage-details');
            details.forEach(detail => detail.style.display = 'none');
        }
        function selectOption(beverage) {
            selectedBeverage = beverage;
            document.getElementById('selectedOption').textContent = 'Your Choice: ' + beverage;
            // Hide all details first
            hideAllDetails();
            // Show details for selected beverage
            const detailsId = beverage.toLowerCase().replace(' ', '-') + '-details';
            document.getElementById(detailsId).style.display = 'block';
        }
        function submitVote() {
            if (selectedBeverage) {
                // Show the reasoning input section
                document.getElementById('reasoningContainer').style.display = 'block';
            } else {
                alert('Please select a beverage before submitting your vote.');
            }
        }
        function submitReasoning() {
            const reasoning = document.getElementById('reasoningText').value;
            if (reasoning.trim()) {
                // Send vote and reasoning to backend
                fetch('http://127.0.0.1:8887/api/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        beverage: selectedBeverage,
                        reasoning: reasoning
                    })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Thank you for voting and sharing your reasoning!');
                    // Hide the reasoning input section after submission
                    document.getElementById('reasoningContainer').style.display = 'none';
                    document.getElementById('reasoningText').value = ''; // Clear the text area
                    refreshResults(); // Refresh results after successful vote
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your vote. Please try again.');
                });
            } else {
                alert('Please enter a reasoning before submitting.');
            }
        }
        function submitSuggestion() {
            const suggestion = document.getElementById('suggestionInput').value;
            if (suggestion.trim()) {
                // Send suggestion to backend
                fetch('http://127.0.0.1:8887/api/suggest', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        suggestion: suggestion
                    })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Thank you for your suggestion!');
                    document.getElementById('suggestionInput').value = ''; // Clear the input field
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your suggestion. Please try again.');
                });
            } else {
                alert('Please enter a suggestion before submitting.');
            }
        }
        function showResults() {
            fetch('http://127.0.0.1:8887/api/results')
                .then(response => response.json())
                .then(data => {
                    console.log('Current voting results:', data);
                    // You can add code here to display the results on the page
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        function refreshResults() {
            fetch('http://127.0.0.1:8887/api/results')
                .then(response => response.json())
                .then(data => {
                    displayResults(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error fetching results. Please try again.');
                });
        }

        function displayResults(data) {
            const resultsContainer = document.getElementById('votingResults');
            resultsContainer.innerHTML = ''; // Clear existing results

            // Calculate total votes for percentage
            const totalVotes = Object.values(data).reduce((a, b) => a + b, 0);

            // Create bar for each beverage
            for (const [beverage, votes] of Object.entries(data)) {
                const percentage = (votes / totalVotes * 100).toFixed(1);
                
                const beverageResult = document.createElement('div');
                beverageResult.className = 'beverage-result';
                beverageResult.innerHTML = `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>${beverage}</span>
                        <span>${votes} votes (${percentage}%)</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                `;
                resultsContainer.appendChild(beverageResult);
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            const modal = document.getElementById("guidelinesModal");
            const closeModal = document.getElementById("closeModal");
            // Show the modal on page load
            modal.style.display = "block";
            // Close the modal when the button is clicked
            closeModal.onclick = function() {
                modal.style.display = "none";
            }

            // Load initial results
            refreshResults();
        });
    </script>
</html>


