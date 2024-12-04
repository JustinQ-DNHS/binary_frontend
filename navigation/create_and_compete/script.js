class PromptGenerator {
    constructor(prompts) {
        this.prompts = prompts;
    }

    generateRandomPrompt() {
        const randomIndex = Math.floor(Math.random() * this.prompts.length);
        return this.prompts[randomIndex];
    }
}

class SubmissionManager {
    constructor() {
        this.pitches = this.loadFromLocalStorage('pitches') || [];
        this.feedbacks = this.loadFromLocalStorage('feedbacks') || [];
        this.renderSubmissions();
    }

    loadFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    submitPitch(pitch, user) {
        const pitchData = {
            text: pitch,
            user: user,
            upvotes: 0,
            downvotes: 0
        };
        this.pitches.push(pitchData);
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    submitFeedback(feedback, pitchIndex) {
        const feedbackData = { feedback, timestamp: new Date().toLocaleString() };
        this.feedbacks[pitchIndex] = this.feedbacks[pitchIndex] || [];
        this.feedbacks[pitchIndex].push(feedbackData);
        this.saveToLocalStorage('feedbacks', this.feedbacks);
        this.showModal("Feedback submitted!");
        this.renderFeedbacks(pitchIndex);
    }

    upvotePitch(index) {
        this.pitches[index].upvotes++;
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    downvotePitch(index) {
        this.pitches[index].downvotes++;
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    renderSubmissions() {
        const pitchDisplay = document.getElementById('pitch-display');
        pitchDisplay.innerHTML = this.pitches.map((pitch, index) => `
            <div class="pitch">
                <p><strong>${pitch.user}:</strong> ${pitch.text}</p>
                <div class="vote-controls">
                    <button onclick="submissionManager.upvotePitch(${index})">👍 ${pitch.upvotes}</button>
                    <button onclick="submissionManager.downvotePitch(${index})">👎 ${pitch.downvotes}</button>
                </div>
                <button onclick="submissionManager.showFeedbackModal(${index})">Give Feedback</button>
                <div id="feedback-display-${index}" class="feedback-display">
                    ${this.renderFeedbacks(index)}
                </div>
            </div>
        `).join('');
    }

    renderFeedbacks(pitchIndex) {
        const feedbackDisplay = document.getElementById(`feedback-display-${pitchIndex}`);
        if (!feedbackDisplay || !this.feedbacks[pitchIndex]) return "";
        feedbackDisplay.innerHTML = this.feedbacks[pitchIndex].map(
            feedback => `<p>${feedback.timestamp}: ${feedback.feedback}</p>`
        ).join('');
    }

    showModal(message) {
        const modal = document.getElementById('feedback-modal');
        modal.style.display = 'block';
        modal.querySelector('.modal-content p').innerText = message;
        modal.querySelector('.close-button').onclick = () => modal.style.display = 'none';
    }

    showFeedbackModal(index) {
        const feedbackInput = prompt("Enter your feedback:");
        if (feedbackInput.trim()) {
            this.submitFeedback(feedbackInput, index);
        }
    }

    downloadJSON() {
        const data = {
            pitches: this.pitches,
            feedbacks: this.feedbacks
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'submissions.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// Expanded prompt list
const prompts = [
    "Invent an app that helps users disconnect from screens and reconnect with nature.",
    "Pitch a business model focused on converting waste into sustainable materials.",
    "Design a story that follows a character who uncovers a hidden, tech-free civilization.",
    "Create a gadget to help people manage daily stress in innovative ways.",
    "Develop an app aimed at making physical exercise more social and enjoyable.",
    "Imagine a world where AI governs society. Pitch the pros and cons.",
    "Write a sci-fi story about the first human settlement on a distant planet.",
    "Invent a product to solve a modern problem for Gen Z.",
    "Design a mobile app that helps users build a new habit in 30 days.",
    "Pitch an idea for a new type of social media that emphasizes mental health.",
    "Create a storyline for a futuristic novel set in 2075.",
    "Imagine a business that helps reduce waste in everyday life.",
    "Design a tool that helps people learn a skill in 10 minutes a day.",
    "Invent a device that would be essential in space exploration.",
    "Propose an app that improves communication between pets and their owners.",
    "Create a fitness challenge app with an innovative social component.",
    "Imagine a service that connects artists with non-profits in need.",
    "Design a product that simplifies meal prep for busy professionals.",
    "Pitch a sustainable fashion brand with a unique concept.",
    "Think of an educational game that makes learning history fun.",
    "Invent a productivity tool for hybrid and remote work teams.",
    "Create an AI-powered platform that assists people in finding hobbies.",
    "Propose a wellness platform for college students under stress.",
    "Pitch an idea for a website that gamifies community volunteering.",
    "Design a device that enhances sensory experiences for virtual reality.",
    "Create a way to make budgeting fun and accessible for teens.",
    "Invent a product that encourages mindfulness in daily routines."
];

const promptGenerator = new PromptGenerator(prompts);
const submissionManager = new SubmissionManager();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-prompt').addEventListener('click', () => {
        const promptDisplay = document.getElementById('prompt-display');
        promptDisplay.innerText = promptGenerator.generateRandomPrompt();
    });

    document.getElementById('submit-pitch').addEventListener('click', () => {
        const pitchInput = document.getElementById('pitch-input');
        const user = prompt("Please enter your username:");
        if (pitchInput.value.trim() && user.trim()) {
            submissionManager.submitPitch(pitchInput.value, user);
            pitchInput.value = "";
        } else {
            alert("Please enter a pitch and username before submitting.");
        }
    });

    document.getElementById('submit-feedback').addEventListener('click', () => {
        const feedbackInput = document.getElementById('feedback-input');
        const pitchIndex = prompt("Enter the pitch index for feedback:");
        if (feedbackInput.value.trim() && pitchIndex !== null) {
            submissionManager.submitFeedback(feedbackInput.value, parseInt(pitchIndex, 10));
            feedbackInput.value = "";
        } else {
            alert("Please enter feedback and specify a pitch index.");
        }
    });

    const downloadButton = document.createElement('button');
    downloadButton.innerText = 'Download Submissions as JSON';
    downloadButton.addEventListener('click', () => submissionManager.downloadJSON());
    document.body.appendChild(downloadButton);
});
function upvote(button) {
    const voteCountElement = button.nextElementSibling;
    let count = parseInt(voteCountElement.textContent, 10);
    voteCountElement.textContent = count + 1;
}

function downvote(button) {
    const voteCountElement = button.previousElementSibling;
    let count = parseInt(voteCountElement.textContent, 10);
    voteCountElement.textContent = count - 1;
}
