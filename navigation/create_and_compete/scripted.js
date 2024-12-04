// Wait for the DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const submitGuessButton = document.getElementById("submit-guess");
    const guessInput = document.getElementById("guess-input");
    const reasoningInput = document.getElementById("reasoning-input");
    const guessFeedback = document.getElementById("guess-feedback");
    const explanationFeedback = document.getElementById("explanation-feedback");
    const feedbackModal = document.getElementById("feedback-modal");
    const closeButton = document.querySelector(".close-button");

    // Generate a random color for each feedback message
    function getRandomColor() {
        const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#ffb6b9', '#92a8d1', '#034f84', '#f7cac9', '#f7786b', '#b565a7'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Handle guess submission
    submitGuessButton.addEventListener("click", function() {
        const guess = guessInput.value.trim();
        const reasoning = reasoningInput.value.trim();

        // Check for valid input
        if (guess === "" || reasoning === "") {
            alert("Please enter both your guess and reasoning.");
            return;
        }

        // Generate feedback messages with random colors
        guessFeedback.style.color = getRandomColor();
        guessFeedback.innerHTML = `<p><strong>Guess:</strong> ${guess}</p>`;

        explanationFeedback.style.color = getRandomColor();
        explanationFeedback.innerHTML = `<p><strong>Explanation:</strong> ${reasoning}</p>`;

        // Show confirmation modal
        feedbackModal.style.display = "block";

        // Reset input fields
        guessInput.value = "";
        reasoningInput.value = "";
    });

    // Close modal on close button click
    closeButton.addEventListener("click", function() {
        feedbackModal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = "none";
        }
    });

    // Allow pressing "Enter" to submit guess
    reasoningInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent line break in textarea
            submitGuessButton.click(); // Trigger submit button click
        }
    });
});
