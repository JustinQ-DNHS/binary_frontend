---
layout: page
title: REVVIT (Browse Cars)
description: Check out other peoples cars!
permalink: /share_and_care/revvit/allcars
---

<html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Car Showcase | Revvit</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }

        /* Garage Door Overlay */
        #garage-door {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(https://img.freepik.com/free-photo/background-wall-concept-with-copy-space_23-2148801282.jpg?t=st=1730750275~exp=1730753875~hmac=fa653bb9914f523b224d63b2445ccb627a1a1b7ed861e2865779fa4d0ea8078d&w=1800);
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 1.5em;
            z-index: 1000;
            transition: transform 1s ease-in-out;
        }

        #garage-door button {
            padding: 10px 20px;
            font-size: 1.2em;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        /* Hide the garage door when opened */
        .garage-open {
            transform: translateY(-100%);
        }

        /* Car Showcase Section */
        .car-showcase {
            display: flex;
            gap: 15px;
            overflow-x: scroll;
            padding: 20px 0;
            transition: opacity 1s ease-in-out 0.5s;
            opacity: 0;
        }

        /* Make car showcase visible after garage opens */
        .showcase-visible {
            opacity: 1;
        }

        .car-post {
            position: relative;
            width: 300px;
            height: 200px;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .car-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .car-post:hover .car-image {
            transform: scale(1.05);
        }

        /* Description Overlay */
        .car-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 10px;
            font-size: 0.9em;
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .car-post:hover .car-info {
            opacity: 1;
            transform: translateY(0);
        }

        /* Additional style for scrolling indicator */
        .car-showcase::-webkit-scrollbar {
            height: 8px;
        }

        .car-showcase::-webkit-scrollbar-thumb {
            background-color: #007BFF;
            border-radius: 10px;
        }
    </style>


<!-- Garage Door Overlay -->
<div id="garage-door">
    <button onclick="openGarage()">Open the Garage</button>
</div>

<!-- Car Showcase Section -->
<div class="car-showcase" id="car-showcase">
    <!-- Car Post 1 -->
    <div class="car-post">
        <img src="https://toprankglobal.jp/picture/vehicle/95776_44.jpg" alt="Car Image" class="car-image">
        <div class="car-info">
            <p><strong>Make & Model:</strong> Example Car 1</p>
            <p><strong>Year:</strong> 2020</p>
            <p><strong>Color:</strong> Red</p>
            <p><strong>Features:</strong> Sunroof, V8 Engine</p>
        </div>
    </div>

    <div class="car-post">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg" alt="Car Image" class="car-image">
        <div class="car-info">
            <p><strong>Make & Model:</strong> Nissan Silvia S15</p>
            <p><strong>Year:</strong> </p>
            <p><strong>Color:</strong> White</p>
            <p><strong>Features:</strong> Sport Exhaust, Turbo</p>
        </div>
    </div>

    <!-- Car Post 3 -->
    <div class="car-post">
        <img src="https://www.extremecustoms.com/inc.store/images/gallery/2019_subaru_crosstrek_base_black_rhino_boxer_15x7_toyo_open_country_at3_225-75r15_2in_ironman4x4_suspension_lift_pic10.jpg" class="car-image">
        <div class="car-info">
            <p><strong>Make & Model:</strong> Example Car 3</p>
            <p><strong>Year:</strong> 2021</p>
            <p><strong>Color:</strong> Blue</p>
            <p><strong>Features:</strong> Convertible, Leather Seats</p>
        </div>
    </div>

   <button class="add-post-button">＋ New Car Post</button>

<style>
    .add-post-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        font-size: 1em;
        color: #007BFF;
        background-color: #fff;
        border: 2px solid #007BFF;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .add-post-button:hover {
        background-color: #007BFF;
        color: #fff;
    }
</style>

</div>

<script>
    function openGarage() {
        document.getElementById("garage-door").classList.add("garage-open");
        document.getElementById("car-showcase").classList.add("showcase-visible");
    }
</script>
