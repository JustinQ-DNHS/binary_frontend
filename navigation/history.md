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
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .event {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .event h3 {
            margin: 0;
        }
    </style>
</head>
<body>
    <div id="binary-history"></div>

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
                title.textContent = event.event_year;

                const description = document.createElement('p');
                description.textContent = event.event_description;

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
</script>
</body>
</html>