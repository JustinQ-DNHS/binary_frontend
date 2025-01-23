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

<h2>Add a Binary History Event</h2>
<textarea placeholder="Enter the year" id="eventYear" style="height: 30px; width: 200px;"></textarea>
<p></p>
<textarea placeholder="Enter the event description here..." id="eventDescription"></textarea>
<p></p>
<button class="regularButton" onclick="addEvent()">Submit Event</button>

<script type = "module" defer>
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js'
    async function fetchAndDisplayBinaryHistory() {        
        try {
            fetch(pythonURI + "/api/binary-history",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Network response failed")
    })
    .then(data => {

            // Get the container where history will be displayed
            const historyContainer = document.getElementById('binary-history');

            // Clear any previous content
            historyContainer.innerHTML = '';

            // Display each event
            data.forEach((event) => {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');

                const title = document.createElement('h3');
                title.textContent = event["year"];

                const description = document.createElement('p');
                description.textContent = event.description;

                eventDiv.appendChild(title);
                eventDiv.appendChild(description);

                historyContainer.appendChild(eventDiv);
            });
    })
    .catch(error => {
      console.error("There was a problem with the fetch", error);
      });
            
        } catch (error) {
            console.error('Error fetching binary history:', error);
        }
    }
        fetchAndDisplayBinaryHistory()

    // Call the function to display the history when the page loads
        
        async function addEvent() {
            const year = document.getElementById('eventYear').value.trim();
            const description = document.getElementById('eventDescription').value.trim();

            if (!year || !description) {
                alert('Please fill in both the year and event description.');
                return;
            }

            const eventData = {
                year: parseInt(year, 10), 
                description: description, 
            };


try {
        fetch(pythonURI + "/api/binary-history",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData)

            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network response failed")
            })
            .then(data => {
                document.getElementById('eventYear').value = '';
                document.getElementById('eventDescription').value = '';
                fetchAndDisplayBinaryHistory()
            })
            .catch(error => {
                console.error("There was a problem with the fetch", error);
            });

    } catch (error) {
        console.error('Error fetching binary history:', error);
    }
            
}
        // Call the function to display the history when the page loads
        window.addEvent = addEvent;
    </script>
</body>
</html>