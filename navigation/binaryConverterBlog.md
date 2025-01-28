---
layout: page
title: Binary Converter Blog
permalink: /Converter/blog
---


### Purpose of our group code and site 

- Help students learn how to convert and use binary numbers
- Create an interactive site where people expand and solidify their understanding
- Create an area for collaboration for students 

### Purpose of my code

- Provide a reliable and easy way to convert decimal numbers to binary
- Create a feature that allows people to check if their conversions are true

### Input

```javascript
// Frontend input function for converting decimal to binary
async function convertToBinary() {
    const decimalInput = document.getElementById('decimal-input').value.trim();
    if (decimalInput === '') {
        alert('Please enter a decimal number!');
        return;
    }
    const decimalNumber = parseInt(decimalInput);
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        alert('Please enter a positive decimal number.');
        return;
    }
    const binaryNumber = decimalNumber.toString(2);  // Convert to binary

    // Add the conversion to the table
    const tableBody = document.querySelector('#binary-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${decimalNumber}</td><td>${binaryNumber}</td>`; 
    tableBody.appendChild(newRow);
    
    // Clear the input field
    document.getElementById('decimal-input').value = '';
    
    // Save the conversion to the backend and fetch updated list of conversions
    await saveConversion(decimalNumber, binaryNumber);
    fetchAndDisplayBinaryConversion();  // Fetch updated conversions after saving
}
```

```javascript
// Function to save conversion to the backend
async function saveConversion(decimal, binary) {
    try {
        const conversionData = { decimal, binary };
        console.log("Sending to backend:", conversionData);
        const response = await fetch(`${pythonURI}/api/binary-converter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(conversionData),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to save conversion. Server response: ${errorText}`);
        }
        console.log("Conversion saved successfully.");
    } catch (error) {
        console.error("Error saving conversion:", error);
    }
}
```

- First, The user enters a decimal number in the input field and clicks the Convert to Binary button.
- The frontend checks if the input is a valid positive integer
- The decimal number is converted to binary using JavaScript's built-in toString method.
- Both decimal and binary values are sent to the backend via a POST request to the /api/binary-converter endpoint.
- The conversion is displayed in the table, and the input field is cleared.

### Output

```javascript
// Fetch and display previous conversions from the backend
async function fetchAndDisplayBinaryConversion() {
    try {
        const response = await fetch(`${pythonURI}/api/binary-converter`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch conversions: ${response.statusText}`);
        }
        const conversions = await response.json();
        const conversionContainer = document.getElementById('previousConversions');
        conversionContainer.innerHTML = "<p><strong>Previous Conversions:</strong></p>"; // Reset previous list
        conversions.reverse();
        conversions.forEach((conversion) => {
            const conversionElement = document.createElement('p');
            conversionElement.textContent = `${conversion.decimal}: ${conversion.binary}`;
            conversionContainer.appendChild(conversionElement);
        });
    } catch (error) {
        console.error('Error fetching conversions:', error);
    }
}
```

- A GET request is sent to fetch all binary conversion entries stored in the database.
- The results are displayed on the webpage under the Previous Conversions section. The response is formatted as an array of objects containing both decimal and binary values.

### List Request 

```javascript
const argumentsData = await response.json();
argumentsData.reverse(); // Reverse the list to show latest first
argumentsData.forEach((convert) => {
    const conversionElement = document.createElement('p');
    conversionElement.textContent = `${convert.decimal}: ${convert.binary}`;
    conversionContainer.appendChild(conversionElement);
});
```

```json
[
  { "decimal": 10, "binary": "1010" },
  { "decimal": 20, "binary": "10100" },
  { "decimal": 5, "binary": "101" }
]
```

- A dictionary to send data to the backend (POST request):
- In the saveConversion function, it is preparing the data to be sent as a POST request to the backend when a new decimal-to-binary conversion occurs.
- It is a dictionary with two keys: decimal is the key and the binary is the value. Binary is the key and the result of the conversion binaryNumber is the value.
- When the frontend makes a GET request to the backend to fetch all previous binary conversions, the backend responds with a list of dictionaries. Each dictionary contains a single conversion with decimal and binary keys. (lists)

## Algorithmic Function 

### Demonstration of sequencing, selection, and iteration 

## Sequencing

- When the user clicks the "Convert to Binary" button, the following happens step-by-step:

```javascript
async function convertToBinary() {
    const decimalInput = document.getElementById('decimal-input').value.trim();  // Get input
    if (decimalInput === '') {  // Validate input
        alert('Please enter a decimal number!');
        return;
    }
    const decimalNumber = parseInt(decimalInput);  // Convert input to an integer
    const binaryNumber = decimalNumber.toString(2);  // Convert to binary
    // Update table with conversion result
    const tableBody = document.querySelector('#binary-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${decimalNumber}</td><td>${binaryNumber}</td>`;
    tableBody.appendChild(newRow);
    document.getElementById('decimal-input').value = '';  // Clear input field
    await saveConversion(decimalNumber, binaryNumber);  // Save to backend
    fetchAndDisplayBinaryConversion();  // Fetch previous conversions
}
```

- Gets the user input from the input field.
- Validates that the input is a valid decimal number.
- Converts the decimal number to binary.
- Updates the table with the conversion result.
- Saves the conversion to the backend.
- Fetches and displays previous conversions from the backend.

```javascript
if (decimalInput === '') {  // Check if input is empty
    alert('Please enter a decimal number!');
    return;
}
const decimalNumber = parseInt(decimalInput);
if (isNaN(decimalNumber) || decimalNumber < 0) {  // Check if input is a valid number
    alert('Please enter a positive decimal number.');
    return;
}
```

## Selection

- In the convertToBinary function, there are two places where selection is used:
  - If the input is empty, the function alerts the user and exits.
  - If the input is not a valid decimal number, the function alerts the user and exits.

- The event listener attached to the button also involves selection. The function convertToBinary is executed only when the Convert to Binary button is clicked, which is a form of conditional execution.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('convert-button').addEventListener('click', convertToBinary);  // Selection
    fetchAndDisplayBinaryConversion();  // Selection: Fetch previous conversions
});
```

## Iteration

```javascript
argumentsData.forEach((convert) => {  // Iterating over the list of previous conversions
    const conversionElement = document.createElement('p');
    conversionElement.textContent = `${convert.decimal}: ${convert.binary}`;
    conversionContainer.appendChild(conversionElement);
});
```

- The argumentsData.forEach() method is used to loop through each previous conversion fetch data from the backend and display it on the page.

# Parameters and return jsonify 

- In the backend, the POST request sends data to the server in the form of a JSON body containing decimal and binary values, which is parsed using request.get_json(). 
- This data is then used to create and save a new BinaryConverter object, and the saved data is returned as a JSON response using jsonify(). 
- The GET request, on the other hand, does not have a request body, and it fetches all previously saved binary conversions from the database. These conversions are returned as a JSON array of dictionaries, also using jsonify(). 
- Both methods ensure that the data exchanged between the frontend and backend is in a structured JSON format, making it easy for the frontend to handle.

# Algorithm request

- In this system, the frontend communicates with the backend through an API to convert decimal numbers into binary and store these conversions. 
- The system features two primary operations: converting decimal to binary and saving the results to a database. It also allows the frontend to fetch and display a list of previous conversions. 
- The system involves a frontend and backend working together to convert decimal numbers to binary and store them. The frontend (HTML + JavaScript) allows users to input a decimal number, convert it to binary, and display the result in a table. 
- It uses JavaScript to validate input, convert numbers, and send POST requests to the backend (Flask API) to save the conversion. The frontend also fetches previous conversions with GET requests to display all stored conversions. The backend (Flask) handles POST requests by saving new conversions to a database and GET requests by fetching all stored conversions. 
- The POST request sends the conversion data as JSON, while the GET request returns a list of saved conversions in JSON format. If there's an error (e.g., invalid input or server failure), the frontend alerts the user, and the backend handles errors with appropriate responses. The system ensures smooth interaction between the frontend and backend through asynchronous API calls, data validation, and dynamic UI updates.

## Frontend Code

```javascript
async function convertToBinary() {
    const decimalInput = document.getElementById('decimal-input').value.trim();
    if (decimalInput === '' || isNaN(parseInt(decimalInput)) || parseInt(decimalInput) < 0) {
        alert('Please enter a valid positive decimal number!');
        return;
    }
    const decimalNumber = parseInt(decimalInput);
    const binaryNumber = decimalNumber.toString(2);
    const tableBody = document.querySelector('#binary-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${decimalNumber}</td><td>${binaryNumber}</td>`;
    tableBody.appendChild(newRow);
    document.getElementById('decimal-input').value = '';
    await saveConversion(decimalNumber, binaryNumber);
    fetchAndDisplayBinaryConversion();
}
```

## Sends data to the backend

```javascript
async function saveConversion(decimal, binary) {
    const conversionData = { decimal, binary };
    const response = await fetch(`${pythonURI}/api/binary-converter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(conversionData),
    });
    if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error saving conversion: ${errorText}`);
    }
}
```

## Fetches previous conversions 

- This function fetches previously saved conversions from the backend via a GET request and updates the UI with the results.

```javascript
async function fetchAndDisplayBinaryConversion() {
    try {
        const response = await fetch(`${pythonURI}/api/binary-converter`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch conversions: ${response.statusText}`);
        }
        const argumentsData = await response.json();
        argumentsData.reverse();
        const conversionContainer = document.getElementById('previousConversions');
        conversionContainer.innerHTML = "<p><strong>Previous Conversions:</strong></p>";
        argumentsData.forEach((convert) => {
            const conversionElement = document.createElement('p');
            conversionElement.textContent = `${convert.decimal}: ${convert.binary}`;
            conversionContainer.appendChild(conversionElement);
        });
    } catch (error) {
        console.error('Error fetching conversions:', error);
    }
}
```
