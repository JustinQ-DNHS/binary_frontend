---
layout: post 
title: Create and Compete - Doodle
search_exclude: true
menu: nav/doodle.html
permalink: /moderation/artpost_doodle/
author: Alex, Arshia, Prajna, and Mirabelle 
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Photo Posting App</title>
<style>
    body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
         background-color: #f0f0f0;
    }
    h1 {
        margin: 20px 0;
     }
    form {
        margin-bottom: 20px;
     }
    #gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
     }
    .photo-container {
        background: purple;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: center;
    }
    img {
        max-width: 100%;
        border-radius: 5px;
     }
    .comments {
        margin-top: 10px;
    }
 </style>

<h1>Photo Posting App</h1>
<form id="uploadForm">
    <input type="text" id="photoUrl" placeholder="Enter photo URL" required>
    <input type="text" id="comment" placeholder="Enter a comment" required>
    <button type="submit">Post</button>
</form>
<div id="gallery"></div>
<script>
    const form = document.getElementById('uploadForm');
    const gallery = document.getElementById('gallery');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const photoUrl = document.getElementById('photoUrl').value;
        const commentText = document.getElementById('comment').value;
        // Create photo container
        const photoContainer = document.createElement('div');
        photoContainer.className = 'photo-container';
        // Create image element
        const img = document.createElement('img');
        img.src = photoUrl;
        photoContainer.appendChild(img);
        // Create comments section
        const commentsDiv = document.createElement('div');
        commentsDiv.className = 'comments';
        commentsDiv.innerHTML = `<p>${commentText}</p>`;
        photoContainer.appendChild(commentsDiv);
        // Append photo container to gallery
        gallery.appendChild(photoContainer);
        // Clear the form
        form.reset();
     });
 </script>

<script>
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const http = require('http');
    const { parse } = require('url');
    // Initialize app
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.static('.'));
    // MongoDB connection
    mongoose.connect('mongodb://localhost/photo-sharing', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // Photo model
     const photoSchema = new mongoose.Schema({
        imageUrl: String,
        comment: String,
    });
    const Photo = mongoose.model('Photo', photoSchema);
    // Routes
    app.post('/upload', async (req, res) => {
        const { photoUrl, comment } = req.body;
        const photo = new Photo({ imageUrl: photoUrl, comment });
        await photo.save();
        res.json(photo);
    });
    app.get('/photos', async (req, res) => {
        const photos = await Photo.find();
        res.json(photos);
    });
    // Start server
    const server = http.createServer(app);
    const PORT = process.env.PORT || 3000;
     server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
</script>


