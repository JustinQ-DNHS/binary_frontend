---
layout: post
title: Gallery for Doodle
description: Showcase a gallery of all your doodles
menu: nav/doodle.html
permalink: /moderation/drawpad_doodle/
author: Arshia, Prajna, Mirabelle, Alex
---



</details>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drawing Canvas</title>
    <style>
        body { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        canvas { border: 2px solid #7573e6; cursor: crosshair; margin-top: 10px; }
        .color-button {
            width: 30px;
            height: 30px;
            border: none;
            margin: 2px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<canvas id="drawingCanvas" width="600" height="400"></canvas>

<script>
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let currentColor = '#ad3636';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    function startDrawing(event) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }

    function stopDrawing() {
        drawing = false;
        ctx.closePath();
    }

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeColor(color) {
        currentColor = color;
    }
        function downloadDrawing() {
        const link = document.createElement('a');
        link.download = 'my_drawing.png'; 
        link.href = canvas.toDataURL();  
        link.click();
    }
    
</script>

<div>
    <button onclick="clearCanvas()" style="font-size: 18px; background-color: #ad3636; padding: 10px 20px; color: white;">Clear Drawing</button>
</div>

<div style="margin-top: 10px;">
        <button style="background-color: #524e4e!important;  display:inline-block" onclick="changeColor('#524e4e')">Black</button>
        <button style="background-color: #3a63e8!important;  display:inline-block" onclick="changeColor('#3a63e8')">Blue</button>
        <button style="background-color: #3c7d2c!important;  display:inline-block" onclick="changeColor('#3c7d2c')">Green</button>
        <button style="background-color: #992222!important;  display:inline-block" onclick="changeColor('#992222')">Red</button>
        <button style="background-color: #db74db!important;  display:inline-block" onclick="changeColor('#db74db')">Pink</button>
</div>

</body>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doodle Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
