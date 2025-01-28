---
layout: page
permalink: /logicgame
---

<html lang="en">

<head>
  <link rel="stylesheet" type="text/css" href="{{site.baseurl}}/navigation/logicgatesgame/logicgates.py">
</head>

<body>

  <br>
  <div>
    <table style="width: 100%; text-align: center; border-collapse: separate; border-spacing: 10px;">
            <tr>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/or/" class="button">OR</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/and/" class="button">AND</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/xor/" class="button">XOR</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/nand/" class="button">NAND</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/nor/" class="button">NOR</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/xnor/" class="button">XNOR</a></td>
            </tr>
        </table>
  </div>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background: linear-gradient(150deg, #acdfec, #50b2cb, #1d7d96, #124c6c); /* 180deg for top-to-bottom gradient */
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

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logic Gates Lesson</title>
    <style>
        h1 {
            color: blue;
            font-family: Arial, sans-serif; 
            text-align: center;
        }
        h4 {
            color: white;
            font-family: Arials, sans-serif;
            text-align: center
        }
        td {
            background-color: transparent !important; /* Remove background color */
            padding: 0 !important; /* Remove padding */
            border: none !important; /* Remove borders from table cells */
        }
        .button {
            background-color: black; /* Light red */
            color: white !important; /* White text */
            text-decoration: none;
            font-weight: bold;
            font-family: Arial, sans-serif;
            display: inline-block;
            padding: 15px 20px;
            border-radius: 20px;
            transition: transform 0.2s ease, background-color 0.2s ease;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>Welcome to the Logic Gates 123 Lesson!</h1>
    <h4>Input your name and score to save them!</h4>
</body>
</html>


<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="score">Score</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="text" score="score" id="score" required></td>
        <td><button onclick="create_User()">Create</button></td>
    </tr>
</table>

<!-- Button to fetch and display data -->
<button onclick="fetch_Data()">View other scores</button>

<!-- Table to display fetched data -->
<table id="dataTable" border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Action</th> <!-- This column is for the Delete button -->
        </tr>
    </thead>
    <tbody>
        <!-- Data rows dynamically added here -->
    </tbody>
</table>

<script>
async function create_User() {
    const name = document.getElementById("name").value;
    const score = document.getElementById("score").value;

    if (!name || !score) {
        alert("Please fill in both fields!");
        return;
    }

    const data = { name, score };

    try {
        const response = await fetch("http://127.0.0.1:8887/api/lgate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Data saved successfully!");
            console.log(result); // Optional: Log the response
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to the server.");
    }
}

async function fetch_Data() {
    try {
        // Reference the table body
        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = ""; // Clear any existing rows

        // Fetch data from the backend
        const response = await fetch("http://127.0.0.1:8887/api/lgate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();

            // Loop through the data to populate rows
            data.forEach((item) => {
                const row = document.createElement("tr");

                // Add Name cell
                const nameCell = document.createElement("td");
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                // Add Score cell
                const scoreCell = document.createElement("td");
                scoreCell.textContent = item.score;
                row.appendChild(scoreCell);

                // Add Action cell with delete button
                const actionCell = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.onclick = () => delete_User(item.id); // Pass the ID to the delete function
                actionCell.appendChild(deleteButton);
                row.appendChild(actionCell);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        } else {
            console.error("Failed to fetch data:", await response.text());
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function delete_User(userId) {
    if (!confirm("Are you sure you want to delete this user?")) {
        return; // Cancel the deletion if the user doesn't confirm
    }

    try {
        const response = await fetch("http://127.0.0.1:8887/api/lgate", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userId }), // Send the ID to delete
        });

        const result = await response.json();

        if (response.ok) {
            alert("User deleted successfully!");
            fetch_Data(); // Refresh the table after deletion
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to delete the user.");
    }
}


async function update_User(userId) {
    const newName = prompt("Enter the new name:");
    const newScore = prompt("Enter the new score:");

    if (!newName || !newScore) {
        alert("Both fields are required!");
        return;
    }

    const data = { id: userId, name: newName, score: newScore };

    try {
        const response = await fetch("http://127.0.0.1:8887/api/lgate", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("User updated successfully!");
            fetch_Data(); // Refresh the table to show updated data
         } else {
            const result = await response.json();
            alert(`Error updating user: ${result.error}`);
         }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to update the user.");
    }
}

</script>