---
layout: page
title: Binary Game Blog
permalink: /binaryGame/blog
---

## My Purpose

#### The purpose of our group code is to create a site to teach future students and peers:
- We will teach how non base-10 numbering systems work
- We will explain how different logic systems work, and their names (ex. Xor gate)
- We will create a space for students to work together through chats in order to gain understanding

#### The purpose of my code is to:
- Provide a fun learning experience
- Practice simple problems of converting binary to decimal
- Ramp up to higher difficulties for more experienced students
- Challange the user to grow in their understanding of non base-10 numbering systems

## Input and Output

#### Input:
<br>
- One example of an input feature in my code is my post request that is sent to the backend:
    ```javascript
    async function createScores(inputName, inputScore, inputDifficulty) {

        const scoreData = {
            username: inputName,
            score: inputScore,
            difficulty: inputDifficulty,
        };

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to submit score: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Score submitted:', result);
        } catch (error) {
            console.error('Error submitting score:', error);
            alert('Error submitting score: ' + error.message);
        }
    }
    ```
- First the code takes in parameters of the name, score, and difficulty of the just played game
- Next the code formats that into a dictionary to be sent to the backend
- Then the code sends a post request to the api demonstrating input to the database
- The remaining code is simply getting the returned result and printing that out and also logging errors

#### Output
<br>
- One example of my output is my get request to retrieve data stored in the database:
    ```javascript
    async function readScores() {
    try {
        const scoresResponse = await fetch(`${pythonURI}/api/binaryLearningGameScores`, fetchOptions);
        if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
        const scores = await scoresResponse.json();

        return(scores);

        } catch (error) {
        console.error('Error fetching scores:', error);
        return null;
        }
    }
    ```
- First, the code sends a http request to the specified URL
- Then the code checks for errors
- Then it parses the response body as JSON
- Then it returnes the response demonstrating output from a function
- The rest of the code is checking for errors


## List Requests

- I use dictionaries and lists in my table that shows all of the scores from the database:
    ```javascript
        async function getScoreTableData() {

            const scores = await readScores();

            let userScores = scores;

            if (!isUserAdmin) {
                userScores = scores.filter((entry) => String(entry.username) === String(userName));
            }
            else {
                userScores = scores;
            }

            let table;

            if (isUserAdmin) {
                table = document.getElementById("admin-table");
            }
            else {
                table = document.getElementById("table");
            }

            // Clear the table before adding new rows
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }

            userScores.forEach(score => {
                // build a row for each user
                const tr = document.createElement("tr");

                // td's to build out each column of data
                let usernamesTable;
                if (isUserAdmin) {
                usernamesTable = document.createElement("td");
                }
                const scores = document.createElement("td");
                const difficulty = document.createElement("td");
                const action = document.createElement("td");
                    
                // add content from user data
                if (isUserAdmin){
                usernamesTable.innerHTML = score.username;
                }          
                scores.innerHTML = score.user_score; 
                difficulty.innerHTML = score.user_difficulty; 

                // add action for update button if it is an admin
                if (isUserAdmin) {
                var updateBtn = document.createElement('input');
                updateBtn.type = "button";
                updateBtn.className = "button";
                updateBtn.value = "Update";
                updateBtn.style = "margin-right:16px";
                updateBtn.onclick = function () {
                    let updatedScore = prompt("Updated score");
                    while (true) {
                    if (isNaN(updatedScore)) {
                        updatedScore = prompt("Please enter a number");
                    }
                    else if (updatedScore < 0) {
                        updatedScore = prompt("Please enter a number above 0");
                    }
                    else {
                        break
                    }
                    }
                    let updatedDifficulty = prompt("Updated difficulty");
                    while (true) {
                    if (updatedDifficulty == "easy" || updatedDifficulty == "medium" || updatedDifficulty == "hard" || updatedDifficulty == "extreme" || updatedDifficulty == "") {
                        break
                    }
                    else {
                        updatedDifficulty = prompt("please enter a valid difficulty");
                    }
                    }
                    updateScores(score.id, updatedScore, updatedDifficulty);
                    getScoreTableData();
                };
                action.appendChild(updateBtn);
                }

                // add action for delete button
                var deleteBtn = document.createElement('input');
                deleteBtn.type = "button";
                deleteBtn.className = "button";
                deleteBtn.value = "Delete";
                deleteBtn.style = "margin-right:16px"
                deleteBtn.onclick = function () {
                deleteScores(score.id);
                getScoreTableData();
                };
                action.appendChild(deleteBtn);  

                // add data to row
                if (isUserAdmin) {
                tr.appendChild(usernamesTable);
                }
                tr.appendChild(scores);
                tr.appendChild(difficulty);
                tr.appendChild(action);

                // add row to table
                table.appendChild(tr);
            });
        }
    ```
- This code demonstrates how I extracted information from the database
- I used this data to make a function that built a row for each column of data demonstrating dictionaries
- With this data I build rows for each user demonstrating lists
- Both of these corrospond to the information on the database by showing rows of users and thier data, with each different set on a different column

## Algorithmic Code Request

#### Demonstration of sequencing, selection, and iteration

- A good example of code that both sequencing and selection is my put request function:
    ```javascript
    async function updateScores(inputId, inputScore, inputDifficulty) {
        const scoreData = {
            id: inputId,
            user_score: inputScore,
            user_difficulty: inputDifficulty
        }

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to update score: ${response.statusText}`);
            }

            updatedData = await response.json();
            return updatedData;
        } 
    
        catch (error) {
            if (error = "Forbidden") {
            alert("You do not have access to perform that function");
            }
            else {
            console.error('Error updating score:', error);
            alert('Error updating score: ' + error.message);
            }
        }
    }
    ```
- This code demonstrates sequencing by ordering the code in a top to bottom order to run
- I made sure to define my variables and below change and use those variables demonstrating sequencing
- I also used Selection by defining where the code goes
- This is shown through my error catching if-statements that define how the code runs if there is an error
- I also demonstrate sequencing when I call this function in the getScoresToTable function:
    ```javascript
    let updatedScore = prompt("Updated score");
    while (true) {
        if (isNaN(updatedScore)) {
        updatedScore = prompt("Please enter a number");
        }
        else if (updatedScore < 0) {
        updatedScore = prompt("Please enter a number above 0");
        }
        else {
        break
        }
    }
    let updatedDifficulty = prompt("Updated difficulty");
    while (true) {
        if (updatedDifficulty == "easy" || updatedDifficulty == "medium" || updatedDifficulty == "hard" || updatedDifficulty== "extreme" || updatedDifficulty == "") {
        break
        }
        else {
        updatedDifficulty = prompt("please enter a valid difficulty");
        }
    }
    updateScores(score.id, updatedScore, updatedDifficulty);
    ```
- The code goes through two different while loops that will only break if the user inputs the correct data
- Then after going through this process of iteration the code will then execute the updateScores function which will update the data with what the user has just entered

#### parameters and return type

- The updateScores function will take 3 different parameters
    - The score id so that the api will know which data to update
    - The updated score that will replace the previous score
    - The updated difficulty that will replace the precious difficulty

- The updateScores function will return the data of the newly updated score as evidence that the process has run smoothly without errors

## Call to Algorithm Request
- A good example of this is my delete scores function:
    ```javascript
    async function deleteScores(inputId) {

        const scoreData = {
            id: inputId
        }

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'DELETE',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to delete score: ${response.statusText}`);
            }
        } 
        
        catch (error) {
            console.error('Error deleting score:', error);
            alert('Error deleting score: ' + error.message);
        }
    }
    ```
- This function is then called when the user presses the delete button on the scores table
    ```javascript
    deleteBtn.onclick = function () {
      deleteScores(score.id);
      getScoreTableData();
    };
    ```
- With the deleteScores function I handle this data by sending a request to the api, giving it the score id from the parameter of the function.
- Then if the data produces an error, such as the score id not being an integer or some code error in the backend or frontend, the code will adapt and change.
    - Becuase the function is using a try and catch statement, an error will trigger the catch statement, which will safely report the error without crashing everything.