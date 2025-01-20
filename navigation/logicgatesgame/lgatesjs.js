document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        let score = 0;
        const questions = form.querySelectorAll('.question');
        let resultsHTML = "";

        // Check the answers
        questions.forEach((question, index) => {
            const correctAnswer = question.getAttribute('c-answer');
            const selectedAnswer = question.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;

                if (userAnswer === correctAnswer) {
                    score++;
                    resultsHTML += `<p class="correct">Question ${index + 1}: Correct</p>`;
                } else {
                    resultsHTML += `<p class="incorrect">Question ${index + 1}: Incorrect</p>`;
                }
            } else {
                resultsHTML += `<p class="incorrect">Question ${index + 1}: Please select an answer</p>`;
            }
        });

        // show the user the results
        resultsHTML += `<h2>Your score: ${score} out of ${questions.length}</h2>`;
        resultsContainer.innerHTML = resultsHTML;

        // send to backend
        try {
            const response = await fetch('http://localhost:8887/api/lgate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    name: "Logic Gates Quiz",
                    score: score
                })
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Score saved:", result);
            } else {
                console.error("Error saving score:", result.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});

async function create_User() {
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone_num').value;

    // Basic validation
    if (!name || !email || !password || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare data to send (matching backend requirements: name, score, quiz_id)
    const data = {
        name: name,
        score: "0",          // Default score (modify as needed)
        quiz_id: "1"         // Default quiz ID (modify as needed)
    };

    try {
        // Send POST request to the backend
        const response = await fetch('http://localhost:8887/api/lgate/lgate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_JWT_TOKEN'  // Replace with a valid token
            },
            body: JSON.stringify(data)
        });

        // Handle response
        if (response.ok) {
            const result = await response.json();
            alert('Quiz created successfully: ' + JSON.stringify(result));
        } else {
            const error = await response.json();
            alert('Error: ' + error.message);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('Error connecting to the server.');
    }
}