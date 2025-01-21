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
            background-color: #FF0000 !important; /* Red background */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        h1 {
            text-align: center;
            color: #FFFFFF;
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
        button {
            padding: 10px 20px;
            background-color: white;
            color: black;
            border: 1px solid black;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
        }
        button:hover {
            background-color: black;
            color: white;
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
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>

<div class="container">
        <p>Enter a decimal number to convert it to binary:</p>
        <input type="number" id="decimal-input" placeholder="Enter a decimal number" />
        <button id="convert-button">Convert to Binary</button>
        
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

<script>
        // Function to handle the conversion from decimal to binary
        function convertToBinary() {
            const decimalInput = document.getElementById('decimal-input').value;
            if (decimalInput === "") {
                alert("Please enter a decimal number!");
                return;
            }

            const decimalNumber = parseInt(decimalInput);
            if (isNaN(decimalNumber) || decimalNumber < 0) {
                alert("Please enter a valid positive decimal number.");
                return;
            }

            // Convert decimal to binary
            const binaryNumber = decimalNumber.toString(2);

            // Create a new row in the table to display the result
            const tableBody = document.querySelector('#binary-table tbody');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${decimalNumber}</td>
                <td>${binaryNumber}</td>
            `;
            tableBody.appendChild(newRow);

            // Optionally, clear the input field after conversion
            document.getElementById('decimal-input').value = '';
        }

        // Attach the event listener to the convert button
        document.getElementById('convert-button').addEventListener('click', convertToBinary);
    </script>

</body>
</html>
