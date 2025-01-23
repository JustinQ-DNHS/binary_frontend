<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary to Decimal Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
            text-align: center;
        }
        input, button {
            padding: 10px;
            font-size: 16px;
            margin: 10px;
        }
        #result {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Binary to Decimal Converter</h1>
    
 <div>
        <label for="binaryInput">Enter Binary:</label>
        <input type="text" id="binaryInput" placeholder="Enter binary number">
    </div>
    
 <button id="convertBtn">Convert</button>
    
 <div id="result"></div>
    
<script>
        document.getElementById('convertBtn').addEventListener('click', function() {
            const binaryInput = document.getElementById('binaryInput').value;
            if (!binaryInput) {
                alert("Please enter a binary number.");
                return;
            }

            // Prepare data for API call
            const data = {
                binary: binaryInput,
                decimal: "", // This will be filled by the API
            };

            // Send POST request to Flask API
            fetch('/api/binary-converter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                // Display result in the 'result' div
                document.getElementById('result').innerHTML = `Decimal: ${result.decimal}`;
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred while converting.");
            });
        });
    </script>
</body>
</html>
