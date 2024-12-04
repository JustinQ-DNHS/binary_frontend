---
permalink: /voteforthegoat/calicovote/
menu: nav/vote_for_the_goat.html
layout: post
title: Calico Vote
description: Vote for your favorite critters here!
Authors: Maryam, Nora, Kushi, Joanna
---

<style>
    p, h2, h3, body {
        font-family: "Times New Roman", Times, serif;
    }
    body {
        font-family: "Times New Roman", Times, serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: 0;
        background: #d4637e !important;
    }
    .header-text {
        font-size: 40px;
        text-align: center;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        gap: 15px;
    }
    .critter-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 200px;
        padding: 10px;
        box-sizing: border-box;
        border: 4px solid white;
        border-radius: 20px;
        cursor: pointer;
    }
    .critter-container.selected {
        border-color: #FFC7FA;
        box-shadow: 0 0 10px rgba(255, 199, 250, 0.7);
    }
    .image-container {
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        margin: 0 auto;
    }
    .image-container img {
        width: auto;
        height: auto;
        max-height: 200px;
        cursor: pointer;
    }
    .dropdown-title {
        font-size: 20px;
    }
    .dropdown {
        font-size: 15px;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .button-text {
        font-size: 30px;
        text-align: center;
        background-color: #C71585;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }
    .button-text:hover {
        background-color: #A0136B;
    }
    .hidden-example {
        display: none;
        font-size: 20px;
    }
    .message-box {
        display: none;
        text-align: center;
        margin-top: 20px;
        font-size: 25px;
        font-weight: bold;
        color: #333;
    }
    .image-box {
        display: none;
        align-items: center;
        margin-top: 15px;
        justify-content: center;
    }
    summary {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        list-style: none;
        display: inline-block;
        transition: text-shadow 0.3s ease;
    }
    summary:hover {
        text-shadow: 0 0 8px #F5AAF5, 0 0 12px #F5AAF5;
    }
    details[open] p {
        margin: 0;
        padding: 8px;
        background-color: #CC99CC;
        border-radius: 10px;
        border: 1px solid #F5AAF5;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: left;
        margin-bottom: 10px;
    }
    p {
        margin: 0;
    }
    summary::before {
        content: '✿';
    }
    .cute-link {
        color: #ff69b4;
        text-decoration: none;
        transition: all 0.1s ease-in-out;
    }
    .cute-link:hover {
        color: #ff1493;
        text-shadow: 0 0 8px rgba(255, 105, 180, 0.8),
                     0 0 15px rgba(255, 20, 147, 0.6),
                     0 0 20px rgba(255, 20, 147, 0.5);
    }
    .button-text {
        font-size: 30px;
        text-align: center;
        background-color: #bd3a63 !important;
        color: white !important;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }
    .button-text:hover {
        background-color: #992b4e !important;
    }
</style>


 <div class="sidebar">
        <a href = "{{site.baseurl}}/moderation/calico_critter/" class = "sidebar-button">Moderator rules</a>
        <a href="{{site.baseurl}}/voteforthegoat/calicoworkflow" class="sidebar-button">Workflow diagram</a>
    </div>

<style>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #8B3D8A;
    color: #f9f9f9;
    margin: 0;
}

.sidebar {
    position: fixed;
    top: 0;
    right: 50px;
    height: 200px;
    width: 150px;
    background-color: #FFDFF7 !important;
    border: 4px solid #BBDB9B;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding-top: 20px;
    margin-top: 150px;
    overflow: hidden;
}

.sidebar-button {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #EBA9D9 !important;
    font-weight: bold;
    transition: box-shadow 0.3s, color 0.3s, border-radius 0.3s;
}

.sidebar-button:hover {
    box-shadow: 0 0 15px 5px #5E8636; 
    color: #9C5F8C !important;
    border-radius: 15px; 
}

a {
    text-decoration: none !important;
}
</style>


<div>
<img src="{{site.baseurl}}/images/calicocritters/voteheading.png" alt="Calico Critters Voting header">
</div>

<p class="header-text">Click on a critter below to vote!</p>
<br>


<div class="container">
    <div class="critter-container" onclick="selectCritter(this)" data-critter="Mizuki" data-house="Adventure Play">
        <div class="image-container">
            <img src="{{site.baseurl}}/images/calicocritters/mizuki.png">
        </div>
        <h3>Mizuki</h3>
        <div class="dropdown-title">
            <details>
                <summary>Species</summary>
                <div class="dropdown">Rabbit</div>
            </details>
            <details>
                <summary>Description</summary>
                <div class="dropdown">In an elegant baby blue gown with hints of yellow, Mizuki is kind and generous and offers an apple as a token of friendship</div>
            </details>
            <details>
                <summary>Collection</summary>
                <div class="dropdown">Baby Fairy Tale</div>
            </details>
        </div>
    </div>
    <div class="critter-container" onclick="selectCritter(this)" data-critter="Chiyo" data-house="Sylvanian Family Restaurant">
        <div class="image-container">
            <img src="{{site.baseurl}}/images/calicocritters/chiyo.png">
        </div>
        <h3>Chiyo</h3>
        <div class="dropdown-title">
            <details>
                <summary>Species</summary>
                <div class="dropdown">Hazelnut Chipmunk</div>
            </details>
            <details>
                <summary>Description</summary>
                <div class="dropdown">Always on time and only focuses on schoolwork. Only thing more important than good grades is staying hydrated.</div>
            </details>
            <details>
                <summary>Collection</summary>
                <div class="dropdown">School Baby</div>
            </details>
        </div>
    </div>
    <div class="critter-container" onclick="selectCritter(this)" data-critter="Emi" data-house="Magical Mermaid Castle">
        <div class="image-container">
            <img src="{{site.baseurl}}/images/calicocritters/emi.png">
        </div>
        <h3>Emi</h3>
        <div class="dropdown-title">
            <details>
                <summary>Species</summary>
                <div class="dropdown">Husky</div>
            </details>
            <details>
                <summary>Description</summary>
                <div class="dropdown">She carries the heart of the sea and maintains peace with the land animals</div>
            </details>
            <details>
                <summary>Collection</summary>
                <div class="dropdown">Sylvanian Families Flower Princess</div>
            </details>
        </div>
    </div>
    <div class="critter-container" onclick="selectCritter(this)" data-critter="Nory" data-house="Woody School">
        <div class="image-container">
            <img src="{{site.baseurl}}/images/calicocritters/nory.png">
        </div>
        <h3>Nory</h3>
        <div class="dropdown-title">
            <details>
                <summary>Species</summary>
                <div class="dropdown">Chocolate Rabbit</div>
            </details>
            <details>
                <summary>Description</summary>
                <div class="dropdown">Always looks her best and shares everything. She's always prepared and has everything in her handy backpack.</div>
            </details>
            <details>
                <summary>Collection</summary>
                <div class="dropdown">Nursery Friend Walk Along Duo</div>
            </details>
        </div>
    </div>
    <div class="critter-container" onclick="selectCritter(this)" data-critter="Rin" data-house="Spooky Surprise Haunted">
        <div class="image-container">
            <img src="{{site.baseurl}}/images/calicocritters/rin.png">
        </div>
        <h3>Rin</h3>
        <div class="dropdown-title">
            <details>
                <summary>Species</summary>
                <div class="dropdown">Persian Cat</div>
            </details>
            <details>
                <summary>Description</summary>
                <div class="dropdown">Keeps her fur pure white and fluffy, but easily gets lost. Luckily, she wears a bell to be found easily.</div>
            </details>
            <details>
                <summary>Collection</summary>
                <div class="dropdown">Sylvanian Families Baby Cat</div>
            </details>
        </div>
    </div>
    <div class="critter-container" onclick="selectCritter(this)" data-critter="Junko" data-house="Brick Oven Bakery">
        <div class="image-container">
            <img src="{{site.baseurl}}/images/calicocritters/junko.png">
        </div>
        <h3>Junko</h3>
        <div class="dropdown-title">
            <details>
                <summary>Species</summary>
                <div class="dropdown">Caramel Dog</div>
            </details>
            <details>
                <summary>Description</summary>
                <div class="dropdown">Found in the kitchen baking a sweet treat, lives in an organized mess at all times.</div>
            </details>
            <details>
                <summary>Collection</summary>
                <div class="dropdown">Forest Kitchen Baby</div>
            </details>
        </div>
    </div>
</div>
<div class="button-container" style="justify-content:center;">
    <button id="confirmButton" class="button-text" onclick="confirmChoice();">Confirm</button>
</div>

<div class="message-box" id="messageBox" style="color: #ffffff;"></div>
<div id="imageBox" class="image-box">
    <img id="houseImage" src="" alt="House Image" style="max-width:300px; border-radius:15px;">
</div>

<script>
let selectedCritter = null;
let selectedHouse = null;

function selectCritter(element) {
    const critters = document.querySelectorAll('.critter-container');
    critters.forEach(critter => critter.classList.remove('selected')); // Remove selection from others

    element.classList.add('selected'); // Highlight the selected critter
    selectedCritter = element.getAttribute('data-critter'); // Store selected critter name
    selectedHouse = element.getAttribute('data-house'); // Store corresponding house
}

function confirmChoice() {
    const messageBox = document.getElementById('messageBox');
    const imageBox = document.getElementById('imageBox');
    const houseImage = document.getElementById('houseImage'); // Get image element

    if (!selectedCritter || !selectedHouse) {
        alert("Please select a critter before confirming!"); // Alert if nothing is selected
        return;
    }

    // Save selectedHouse in local storage for later reference
    localStorage.setItem('selectedHouse', selectedHouse);
    console.log(`House saved to local storage: ${selectedHouse}`); // Log confirmation for saved house

    // Save selectedCritter in local storage for later reference
    localStorage.setItem('selectedCritter', selectedCritter);
    console.log(`Critter saved to local storage: ${selectedCritter}`); // Log confirmation for saved critter

    // Set the message
    const message = `Congrats! You picked ${selectedCritter} and are in the ${selectedHouse} House!<br>Connect with others in the ${selectedHouse} House.`;
    messageBox.innerHTML = message; // Display the message
    messageBox.style.display = "block"; // Make the message visible

    // Use template literals to construct the image source
    const baseURL = "{{site.baseurl}}/images/calicocritters/"; // Base URL for images
    const houseImageFile = `${selectedCritter.toLowerCase()}house.png`; // Constructing the image file name
    houseImage.src = `${baseURL}${houseImageFile}`; // Set the image source

    imageBox.style.display = "block"; // Show the image box

    // Remove any existing "Enter House" button before creating a new one
    const existingButtonContainer = document.querySelector('#houseButtonContainer');
    if (existingButtonContainer) {
        existingButtonContainer.remove();
    }

    // Add the dynamic button for entering the house
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.id = 'houseButtonContainer';
    const enterHouseButton = document.createElement('button');
    enterHouseButton.classList.add('button-text');
    enterHouseButton.textContent = `Enter ${selectedHouse} House`;
    enterHouseButton.onclick = function() {
        console.log(`Navigating to the ${selectedHouse} House page`); // Log navigation action
        window.location.href = '{{site.baseurl}}/voteforthegoat/calicovote/house'; 
    };

    buttonContainer.appendChild(enterHouseButton);
    document.getElementById('imageBox').appendChild(buttonContainer);
}
</script>
