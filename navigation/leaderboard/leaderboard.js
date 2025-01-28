import { pythonURI, fetchOptions } from '../../assets/js/api/config.js';

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
