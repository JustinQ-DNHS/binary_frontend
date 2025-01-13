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

        // Show Results
        resultsHTML += `<h2>Your score: ${score} out of ${questions.length}</h2>`;
        resultsContainer.innerHTML = resultsHTML;

        // ✅ Send score to the backend
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