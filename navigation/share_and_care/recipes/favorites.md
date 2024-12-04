---
layout: post
title: The Hungry Games (Liked Restaurants)
permalink: share_and_care/liked_restaurants
comments: true
author: Ryan, Jowan, Gabriela, Michelle
---
# Favorite Restaurants Page

Mark restaurants as favorites, create a list of the ones they like, and toggle the order of their favorite list.

### HTML, CSS, and JavaScript Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Favorite Restaurants</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f8f8f8;
    }

    .container {
      max-width: 600px;
      margin: auto;
      text-align: center;
    }

    h1 {
      color: #333;
    }

    button {
      margin-right: 10px;
      cursor: pointer;
    }

    #restaurant-list, #favorites-list {
      background-color: #fff;
      padding: 20px;
      margin-top: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    #favorites-list ul {
      list-style-type: none;
      padding: 0;
    }

    #toggle-order-btn {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Restaurant Favorites</h1>

    <!-- Restaurant List -->
    <div id="restaurant-list">
      <h2>Available Restaurants</h2>
      <ul>
        <li><button onclick="toggleFavorite('Restaurant A')">⭐</button> Burger Lounge</li>
        <li><button onclick="toggleFavorite('Restaurant B')">⭐</button> Chick-fil-A</li>
        <li><button onclick="toggleFavorite('Restaurant C')">⭐</button> Board and Brew</li>
        <li><button onclick="toggleFavorite('Restaurant D')">⭐</button> Luna Grill</li>
      </ul>
    </div>

    <!-- Favorites List -->
    <div id="favorites-list">
      <h2>Your Favorites</h2>
      <ul id="favorite-restaurants"></ul>
    </div>

    <!-- Toggle Order Button -->
    <button id="toggle-order-btn" onclick="toggleOrder()">Toggle Order</button>
  </div>

  <script>
    const favoriteRestaurants = new Map();
    let ascendingOrder = true;

    // Toggle favorite status
    function toggleFavorite(restaurantName) {
      if (favoriteRestaurants.has(restaurantName)) {
        favoriteRestaurants.delete(restaurantName);
      } else {
        favoriteRestaurants.set(restaurantName, new Date());
      }
      updateFavoriteList();
    }

    // Update favorites list on the page
    function updateFavoriteList() {
      const favoriteList = document.getElementById("favorite-restaurants");
      favoriteList.innerHTML = '';

      // Sort favorites based on timestamp
      const sortedFavorites = Array.from(favoriteRestaurants.keys()).sort((a, b) => {
        return ascendingOrder
          ? favoriteRestaurants.get(a) - favoriteRestaurants.get(b)
          : favoriteRestaurants.get(b) - favoriteRestaurants.get(a);
      });

      // Add each restaurant to the favorites list
      sortedFavorites.forEach(restaurant => {
        const li = document.createElement("li");
        li.textContent = restaurant;
        favoriteList.appendChild(li);
      });
    }

    // Toggle sort order and update list
    function toggleOrder() {
      ascendingOrder = !ascendingOrder;
      updateFavoriteList();
    }
  </script>
</body>
</html>
