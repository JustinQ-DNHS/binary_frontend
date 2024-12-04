---
layout: base 
title: Music 
search_exclude: true
permalink: /music/
---

<!-- FOR THE NAV MENU AS IT IS NOT WORKING ON YOUR PAGE -->
<table>
    <tr>
        <td id="sharedinterests">
            <a href="{{site.baseurl}}/shared_interests/home">
                <img src="{{site.baseurl}}/images/school_logo.png" alt="logo" width="150" height="150">
            </a>
        </td>
        <td id="Limitless Connections"><a href="{{site.baseurl}}/shared_interests/limitconnect">Limitless Connections</a></td>
        <td id="DNHS Football"><a href="{{site.baseurl}}/shared_interests/football">DNHS Football</a></td>
        <td id="School Subjects"><a href="{{site.baseurl}}/shared_interests/jupyter/chatroom">School Subjects</a></td>
        <td id="Music"><a href="{{site.baseurl}}/music/">Music</a></td>
        <td id="Satire"><a href="{{site.baseurl}}/shared_interests/satire">Satire</a></td>
        <td id="PLACEHOLDER6"><a href="{{site.baseurl}}/shared_interests/agk.html">AGK</a></td>
    </tr>
</table>
<!-- END OF NAV MENU -->

<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
   <style>
       body {
           background-color: #1c1c1c;
           color: #eaeaea;
           font-family: Arial, sans-serif;
           margin: 0;
           padding: 0;
       }
       /* Navigation Bar */
       .navbar {
           display: flex;
           justify-content: space-around;
           align-items: center;
           padding: 10px 20px;
           background-color: #333;
           position: sticky;
           top: 0;
           z-index: 10;
       }
       .navbar a {
           color: #eaeaea;
           text-decoration: none;
           font-size: 1.1em;
           padding: 8px 16px;
           transition: color 0.3s ease, border-bottom 0.3s ease;
           border-bottom: 2px solid transparent;
       }
       .navbar a:hover {
           color: #f0a500;
           border-bottom: 2px solid #f0a500;
           font-weight: bold;
       }
       /* Main container for music page */
       .container {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-around;
           gap: 20px;
           padding: 30px;
           max-width: 1200px;
           margin: 0 auto;
       }
       /* Sections for each feature */
       .section {
           background-color: #282828;
           border-radius: 10px;
           padding: 20px;
           width: 300px;
           text-align: center;
           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
       }
       .section h2 {
           color: #f0a500;
           font-size: 1.5em;
           margin-bottom: 15px;
       }
       .section p {
           font-size: 0.9em;
           color: #c5c5c5;
           margin-bottom: 20px;
       }
       /* Stylish Buttons */
       .section button {
           background: linear-gradient(145deg, #f0a500, #d18b00);
           border: none;
           padding: 10px 20px;
           font-size: 1em;
           color: #fff;
           cursor: pointer;
           border-radius: 5px;
           transition: background 0.3s ease, transform 0.3s ease;
       }
       .section button:hover {
           background-color: #ffc107;
           transform: scale(1.05);
       }
   </style>
</head>
<body>
   <!-- Navigation Bar -->
   <div class="navbar">
       <a href="index.html">Home</a>
       <a href="genre-chat.html">Genre-Specific Chat Rooms</a>
       <a href="artist-recommendation.html">Artist Recommendations</a>
       <a href="user-playlists.html">User-Curated Playlists</a>
       <a href="song-voting.html">Song of the Day Voting</a>
       <a href="reviews.html">Music Reviews</a>
   </div>
   <!-- Music Page Content -->
   <div class="container">
       <!-- Genre-Specific Chat Rooms Section -->
       <div class="section" id="genre-chat">
           <h2>Genre-Specific Chat Rooms</h2>
           <p>Chat about your favorite genres, songs, and albums in real-time!</p>
           <button onclick="window.location.href='genre-chat.html'">Enter Chat Room</button>
       </div>
       <!-- Artist Recommendation Section -->
       <div class="section" id="artist-recommendation">
           <h2>Artist Recommendation</h2>
           <p>Get personalized music recommendations based on your favorite artists.</p>
           <button onclick="window.location.href='artist-recommendation.html'">Discover Artists</button>
       </div>
       <!-- User-Curated Playlists Section -->
       <div class="section" id="user-playlists">
           <h2>User-Curated Playlists</h2>
           <p>Create, share, and explore playlists curated by students like you.</p>
           <button onclick="window.location.href='user-playlists.html'">View Playlists</button>
       </div>
       <!-- Song of the Day Voting Section -->
       <div class="section" id="song-voting">
           <h2>Song of the Day Voting</h2>
           <p>Vote for your favorite songs and help select the daily top pick.</p>
           <button onclick="window.location.href='song-voting.html'">Vote Now</button>
       </div>
       <!-- Music Reviews Section -->
       <div class="section" id="reviews">
           <h2>Music Reviews</h2>
           <p>Read and share reviews of albums, songs, and artists.</p>
           <button onclick="window.location.href='reviews.html'">Explore Reviews</button>
       </div>
   </div>
</body>
</html>