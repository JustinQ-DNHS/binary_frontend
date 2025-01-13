---
title: Comments
description: A temporary file to display comments until a proper GUI is able to be installed. 
permalink: /comments
layout: post
type: hacks
comments: true
---
<style>
    .commentContainer {
        background-color: green;
        margin-top: 20px;
    }
</style>

### Comments that exist in the table should show up below in a div

<!-- 
This is the div that contains comments that will be built.
This is a temporary feature until other features are more readily created and this can be integrated attached to that
-->
<div id="commentsFeed"></div>

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
                document.getElementById('commentsFeed').appendChild(commentContainer);
            });
        } catch {
            console.error('Error building comments:', error);
        }
    }

    buildComments()
</script>