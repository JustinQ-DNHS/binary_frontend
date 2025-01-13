<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary Converter</title>
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
</head>
<body>
    <h1>Binary Converter</h1>
    <div class="container">
        <p>This page demonstrates binary conversion for predefined decimal numbers:</p>
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
    <script type="module">
        const apiEndpoint = 'http://127.0.0.1:5000/api/binary-converter';
        async function fetchBinaryExamples() {
            try {
                const response = await fetch(apiEndpoint);
                if (!response.ok) throw new Error('Failed to fetch binary examples');
                const examples = await response.json();
                displayBinaryExamples(examples);
            } catch (error) {
                console.error('Error fetching binary examples:', error);
            }
        }
        function displayBinaryExamples(examples) {
            const tableBody = document.querySelector('#binary-table tbody');
            tableBody.innerHTML = ''; // Clear any existing rows
            examples.forEach((example) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${example.decimal}</td>
                    <td>${example.binary}</td>
                `;
                tableBody.appendChild(row);
            });
        }
        // Fetch and display the binary examples when the page loads
        document.addEventListener('DOMContentLoaded', fetchBinaryExamples);
    </script>
</body>
</html>









