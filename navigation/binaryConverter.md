---
layout: page
title: Binary Converter
search_exclude: true
permalink: /converter/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary Converter</title>
    <style>
        body {
            background: linear-gradient(135deg, red, darkred);
            color: white;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        h3 {
            color: white;
        }
        p {
            color: lightgrey;
        }
        div {
            margin: 20px 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        input[type="number"] {
            width: calc(100% - 24px);
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .button {
            all: unset; /* Removes all default styles */
            background-color: white !important;
            border: 2px solid #ccc;
            border-radius: 12px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.1s ease;
            font-weight: bold;
            color: black !important;
        }
        .button:hover {
            background-color: lightgray !important; /* Light gray on hover */
            transform: scale(1.05);
        }
        .button:active {
            background-color: grey !important; /* Slightly darker gray when clicked */
            transform: scale(0.95); /* Slight scale-down effect on click */
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }
        th {
            background-color: black;
            color: white;
        }
        td {
            background-color: #F4F4F4;
        }
        .previous-conversions {
            margin-top: 30px;
            padding: 10px;
            background-color: #2C2C2C;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Enter a decimal number to convert it to binary:</p>
        <input id="decimal-input" placeholder="Enter a decimal number" />
        <button id="convert-button" class="button">Convert to Binary</button>
        <table id="binary-table">
            <thead>
                <tr>
                    <th>Decimal</th>
                    <th>Binary</th>
                </tr>
            </thead>
            <tbody>
                <!-- Rows will be dynamically inserted here -->
            </tbody>
        </table>
    </div>
    <div class="previous-conversions" id="previousConversions">
        <p><strong>Previous Conversions:</strong></p>
    </div>
    <script type="module" defer>
        import { pythonURI } from '../assets/js/api/config.js';
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
                const argumentsData = await response.json();
                // Reverse the list to show the latest conversion first
                const conversionContainer = document.getElementById('previousConversions');
                conversionContainer.innerHTML = "<p><strong>Previous Conversions:</strong></p>"; // Reset previous list
                argumentsData.reverse();
                argumentsData.forEach((convert) => {
                    const conversionElement = document.createElement('p');
                    conversionElement.textContent = `${convert.decimal}: ${convert.binary}`;
                    conversionContainer.appendChild(conversionElement);
                });
            } catch (error) {
                console.error('Error fetching conversions:', error);
            }
        }
        // Save the conversion (decimal to binary) via API
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
        // Convert decimal to binary
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
            const binaryNumber = decimalNumber.toString(2);
            // Add the conversion to the table
            const tableBody = document.querySelector('#binary-table tbody');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${decimalNumber}</td><td>${binaryNumber}</td>`; // Fixed template literal
            tableBody.appendChild(newRow);
            // Clear the input field
            document.getElementById('decimal-input').value = '';
            // Save the conversion to the backend and update the previous conversions
            await saveConversion(decimalNumber, binaryNumber);
            fetchAndDisplayBinaryConversion();  // Fetch updated conversions after saving
        }
        // Attach event listener and fetch previous conversions on page load
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('convert-button').addEventListener('click', convertToBinary);
            fetchAndDisplayBinaryConversion();  // Fetch conversions on page load
        });
    </script>
</body>
</html>