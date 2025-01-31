import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';

/** 
 * READ: Fetch and display scores 
 */
async function readScores() {
  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, fetchOptions);

    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }

    const scores = await response.json();
    console.log('Fetched scores:', scores);

    const tableBody = document.getElementById('scoresTableBody');
    tableBody.innerHTML = ''; // Clear previous rows

    scores.forEach(score => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${score.username}</td>
        <td>${score.user_id}</td>
        <td>${score.user_games_played}</td>
        <td>${score.user_average_score}</td>
        <td>${score.user_wins}</td>
        <td>${score.user_losses}</td>
        <td>${score.user_highest_score}</td>
      `;
      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error('Error fetching scores:', error);
  }
}

/**
 * CREATE: Submit new score data
 */
async function createData(username, userId, gamesPlayed, averageScore, wins, losses, highestScore) {
  const scoreData = {
    username,
    user_id: userId,
    user_games_played: gamesPlayed,
    user_average_score: averageScore,
    user_wins: wins,
    user_losses: losses,
    user_highest_score: highestScore,
  };

  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
      ...fetchOptions,
      method: 'POST',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit data: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Data submitted successfully:', result);

  } catch (error) {
    console.error('Error submitting data:', error);
    alert('Error submitting data: ' + error.message);
  }
}

/**
 * UPDATE: Modify existing score data
 */
async function updateScores(username, userId, gamesPlayed, averageScore, wins, losses, highestScore) {
  const scoreData = {
    username,
    user_id: userId,
    user_games_played: gamesPlayed,
    user_average_score: averageScore,
    user_wins: wins,
    user_losses: losses,
    user_highest_score: highestScore,
  };

  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
      ...fetchOptions,
      method: 'PUT',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update data: ${response.statusText}`);
    }

    console.log('Data updated successfully');

  } catch (error) {
    if (error.message.includes('Forbidden')) {
      alert('You do not have access to perform that function');
    } else {
      console.error('Error updating data:', error);
      alert('Error updating data: ' + error.message);
    }
  }
}

/**
 * DELETE: Remove score data by ID
 */
async function deleteScores(scoreId) {
  const scoreData = { id: scoreId };

  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
      ...fetchOptions,
      method: 'DELETE',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete data: ${response.statusText}`);
    }

    console.log('Data deleted successfully');

  } catch (error) {
    console.error('Error deleting data:', error);
    alert('Error deleting data: ' + error.message);
  }
}


document.getElementById('getAllLeaderboardButton').addEventListener('click', async () => {
    const tableBody = document.getElementById('leaderboardTable');
    try {
        const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`);
        const data = await response.json();
        tableBody.innerHTML = ''; // Clear existing rows
        data.forEach(entry => {
            const tr = document.createElement('tr');
            const idCell = document.createElement('td');
            const usernameCell = document.createElement('td');
            const gamesPlayedCell = document.createElement('td');
            const averageScoreCell = document.createElement('td');
            const winsCell = document.createElement('td');
            const lossesCell = document.createElement('td');
            const highestScoreCell = document.createElement('td');
            const actionCell = document.createElement('td');

            idCell.innerText = entry.id;
            usernameCell.innerText = entry.username;
            gamesPlayedCell.innerText = entry.user_games_played;
            averageScoreCell.innerText = entry.average_score;
            winsCell.innerText = entry.wins;
            lossesCell.innerText = entry.losses;
            highestScoreCell.innerText = entry.highest_score;

            // Create Update button
            const updateBtn = document.createElement('button');
            updateBtn.innerText = 'Update';
            updateBtn.onclick = () => updateEntry(entry.id);
            // Create Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.onclick = () => deleteEntry(entry.id);

            actionCell.appendChild(updateBtn);
            actionCell.appendChild(deleteBtn);

            tr.appendChild(idCell);
            tr.appendChild(usernameCell);
            tr.appendChild(gamesPlayedCell);
            tr.appendChild(averageScoreCell);
            tr.appendChild(winsCell);
            tr.appendChild(lossesCell);
            tr.appendChild(highestScoreCell);
            tr.appendChild(actionCell);

            tableBody.appendChild(tr);
        });
    } catch (error) {
        resultContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
});

document.getElementById('createLeaderboardEntryButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const gamesPlayed = document.getElementById('gamesPlayed').value;
    const averageScore = document.getElementById('averageScore').value;
    const wins = document.getElementById('wins').value;
    const losses = document.getElementById('losses').value;
    const highestScore = document.getElementById('highestScore').value;
    const resultContainer = document.getElementById('resultContainer');

    if (!username || !gamesPlayed || !averageScore || !wins || !losses || !highestScore) {
        resultContainer.innerHTML = `<p>Please fill in all fields.</p>`;
        return;
    }

    try {
        const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                games_played: parseInt(gamesPlayed),
                average_score: parseFloat(averageScore),
                wins: parseInt(wins),
                losses: parseInt(losses),
                highest_score: parseInt(highestScore)
            })
        });
        const data = await response.json();
        if (response.ok) {
            resultContainer.innerHTML = `<p>Entry created: ${data.username}</p>`;
            document.getElementById('getAllLeaderboardButton').click(); // Refresh the list
        } else {
            resultContainer.innerHTML = `<p>Error: ${data.error}</p>`;
        }
    } catch (error) {
        resultContainer.innerHTML = `<p>Error creating entry: ${error.message}</p>`;
    }
});

function deleteEntry(entryId) {
    const resultContainer = document.getElementById('resultContainer');
    fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: entryId })
    })
    .then(response => {
        if (response.ok) {
            resultContainer.innerHTML = `<p>Entry deleted successfully.</p>`;
            document.getElementById('getAllLeaderboardButton').click(); // Refresh the list
        } else {
            return response.json().then(data => {
                throw new Error(data.error);
            });
        }
    })
    .catch(error => {
        resultContainer.innerHTML = `<p>Error deleting entry: ${error.message}</p>`;
    });
}

function updateEntry(entryId) {
    const newGamesPlayed = prompt("Enter new games played:");
    const newAverageScore = prompt("Enter new average score:");
    const newWins = prompt("Enter new wins:");
    const newLosses = prompt("Enter new losses:");
    const newHighestScore = prompt("Enter new highest score:");

    if (newGamesPlayed && newAverageScore && newWins && newLosses && newHighestScore) {
        fetch(`http://127.0.0.1:8887/api/firstPlaceLeaderboard`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: entryId,
                games_played: parseInt(newGamesPlayed),
                average_score: parseFloat(newAverageScore),
                wins: parseInt(newWins),
                losses: parseInt(newLosses),
                highest_score: parseInt(newHighestScore)
            })
        })
        .then(response => response.json())
        .then(data => {
            const resultContainer = document.getElementById('resultContainer');
            if (data) {
                resultContainer.innerHTML = `<p>Entry updated successfully: ${data.username}</p>`;
                document.getElementById('getAllLeaderboardButton').click(); // Refresh the list
            }
        })
        .catch(error => {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = `<p>Error updating entry: ${error.message}</p>`;
        });
    }
}


document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload on form submission

  // Get form field values
  const name = document.getElementById('name').value;
  const uid = document.getElementById('uid').value;
  const GamesPlayed = document.getElementById('games played').value;
  const AverageScore = document.getElementById('average score').value;
  const Wins = document.getElementById('wins').value;
  const Losses = document.getElementById('losses').value;
  const HighestScore = document.getElementById('highest score').value;


  const userData = {
    name,
    uid,
    GamesPlayed,
    AverageScore,
    Wins,
    Losses,
    HighestScore,
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

    const apiBaseUrl = 'http://127.0.0.1:8887/api/firstPlaceLeaderboard';

async function deleteUserFromLeaderboard(userId) {
  try {
    const response = await fetch('${pythonURI}/api/firstPlaceLeaderboard', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userId })
    });

    if (!response.ok) {
      throw new Error('Failed to delete user: ' + response.statusText);
    }

    const result = await response.json();
    console.log('User successfully deleted:', result);
    alert('User successfully deleted');
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Error deleting user: ' + error.message);
  }
}


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


