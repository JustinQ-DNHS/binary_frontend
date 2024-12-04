---
layout: page
title: DNHS Cafe
description: Cafe homepage
permalink: /dnhscafe/
---

<div>
<img src="{{site.baseurl}}/navigation/share_and_care/dnhscafe/dnhs_cafe_header.png" width="1200px" height="250px">
</div>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
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
</head>
<body>
<button type="button" class="collapsible"> Moderator Rules ▽</button>
<div class="content">
  <p>
• Adhere to chatroom topic
  </p>
  <p>
• Be mindful of others in the conversation
  </p>
  <p>
• Do not exploit coffee points
  </p>
  <p>
• No swearing/slurs
  </p>
  <p>
• No harassment
  </p>
  <p>
• No explicit jokes
  </p>
  <p>
• No discrimination against other people
  </p>
</div>
<script>
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>
</body>
<br>
<div>
<center>
<span>
<a href="{{site.baseurl}}/dnhscafestore">
<button style="background-color: #e4bc84; color: white; padding: 10px"> Take Me To DNHS Cafe! </button>
</a>
<span>
<a href="{{site.baseurl}}/dnhscafestudyroom">
<button style="background-color: #e4bc84; color: white; padding: 10px"> Take Me To DNHS Cafe Study Room! </button>
</a>