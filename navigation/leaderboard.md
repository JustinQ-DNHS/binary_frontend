---
layout: page
title: Leaderboard
search_exclude: true
permalink: /about/
---

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
</script> 
