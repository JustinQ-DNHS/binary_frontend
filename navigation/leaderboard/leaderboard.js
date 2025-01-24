import { pythonURI, fetchOptions } from '../../assets/js/api/config.js';

const scoresApi = `${pythonURI}/api/firstPlaceLeaderboard`;
console.log(scoresApi);

// Function to sort players by score in descending order
function sortLeaderboard(data) {
    const array = data.map(item => ({ name: item.username, score: item.user_score }));
    return array.sort((a, b) => b.score - a.score);
}

// Function to display the leaderboard on the webpage
function displayLeaderboard(players) {
    // Get the leaderboard container from the DOM
    const leaderboardContainer = document.getElementById('leaderboard');
    if (!leaderboardContainer) {
        console.error('Leaderboard container not found in the DOM.');
        return;
    }

    // Clear any existing content in the leaderboard container
    leaderboardContainer.innerHTML = '';

    // Create a title for the leaderboard
    const title = document.createElement('h2');
    title.textContent = 'Leaderboard:';
    leaderboardContainer.appendChild(title);

    // Create an ordered list to display players
    const ol = document.createElement('ol'); // Ordered list

    // Loop through the players and add them as list items
    players.forEach((player) => {
        const li = document.createElement('li');
        li.textContent = `${player.name} - ${player.score} points`;
        ol.appendChild(li);
    });

    // Append the list to the leaderboard container
    leaderboardContainer.appendChild(ol);
}

// Function to create a leaderboard table
function createLeaderboard(sortedPlayers) {
    const table = document.getElementById('leaderboard-table');
    if (!table) {
        console.error('Leaderboard table not found in the DOM.');
        return;
    }

    // Clear existing rows in the table
    table.innerHTML = '';

    // Add rows for the top 10 players
    for (let i = 0; i < Math.min(sortedPlayers.length, 10); i++) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdScore = document.createElement('td');
        tdName.textContent = sortedPlayers[i].name;
        tdScore.textContent = sortedPlayers[i].score;
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
        table.appendChild(tr);
    }
}

// Fetch scores and display leaderboard for a specific level
async function getHighestScoreForLevel(currentLevel) {
    const scoresApi = `${pythonURI}/api/firstPlaceLeaderboard`;
    try {
        const scoresResponse = await fetch(scoresApi, fetchOptions);
        if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
        const scores = await scoresResponse.json();

        const difficultyScores = scores.filter((entry) => entry.user_difficulty === currentLevel);
        return difficultyScores;
    } catch (error) {
        console.error('Error fetching scores:', error);
        return [];
    }
}

async function getSortedScoresForLevel(currentLevel) {
    const data = await getHighestScoreForLevel(currentLevel);
    const sortedData = sortLeaderboard(data);
    displayLeaderboard(sortedData);
    createLeaderboard(sortedData);
}

// Initialize leaderboard for "easy" level
getSortedScoresForLevel('easy');
