---
layout: page
title: Leaderboard
search_exclude: true
permalink: /leaderboard/
---
<table id="leaderboard">
</table>


<script>

// Sample data: array of player objects with names and scores
const players = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 150 },
    { name: 'Diana', score: 95 }
];

// Function to sort players by score in descending order
function sortLeaderboard(players) {
    return players.sort((a, b) => b.score - a.score);
}

// Function to display the leaderboard on the webpage
function displayLeaderboard(players) {
    // Get the leaderboard container from the DOM
    const leaderboardContainer = document.getElementById('leaderboard');

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

// Function to display the leaderboard
function displayLeaderboard(players) {
    console.log('Leaderboard:');
    players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name} - ${player.score} points`);
    });
}

// Sort and display the leaderboard
const sortedPlayers = sortLeaderboard(players);
displayLeaderboard(sortedPlayers);

function createLeaderboard() {
    const table = document.getElementById("leaderboard")
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr")
        const tdName = document.createElement("td")
        const tdScore = document.createElement("td")
        tdName.innerHTML = sortedPlayers[i].name
        tdScore.innerHTML = sortedPlayers[i].score
        tr.append(tdName)
        tr.append(tdScore)
        table.append(tr)
    }
}
createLeaderboard()
</script> 

