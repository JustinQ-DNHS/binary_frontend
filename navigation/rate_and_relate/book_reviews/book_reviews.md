---
layout: post 
title: Book Reviews
search_exclude: true
permalink: rate_and_relate/book_reviews/
menu: nav/rate_and_relate.html
author: Soumini, Ahmad, Nikith, Kush
---
<style>
  body {
    background-color: #0B3954;
    color: white; /* Adjust text color for better readability */
  }
</style>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Reviews</title>
  <style>
    /* Styling for elements */
    body {
      background-color: #0B3954;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .book-card {
      background-color: #072536;
      color: #AFC0D5;
      padding: 20px;
      max-width: 700px;
      margin: 20px auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    .book-title {
      font-size: 24px;
      margin-bottom: 10px;
      color: #FFFFFF;
    }
    .book-author {
      font-size: 18px;
      color: #D1E1F2;
    }
    .book-cover {
      width: 400px;
      height: 600px;
      border-radius: 5px;
      margin: 20px auto;
    }
    .heart-button {
      background: none;
      border: none;
      font-size: 24px;
      color: #ff0077;
      cursor: pointer;
    }
    .rating-stars span {
      font-size: 30px;
      cursor: pointer;
      color: #ccc;
    }
    .comments-heading {
      color: #fff;
      margin-top: 20px;
    }
    .comment-section {
      background-color: #072536; 
      color: white;
      padding: 15px;
      border-radius: 5px;
      text-align: left;
      margin-top: 15px;
    }
    .submit-comment {
      display: block;
      margin-top: 10px;
      background-color: #33ccff;
      border: none;
      color: white;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
      text-align: left;
    }
    .comment-box {
      border-bottom: 1px solid #cce7ff;
      padding: 10px;
      margin-top: 10px;
      background-color: #0B3954;
      border-radius: 5px;
    }
    .comment-text {
      color: white;
    }
    .reply-button {
      background: none;
      color: #cce7ff;
      border: none;
      cursor: pointer;
      font-size: 14px;
      padding: 0;
      margin-top: 5px;
      text-align: left;
    }
    .reply-textarea {
      width: 100%;
      padding: 5px;
      margin-top: 5px;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      color: #333;
    }
    .submit-reply {
      background-color: #66b2ff;
      border: none;
      padding: 5px 10px;
      color: white;
      border-radius: 5px;
      margin-top: 5px;
      cursor: pointer;
      text-align: left;
    }
    .replies {
      margin-top: 10px;
      padding-left: 10px;
    }
    .reply-box {
      background-color: #10567E;
      padding: 5px;
      border-radius: 5px;
      color: #cce7ff;
      margin-top: 5px;
      text-align: left;
    }
  </style>
</head>

<body>

  <div id="bookContainer">
    <!-- Book content will be dynamically added here -->
  </div>

  <script>
    const username = prompt("Please enter your username:") || "Anonymous";

    const books = [
      {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "cover_url": "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "title": "Percy Jackson & the Olympians: The Lightning Thief",
        "author": "Rick Riordan",
        "cover_url": "https://m.media-amazon.com/images/I/91WN6a6F3RL._SY522_.jpg"
      },
      {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "cover_url": "https://play-lh.googleusercontent.com/GkcEmu7R-4I3zdNz_A6IzfLS-GXUWigcbdFkNVxZSRjtSiRj2roQ0cixvwTEzgDr4iNP"
      },
      {
        "title": "Divergent",
        "author": "Veronica Roth",
        "cover_url": "https://upload.wikimedia.org/wikipedia/en/f/f4/Divergent_%28book%29_by_Veronica_Roth_US_Hardcover_2011.jpg"
      },
      {
        "title": "Red Queen",
        "author": "Victoria Aveyard",
        "cover_url": "https://m.media-amazon.com/images/I/71SrvkGc4zL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "title": "A Good Girl's Guide to Murder",
        "author": "Holly Jackson",
        "cover_url": "https://m.media-amazon.com/images/I/81x-tjdbZgL._AC_UF1000,1000_QL80_.jpg"
      }
    ];

    const bookRatings = {
      "Harry Potter and the Sorcerer's Stone": 4.8,
      "Percy Jackson & the Olympians: The Lightning Thief": 4.3,
      "The Hunger Games": 4.2,
      "Divergent": 4.1,
      "Red Queen": 4.0,
      "A Good Girl's Guide to Murder": 4.5
    };

    const book = books[Math.floor(Math.random() * books.length)];
    let liked = false;
    let currentRating = 0;

    let comments = JSON.parse(localStorage.getItem('comments')) || {};
    let likesCount = JSON.parse(localStorage.getItem('likes')) || {};
    let currentLikes = likesCount[book.title] || 0;

    document.getElementById('bookContainer').innerHTML = `
      <div class="book-card">
        <h3 class="book-title">${book.title}</h3>
        <img src="${book.cover_url}" alt="Book Cover" class="book-cover" />
        <p class="book-author">by ${book.author}</p>
        <div id="rating" class="rating-stars">
          <span onclick="rateBook(1)">★</span>
          <span onclick="rateBook(2)">★</span>
          <span onclick="rateBook(3)">★</span>
          <span onclick="rateBook(4)">★</span>
          <span onclick="rateBook(5)">★</span>
        </div>
        <p>Average Rating: ${bookRatings[book.title]} ★</p>
        <button onclick="toggleLike()" id="likeButton" class="heart-button">
          <span id="heart">♡</span> Like (${currentLikes})
        </button>
        <h4 class="comments-heading">Comments:</h4>
        <div id="commentSection" class="comment-section">
          <textarea id="commentInput" placeholder="Add a comment..."></textarea>
          <button onclick="addComment()" class="submit-comment">Submit</button>
          <div id="commentsList"></div>
        </div>
      </div>
    `;

    function displayComments() {
      const commentsList = document.getElementById('commentsList');
      commentsList.innerHTML = '';
      const bookComments = comments[book.title] || [];
      bookComments.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-box');
        commentDiv.innerHTML = `
          <div class="comment-text">
            <strong>${comment.username}</strong><br>${comment.text}
          </div>
          <button onclick="showReplyInput(${index})" class="reply-button">Reply</button>
          <div id="replyInput-${index}" style="display: none;">
            <textarea placeholder="Add a reply..." class="reply-textarea"></textarea>
            <button onclick="addReply(${index})" class="submit-reply">Submit Reply</button>
          </div>
          <div class="replies">
            ${comment.replies.map(reply => `
              <div class="reply-box">
                <strong>${reply.username}</strong>: ${reply.text}
              </div>`).join('')}
          </div>
        `;
        commentsList.appendChild(commentDiv);
      });
    }

    function saveComments() {
      localStorage.setItem('comments', JSON.stringify(comments));
    }

    function addComment() {
      const commentInput = document.getElementById('commentInput');
      const commentText = commentInput.value.trim();
      if (commentText === '') return alert('Please enter a comment.');

      const newComment = {
        username: username,
        text: commentText,
        replies: []
      };

      if (!comments[book.title]) comments[book.title] = [];
      comments[book.title].push(newComment);
      commentInput.value = '';
      saveComments();
      displayComments();
    }

    function showReplyInput(index) {
      document.getElementById(`replyInput-${index}`).style.display = 'block';
    }

    function addReply(index) {
      const replyInput = document.querySelector(`#replyInput-${index} textarea`);
      const replyText = replyInput.value.trim();
      if (replyText === '') return alert('Please enter a reply.');

      const newReply = { username: username, text: replyText };
      comments[book.title][index].replies.push(newReply);
      replyInput.value = '';
      saveComments();
      displayComments();
    }

    function toggleLike() {
      liked = !liked;
      const heart = document.getElementById('heart');
      heart.innerText = liked ? '❤️' : '♡';
      currentLikes += liked ? 1 : -1;
      document.getElementById('likeButton').innerHTML = `<span id="heart">${heart.innerText}</span> Like (${currentLikes})`;
      likesCount[book.title] = currentLikes;
      localStorage.setItem('likes', JSON.stringify(likesCount));
    }

    function rateBook(rating) {
      currentRating = rating;
      document.querySelectorAll('#rating span').forEach((star, index) => {
        star.style.color = index < rating ? '#FFD700' : '#ccc';
      });
    }

    displayComments();
  </script>
</body>

</html>
<br>
<br>
<br>
 <a href="{{site.baseurl}}/postbook"
       style="background-color: rgb(135, 206, 250); color: white; padding: 20px 40px; text-align: center; text-decoration: none; border-radius: 5px; font-size: 16px;">
        Click to Post
    </a>
