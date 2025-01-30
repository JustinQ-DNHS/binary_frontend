---
layout: page
title: Leaderboard
search_exclude: true
permalink: /leaderboard/
---

<script>

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

<script type= "module">
import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';

const scoresApi = `${pythonURI}/api/general/binaryScores`;

async function getHighestScoreForLevel(currentLevel) {
  try {
    const scoresResponse = await fetch(scoresApi, fetchOptions);
    if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
    const scores = await scoresResponse.json();

    const levelScores = userScores.filter((entry) => entry.user_difficulty === currentLevel);
    const highestScore = levelScores.length > 0 ? Math.max(...levelScores.map((entry) => entry.user_score)) : 0;

    updateHighScoreDisplay();
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
}