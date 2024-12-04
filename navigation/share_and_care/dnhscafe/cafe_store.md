---
layout: page
title: DNHS Cafe Store
description: Purchase coffee using your d'nero you earned from helping!
permalink: /dnhscafestore/
---
<style>
body { 
    background: linear-gradient(135deg, #a17a64, #452f22); /* Dark brown to light brown */
    background-attachment: fixed; /* Keeps background fixed */
    color: #333333; /* Darker text color for better readability */
    font-family: Arial, sans-serif; 
    min-height: 100vh; /* Ensures it covers the viewport height */ 
    margin: 0; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

.collapsible {
  background-color: #825B41;
  color: #ffff;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.active, .collapsible:hover {
  background-color: #825B41;
}
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #AB8265;
}
</style>

# ☕ Welcome to DNHS Cafe

**Come for the coffee, stay for the cozy vibes.**  
*Enjoy a range of your favorite brews using dneros, our exclusive currency!*

---
## Menu

### **House Favorites**

- **Classic Espresso**  
  A bold shot of espresso, perfect for a quick boost.  
  **Price:** 5 dneros  

- **Cappuccino**  
  Steamed milk and frothy foam topped with a hint of cinnamon.  
  **Price:** 8 dneros  

- **Mocha Latte**  
  A sweet blend of espresso, milk, and chocolate.  
  **Price:** 10 dneros  

### **Seasonal Specials**

- **Pumpkin Spice Latte**  
  The cozy flavors of fall in a cup, perfect for crisp days.  
  **Price:** 12 dneros  

- **Vanilla Caramel Macchiato**  
  Creamy vanilla meets rich caramel for a truly indulgent treat.  
  **Price:** 11 dneros  

### Points: <span id="userPoints">50</span> dneros

| Image                          | Coffee                        | Cost (dneros) | Action   |
|--------------------------------|-------------------------------|---------------|----------|
| ![Classic Espresso](Espresso.png) | **Classic Espresso**          | 15            | <button class="buy-button" onclick="buyCoffee(15)">Buy</button> |
| ![Pumpkin Spice Latte](Pumpkin.png) | **Pumpkin Spice Latte**       | 20            | <button class="buy-button" onclick="buyCoffee(20)">Buy</button> |
| ![Cappuccino](Cap.png) | **Cappuccino**                | 18            | <button class="buy-button" onclick="buyCoffee(18)">Buy</button> |
| ![Mocha Latte](Mocha.png) | **Mocha Latte**               | 22            | <button class="buy-button" onclick="buyCoffee(22)">Buy</button> |
| ![Vanilla Caramel Macchiato](Vanilla.png) | **Vanilla Caramel Macchiato** | 25            | <button class="buy-button" onclick="buyCoffee(25)">Buy</button> |

---

<span id="message" style="color:red;"></span>

<script>
let userPoints = 50;

function updatePointsDisplay() {
    document.getElementById("userPoints").textContent = userPoints;
}

function buyCoffee(cost) {
    const messageElement = document.getElementById("message");
    if (userPoints >= cost) {
        userPoints -= cost;
        messageElement.textContent = "Enjoy your coffee! ☕";
        updatePointsDisplay();
    } else {
        messageElement.textContent = "You don't have enough points! :(";
    }
}
updatePointsDisplay(); // Initial display update
</script>


1. Choose your favorite drink(s).

2. Message us to confirm your order.

3. Enjoy the cozy vibes and delicious flavors of DNHS Cafe!

*Thank you for visiting DNHS Cafe! We hope our cozy corner brings you a taste of joy and warmth.*

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #FAEBD7;
    color: #5A3D31;
    text-align: center;
    padding: 20px;
}
table {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    border-collapse: collapse;
    background-color: #FFF5EE;
}
th, td {
    padding: 12px;
    border: 1px solid #DDD;
}
th {
    background-color: #F0E5D8;
}
img {
    width: 80px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.buy-button {
    padding: 10px 15px;
    background-color: #4682B4;
    color: white;
    border: 2px solid #0056b3;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.buy-button:hover {
    background-color: #5A9BD4;
    transform: scale(1.05);
}

.buy-button:active {
    transform: scale(0.95);
}

.buy-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>


<a href="{{site.baseurl}}/dnhscafestudyroom">
<button style="background-color: #e4bc84; color: white; padding: 10px"> Take Me To DNHS Cafe Study Room! </button>
</a>