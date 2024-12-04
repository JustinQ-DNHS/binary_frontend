---
layout: post
title: Vote for the GOATs of the NFL
description: Made By Noah H, James E, and Zafeer A
permalink: /voteforthegoat/nflgoats
comments: false
---

<style>
/* Welcome Banner Styles */
#welcomeBanner {
    position: relative;
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #1e90ff, #ff4500);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Arial', sans-serif;
    animation: fadeIn 2s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#welcomeBanner h1 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#welcomeBanner p {
    font-size: 1.5rem;
    margin: 10px 0 0;
}

#welcomeBanner .cta {
    margin-top: 20px;
    padding: 10px 20px;
    background: white;
    color: #1e90ff;
    border-radius: 50px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: background 0.3s, color 0.3s;
    cursor: pointer;
}

#welcomeBanner .cta:hover {
    background: #ff4500;
    color: white;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Card Container Styles */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
}

.card {
    width: 250px;
    background: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    overflow: hidden;
}

.card img {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.card h3 {
    margin: 10px 0;
    color: #333;
    font-size: 1.2rem;
}

/* Comment Section Styles */
.comment-section {
    margin: 20px 0;
    padding: 20px;
    background: #f1f1f1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.comment-section h3 {
    margin-bottom: 15px;
    color: #1e90ff;
    text-align: center;
}

.comment-section input,
.comment-section textarea {
    width: calc(100% - 20px);
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: block;
}

.comment-section button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background: #1e90ff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.comment-section button:hover {
    background: #ff4500;
}

/* Responsive Design */
@media (max-width: 768px) {
    #welcomeBanner h1 {
        font-size: 2rem;
    }

    #welcomeBanner p {
        font-size: 1rem;
    }

    .card {
        width: 200px;
    }
}
</style>

<div id="welcomeBanner">
    <h1>Welcome to NFL GOATs Voting</h1>
    <p>The ultimate showdown to choose the greatest players in NFL history.</p>
    <div class="cta" onclick="scrollToSection()">Cast Your Vote Now!</div>
</div>

<script>
function scrollToSection() {
    document.querySelector('.card-container').scrollIntoView({ behavior: 'smooth' });
}
</script>


<div class="comment-section" id="commentSectionQB" style="display: none;">
    <h3>Leave a Comment (Quarterbacks):</h3>
    <input type="text" id="usernameInputQB" placeholder="Enter your username">
    <textarea id="commentInputQB" placeholder="Enter your comment"></textarea>
    <button onclick="addComment('QB')">Submit</button>
    <div class="comment-list" id="commentListQB"></div>
</div>


<script>
  // Function to select a player and show the comment section for that category
  function selectPlayer(playerName, category) {
      // Display the selected player name
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      
      // Show the appropriate comment section based on the category
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for a specific category
  function addComment(category) {
      // Get the username and comment input elements based on the category
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      // Check if both fields have input
      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      // Get the comment list for the category
      const commentList = document.getElementById(`commentList${category}`);

      // Create a new div for the comment
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      // Append the new comment to the comment list
      commentList.appendChild(newComment);

      // Clear the input fields after adding the comment
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>
## Quarterback Voting
<!-- Add this style for modal and animation -->
<style>
/* Modal Background */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Modal Content */
.modal-content {
    position: relative;
    width: 80%;
    max-width: 800px;
    animation: zoomIn 0.5s ease-in-out;
}

.modal-content img {
    width: 100%;
    border-radius: 10px;
}

/* Close Button */
.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    color: black;
    border: none;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: background 0.3s;
}

.modal-close:hover {
    background: #ff4500;
    color: white;
}

/* Keyframe for zoom-in effect */
@keyframes zoomIn {
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>

<!-- Modal Structure -->
<div class="modal-overlay" id="modalOverlay">
    <div class="modal-content" id="modalContent">
        <button class="modal-close" id="modalClose">×</button>
        <img id="modalImage" src="" alt="Enlarged Image">
    </div>
</div>

<!-- Add this script for modal functionality -->
<script>
    // Function to open modal with the clicked image
    function openModal(imageSrc) {
        const modalOverlay = document.getElementById('modalOverlay');
        const modalImage = document.getElementById('modalImage');
        modalImage.src = imageSrc; // Set the image source
        modalOverlay.style.display = 'flex'; // Show the modal
    }

    // Function to close the modal
    function closeModal() {
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.style.display = 'none'; // Hide the modal
    }

    // Attach close event to the close button
    document.getElementById('modalClose').addEventListener('click', closeModal);

    // Attach close event to the modal background
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
</script>

<!-- Updated card container for Tom Brady and Joe Montana -->
<div class="card-container">
    <!-- Tom Brady Card -->
    <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Tom_Brady.png')">
        <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Tom_Brady.png" alt="Tom Brady">
        <h3>Tom Brady</h3>
    </div>

    <!-- Joe Montana Card -->
    <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Joe_Montana.png')">
        <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Joe_Montana.png" alt="Joe Montana">
        <h3>Joe Montana</h3>
    </div>
</div>

 <div class="quarterback-cards">
    <div class="card-container">
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Johnny_Unitas.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Johnny_Unitas.png" alt="Johnny Unitas">
            <h3>Johnny Unitas</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Peyton_Manning.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Peyton_Manning.png" alt="Peyton Manning">
            <h3>Peyton Manning</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Brett_Farve')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Brett_Farve.png" alt="Brett Favre">
            <h3>Brett Favre</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Dan_Marino.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Dan_Marino.png" alt="Dan Marino">
            <h3>Dan Marino</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Steve_Young.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Steve_Young.png" alt="Steve Young">
            <h3>Steve Young</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/John_Elway.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/John_Elway.png" alt="John Elway">
            <h3>John Elway</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Drew_Brees.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Drew_Brees.png" alt="Drew Brees">
            <h3>Drew Brees</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Aaron_Rodgers.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Aaron_Rodgers.png" alt="Aaron Rodgers">
            <h3>Aaron Rodgers</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Ben_Roethlisberger.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Ben_Roethlisberger.png" alt="Ben Roethlisberger">
            <h3>Ben Roethlisberger</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Fran_Tarkenton.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Fran_Tarkenton.png" alt="Fran Tarkenton">
            <h3>Fran Tarkenton</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Patrick_Mahomes.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Patrick_Mahomes.png" alt="Patrick Mahomes">
            <h3>Patrick Mahomes</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Troy_Aikman.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Troy_Aikman.png" alt="Troy Aikman">
            <h3>Troy Aikman</h3>
        </div>
        <div class="card" onclick="openModal('{{site.baseurl}}/images/nfl-icons/Quarterbacks/Eli_Manning.png')">
            <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Eli_Manning.png" alt="Eli Manning">
            <h3>Eli Manning</h3>
        </div>
    </div>
</div>


<div id="selectedPlayerQB" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionQB" style="display: none;">
    <h3>Leave a Comment (Quarterbacks):</h3>
    <input type="text" id="usernameInputQB" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputQB" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('QB');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListQB" style="margin-top: 10px;"></div>
</div>

<script>
  // Function to select a player and show the comment section for Wide Receivers (WRs)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Wide Receivers (WRs)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


## Wide Receiver Voting

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Jerry Rice', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Jerry_Rice.png" alt="Jerry Rice" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Randy Moss', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Randy_Moss.png" alt="Randy Moss" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Terrell Owens', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Terrell_Owens.png" alt="Terrell Owens" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Larry Fitzgerald', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Larry_Fitzgerald.png" alt="Larry Fitzgerald" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Calvin Johnson', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Calvin_Johnson.png" alt="Calvin Johnson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Davante Adams', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/davante_adams.png" alt="Davante Adams" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Chris Carter', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Chris_Carter.png" alt="Chris Carter" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Tyreek Hill', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Tyreek_Hill.png" alt="Tyreek Hill" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('DeAndre Hopkins', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/DeAndre_Hopkins.png" alt="DeAndre Hopkins" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Julio Jones', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Julio_Jones.png" alt="Julio Jones" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Antonio Brown', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Antonio_Brown.png" alt="Antonio Brown" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Stefon Diggs', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Stefon_Diggs.png" alt="Stefon Diggs" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('DK Metcalf', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/DK_Metcalf.png" alt="DK Metcalf" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('A.J. Brown', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/AJ_Brown.png" alt="A.J. Brown" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Amari Cooper', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Amari_Cooper.png" alt="Amari Cooper" style="width: 100%;">
  </div>

  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Marvin Harrison', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Marvin_Harrison.png" alt="Marvin Harrison" style="width: 100%;">
  </div>

  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Mike Evans', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Mike_Evans.png" alt="Mike Evans" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerWR" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionWR" style="display: none;">
    <h3>Leave a Comment (Wide Receivers):</h3>
    <input type="text" id="usernameInputWR" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputWR" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('WR');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListWR" style="margin-top: 10px;"></div>
</div>

<script>
  // Function to select a player and show the comment section for Defensive Players (DPs)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Defensive Players (DPs)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


## Defensive Player Voting

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Lawrence Taylor', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Lawrence_Taylor.png" alt="Lawrence Taylor" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Reggie White', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Reggie_White.png" alt="Reggie White" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Dick Butkus', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Dick_Butkus.png" alt="Dick Butkus" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Deion Sanders', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Deion_Sanders.png" alt="Deion Sanders" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ray Lewis', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Ray_Lewis.png" alt="Ray Lewis" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ed Reed', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Ed_Reed.png" alt="Ed Reed" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Joe Greene', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Joe_Greene.png" alt="Joe Greene" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ronnie Lott', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Ronnie_Lott.png" alt="Ronnie Lott" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('J.J. Watt', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/JJ_Watt.png" alt="J.J. Watt" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('T.J. Watt', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/TJ_Watt.png" alt="T.J. Watt" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Nick Bosa', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Nick_Bosa.png" alt="Nick Bosa" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Aidan Hutchinson', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Aidan_Hutchinson.png" alt="Aidan Hutchinson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Fred Warner', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Fred_Warner.png" alt="Fred Warner" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Derrick Thomas', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Derrick_Thomas.png" alt="Derrick Thomas" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Mike Singletary', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Mike_Singletary.png" alt="Mike Singletary" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerDP" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionDP" style="display: none;">
    <h3>Leave a Comment (Defensive Players):</h3>
    <input type="text" id="usernameInputDP" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputDP" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('DP');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListDP" style="margin-top: 10px;"></div>
</div>


<script>
  // Function to select a player and show the comment section for Running Backs (RBs)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Running Backs (RBs)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>



## Runningback Voting

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Jim Brown', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Jim_Brown.png" alt="Jim Brown" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Barry Sanders', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Barry_Sanders.png" alt="Barry Sanders" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Walter Payton', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Walter_Payton.png" alt="Walter Payton" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Emmitt Smith', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Emmitt_Smith.png" alt="Emmitt Smith" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Derrick Henry', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Derrick_Henry.png" alt="Derrick Henry" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Christian McCaffrey', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Christian_McCaffrey.png" alt="Christian McCaffrey" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Eric Dickerson', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Eric_Dickerson.png" alt="Eric Dickerson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Marshall Faulk', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Marshall_Faulk.png" alt="Marshall Faulk" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Adrian Peterson', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Adrian_Peterson.png" alt="Adrian Peterson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('LaDainian Tomlinson', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/LaDainian_Tomlinson.png" alt="LaDainian Tomlinson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Frank Gore', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Frank_Gore.png" alt="Frank Gore" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Curtis Martin', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Curtis_Martin.png" alt="Curtis Martin" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Jerome Bettis', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Jerome_Bettis.png" alt="Jerome Bettis" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Tony Dorsett', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Tony_Dorsett.png" alt="Tony Dorsett" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Marshawn Lynch', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Marshawn_Lynch.png" alt="Marshawn Lynch" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerRB" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionRB" style="display: none;">
    <h3>Leave a Comment (Running Backs):</h3>
    <input type="text" id="usernameInputRB" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputRB" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('RB');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListRB" style="margin-top: 10px;"></div>
</div>

<script>
  // Function to select a division and show the comment section for Divisions (Ds)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Divisions (Ds)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


## NFL Divisions Votings

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC North', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_North.png" alt="NFC North" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC East', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_East.png" alt="NFC East" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC South', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_South.png" alt="NFC South" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC West', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_West.png" alt="NFC West" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC North', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_North.png" alt="AFC North" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC East', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_East.png" alt="AFC East" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC South', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_South.png" alt="AFC South" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC West', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_West.png" alt="AFC West" style="width: 100%;">
  </div>

<div id="selectedPlayerD" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionD" style="display: none;">
    <h3>Leave a Comment (Divisions):</h3>
    <input type="text" id="usernameInputD" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputD" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('D');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListD" style="margin-top: 10px;"></div>
</div>


<style>
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1200px;
        padding: 20px;
        box-sizing: border-box;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        background-color: #2c3e50;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #ecf0f1;
    }
    .form-container label {
        margin-bottom: 5px;
    }
    .form-container input, .form-container textarea, .form-container select {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 100%;
    }
    .form-container button {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #34495e;
        color: #ecf0f1;
        cursor: pointer;
    }
</style>

<div class="container">
    <div class="form-container">
        <h2>Select Group and Channel</h2>
        <form id="selectionForm">
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <label for="channel_id">Channel:</label>
            <select id="channel_id" name="channel_id" required>
                <option value="">Select a channel</option>
            </select>
            <button type="submit">Select</button>
        </form>
    </div>
</div>

<div class="container">
    <div class="form-container">
        <h2>Add New Post</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

<div class="container">
    <div id="data" class="data">
        <div class="left-side">
            <p id="count"></p>
        </div>
        <div class="details" id="details">
        </div>
    </div>
</div>

<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    /**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Vote for the GOAT" }) // Adjust the section name as needed
            });
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.name; // Use group name for payload
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    /**
     * Fetch channels based on selected group
     * User picks from dropdown
     */
    async function fetchChannels(groupName) {
        try {
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name: groupName })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            const channelSelect = document.getElementById('channel_id');
            channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
            channels.forEach(channel => {
                const option = document.createElement('option');
                option.value = channel.id;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }

    /**
      * Handle group selection change
      * Channel Dropdown refresh to match group_id change
      */
    document.getElementById('group_id').addEventListener('change', function() {
        const groupName = this.value;
        if (groupName) {
            fetchChannels(groupName);
        } else {
            document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        }
    });

    /**
     * Handle form submission for selection
     * Select Button: Computer fetches and displays posts
     */
    document.getElementById('selectionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const groupId = document.getElementById('group_id').value;
        const channelId = document.getElementById('channel_id').value;
        if (groupId && channelId) {
            fetchData(channelId);
        } else {
            alert('Please select both group and channel.');
        }
    });

    /**
     * Handle form submission for adding a post
     * Add Form Button: Computer handles form submission with request
     */
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const channelId = document.getElementById('channel_id').value;

        // Create API payload
        const postData = {
            title: title,
            comment: comment,
            channel_id: channelId
        };

        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post: ' + response.statusText);
            }

            // Successful post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
            fetchData(channelId);
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    /**
     * Fetch posts based on selected channel
     * Handle response: Fetch and display posts
     */
    async function fetchData(channelId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ channel_id: channelId })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts: ' + response.statusText);
            }

            // Parse the JSON data
            const postData = await response.json();

            // Extract posts count
            const postCount = postData.length || 0;

            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Count ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over the postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Channel:</strong> ${postItem.channel_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.comment}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch groups when the page loads
    fetchGroups();
</script>
