---
title: Comments
description: A temporary file to display comments until a proper GUI is able to be installed.
permalink: /comments
layout: post
type: hacks
comments: false
---
<style>
.commentContainer {
        background-color: green;
        margin-top: 20px;
    }

#toggle-btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

/* Style for the sliding bar */
#slide-bar {
    position: fixed;
    top: 0;
    right: -25%; /* Initially hidden */
    width: 25%; /* Takes up 1/4th of the screen width */
    height: 100%;
    background-color: #333;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    transition: right 0.3s ease-in-out; /* Slide-in and slide-out transition */
}

.text-box {
    position: absolute;
    bottom: 0;
    margin-bottom: 15px;
}
</style>

### Comments that exist in the table should show by pressing the button below
<div>
    <button id="toggle-btn">Toggle Slide Bar</button>
</div>
<div id="slide-bar">
    <h2>Comments</h2>
    <div class="text-box">
        <p><label for="comment">Comment</label></p>
        <textarea rows="4" cols="40" id="comment" name="comment" placeholder="Comment here"></textarea>
        <br>
        <button id="commentButton">Comment</button>
    </div>
</div>



<script type="module">
import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js'

const commentsAPI = `${pythonURI}/api/comments`

async function fetchComments() {
    const commentsResponse = await fetch(commentsAPI, fetchOptions)
    if (!commentsResponse.ok) throw new Error('Failed to fetch comments');
    const comments = await commentsResponse.json();
    // console.log(comments)
    return comments
}

async function buildComments() {
    try {
        const comments = await fetchComments(); // Ensure comments are fetched properly
        // console.log('Successfully fetched comments:', comments);

        // Check if comments are empty or undefined
        if (!comments || comments.length === 0) {
            console.log('No comments available to display.');
            return;
        }

        comments.forEach(comment => {
            const commentContainer = document.createElement('div');
            commentContainer.classList.add("commentContainer")
            //console.log('Successfully created div')
            const commentTitle = document.createElement('p');
            // console.log('Successfully created title element')
            commentTitle.innerHTML = comment.title
            // console.log('Successfully added title content')
            const commentContent = document.createElement('p');
            // console.log('Successfully created content element')
            commentContent.innerHTML = comment.content
            // console.log('Successfully added content content')
            commentContainer.appendChild(commentTitle)
            // console.log('Successfully appended title')
            commentContainer.appendChild(commentContent)
            // console.log('Successfully appended content')
            document.getElementById('slide-bar').appendChild(commentContainer);
        });
    } catch {
        console.error('Error building comments:', error);
    }
}

async function postComments() {
    const content = document.getElementById("comment").value;
    const commentRequest = await fetch(commentsAPI, {
        ...fetchOptions,
        method: 'post',
        body: JSON.stringify(
            {"title": "placeholder", "content": content, "post_id": window.location.pathname}
        )
    })
    document.getElementById('comment').value = '';
}

const constButton = document.getElementById("commentButton")
constButton.addEventListener("click", postComments)

buildComments()
</script>

<script>
const toggleBtn = document.getElementById("toggle-btn");
const slideBar = document.getElementById("slide-bar");

// Function to toggle the sliding bar
toggleBtn.addEventListener("click", function() {
    if (slideBar.style.right === "0px") {
        slideBar.style.right = "-25%"; // Hide the bar
    } else {
        slideBar.style.right = "0"; // Show the bar
    }
});
</script>