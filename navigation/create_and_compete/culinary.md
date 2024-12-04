---
layout: post 
title: Create and Compete - Culinary
search_exclude: true
permalink: /create_and_compete/culinary
menu: nav/create_and_compete.html
author: Daksha, Zach, Alex, Darsh
---

<style>
    body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        background-image: url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E');
        color: #333;
        margin: 0;
        padding: 20px;
        line-height: 1.6;
        min-height: 100vh;
    }

    h1, h2 {
        color: #2c3e50;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 1em;
    }

    form {
        margin: 20px 0;
        background: rgba(255, 255, 255, 0.9);
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        backdrop-filter: blur(5px);
    }

    input[type="text"] {
        width: calc(100% - 150px);
        padding: 12px 15px;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        background-color: white;
        color: #333;
        font-size: 16px;
        transition: all 0.3s ease;
    }

    input[type="text"]:focus {
        border-color: #3498db;
        box-shadow: 0 0 8px rgba(52,152,219,0.3);
        outline: none;
    }

    button {
        position: relative;
        padding: 15px 30px;
        border: none;
        border-radius: 12px;
        background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.9em;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
        margin: 10px;
    }

    button:hover {
        transform: translateY(-3px) scale(1.02);
        background: linear-gradient(145deg, #2d2d2d, #1a1a1a);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    button:active {
        transform: translateY(2px);
        box-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.3),
            inset 0 -1px 3px rgba(0,0,0,0.3),
            inset 0 1px 3px rgba(255,255,255,0.1);
    }

    button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transition: 0.5s;
    }

    button:hover::before {
        left: 100%;
    }

    #ingredientForm button {
        background: linear-gradient(145deg, #1f2f38, #2c3e50);
        border: 1px solid #34495e;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #ingredientForm button:hover {
        background: linear-gradient(145deg, #2c3e50, #1f2f38);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #randomRecipeButton {
        background: linear-gradient(145deg, #2c3440, #3d4752);
        border: 1px solid #455261;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #randomRecipeButton:hover {
        background: linear-gradient(145deg, #3d4752, #2c3440);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #customRecipeButton {
        background: linear-gradient(145deg, #232838, #2f3646);
        border: 1px solid #3a4257;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #customRecipeButton:hover {
        background: linear-gradient(145deg, #2f3646, #232838);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    .button-container {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        margin: 20px 0;
    }

    .recipe {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 15px;
        padding: 25px;
        margin: 20px 0;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .recipe:hover {
        transform: translateY(-5px);
    }

    .suggestions {
        background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
        border-radius: 15px;
        padding: 25px;
        margin: 25px 0;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        backdrop-filter: blur(5px);
        border: 1px solid #3a4257;
        color: #ffffff;
    }

    .suggestions h2 {
        color: #ffffff;
        margin-bottom: 15px;
        font-size: 1.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
    }

    #randomIngredients {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #randomIngredients li {
        padding: 10px 15px;
        margin: 8px 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        font-size: 1.1em;
        transition: all 0.3s ease;
        border-left: 3px solid #3498db;
    }

    #randomIngredients li:hover {
        transform: translateX(5px);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .culinary-posts-btn {
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        padding: 15px 30px;
        border-radius: 10px;
        font-weight: 600;
        letter-spacing: 1.5px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    }

    .culinary-posts-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        background: linear-gradient(135deg, #c0392b 0%, #a93226 100%);
    }

    .content-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .recipe h3 {
        color: #2c3e50;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
        margin-bottom: 15px;
    }

    .recipe p {
        color: #34495e;
        line-height: 1.6;
    }

    .recipe strong {
        color: #2980b9;
    }
</style>

<style>
.culinary-posts-btn {
  position: relative;
  font-size: 1.2em;
  padding: 0.7em 1.4em;
  background-color: #BF0426;
  text-decoration: none;
  border: none;
  border-radius: 0.5em;
  color: #DEDEDE;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
}

.culinary-posts-btn::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
  border-radius: 0 0 0.5em 0;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.culinary-posts-btn:hover::before {
  width: 1.6em;
  height: 1.6em;
}

.culinary-posts-btn:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}
</style>

<a href="{{site.baseurl}}/create_and_compete/culinaryposts">
  <button class="culinary-posts-btn">Culinary Posts</button>
</a>

<h1>Welcome to the Recipe Finder!</h1>
<p>Enter your available ingredients below to receive a variety of recipe ideas tailored to what you have on hand.</p>

<h2>Ingredient Input</h2>
<form id="ingredientForm">
    <input type="text" id="ingredients" placeholder="e.g., chicken, broccoli, rice">
    <button type="submit">Find Recipes</button>
</form>

<div class="button-container">
    <button id="randomRecipeButton">Generate Random Recipe</button>
    <button id="customRecipeButton">Generate 5 Random Ingredients</button>
</div>

<div class="suggestions">
    <h2>Random Ingredients Suggestions:</h2>
    <ul id="randomIngredients"></ul>
</div>

<h2>Recipes</h2>
<div id="recipeResults"></div>

<script>
    const recipes = [
    {
        name: "Chicken Stir Fry",
        ingredients: ["Chicken", "Broccoli", "Carrots", "Soy Sauce", "Garlic"],
        description: "A quick stir fry with chicken and fresh vegetables.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Heat oil in a pan. 2. Add chicken and cook until browned. 3. Toss in vegetables and sauce. 4. Stir fry until cooked. 5. Serve hot."
    },
    {
        name: "Beef Tacos",
        ingredients: ["Ground Beef", "Taco Seasoning", "Tortillas", "Lettuce", "Cheese"],
        description: "Flavorful tacos filled with seasoned ground beef.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook beef with seasoning. 2. Warm tortillas. 3. Fill tortillas with beef and toppings. 4. Serve with salsa."
    },
    {
        name: "Vegetable Curry",
        ingredients: ["Coconut Milk", "Mixed Vegetables", "Curry Powder", "Onion", "Garlic"],
        description: "A rich and creamy curry packed with veggies.",
        cookingTime: "40 minutes",
        cookingProcess: "1. Sauté onion and garlic. 2. Add vegetables and curry powder. 3. Stir in coconut milk. 4. Simmer until cooked."
    },
    {
        name: "Spaghetti Bolognese",
        ingredients: ["Pasta", "Ground Beef", "Tomato Sauce", "Onion", "Garlic"],
        description: "Classic Italian pasta dish with a hearty meat sauce.",
        cookingTime: "45 minutes",
        cookingProcess: "1. Cook spaghetti. 2. Sauté onion and garlic. 3. Add beef and cook until browned. 4. Stir in tomato sauce. 5. Serve over pasta."
    },
    {
        name: "Caprese Salad",
        ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive Oil", "Balsamic Vinegar"],
        description: "Fresh salad with tomatoes, mozzarella, and basil.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Slice tomatoes and mozzarella. 2. Layer with basil. 3. Drizzle with olive oil and vinegar."
    },
    {
        name: "Shrimp Fried Rice",
        ingredients: ["Shrimp", "Rice", "Soy Sauce", "Egg", "Peas"],
        description: "Delicious fried rice with shrimp and vegetables.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cook rice. 2. Sauté shrimp and peas. 3. Add rice and soy sauce. 4. Stir in scrambled egg. 5. Serve hot."
    },
    {
        name: "Quinoa Salad",
        ingredients: ["Quinoa", "Cucumber", "Tomatoes", "Olive Oil", "Feta Cheese"],
        description: "Light and refreshing quinoa salad.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook quinoa. 2. Chop vegetables. 3. Mix quinoa with veggies and olive oil. 4. Top with feta."
    },
    {
        name: "Stuffed Bell Peppers",
        ingredients: ["Bell Peppers", "Ground Beef", "Rice", "Tomato Sauce", "Cheese"],
        description: "Bell peppers stuffed with a savory meat mixture.",
        cookingTime: "45 minutes",
        cookingProcess: "1. Preheat oven. 2. Cook beef and rice. 3. Stuff peppers with mixture. 4. Bake until peppers are tender."
    },
    {
        name: "Chicken Caesar Salad",
        ingredients: ["Romaine Lettuce", "Grilled Chicken", "Caesar Dressing", "Croutons", "Parmesan Cheese"],
        description: "Classic Caesar salad topped with grilled chicken.",
        cookingTime: "15 minutes",
        cookingProcess: "1. Chop lettuce. 2. Top with sliced chicken. 3. Drizzle with dressing. 4. Add croutons and cheese."
    },
    {
        name: "Baked Ziti",
        ingredients: ["Ziti Pasta", "Tomato Sauce", "Mozzarella Cheese", "Parmesan Cheese", "Ground Beef"],
        description: "Comforting baked pasta with cheese and sauce.",
        cookingTime: "50 minutes",
        cookingProcess: "1. Cook pasta. 2. Mix with sauce and beef. 3. Layer with cheese in a baking dish. 4. Bake until bubbly."
    },
    {
        name: "Vegetable Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
        description: "A colorful mix of stir-fried vegetables.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Heat oil in a pan. 2. Add vegetables and stir fry. 3. Add soy sauce and ginger. 4. Cook until tender."
    },
    {
        name: "Salmon with Dill Sauce",
        ingredients: ["Salmon", "Dill", "Lemon", "Garlic", "Olive Oil"],
        description: "Oven-baked salmon topped with a fresh dill sauce.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Preheat oven. 2. Mix sauce ingredients. 3. Place salmon in a dish and top with sauce. 4. Bake until cooked."
    },
    {
        name: "Pasta Primavera",
        ingredients: ["Pasta", "Mixed Vegetables", "Olive Oil", "Parmesan Cheese", "Garlic"],
        description: "A light pasta dish with fresh vegetables.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cook pasta. 2. Sauté vegetables and garlic. 3. Toss with pasta and olive oil. 4. Serve with cheese."
    },
    {
        name: "Creamy Mushroom Risotto",
        ingredients: ["Arborio Rice", "Mushrooms", "Chicken Broth", "Parmesan Cheese", "Onion"],
        description: "Rich and creamy risotto with mushrooms.",
        cookingTime: "45 minutes",
        cookingProcess: "1. Sauté onion and mushrooms. 2. Add rice and broth gradually. 3. Stir until creamy. 4. Finish with cheese."
    },
    {
        name: "Sweet Potato Fries",
        ingredients: ["Sweet Potatoes", "Olive Oil", "Paprika", "Salt", "Pepper"],
        description: "Crispy sweet potato fries baked to perfection.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cut sweet potatoes into fries. 2. Toss with oil and spices. 3. Bake until crispy."
    },
    {
        name: "Eggplant Parmesan",
        ingredients: ["Eggplant", "Tomato Sauce", "Mozzarella Cheese", "Parmesan Cheese", "Basil"],
        description: "Baked eggplant layered with cheese and sauce.",
        cookingTime: "1 hour",
        cookingProcess: "1. Slice and salt eggplant. 2. Bread and fry slices. 3. Layer with sauce and cheese in a dish. 4. Bake until bubbly."
    },
    {
        name: "Garlic Butter Shrimp",
        ingredients: ["Shrimp", "Butter", "Garlic", "Parsley", "Lemon"],
        description: "Quick and flavorful garlic butter shrimp.",
        cookingTime: "15 minutes",
        cookingProcess: "1. Melt butter in a pan. 2. Add garlic and shrimp. 3. Cook until shrimp are pink. 4. Finish with parsley and lemon."
    },
    {
        name: "Chocolate Chip Cookies",
        ingredients: ["Flour", "Butter", "Brown Sugar", "Chocolate Chips", "Eggs"],
        description: "Classic cookies with gooey chocolate chips.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Cream butter and sugar. 2. Add eggs and flour. 3. Stir in chocolate chips. 4. Bake until golden."
    },
    {
        name: "Roasted Brussels Sprouts",
        ingredients: ["Brussels Sprouts", "Olive Oil", "Salt", "Pepper", "Balsamic Vinegar"],
        description: "Crispy roasted Brussels sprouts with a tangy glaze.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Preheat oven. 2. Toss sprouts in oil and seasonings. 3. Roast until golden. 4. Drizzle with vinegar."
    },
    {
        name: "Pumpkin Soup",
        ingredients: ["Pumpkin", "Onion", "Vegetable Broth", "Cream", "Nutmeg"],
        description: "Creamy pumpkin soup perfect for fall.",
        cookingTime: "40 minutes",
        cookingProcess: "1. Sauté onion. 2. Add pumpkin and broth. 3. Simmer until soft. 4. Blend and stir in cream."
    },
    {
        name: "Beef Stroganoff",
        ingredients: ["Beef", "Mushrooms", "Onion", "Sour Cream", "Egg Noodles"],
        description: "Tender beef in a creamy mushroom sauce.",
        cookingTime: "1 hour",
        cookingProcess: "1. Sauté beef and onions. 2. Add mushrooms and cook. 3. Stir in sour cream. 4. Serve over noodles."
    },
    {
        name: "Chickpea Salad",
        ingredients: ["Chickpeas", "Cucumber", "Tomatoes", "Feta Cheese", "Lemon"],
        description: "A refreshing salad with protein-packed chickpeas.",
        cookingTime: "15 minutes",
        cookingProcess: "1. Rinse chickpeas. 2. Chop veggies. 3. Mix with cheese and dressing. 4. Serve cold."
    },
    {
        name: "Pancakes",
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
        description: "Fluffy pancakes perfect for breakfast.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Mix dry ingredients. 2. Add milk and eggs. 3. Cook on a griddle until golden."
    },
    {
        name: "Lentil Soup",
        ingredients: ["Lentils", "Carrots", "Celery", "Vegetable Broth", "Onion"],
        description: "Hearty soup made with lentils and vegetables.",
        cookingTime: "40 minutes",
        cookingProcess: "1. Sauté onion and vegetables. 2. Add lentils and broth. 3. Simmer until lentils are tender."
    },
    {
        name: "Pesto Pasta",
        ingredients: ["Pasta", "Basil Pesto", "Parmesan Cheese", "Pine Nuts", "Cherry Tomatoes"],
        description: "Simple and flavorful pasta with pesto sauce.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook pasta. 2. Toss with pesto and tomatoes. 3. Top with cheese and nuts."
    },
    {
        name: "Hummus",
        ingredients: ["Chickpeas", "Tahini", "Lemon Juice", "Garlic", "Olive Oil"],
        description: "Creamy dip made from blended chickpeas.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Blend all ingredients until smooth. 2. Adjust seasoning. 3. Serve with pita or veggies."
    },
    {
        name: "BBQ Chicken",
        ingredients: ["Chicken", "BBQ Sauce", "Olive Oil", "Garlic Powder", "Paprika"],
        description: "Juicy chicken coated in tangy BBQ sauce.",
        cookingTime: "1 hour",
        cookingProcess: "1. Preheat grill. 2. Rub chicken with spices. 3. Grill until cooked, basting with sauce."
    },
    {
        name: "Mushroom Risotto",
        ingredients: ["Arborio Rice", "Mushrooms", "Chicken Broth", "Onion", "Parmesan Cheese"],
        description: "Creamy risotto infused with mushrooms.",
        cookingTime: "45 minutes",
        cookingProcess: "1. Sauté onion and mushrooms. 2. Add rice and broth gradually. 3. Stir in cheese."
    },
    {
        name: "Apple Crisp",
        ingredients: ["Apples", "Oats", "Brown Sugar", "Butter", "Cinnamon"],
        description: "Warm baked apples topped with a crumbly oat topping.",
        cookingTime: "40 minutes",
        cookingProcess: "1. Slice apples and mix with sugar. 2. Combine oats and butter. 3. Bake until bubbly."
    },
    {
        name: "Turkey Chili",
        ingredients: ["Ground Turkey", "Beans", "Tomato Sauce", "Onion", "Chili Powder"],
        description: "Spicy and hearty turkey chili.",
        cookingTime: "50 minutes",
        cookingProcess: "1. Sauté onion and turkey. 2. Add beans and sauce. 3. Simmer until thickened."
    },
    {
        name: "Greek Salad",
        ingredients: ["Cucumber", "Tomatoes", "Olives", "Feta Cheese", "Olive Oil"],
        description: "Fresh salad with Mediterranean flavors.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Chop vegetables. 2. Mix with olives and cheese. 3. Drizzle with olive oil."
    },
    {
        name: "Peanut Butter Banana Smoothie",
        ingredients: ["Banana", "Peanut Butter", "Milk", "Honey", "Ice"],
        description: "Creamy smoothie perfect for breakfast.",
        cookingTime: "5 minutes",
        cookingProcess: "1. Blend all ingredients until smooth. 2. Serve immediately."
    },
    {
        name: "Vegetable Frittata",
        ingredients: ["Eggs", "Spinach", "Tomatoes", "Onion", "Cheese"],
        description: "A fluffy frittata packed with vegetables.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Sauté vegetables. 2. Whisk eggs and pour over. 3. Cook until set, then broil to finish."
    },
    {
        name: "Chicken Alfredo",
        ingredients: ["Fettuccine", "Chicken", "Alfredo Sauce", "Parmesan Cheese", "Garlic"],
        description: "Creamy pasta dish with chicken and sauce.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cook fettuccine. 2. Cook chicken and garlic. 3. Add sauce and mix with pasta."
    },
    {
        name: "Beet Salad",
        ingredients: ["Beets", "Goat Cheese", "Walnuts", "Arugula", "Balsamic Vinaigrette"],
        description: "Colorful salad with roasted beets and cheese.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Roast beets and slice. 2. Toss with arugula, walnuts, and cheese. 3. Drizzle with dressing."
    },
    {
        name: "Spinach and Cheese Stuffed Shells",
        ingredients: ["Jumbo Pasta Shells", "Ricotta Cheese", "Spinach", "Marinara Sauce", "Mozzarella Cheese"],
        description: "Pasta shells filled with creamy cheese and spinach.",
        cookingTime: "1 hour",
        cookingProcess: "1. Cook shells. 2. Mix cheese and spinach. 3. Stuff shells, top with sauce, and bake."
    },
    {
        name: "Zucchini Noodles",
        ingredients: ["Zucchini", "Olive Oil", "Garlic", "Cherry Tomatoes", "Parmesan Cheese"],
        description: "A healthy pasta alternative using zucchini.",
        cookingTime: "15 minutes",
        cookingProcess: "1. Spiralize zucchini. 2. Sauté with garlic and tomatoes. 3. Top with cheese."
    },
    {
        name: "Teriyaki Salmon",
        ingredients: ["Salmon", "Teriyaki Sauce", "Sesame Seeds", "Green Onions", "Rice"],
        description: "Baked salmon glazed with sweet teriyaki sauce.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Preheat oven. 2. Brush salmon with sauce. 3. Bake and garnish with seeds and onions."
    },
    {
        name: "Fruit Salad",
        ingredients: ["Mixed Fruits", "Honey", "Lime Juice", "Mint"],
        description: "Refreshing salad with seasonal fruits.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Chop fruits. 2. Mix with honey and lime. 3. Garnish with mint."
    },
    {
        name: "Roasted Chicken",
        ingredients: ["Whole Chicken", "Olive Oil", "Herbs", "Lemon", "Garlic"],
        description: "Juicy roasted chicken with crispy skin.",
        cookingTime: "1.5 hours",
        cookingProcess: "1. Preheat oven. 2. Rub chicken with oil and herbs. 3. Roast until golden."
    },
    {
        name: "Mango Salsa",
        ingredients: ["Mango", "Red Onion", "Cilantro", "Lime Juice", "Jalapeño"],
        description: "Sweet and spicy salsa great with chips.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Dice mango and onion. 2. Mix with cilantro and lime. 3. Serve chilled."
    },
    {
        name: "Chocolate Mousse",
        ingredients: ["Dark Chocolate", "Eggs", "Sugar", "Cream", "Vanilla Extract"],
        description: "Rich and airy chocolate dessert.",
        cookingTime: "30 minutes + chilling",
        cookingProcess: "1. Melt chocolate. 2. Whisk eggs and sugar. 3. Fold in chocolate and whipped cream. 4. Chill before serving."
    },
    {
        name: "Vegetable Lasagna",
        ingredients: ["Lasagna Noodles", "Ricotta Cheese", "Spinach", "Marinara Sauce", "Mozzarella Cheese"],
        description: "Layers of pasta, cheese, and vegetables baked to perfection.",
        cookingTime: "1 hour",
        cookingProcess: "1. Cook noodles. 2. Layer with cheese, sauce, and spinach. 3. Bake until golden."
    },
    {
        name: "Chili Con Carne",
        ingredients: ["Ground Beef", "Kidney Beans", "Tomato Sauce", "Chili Powder", "Onion"],
        description: "Spicy and hearty beef chili.",
        cookingTime: "50 minutes",
        cookingProcess: "1. Sauté onion and beef. 2. Add beans and sauce. 3. Simmer until thick."
    },
    {
    name: "Classic Fish and Chips",
    ingredients: ["Cod Fillets", "Potatoes", "Flour", "Baking Powder", "Salt", "Pepper", "Beer", "Oil for Frying"],
    description: "Crispy battered cod served with golden, fried potatoes.",
    cookingTime: "45 minutes",
    cookingProcess: "1. Cut potatoes into fries and soak in water for 30 minutes. 2. Heat oil in a deep fryer. 3. Whisk flour, baking powder, salt, and pepper; add beer to make a batter. 4. Dry potatoes and fry until golden; set aside. 5. Dip cod in batter and fry until crispy and golden. 6. Serve fish with fries."
    },
    {
    name: "Crispy Garlic Parmesan Chicken Tenders",
    ingredients: ["Chicken Tenders", "Breadcrumbs", "Parmesan Cheese", "Garlic Powder", "Salt", "Pepper", "Olive Oil", "Parsley"],
    description: "Crispy, garlic-infused chicken tenders with a Parmesan crust.",
    cookingTime: "25 minutes",
    cookingProcess: "1. Preheat oven to 400°F (200°C). 2. Mix breadcrumbs, Parmesan, garlic powder, salt, and pepper. 3. Coat chicken tenders with olive oil and roll in breadcrumb mixture. 4. Place on a baking sheet and bake for 20-25 minutes until golden and crispy. 5. Garnish with parsley and serve."
    },
    {
    name: "Choco Vanilla Ice Cream Cake",
    ingredients: ["Chocolate Cake", "Vanilla Ice Cream", "Whipped Cream", "Chocolate Syrup", "Sprinkles"],
    description: "A layered chocolate cake with vanilla ice cream, topped with whipped cream and chocolate syrup.",
    cookingTime: "3 hours (including freezing time)",
    cookingProcess: "1. Bake a chocolate cake layer and let it cool completely. 2. Spread a thick layer of softened vanilla ice cream on top of the cake. 3. Freeze for 2 hours until the ice cream is firm. 4. Top with whipped cream, drizzle with chocolate syrup, and add sprinkles. 5. Serve immediately or keep frozen until ready to enjoy."
    },
    {
        name: "Sushi Rolls",
        ingredients: ["Sushi Rice", "Seaweed", "Cucumber", "Avocado", "Crab"],
        description: "Fresh sushi rolls filled with crab and veggies.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cook rice. 2. Roll with seaweed and fillings. 3. Slice and serve with soy sauce."
    },
    {
        name: "Pork Stir-Fry",
        ingredients: ["Pork", "Vegetables", "Soy Sauce", "Ginger", "Garlic"],
        description: "Quick stir-fry with tender pork and colorful veggies.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Sauté pork. 2. Add veggies and sauce. 3. Cook until tender."
    },
    {
    name: "Chocolate Chip Waffles",
    ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar", "Chocolate Chips", "Baking Powder", "Salt", "Vanilla Extract"],
    description: "Crispy, golden waffles with gooey chocolate chips in every bite.",
    cookingTime: "20 minutes",
    cookingProcess: "1. In a bowl, mix flour, baking powder, salt, and sugar. 2. In another bowl, whisk eggs, milk, melted butter, and vanilla extract. 3. Combine wet and dry ingredients, then fold in chocolate chips. 4. Pour batter onto a preheated waffle iron and cook until golden and crisp. 5. Serve warm with syrup or whipped cream."
    },
    {
        name: "Pumpkin Pie",
        ingredients: ["Pumpkin Puree", "Sugar", "Eggs", "Spices", "Pie Crust"],
        description: "Traditional pumpkin pie for dessert.",
        cookingTime: "1 hour",
        cookingProcess: "1. Mix ingredients. 2. Pour into crust. 3. Bake until set."
    },
    {
        name: "Shrimp Tacos",
        ingredients: ["Shrimp", "Tortillas", "Cabbage", "Avocado", "Lime"],
        description: "Tasty shrimp tacos topped with fresh ingredients.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook shrimp. 2. Assemble tacos with toppings. 3. Serve with lime."
    },
    {
        name: "Egg Fried Rice",
        ingredients: ["Rice", "Eggs", "Soy Sauce", "Green Onions", "Vegetables"],
        description: "Quick and easy fried rice with eggs and veggies.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Scramble eggs. 2. Stir-fry rice with veggies. 3. Add eggs and soy sauce."
    },
    {
        name: "Beef Stir-Fry",
        ingredients: ["Beef", "Broccoli", "Soy Sauce", "Garlic", "Ginger"],
        description: "Tender beef stir-fried with fresh broccoli.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Sauté beef. 2. Add broccoli and sauce. 3. Cook until beef is done."
    },
    {
        name: "Orange Chicken",
        ingredients: ["Chicken", "Orange Juice", "Soy Sauce", "Honey", "Garlic"],
        description: "Sweet and tangy orange chicken.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Marinate chicken. 2. Cook with sauce. 3. Serve with rice."
    },
    {
        name: "Teriyaki Chicken",
        ingredients: ["Chicken", "Teriyaki Sauce", "Sesame Seeds", "Green Onions", "Rice"],
        description: "Grilled chicken glazed with teriyaki sauce.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Preheat grill. 2. Brush chicken with sauce. 3. Grill until cooked."
    },
    {
        name: "Cauliflower Fried Rice",
        ingredients: ["Cauliflower", "Eggs", "Soy Sauce", "Green Onions", "Carrots"],
        description: "Low-carb fried rice made with cauliflower.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Rice cauliflower. 2. Scramble eggs. 3. Stir-fry with veggies and sauce."
    },
    {
    name: "Margherita Pizza",
    ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella Cheese", "Basil", "Olive Oil", "Salt"],
    description: "Classic Margherita pizza with fresh tomatoes, mozzarella, and basil.",
    cookingTime: "20 minutes",
    cookingProcess: "1. Preheat oven to 475°F (245°C). 2. Roll out the pizza dough and spread a thin layer of olive oil on top. 3. Add sliced tomatoes and sprinkle with salt. 4. Top with mozzarella cheese. 5. Bake for 10-12 minutes until cheese is melted and bubbly. 6. Garnish with fresh basil leaves before serving."
    },
    {
        name: "Baked Salmon",
        ingredients: ["Salmon", "Lemon", "Garlic", "Dill", "Olive Oil"],
        description: "Healthy baked salmon with fresh herbs.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Preheat oven. 2. Season salmon. 3. Bake until cooked through."
    },
    {
        name: "Coconut Rice",
        ingredients: ["Rice", "Coconut Milk", "Salt", "Sugar"],
        description: "Fluffy rice cooked in coconut milk.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Rinse rice. 2. Cook with coconut milk. 3. Fluff before serving."
    },
    {
        name: "Chili Garlic Noodles",
        ingredients: ["Noodles", "Chili Sauce", "Garlic", "Vegetables", "Soy Sauce"],
        description: "Spicy noodle dish with garlic and veggies.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook noodles. 2. Sauté garlic and veggies. 3. Mix with sauce and noodles."
    },
    {
        name: "Stuffed Mushrooms",
        ingredients: ["Mushrooms", "Cream Cheese", "Garlic", "Herbs", "Bread Crumbs"],
        description: "Savory mushrooms stuffed with cream cheese.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Preheat oven. 2. Stuff mushrooms. 3. Bake until golden."
    },
    {
        name: "Fish Tacos",
        ingredients: ["Fish", "Tortillas", "Cabbage", "Avocado", "Lime"],
        description: "Delicious fish tacos with fresh toppings.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Cook fish. 2. Assemble tacos with toppings. 3. Serve with lime."
    },
    {
        name: "Cinnamon Rolls",
        ingredients: ["Flour", "Sugar", "Butter", "Cinnamon", "Yeast"],
        description: "Soft and sweet cinnamon rolls.",
        cookingTime: "1.5 hours",
        cookingProcess: "1. Make dough. 2. Roll with filling. 3. Bake until golden."
    },
    {
        name: "Carrot Cake",
        ingredients: ["Carrots", "Flour", "Sugar", "Eggs", "Spices"],
        description: "Moist and flavorful carrot cake.",
        cookingTime: "1 hour",
        cookingProcess: "1. Mix ingredients. 2. Bake until toothpick comes out clean. 3. Cool before frosting."
    },
    {
        name: "Garlic Bread",
        ingredients: ["Bread", "Butter", "Garlic", "Parsley", "Cheese"],
        description: "Crunchy garlic bread perfect for dipping.",
        cookingTime: "15 minutes",
        cookingProcess: "1. Mix butter and garlic. 2. Spread on bread. 3. Bake until crispy."
    },
    {
        name: "Quiche",
        ingredients: ["Eggs", "Milk", "Cheese", "Spinach", "Pie Crust"],
        description: "Savory pie filled with eggs and cheese.",
        cookingTime: "45 minutes",
        cookingProcess: "1. Preheat oven. 2. Whisk eggs and milk. 3. Pour into crust and bake."
    },
    {
        name: "Cabbage Rolls",
        ingredients: ["Cabbage", "Ground Meat", "Rice", "Tomato Sauce", "Onion"],
        description: "Cabbage leaves filled with savory meat and rice.",
        cookingTime: "1 hour",
        cookingProcess: "1. Preheat oven. 2. Roll filling in leaves. 3. Bake in sauce until cooked."
    },
    {
        name: "Maple Glazed Carrots",
        ingredients: ["Carrots", "Maple Syrup", "Butter", "Salt", "Pepper"],
        description: "Sweet and savory glazed carrots.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook carrots. 2. Add syrup and butter. 3. Simmer until glazed."
    },
    {
    name: "Classic Cheeseburger",
    ingredients: ["Ground Beef", "Cheddar Cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard", "Burger Buns"],
    description: "A juicy beef patty topped with melted cheddar cheese and fresh toppings.",
    cookingTime: "20 minutes",
    cookingProcess: "1. Shape the ground beef into patties. 2. Grill or pan-fry the patties for 4-5 minutes on each side. 3. Add cheese on top during the last minute of cooking to melt. 4. Assemble the burger with lettuce, tomato, onion, pickles, ketchup, and mustard on a bun. 5. Serve immediately."
    },
    {
    name: "Classic French Toast",
    ingredients: ["Bread", "Eggs", "Milk", "Vanilla Extract", "Cinnamon", "Butter", "Maple Syrup"],
    description: "Golden, buttery French toast with a hint of vanilla and cinnamon, served with maple syrup.",
    cookingTime: "15 minutes",
    cookingProcess: "1. Whisk eggs, milk, vanilla, and cinnamon together in a bowl. 2. Dip each slice of bread in the mixture, coating both sides. 3. Heat butter in a skillet over medium heat. 4. Cook bread slices until golden brown on both sides. 5. Serve warm with maple syrup."
    },
    {
        name: "Chicken Fajitas",
        ingredients: ["Chicken", "Bell Peppers", "Onion", "Tortillas", "Spices"],
        description: "Sizzling chicken and peppers served in tortillas.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cook chicken with spices. 2. Add veggies. 3. Serve in tortillas."
    },
    {
    name: "Avocado Egg Breakfast Sandwich",
    ingredients: ["Whole Grain Bread", "Avocado", "Eggs", "Spinach", "Feta Cheese"],
    description: "A hearty breakfast sandwich with creamy avocado, a perfectly cooked egg, fresh spinach, and tangy feta.",
    cookingTime: "15 minutes",
    cookingProcess: "1. Toast the bread. 2. Cook the egg to your liking. 3. Mash the avocado and spread it on the toast. 4. Layer with spinach and feta. 5. Top with the egg and serve."
    },
    {
        name: "Peach Cobbler",
        ingredients: ["Peaches", "Flour", "Sugar", "Butter", "Cinnamon"],
        description: "Warm peach cobbler served with ice cream.",
        cookingTime: "45 minutes",
        cookingProcess: "1. Mix peaches with sugar. 2. Pour batter over. 3. Bake until golden."
    },
    {
        name: "Honey Garlic Chicken",
        ingredients: ["Chicken", "Honey", "Garlic", "Soy Sauce", "Vegetables"],
        description: "Sweet and savory chicken stir-fry.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Sauté chicken. 2. Add sauce and veggies. 3. Cook until done."
    },
    {
        name: "Cheesy Broccoli Casserole",
        ingredients: ["Broccoli", "Cheddar Cheese", "Cream of Mushroom Soup", "Rice", "Bread Crumbs"],
        description: "Comforting casserole packed with broccoli and cheese.",
        cookingTime: "35 minutes",
        cookingProcess: "1. Cook broccoli. 2. Mix with cheese and soup. 3. Bake until bubbly."
    },
    {
        name: "Tortellini Salad",
        ingredients: ["Tortellini", "Cherry Tomatoes", "Spinach", "Feta Cheese", "Olive Oil"],
        description: "Refreshing salad with tortellini and veggies.",
        cookingTime: "15 minutes",
        cookingProcess: "1. Cook tortellini. 2. Mix with veggies and cheese. 3. Drizzle with oil."
    },
    {
    name: "Almond Croissant",
    ingredients: ["Croissant Dough", "Almond Flour", "Butter", "Powdered Sugar", "Sliced Almonds", "Vanilla Extract", "Egg"],
    description: "Flaky croissant filled with almond cream and topped with sliced almonds.",
    cookingTime: "45 minutes",
    cookingProcess: "1. Preheat oven to 350°F (175°C). 2. Mix almond flour, butter, powdered sugar, vanilla, and egg to make almond cream. 3. Slice croissants in half, fill with almond cream, and close. 4. Top with more almond cream and sliced almonds. 5. Bake for 15-20 minutes until golden. 6. Dust with powdered sugar before serving."
    },
    {
        name: "Banana Bread",
        ingredients: ["Bananas", "Flour", "Sugar", "Butter", "Eggs"],
        description: "Moist banana bread perfect for breakfast.",
        cookingTime: "1 hour",
        cookingProcess: "1. Mash bananas. 2. Mix with other ingredients. 3. Bake until golden."
    },
    {
        name: "Sweet Potato Casserole",
        ingredients: ["Sweet Potatoes", "Butter", "Brown Sugar", "Marshmallows", "Pecans"],
        description: "Sweet casserole topped with marshmallows.",
        cookingTime: "1 hour",
        cookingProcess: "1. Cook sweet potatoes. 2. Mix with sugar and butter. 3. Top with marshmallows and bake."
    },
    {
        name: "Lemon Bars",
        ingredients: ["Lemon Juice", "Sugar", "Flour", "Butter", "Eggs"],
        description: "Tangy and sweet lemon bars for dessert.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Mix ingredients. 2. Pour into pan. 3. Bake until set."
    },
    {
        name: "Pineapple Fried Rice",
        ingredients: ["Rice", "Pineapple", "Shrimp", "Soy Sauce", "Peas"],
        description: "Fried rice with sweet pineapple and shrimp.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Cook rice. 2. Stir-fry with pineapple and shrimp. 3. Add soy sauce and peas."
    },
    {
    name: "Chicago-Style Deep Dish Pizza",
    ingredients: ["Pizza Dough", "Mozzarella Cheese", "Italian Sausage", "Tomatoes", "Green Bell Peppers", "Onion", "Garlic", "Parmesan Cheese", "Olive Oil", "Basil", "Oregano"],
    description: "A thick, hearty pizza loaded with cheese, tomatoes, and savory sausage, baked in a deep dish pan.",
    cookingTime: "1 hour 15 minutes",
    cookingProcess: "1. Preheat oven to 425°F (220°C). 2. Roll out pizza dough and press into a deep dish pan. 3. Layer mozzarella cheese over the crust. 4. Add a layer of Italian sausage, bell peppers, and onion. 5. In a bowl, mix crushed tomatoes with garlic, basil, and oregano, then spread over the toppings. 6. Sprinkle with Parmesan cheese and drizzle with olive oil. 7. Bake for 30-40 minutes, or until the crust is golden and the cheese is bubbly. 8. Let cool slightly before slicing and serving."
    },
    {
        name: "Caprese Pasta",
        ingredients: ["Pasta", "Tomatoes", "Mozzarella Cheese", "Basil", "Olive Oil"],
        description: "Pasta with fresh tomatoes, cheese, and basil.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Cook pasta. 2. Toss with tomatoes, cheese, and oil. 3. Serve warm."
    },
    {
        name: "Oven-Baked Chicken",
        ingredients: ["Chicken", "Olive Oil", "Garlic", "Rosemary", "Lemon"],
        description: "Herb-seasoned chicken baked to perfection.",
        cookingTime: "1 hour",
        cookingProcess: "1. Preheat oven. 2. Season chicken. 3. Bake until cooked through."
    },
    {
    name: "Crème Brûlée",
    ingredients: ["Heavy Cream", "Egg Yolks", "Granulated Sugar", "Vanilla Extract", "Brown Sugar"],
    description: "A classic French dessert with a creamy custard base and a crispy caramelized sugar topping.",
    cookingTime: "2 hours (including chilling time)",
    cookingProcess: "1. Preheat oven to 325°F (160°C). 2. Heat cream and vanilla in a saucepan. 3. Whisk egg yolks and sugar until pale. 4. Gradually add warm cream to yolks, mixing well. 5. Pour mixture into ramekins and bake in a water bath for 40-45 minutes. 6. Chill in the fridge for at least 2 hours. 7. Sprinkle brown sugar on top and caramelize with a torch or broiler before serving."
    },
    {
        name: "Spinach Artichoke Dip",
        ingredients: ["Spinach", "Artichokes", "Cream Cheese", "Parmesan Cheese", "Garlic"],
        description: "Creamy dip served with chips or bread.",
        cookingTime: "25 minutes",
        cookingProcess: "1. Mix ingredients. 2. Bake until bubbly. 3. Serve warm."
    },
    {
        name: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Cheese", "Butter"],
        description: "Classic grilled cheese sandwich.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Butter bread. 2. Place cheese between slices. 3. Grill until golden."
    },
    {
        name: "Pasta Salad",
        ingredients: ["Pasta", "Olive Oil", "Vegetables", "Feta Cheese", "Basil"],
        description: "Refreshing pasta salad with vegetables and cheese.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook pasta. 2. Mix with veggies and cheese. 3. Drizzle with oil."
    },
    {
        name: "Coconut Macaroons",
        ingredients: ["Coconut", "Sugar", "Egg Whites", "Vanilla"],
        description: "Sweet coconut treats baked until golden.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Mix ingredients. 2. Scoop onto baking sheet. 3. Bake until golden."
    },
    {
    name: "Cinnamon Apple Oatmeal",
    ingredients: ["Oats", "Apples", "Cinnamon", "Honey", "Walnuts"],
    description: "Warm oatmeal topped with spiced apples, honey, and crunchy walnuts.",
    cookingTime: "20 minutes",
    cookingProcess: "1. Cook oats according to package instructions. 2. In a separate pan, sauté diced apples with cinnamon and honey until soft. 3. Serve oatmeal topped with sautéed apples and walnuts."
    },
    {
        name: "Baked Apples",
        ingredients: ["Apples", "Brown Sugar", "Cinnamon", "Butter"],
        description: "Warm baked apples with a sweet topping.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Core apples. 2. Stuff with mixture. 3. Bake until tender."
    },
    {
        name: "Stuffed Shells",
        ingredients: ["Pasta Shells", "Ricotta Cheese", "Marinara Sauce", "Parmesan Cheese"],
        description: "Pasta shells filled with cheese and baked.",
        cookingTime: "1 hour",
        cookingProcess: "1. Cook shells. 2. Stuff with ricotta. 3. Top with sauce and bake."
    },
    {
        name: "Chocolate Cake",
        ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs"],
        description: "Decadent chocolate cake for celebrations.",
        cookingTime: "1 hour",
        cookingProcess: "1. Mix ingredients. 2. Pour into pan. 3. Bake until done."
    },
    {
        name: "Tomato Basil Soup",
        ingredients: ["Tomatoes", "Basil", "Onion", "Garlic", "Vegetable Broth"],
        description: "Creamy tomato soup with fresh basil.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Sauté onions and garlic. 2. Add tomatoes and broth. 3. Blend until smooth."
    },
    {
        name: "Zucchini Bread",
        ingredients: ["Zucchini", "Flour", "Sugar", "Eggs", "Walnuts"],
        description: "Moist zucchini bread with a nutty flavor.",
        cookingTime: "1 hour",
        cookingProcess: "1. Grate zucchini. 2. Mix with other ingredients. 3. Bake until golden."
    },
    {
        name: "Shrimp Scampi",
        ingredients: ["Shrimp", "Garlic", "Butter", "Lemon Juice", "Pasta"],
        description: "Sautéed shrimp with garlic and lemon.",
        cookingTime: "20 minutes",
        cookingProcess: "1. Cook shrimp with garlic. 2. Toss with pasta and lemon. 3. Serve warm."
    },
    {
        name: "Caesar Salad",
        ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese"],
        description: "Classic Caesar salad with crispy croutons.",
        cookingTime: "10 minutes",
        cookingProcess: "1. Chop lettuce. 2. Toss with dressing and croutons. 3. Serve chilled."
    },
    {
    name: "Lemon Meringue Pie",
    ingredients: ["Pie Crust", "Lemons", "Sugar", "Eggs", "Butter", "Cornstarch", "Vanilla Extract"],
    description: "A tangy lemon filling topped with a fluffy meringue.",
    cookingTime: "1 hour",
    cookingProcess: "1. Preheat the oven and bake the pie crust. 2. In a saucepan, mix lemon juice, sugar, cornstarch, and water, then cook until thick. 3. Whisk egg yolks and add to the mixture, then cook for another minute. 4. Pour into the pie crust and let cool. 5. Beat egg whites until stiff, then spread over the lemon filling. 6. Bake until meringue is golden. 7. Cool before serving."
    },
    {
        name: "Roasted Vegetables",
        ingredients: ["Mixed Vegetables", "Olive Oil", "Herbs", "Salt"],
        description: "Savory roasted vegetables, perfect as a side.",
        cookingTime: "30 minutes",
        cookingProcess: "1. Chop veggies. 2. Toss with oil and herbs. 3. Roast until tender."
    },
  
    ];


document.getElementById('ingredientForm').addEventListener('submit', (event) => {
    event.preventDefault();

   
    const inputIngredients = document.getElementById('ingredients').value.split(',')
        .map(ingredient => ingredient.trim().toLowerCase());


    const filteredRecipes = recipes.filter(recipe => {
        const recipeIngredientsLower = recipe.ingredients.map(ing => ing.toLowerCase());
        return inputIngredients.some(input => 
            recipeIngredientsLower.some(recipeIng => recipeIng.includes(input))
        );
    });

    displayFilteredRecipes(filteredRecipes);
});

function displayFilteredRecipes(filteredRecipes) {
    const resultsContainer = document.getElementById('recipeResults');
    resultsContainer.innerHTML = '';

    if (filteredRecipes.length > 0) {
        const recipeResults = filteredRecipes.map(recipe => `
            <div class="recipe">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Cooking Time:</strong> ${recipe.cookingTime}</p>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Cooking Process:</strong> ${recipe.cookingProcess}</p>
            </div>
        `).join('');

        resultsContainer.innerHTML = recipeResults;
    } else {
        resultsContainer.innerHTML = '<p>No recipes found with the provided ingredients.</p>';
    }
}
    function getRandomIngredients() {
const ingredients = [
'Chicken', 'Broccoli', 'Carrots', 'Soy Sauce', 'Garlic', 'Ground Beef', 'Taco Seasoning', 
'Tortillas', 'Lettuce', 'Cheese', 'Coconut Milk', 'Mixed Vegetables', 'Curry Powder', 'Onion', 
'Pasta', 'Tomato Sauce', 'Tomatoes', 'Mozzarella', 'Basil', 'Olive Oil', 'Balsamic Vinegar', 'Shrimp', 
'Rice', 'Egg', 'Peas', 'Quinoa', 'Cucumber', 'Feta Cheese', 'Bell Peppers', 'Romaine Lettuce', 'Grilled Chicken', 
'Caesar Dressing', 'Croutons', 'Parmesan Cheese', 'Ziti Pasta', 'Ginger', 'Salmon', 'Dill', 'Lemon', 'Arborio Rice', 
'Mushrooms', 'Chicken Broth', 'Sweet Potatoes', 'Paprika', 'Salt', 'Pepper', 'Eggplant', 'Butter', 'Parsley', 'Flour', 
'Brown Sugar', 'Chocolate Chips', 'Eggs', 'Brussels Sprouts', 'Vegetable Broth', 'Cream', 'Nutmeg', 'Sour Cream', 
'Egg Noodles', 'Chickpeas', 'Lemon Juice', 'Sugar', 'Baking Powder', 'Celery', 'Basil Pesto', 'Pine Nuts', 'Cherry Tomatoes', 
'Tahini', 'BBQ Sauce', 'Garlic Powder', 'Apples', 'Oats', 'Cinnamon', 'Ground Turkey', 'Beans', 'Chili Powder', 'Olives', 
'Honey', 'Ice', 'Spinach', 'Alfredo Sauce', 'Beets', 'Goat Cheese', 'Walnuts', 'Arugula', 'Balsamic Vinaigrette', 
'Jumbo Pasta Shells', 'Ricotta Cheese', 'Marinara Sauce', 'Zucchini', 'Teriyaki Sauce', 'Sesame Seeds', 'Green Onions', 
'Mint', 'Whole Chicken', 'Herbs', 'Cilantro', 'Jalapeño', 'Dark Chocolate', 'Vanilla Extract', 'Lasagna Noodles', 
'Kidney Beans', 'Cod Fillets', 'Potatoes', 'Beer', 'Oil', 'Breadcrumbs', 'Parsley', 'Chocolate Cake', 'Vanilla Ice Cream', 
'Whipped Cream', 'Chocolate Syrup', 'Sprinkles', 'Sushi Rice', 'Seaweed', 'Avocado', 'Crab', 'Pork', 'Cream Cheese', 
'Pie Crust', 'Cabbage', 'Burger Buns', 'Ketchup', 'Mustard', 'Maple Syrup', 'Whole Grain Bread', 'Spices', 'Peaches', 
'Rosemary', 'Heavy Cream', 'Egg Yolks', 'Granulated Sugar', 'Artichokes', 'Spinach', 'Pie Crust', 'Butter', 'Egg Whites', 
'Powdered Sugar', 'Lemons', 'Cornstarch', 'Italian Sausage', 'Green Bell Peppers', 'Oregano', 'Coconut', 'Sugar', 'Cocoa Powder'
];
     

    const randomIngredients = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * ingredients.length);
        randomIngredients.push(ingredients[randomIndex]);
    }
    return randomIngredients;
}

document.getElementById('customRecipeButton').addEventListener('click', () => {
    const randomIngredients = getRandomIngredients();
    document.getElementById('randomIngredients').innerHTML = randomIngredients.map(ingredient => `<li>${ingredient}</li>`).join('');
});

document.getElementById('randomRecipeButton').addEventListener('click', () => {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    const recipeResult = `
        <div class="recipe">
            <h3>${randomRecipe.name}</h3>
            <p>${randomRecipe.description}</p>
            <p><strong>Cooking Time:</strong> ${randomRecipe.cookingTime}</p>
            <p><strong>Ingredients:</strong> ${randomRecipe.ingredients.join(', ')}</p>
            <p><strong>Cooking Process:</strong> ${randomRecipe.cookingProcess}</p>
        </div>
    `;
    document.getElementById('recipeResults').innerHTML = recipeResult;
});

</script>

---
### Feedback (Temporary)

<script src="https://utteranc.es/client.js"
        repo="nighthawkcoders/flocker_frontend"
        issue-term="/flocker_frontend"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
