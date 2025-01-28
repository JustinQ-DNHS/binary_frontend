---
layout: page
title: Binary History Reflection Blog
permalink: /binary_history/blog
---

## Purpose

#### The purpose of our group code is to create a site to teach future students and peers:
- We will teach how non base-10 numbering systems work
- We will explain how different logic systems work, and their names (ex. Xor gate)
- We will create a space for students to work together through chats in order to gain understanding

#### The purpose of my code is to:
- Provide a timeline of the history of binary
- Allow users to learn about an essential part of history
- Let users share their own knowledge about events related to the history of binary

## Input and Output

#### Input:
- One example of an input feature in my code is me clickling on the "Submit Event" button and the site sending my event year and description to my database.

```
button class="regularButton" onclick="addEvent()"> Submit Event /button> //Runs the addEvent function when clicked

async function addEvent() { // Define an async function to add an event
        const year = document.getElementById('eventYear').value.trim(); // Get year value from input
        const description = document.getElementById('eventDescription').value.trim(); 
        // Get description value from input

        if (!year || !description) {
            alert('Please fill in both the year and event description.'); // Alert if inputs are invalid
            return;
        }

        const eventData = { // Create an object with the event data
            year: parseInt(year, 10), // Parses year as an integer
            description: description, // Add description
        };

        try {
            fetch(pythonURI + "/api/binary-history", { // Send a POST request to add the event
                method: "POST", // Use POST method
                headers: {
                    "Content-Type": "application/json", // Set request headers
                },
                body: JSON.stringify(eventData) // Send event data in the body of the request
            })
            .then(response => { // Handle the response
                if (response.ok) {
                    alert("Saved successfully!"); // Check if the response is there
                    return response.json(); // Parse the JSON if response is there
                }
                throw new Error("Network response failed"); // Handle error if response is not there
            })
            .then(data => { // Process the response data
                document.getElementById('eventYear').value = ''; // Clear the input fields
                document.getElementById('eventDescription').value = '';
                fetchAndDisplayBinaryHistory(); // Refresh the displayed history
            })
            .catch(error => { // Handle any errors during fetch
                console.error("There was a problem with the fetch", error);
            });

        } catch (error) { // Handle any errors during the function execution
            console.error('Error fetching binary history:', error);
        }
    }
```

- Comments about functionality are included within the code

#### Output

- One example of my output is my get request to retrieve data stored in the database:
    ```
    async function fetchAndDisplayBinaryHistory() { 
        try {
            fetch(pythonURI + "/api/binary-history", // Fetch binary history from the given URI
            {
                method: "GET", // Use GET method
                headers: {
                    "Content-Type": "application/json", // Set request headers
                }
            })
            .then(response => { // Handle the response
                if (response.ok) {
                    return response.json(); // Parse the JSON if the response is there
                }
                throw new Error("Network response failed"); // Handle error if response is not there
            })
            .then(data => { // Process the received data

                // Sort events from oldest year to newest year
                data.sort((a, b) => a.year - b.year);

                // Get the container where history will be displayed
                const historyContainer = document.getElementById('binary-history');

                // Clear any previous content
                historyContainer.innerHTML = '';

                // Display each event
                data.forEach((event) => { // Iterate through each event in the data
                    const eventDiv = document.createElement('div'); // Create a div for each event
                    eventDiv.classList.add('event'); // Add a class for styling

                    const title = document.createElement('h3'); // Create element for the year
                    title.textContent = event["year"]; // Set the year as text content

                    const description = document.createElement('p'); // Create element for description
                    description.textContent = event.description; // Set description as text content

                    eventDiv.appendChild(title); // Append title to the event div
                    eventDiv.appendChild(description); // Append description to the event div

                    historyContainer.appendChild(eventDiv); // Append the event div to the container
                });
            })
            .catch(error => { // Handle any errors during fetch
                console.error("There was a problem with the fetch", error);
            });
            
        } catch (error) { // Handle any errors during the function execution
            console.error('Error fetching binary history:', error);
        }
    }

    fetchAndDisplayBinaryHistory(); //Calls the function and runs it without any preset parameters
```
```

- When I post a new event into postman, the event shows up inside of the database, categorized by year and description
- When I run db_init it initializes the database, when I run db_restore it restores the data previously in the databse, and when I run db_backup it backs up the data to the backup databse

## List Requests

- I use lists in my table that iterates through and shows all of the events from the database:
    
```
    data.sort((a, b) => a.year - b.year); // Sort events by year in ascending order

data.forEach((event) => { // Iterate through the list of events
    const eventDiv = document.createElement('div'); // Create a div for each event
    eventDiv.classList.add('event'); // Add a class for styling

    const title = document.createElement('h3'); // Display year
    title.textContent = event["year"];

    const description = document.createElement('p'); // Display description
    description.textContent = event.description;

    eventDiv.appendChild(title); 
    eventDiv.appendChild(description);
    historyContainer.appendChild(eventDiv); 
});
```

#### Dictionaries and database iteration

- Each object is represented as a python dictionary (JSON Format) with the key-value pairs "year" and "description"
- It is imported from a third party library which is SQAlchemy, used to interact with the database from binary_backend

```
const eventData = { 
    year: parseInt(year, 10), // Key-value pair for year
    description: description, // Key-value pair for description
};
```

#### Methods in class

 - I have a binary history class in my backend model to run CRUD operations:

```
class BinaryHistory(db.Model):
def create(self):
        """
        Adds the event to the database and commits the transaction.
        """
        try:
            db.session.add(self)
            db.session.commit()
        except SQLAlchemyError as e:
            db.session.rollback()
            raise e

    def read(self):
        """
        Returns the event details as a dictionary.
        """
        return {
            "id": self.id,
            "year": self.year,
            "description": self.description,
        }

    def update(self, data):
        """
        Updates the event with new data and commits the changes.
        """
        for key, value in data.items():
            if hasattr(self, key):
                setattr(self, key, value)
        try:
            db.session.commit()
        except SQLAlchemyError as e:
            db.session.rollback()
            raise e

    def delete(self):
        """
        Deletes the event from the database and commits the transaction.
        """
        try:
            db.session.delete(self)
            db.session.commit()
        except SQLAlchemyError as e:
            db.session.rollback()
            raise e
```

## Algorithmic Code Request

#### Code blocks to handle requests

- My addEvent() function is a good example of a code block that can handle requests:

```
async function addEvent() { // Define an async function to add an event
        const year = document.getElementById('eventYear').value.trim(); // Get year value from input
        const description = document.getElementById('eventDescription').value.trim(); 
        // Get description value from input

        if (!year || !description) {
            alert('Please fill in both the year and event description.'); // Alert if inputs are invalid
            return;
        }

        const eventData = { // Create an object with the event data
            year: parseInt(year, 10), // Parse year as an integer
            description: description, // Add description
        };

        try {
            fetch(pythonURI + "/api/binary-history", { // Send a POST request to add the event
                method: "POST", // Use POST method
                headers: {
                    "Content-Type": "application/json", // Set request headers
                },
                body: JSON.stringify(eventData) // Send event data in the body of the request
            })
            .then(response => { // Handle the response
                if (response.ok) {
                    alert("Saved successfully!"); // Check if the response is there
                    return response.json(); // Parse the JSON if response is there
                }
                throw new Error("Network response failed"); // Handle error if response is not there
            })
            .then(data => { // Process the response data
                document.getElementById('eventYear').value = ''; // Clear the input fields
                document.getElementById('eventDescription').value = '';
                fetchAndDisplayBinaryHistory(); // Refresh the displayed history
            })
            .catch(error => { // Handle any errors during fetch
                console.error("There was a problem with the fetch", error);
            });

        } catch (error) { // Handle any errors during the function execution
            console.error('Error fetching binary history:', error);
        }
    }
```

#### Demonstration of sequencing, selection, and iteration

- A good example of code that both sequencing and selection is:

    ```
    data.forEach((event) => { // Iterate through each event in the data
                    const eventDiv = document.createElement('div'); // Create a div for each event
                    eventDiv.classList.add('event'); // Add a class for styling

                    const title = document.createElement('h3'); // Create element for the year
                    title.textContent = event["year"]; // Set the year as text content

                    const description = document.createElement('p'); // Create element for description
                    description.textContent = event.description; // Set description as text content

                    eventDiv.appendChild(title); // Append title to the event div
                    eventDiv.appendChild(description); // Append description to the event div

                    historyContainer.appendChild(eventDiv); // Append the event div to the container
                });
    ```
- Comments explain how the code iterates through each of the events in the data table

    ```
    data.sort((a, b) => a.year - b.year);
    ```
- This code sequences the data extracted from the databse so it is in ascending order by year

#### Parameters and return type

- The fetchAndDisplayBinaryHistory() function will take 2 different parameters
    - The year of the event, which acts as the key
    - The description of the event, which is the value pair for the year

- The function will return all of the events in their year-description pair in sequential order as evidence that the process has run smoothly without errors

## Call to Algorithm Request
- A good example of this is my get method in fetchAndDisplayBinaryHistory():
    ```
    fetch(pythonURI + "/api/binary-history", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
.then(response => {
    if (response.ok) return response.json();
    throw new Error("Network response failed");
});
    ```
- Uses the GET method on the "/api/binary-history" resource in binary_backend to retrieve the events saved in the database
- If there is a response it will allow the response to be converted into JSON format and be used in the frontend code
- If there is not a response it will raise an error that is logged onto the console and shown to the user

_________________________________________________________________________________________________________________________________________________________________________

<button><a href="{{site.baseurl}}/binary_history">Return to Binary History</a></button>