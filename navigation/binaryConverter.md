---
layout: page
title: Binary Converter 
search_exclude: true
permalink: /converter/
---


<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #F4F4F9;
    }
    h1 {
        text-align: center;
        margin-top: 20px;
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
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
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
        background-color: #007BFF;
        color: white;
    }
</style>
<h1>Binary Converter</h1>
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
<script>
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js'
    async function fetchdatatoconvert() {
        try {
            fetch(pythonURI + "/api/binaryConverter",
            )
        }
    } 
</script>
