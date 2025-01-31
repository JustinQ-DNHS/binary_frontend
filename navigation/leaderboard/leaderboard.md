---
layout: page
title: Player Analytics
permalink: /leaderboard/
---

{% comment %}
```html
{% endcomment %}

<html lang="en">
    <body>
        <table id="leaderboard">
        </table>
        <div id="resultContainer"></div> <!-- Add this line -->
        <script type="module" src="{{site.baseurl}}/navigation/leaderboard/leaderboard.js"></script>
        <script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>
    </body>
</html>
<form id="userForm">
  <p>
    <label>Name:
      <input type="text" name="name" id="name" required>
    </label>
  </p>
  <p>
    <label>User ID:
      <input type="text" name="uid" id="uid" required>
    </label>
  </p>
  <p>
    <label>Games Played:
      <input type="text" name="games played" id="games played" required>
    </label>
  </p>
  <p>
    <label>Average Score:
      <input type="text" name="average score" id="average score" required>
    </label>
  </p>
  <p>
     <label>Wins:
      <input type="text" name="wins" id="wins" required>
    </label>
  </p>
  <p>
     <label>Losses:
      <input type="text" name="losses" id="losses" required>
    </label>
  </p>
  <p>
     <label>Highest Score:
      <input type="text" name="highest score" id="highest score" required>
    </label>
    <button type="submit">Create</button>
  </p>
</form>

<button id="getAllLeaderboardButton">See Table</button>
<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Games Played</th>
    <th>Average Score</th>
    <th>Wins</th>
    <th>Losses</th>
    <th>Highest Score</th>
    <th>Actions</th>

  </tr>
  </thead>
  <tbody id="leaderboardTable">
    <!-- javascript generated data -->
  </tbody>
</table>

