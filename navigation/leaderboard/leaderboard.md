---
layout: page
title: Player Analytics
permalink: /leaderboard/
---

{% comment %}
```html
{% endcomment %}

<html lang="en">
    <body>
        <table id="leaderboard">
        </table>

        <script type="module" src="{{site.baseurl}}/navigation/leaderboard/leaderboard.js"></script>
        <script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>
    </body>
</html>
<form id="userForm">
  <p>
    <label>Name:
      <input type="text" name="name" id="name" required>
    </label>
  </p>
  <p>
    <label>User ID:
      <input type="text" name="uid" id="uid" required>
    </label>
  </p>
  <p>
    <label>Password:
      <input type="password" name="password" id="password" required>
    </label>
    <label>Verify Password:
      <input type="password" name="passwordV" id="passwordV" required>
    </label>
  </p>
  <p>
    <label>Phone:
      <input type="tel" name="phone_num" id="phone_num" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="999-999-9999">
    </label>
  </p>
  <p>
    <label>Birthday:
      <input type="date" name="dob" id="dob">
    </label>
  </p>
  <p>
    <button type="submit">Create</button>
  </p>
</form>

<script type="module">
import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';

document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload on form submission

  // Get form field values
  const name = document.getElementById('name').value;
  const uid = document.getElementById('uid').value;
  const password = document.getElementById('password').value;
  const passwordV = document.getElementById('passwordV').value;
  const phone = document.getElementById('phone_num').value;
  const dob = document.getElementById('dob').value;

  // Ensure password verification
  if (password !== passwordV) {
    alert("Passwords do not match.");
    return;
  }

  const userData = {
    name,
    uid,
    password,
    phone,
    dob,
  };

  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    alert('User created successfully!');
    console.log('User created:', result);
  } catch (error) {
    console.error('Error creating user:', error);
    alert('Error creating user: ' + error.message);
  }
});
</script>

<script type="module">
import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';
   
  document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const uid = document.getElementById('uid').value;
    const password = document.getElementById('password').value;
    const passwordV = document.getElementById('passwordV').value;
    const phone = document.getElementById('phone_num').value;
    const dob = document.getElementById('dob').value;

    // Ensure password verification
    if (password !== passwordV) {
      alert('Passwords do not match!');
      return;
    }

    const userData = {
      name,
      uid,
      password,
      phone,
      dob,
    };

    try {
      const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Error creating user');

      const result = await response.json();
      alert('User created successfully!');
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create user: ' + error.message);
    }
  });
</script>

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
    <th>Actions</th>

  </tr>
  </thead>
  <tbody id="table">
    <!-- javascript generated data -->
  </tbody>
</table>


<script>
// Static json, this can be used to test data prior to API and Model being ready
const json = '[{"_name": "Jim", "_uid": "jim_is_the_best", "_GamesPlayed": "5", "_AverageScore": "5.0", "_Wins": "3", "_Losses": "2", "_HighestScore": "10"}, {"_name": "Tim", "_uid": "tim_10", "_GamesPlayed": "3", "_AverageScore": "3.0", "_Wins": "2", "_Losses": "1", "_HighestScore": "5"}, {"_name": "Bum", "_uid": "dum_bum", "_GamesPlayed": "7", "_AverageScore": "4.0", "_Wins": "4", "_Losses": "3", "_HighestScore": "7"}, {"_name": "Tum", "_uid": "tum123", "_GamesPlayed": "4", "_AverageScore": "4.5", "_Wins": "3", "_Losses": "1", "_HighestScore": "8"}]';

// Convert JSON string to JSON object
const data = JSON.parse(json);

// prepare HTML result container for new output
const table = document.getElementById("table");
data.forEach(user => {
    // build a row for each user
    const tr = document.createElement("tr");

    // td's to build out each column of data
    const name = document.createElement("td");
    const id = document.createElement("td");
    const GamesPlayed = document.createElement("td");
    const AverageScore = document.createElement("td");
    const Wins = document.createElement("td");
    const Losses = document.createElement("td");
    const HighestScore = document.createElement("td");
    const action = document.createElement("td");
           
    // add content from user data          
    name.innerHTML = user._name; 
    id.innerHTML = user._uid; 
    GamesPlayed.innerHTML = user._GamesPlayed; 
    AverageScore.innerHTML = user._AverageScore;
    Wins.innerHTML = user._Wins; 
    Losses.innerHTML = user._Losses;
    HighestScore.innerHTML = user._HighestScore;
    action.innerHTML = user._action;

    // add action for update button
    var updateBtn = document.createElement('input');
    updateBtn.type = "button";
    updateBtn.className = "button";
    updateBtn.value = "Update";
    updateBtn.style = "margin-right:16px";
    updateBtn.onclick = function () {
      alert("Update: " + user._uid);
    };
    action.appendChild(updateBtn);

    // add action for delete button
    var deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.className = "button";
    deleteBtn.value = "Delete";
    deleteBtn.style = "margin-right:16px"
    deleteBtn.onclick = function () {
      alert("Delete: " + user._uid);
    };
    action.appendChild(deleteBtn);  

    // add data to row
    tr.appendChild(name);
    tr.appendChild(id);
    tr.appendChild(GamesPlayed);
    tr.appendChild(AverageScore);
    tr.appendChild(Wins);
    tr.appendChild(Losses);
    tr.appendChild(HighestScore);
    tr.appendChild(action);


    // add row to table
    table.appendChild(tr);
});

const apiBaseUrl = 'http://127.0.0.1:8887/api/firstPlaceLeaderboard';

async function fetchLeaderboard() {
    try {
        const response = await fetch('${pythonURI}/api/firstPlaceLeaderboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch leaderboard: ' + response.statusText);
        }

        const leaderboard = await response.json();
        const leaderboardContainer = document.getElementById('leaderboard');
        
        // Clear the container before appending data
        leaderboardContainer.innerHTML = '';

        leaderboard.forEach(player => {
            // Create a row for each player
            const row = document.createElement('tr');

            row.innerHTML = `
                <td class="border px-4 py-2">${player.name}</td>
                <td class="border px-4 py-2">${player.games_played}</td>
                <td class="border px-4 py-2">${player.average_score}</td>
                <td class="border px-4 py-2">${player.wins}</td>
                <td class="border px-4 py-2">${player.losses}</td>
                <td class="border px-4 py-2">${player.highest_score}</td>
            `;

            leaderboardContainer.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
    }
}
</script>