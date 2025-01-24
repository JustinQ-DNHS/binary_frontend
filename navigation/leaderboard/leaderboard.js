import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';

async function readScores() {
  try {
    const data = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, fetchOptions);
    if (!data.ok) throw new Error('Failed to fetch scores');
    const scores = await data.json();

    console.log(scores);

    return(scores);

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


window.onload = function () {
    readScores();
};


async function createData(inputName, inputScore, inputDifficulty) {

  const scoreData = {
    username: inputName,
    score: inputScore,
    difficulty: inputDifficulty,
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
    console.log('Data submitted:', result);
  } catch (error) {
    console.error('Error submitting dat:', error);
    alert('Error submitting data: ' + error.message);
  }
}





async function deleteScores(inputId) {

  const scoreData = {
    id: inputId
  }

  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
      ...fetchOptions,
      method: 'DELETE',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete data: ${response.statusText}`);
    }
  } 
  
  catch (error) {
    console.error('Error deleting data:', error);
    alert('Error deleting data: ' + error.message);
  }
}




async function updateScores(inputId, inputScore, inputDifficulty) {
  const scoreData = {
    id: inputId,
    user_score: inputScore,
    user_difficulty: inputDifficulty
  }

  try {
    const response = await fetch(`${pythonURI}/api/firstPlaceLeaderboard`, {
      ...fetchOptions,
      method: 'PUT',
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update data: ${response.statusText}`);
    }
  } 
  
  catch (error) {
    if (error = "Forbidden") {
      alert("You do not have access to perform that function");
    }
    else {
      console.error('Error updating data:', error);
      alert('Error updating data: ' + error.message);
    }
  }
}
