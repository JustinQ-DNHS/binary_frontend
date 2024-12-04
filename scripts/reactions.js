// Helper function to get reactions from localStorage
function getReactions() {
    const reactions = localStorage.getItem('reactions');
    return reactions ? JSON.parse(reactions) : {};
}

// Helper function to save reactions to localStorage
function saveReactions(reactions) {
    localStorage.setItem('reactions', JSON.stringify(reactions));
}

// Initialize reactions on page load
document.addEventListener('DOMContentLoaded', () => {
    const reactions = getReactions();

    // Populate reaction counts for each post
    document.querySelectorAll('.post').forEach(postElement => {
        const postId = postElement.getAttribute('data-post-id');
        const postReactions = reactions[postId] || { thumbsUp: 0, heart: 0, fire: 0 };

        postElement.querySelector('.thumbsUp-count').textContent = postReactions.thumbsUp;
        postElement.querySelector('.heart-count').textContent = postReactions.heart;
        postElement.querySelector('.fire-count').textContent = postReactions.fire;
    });
});

// Function to handle adding a reaction
function addReaction(postId, reactionType) {
    const reactions = getReactions();

    if (!reactions[postId]) {
        reactions[postId] = { thumbsUp: 0, heart: 0, fire: 0 };
    }

    // Increment the selected reaction
    reactions[postId][reactionType]++;
    saveReactions(reactions);

    // Update the UI
    const postElement = document.querySelector(`[data-post-id="${postId}"]`);
    const countElement = postElement.querySelector(`.${reactionType}-count`);
    countElement.textContent = reactions[postId][reactionType];
}
