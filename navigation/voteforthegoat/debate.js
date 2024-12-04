import { pythonURI, fetchOptions } from '../../assets/js/api/config.js';

const argumentContainer = document.getElementById('argument-container');
let currentDebate = 'Milk or Cereal First?';
let selectedChannelId = 17;  // Channel ID for the "Milk or Cereal First?" debate

// Fetch all arguments for the specific channel
async function fetchArguments() {
    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel_id: selectedChannelId })
        });

        if (!response.ok) throw new Error('Failed to fetch arguments: ' + response.statusText);

        const argumentsData = await response.json();
        argumentContainer.innerHTML = ""; // Clear existing arguments

        for (const arg of argumentsData) {
            const card = document.createElement("div");
            card.classList.add("argument-card");
            card.setAttribute('data-post-id', arg.id); // Set data-post-id attribute

            // Fetch votes for the current argument
            const votes = await voteFetch(arg.id);

            const text = document.createElement("p");
            text.innerHTML = `<strong>${arg.user_name}:</strong> ${arg.comment}`;

            // Create upvote and downvote buttons with vote counts
            const upvoteButton = document.createElement("button");
            upvoteButton.classList.add("upvote");
            upvoteButton.innerHTML = `👍 <span class="upvote-count">${votes.upvote_count}</span>`;
            upvoteButton.onclick = () => submitVote(arg.id, 'upvote');

            const downvoteButton = document.createElement("button");
            downvoteButton.classList.add("downvote");
            downvoteButton.innerHTML = `👎 <span class="downvote-count">${votes.downvote_count}</span>`;
            downvoteButton.onclick = () => submitVote(arg.id, 'downvote');

            // Append elements to the card
            card.appendChild(text);
            card.appendChild(upvoteButton);
            card.appendChild(downvoteButton);
            argumentContainer.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching arguments:', error);
    }
}

// Corrected voteFetch function to use query parameters
async function voteFetch(postId) {
    try {
        const response = await fetch(`${pythonURI}/api/vote/post?post_id=${postId}`, {
            ...fetchOptions,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error('Failed to fetch vote data: ' + response.statusText);

        return await response.json();
    } catch (error) {
        console.error('Error fetching vote counts:', error);
        return { upvote_count: 0, downvote_count: 0 }; // Return zero counts on error
    }
}

// Submit a vote to the backend and update vote counts
async function submitVote(postId, voteType) {
    try {
        const response = await fetch(`${pythonURI}/api/vote`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post_id: postId, vote_type: voteType })
        });

        if (!response.ok) throw new Error('Failed to submit vote: ' + response.statusText);

        // Refetch the updated vote counts and update the UI
        const updatedVotes = await voteFetch(postId);
        const argumentCard = document.querySelector(`[data-post-id="${postId}"]`);
        if (argumentCard) {
            argumentCard.querySelector(".upvote-count").textContent = updatedVotes.upvote_count;
            argumentCard.querySelector(".downvote-count").textContent = updatedVotes.downvote_count;
        }
    } catch (error) {
        console.error('Error submitting vote:', error);
    }
}

// Submit a new argument to the specific channel
async function submitArgument() {
    const argumentText = document.getElementById('argument-input').value.trim();
    if (!argumentText) {
        alert('Please enter an argument.');
        return;
    }

    const argumentData = {
        title: currentDebate,  // Matches the debate topic
        comment: argumentText, // Updated to match the "comment" field expected by the backend
        channel_id: selectedChannelId,  // Specify the channel ID for this debate
        user_name: localStorage.getItem('username') || 'Guest' // Matching backend structure
    };

    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(argumentData)
        });

        if (!response.ok) throw new Error('Failed to submit argument: ' + response.statusText);

        document.getElementById('argument-input').value = ''; // Clear input field
        fetchArguments(); // Refresh arguments list
    } catch (error) {
        console.error('Error submitting argument:', error);
        alert('Error submitting argument: ' + error.message);
    }
}

// Event Listeners
document.getElementById('submit-argument').addEventListener('click', submitArgument);
document.querySelectorAll('.debate-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentDebate = button.getAttribute('data-debate');
        selectedChannelId = parseInt(button.getAttribute('data-channel-id')); // Update channel ID based on button data
        document.getElementById('current-debate').textContent = `Current Debate: ${currentDebate}`;
        fetchArguments();
    });
});

// Initial Fetch for Arguments
fetchArguments();


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('acknowledge-rules').onclick = () => {
        document.getElementById('rules-popup').style.display = 'none';
    };

    const argumentSection = document.getElementById('argument-section');
    const argumentsList = document.getElementById('arguments-list');
    const argumentInput = document.getElementById('argument-input');
    const submitButton = document.getElementById('submit-argument');
    const argumentContainer = document.getElementById('argument-container');
    const selectedSideText = document.getElementById('selected-side');
    const currentDebateText = document.getElementById('current-debate');
    const side1Button = document.getElementById('side1');
    const side2Button = document.getElementById('side2');

    let selectedSide = '';
    const debates = {
        'Milk or Cereal First?': ['Milk First', 'Cereal First'],
        'Is a Hot Dog a Sandwich?': ['Yes', 'No'],
        'Pineapple on Pizza?': ['Yes', 'No'],
        'Cats or Dogs?': ['Cats', 'Dogs'],
        'Coffee or Tea?': ['Coffee', 'Tea']
    };
    let currentDebate = 'Milk or Cereal First?';

    document.querySelectorAll('.debate-btn').forEach(button => {
        button.onclick = () => {
            currentDebate = button.getAttribute('data-debate');
            currentDebateText.textContent = `Current Debate: ${currentDebate}`;
            side1Button.textContent = debates[currentDebate][0];
            side2Button.textContent = debates[currentDebate][1];
            argumentContainer.innerHTML = '';
        };
    });

    side1Button.onclick = () => { selectedSide = side1Button.textContent; showArgumentSection(); };
    side2Button.onclick = () => { selectedSide = side2Button.textContent; showArgumentSection(); };

    function showArgumentSection() {
        argumentSection.classList.remove('hidden');
        selectedSideText.textContent = `Your Side: ${selectedSide}`;
    }

    submitButton.onclick = () => {
        const argumentText = argumentInput.value.trim();
        if (argumentText) {
            const argumentElement = document.createElement('li');
            argumentInput.value = '';
            argumentsList.classList.remove('hidden');
        }
    };
});