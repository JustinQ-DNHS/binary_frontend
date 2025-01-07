document.getElementById('quiz-form1').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission (page reload)

    showResults();  // Show quiz results
});

function showResults() {
    const quizForm = document.getElementById('quiz-form1');
    const questionContainers = quizForm.querySelectorAll('.question');  // Get all question containers
    let numCorrect = 0;

    // Loop through each question container
    questionContainers.forEach((questionContainer, index) => {
        const selectedAnswer = questionContainer.querySelector(`input[name="q${index + 1}"]:checked`);  // Get the selected answer
        const correctAnswer = questionContainer.getAttribute('data-correct-answer');  // Get the correct answer from data-correct-answer
        const questionText = questionContainer.querySelector('p').textContent;  // Get the question text

        // Clear previous feedback if exists
        const existingFeedback = questionContainer.querySelector('.answer-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        if (selectedAnswer) {
            // If the selected answer is correct
            if (selectedAnswer.value === correctAnswer) {
                numCorrect++;
                questionContainer.style.color = 'green'; // Mark correct in green
                questionContainer.insertAdjacentHTML('beforeend', `<div class="answer-feedback">Correct! The correct answer is: ${correctAnswer}</div>`);
            } else {
                questionContainer.style.color = 'red'; // Mark incorrect in red
                questionContainer.insertAdjacentHTML('beforeend', `<div class="answer-feedback">Incorrect. The correct answer was: ${correctAnswer}</div>`);
            }
        } else {
            questionContainer.style.color = 'gray'; // If no answer selected, gray out
            questionContainer.insertAdjacentHTML('beforeend', `<div class="answer-feedback">No answer selected. The correct answer was: ${correctAnswer}</div>`);
        }
    });

    // Display total score at the bottom
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} out of ${questionContainers.length} correct.`;
}