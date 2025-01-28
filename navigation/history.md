---
layout: page
title: History of Binary
search_exclude: true
permalink: /binary_history/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary History</title>
    <style>
        body {
            background: linear-gradient(135deg, #964b00, #ff8c00, #ffa756); /* 180deg for top-to-bottom gradient */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        h2, h3 {
            color: rgb(0, 0, 0);
            border-bottom: 4px solid #000000;
            font-weight: bold; /* Bold text */
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px; /* Rounded effect */
            padding: 10px; /* Space around the text */
            margin-bottom: 20px
        }
        .event {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #000000;
            border-radius: 5px;
        }
        p {
            color: white 
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
        div {
            margin: 20px 0;
        }
        textarea {
            height: 100px;
            width: 1000px;
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
    </style>
</head>
<body>
    <div id="binary-history"></div>

<h2>Add a Binary History Event!</h2>
<p>Make sure it is appropriate and relevant to the topic, otherwise it will get deleted...</p>
<p>NOTE: It does not have to be directly related to binary, it can be related to one of the default events.</p>
<textarea placeholder="Enter the year" id="eventYear" style="height: 30px; width: 200px;"></textarea>
<p></p>
<textarea placeholder="Enter the event description here..." id="eventDescription"></textarea>
<p></p>
<button class="regularButton" onclick="addEvent()">Submit Event</button>
<p></p>
<button class="regularButton"><a href="{{site.baseurl}}/binary_history/blog">Check out my Blog!</a></button>

<script type="module" defer>
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';

    async function fetchAndDisplayBinaryHistory() { 
        try {
            fetch(pythonURI + "/api/binary-history", // Fetch binary history from the given URI
            {
                method: "GET", // Use GET method
                headers: {
                    "Content-Type": "application/json", // Set request headers
                }
            })
            .then(response => { // Handle the response
                if (response.ok) {
                    return response.json(); // Parse the JSON if the response is there
                }
                throw new Error("Network response failed"); // Handle error if response is not there
            })
            .then(data => { // Process the received data

                // Sort events from oldest year to newest year
                data.sort((a, b) => a.year - b.year);

                // Get the container where history will be displayed
                const historyContainer = document.getElementById('binary-history');

                // Clear any previous content
                historyContainer.innerHTML = '';

                // Display each event
                data.forEach((event) => { // Iterate through each event in the data
                    const eventDiv = document.createElement('div'); // Create a div for each event
                    eventDiv.classList.add('event'); // Add a class for styling

                    const title = document.createElement('h3'); // Create element for the year
                    title.textContent = event["year"]; // Set the year as text content

                    const description = document.createElement('p'); // Create element for description
                    description.textContent = event.description; // Set description as text content

                    eventDiv.appendChild(title); // Append title to the event div
                    eventDiv.appendChild(description); // Append description to the event div

                    historyContainer.appendChild(eventDiv); // Append the event div to the container
                });
            })
            .catch(error => { // Handle any errors during fetch
                console.error("There was a problem with the fetch", error);
            });
            
        } catch (error) { // Handle any errors during the function execution
            console.error('Error fetching binary history:', error);
        }
    }

    fetchAndDisplayBinaryHistory();
        
    async function addEvent() { // Define an async function to add an event
        const year = document.getElementById('eventYear').value.trim(); // Get year value from input
        const description = document.getElementById('eventDescription').value.trim(); 
        // Get description value from input

        if (!year || !description) {
            alert('Please fill in both the year and event description.'); // Alert if inputs are invalid
            return;
        }

        const eventData = { // Create an object with the event data
            year: parseInt(year, 10), // Parse year as an integer
            description: description, // Add description
        };

        try {
            fetch(pythonURI + "/api/binary-history", { // Send a POST request to add the event
                method: "POST", // Use POST method
                headers: {
                    "Content-Type": "application/json", // Set request headers
                },
                body: JSON.stringify(eventData) // Send event data in the body of the request
            })
            .then(response => { // Handle the response
                if (response.ok) {
                    alert("Saved successfully!"); // Check if the response is there
                    return response.json(); // Parse the JSON if response is there
                }
                throw new Error("Network response failed"); // Handle error if response is not there
            })
            .then(data => { // Process the response data
                document.getElementById('eventYear').value = ''; // Clear the input fields
                document.getElementById('eventDescription').value = '';
                fetchAndDisplayBinaryHistory(); // Refresh the displayed history
            })
            .catch(error => { // Handle any errors during fetch
                console.error("There was a problem with the fetch", error);
            });

        } catch (error) { // Handle any errors during the function execution
            console.error('Error fetching binary history:', error);
        }
    }

    window.addEvent = addEvent; // Assign the addEvent function to the global scope
</script>
</body>
</html>
