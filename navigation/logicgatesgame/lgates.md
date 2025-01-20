---
layout: page
permalink: /logicgame
---

<html lang="en">

<head>
  <link rel="stylesheet" type="text/css" href="{{site.baseurl}}/navigation/logicgatesgame/logicgates.py">
</head>

<body>

  <br>
  <div>
    <table style="width: 100%; text-align: center; border-collapse: separate; border-spacing: 10px;">
            <tr>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/or/" class="button">OR</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/and/" class="button">AND</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/xor/" class="button">XOR</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/nand/" class="button">NAND</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/nor/" class="button">NOR</a></td>
                <td><a href="{{site.baseurl}}/navigation/logicgatesgame/xnor/" class="button">XNOR</a></td>
            </tr>
        </table>
  </div>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logic Gates Lesson</title>
    <style>
        h1 {
            color: blue;
            font-family: Arial, sans-serif; 
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Logic Gates Lesson!</h1>
</body>
</html>


<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="email">Email</label></th>
        <th><label for="password">Password</label></th>
        <th><label for="phone">Phone</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
        <td><input type="password" name="password" id="password" required></td>
        <td><input type="tel" name="phone_num" id="phone_num"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="999-999-9999"></td>
        <td ><button onclick="create_User()">Create</button></td>
    </tr>
</table>