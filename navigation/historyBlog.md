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

#### Input and Output:

``` javascript
    <textarea placeholder="Enter the year" id="eventYear" style="height: 30px; width: 200px;"></textarea>
    <p></p>
    <textarea placeholder="Enter the event description here..." id="eventDescription"></textarea>
    <p></p>
    <button class="regularButton" onclick="addEvent()">Submit Event</button>
```

- This is where the user enters an event related to the history of binary
- They can enter the year and description of the event, which aligns with the variables I'm saving
- Afterwards, click on the button to submit event, which triggers the addEvent() function to run

Here is the addEvent() function:

``` javascript
    async function addEvent() { 
        const year = document.getElementById('eventYear').value.trim();
        const description = document.getElementById('eventDescription').value.trim();
        if (!year || !description) {
            alert('Please fill in both the year and event description.');
            return;
        }
        const eventData = {
            year: parseInt(year, 10),
            description: description,
        };
        try {
            const response = await fetch(pythonURI + "/api/binary-history", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData)
            });
        }
    }
    if (!response.ok) {
                throw new Error("Failed to add event");
            }
    alert("Event added successfully!");
    document.getElementById('eventYear').value = '';
    document.getElementById('eventDescription').value = '';
fetchAndDisplayBinaryHistory(); 
```

- The function gets the elements "year" and "description" through the input of the user, and raises an error if either of the elements are missing
- The data is saved into a dictionary where the year is parsed as an integer and the description is saves as a description
- The user inputted data is sent to my binary history api using the post method, and before it is sent it is converted from JSON into string format so it is readable by the API
- If the response is not 'ok' then it will tell the user that it failed to add the event, or else the event is added successfully and the eventYear and eventDescription textboxes are cleared

Here is the binary history api's GET and POST method:

``` python
class BinaryHistoryAPI:
    class _CRUD(Resource):
        def get(self):
            try:
                entries = BinaryHistory.query.all()
                results = [entry.read() for entry in entries]
                return jsonify(results)
            except Exception as e:
                return jsonify({"error": str(e)}), 500
        def post(self):
            data = request.get_json()
            post = BinaryHistory(data['year'], data['description'])
            post.create()
            return jsonify(post.read())
```

- Within the binary history API class is the CRUD method class that has the get and post self functions
    - The self varibale is used to gert access to the CRUD class itself so that the data requested by the user can be handled properly
- For the get method, python uses the query method from SQLAlchemy to retrieve the entries in the binary history table, and the list of entries are made into a list of dictionaries before being converted to JSON format so they can be interpreted by the frontend and changed into user-readale data
- The post method starts with obtaining the request data sent by the user (using the RESTful client API to retrieve the data) and turns the data into a new entry in the database
    - post.create() is used to make the post and return method is used to output the new entry in JSON format

As an output:
- A new entry (post) is created in the binary_history database, and in case of using postman, the new post is sent back to Postman and displayed in JSON format

#### List Requests:

``` javascript
const eventData = {
            year: parseInt(year, 10),
            description: description,
        };

        try {
            const response = await fetch(pythonURI + "/api/binary-history", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData)
            });
        }
```

- The user inputted year and description are converted into a dictionary in JSON format, eventData, so that it can be sent to the backend through RESTful client API
- The eventData dictionary is converted to string before being sent to /api/binary-history through POST method

``` python
class _CRUD(Resource):
        def get(self):
            try:
                entries = BinaryHistory.query.all()
                results = [entry.read() for entry in entries]
                return jsonify(results)
```

- The database "BinaryHistory" is queried and returns a Python list of entries
    - The query method is from SQLAlchemy and retrieves the entries in the database
- The Python list undergoes "read" method from CRUD and is converted to JSON format so it becomes a dictionary

#### Algorithmic Code Requests

``` python
class _CRUD(Resource):
    def get(self):
        try:
            entries = BinaryHistory.query.all()
            results = [entry.read() for entry in entries]
            return jsonify(results)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    def post(self):
        data = request.get_json()
        post = BinaryHistory(data['year'], data['description'])
        post.create()
        return jsonify(post.read())

    def put(self):
        data = request.get_json()
        post = BinaryHistory.query.get(data['id'])
        post.year = data['year']
        post.description = data['description']
        post.update()
        return jsonify(post.read())

    def delete(self):
        data = request.get_json()
        post = BinaryHistory.query.get(data['id'])
        post.delete()
        return jsonify({"message": "Post deleted"})
```

- The API class with Resource as a parameter uses flask_restful.Resource to obtain the user-inputted data sent through RESTful client API in a string format
- The _CRUD class defined the HTTP methods for the API to handle data from the database and user, including get (reads a post), post (creates a new post), update (updates a post), and delete (deletes a post)
- All of the methods return a JSON formatted version of the result; for get it is reading all of the data in the table, for post and update it is reading the new post to the client, and for delete saying "Post deleted"
- Sequencing: For each of the method, the different lines of code go in sequential order
- Selection: For the get method, the output is a selection between raising an error or returning the response
- Iteration: For the get method, the "results" is a list of dictionaries, where it reads each entry retrieved from the database until there are no more entries left to read

#### Call to Algorithm Request:

``` javascript
async function fetchAndDisplayBinaryHistory() { 
        try {
            const response = await fetch(pythonURI + "/api/binary-history", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error("Network response failed");
            }
            const data = await response.json();
            data.sort((a, b) => a.year - b.year);
        }
}
```

- In the fetch function, the response is a fetch to the binary-history api endpoint in backend, using the GET method defined in the CRUD class
- A response from the fetch is waited for (await), and is the response is not ok the function seonds an error that the Network response failed
    - Having invalid data or using the wrong method causes this to happen, and thus the rest of the function is unable to run due to the data not being able to be handled properly
- Normally, the output (response) is converted into JSON format before being saved in a data variable, and the data is then manipulated to display certain results (as wanted) to the user on the site

___________________________________________________________________________________________________________________

<button><a href="{{site.baseurl}}/binary_history">Return to Binary History</a></button>