---
layout: page
title: OR gate
description: Level 1 OR gate
permalink: /navigation/logicgatesgame/or/
---

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

<h2> OR Gate lesson </h2> 

<p> The OR gate gets its name from behaving like the logical inclusive "or." The output is true if one or both of the inputs are true. If both inputs are false, then the output is false. In other words, for the output to be 1, at least one input must be 1. </p>


 <div>
    <img src="https://www.techtarget.com/rms/onlineimages/diagram2-f.png" alt="OR image" style="width:600px;height:400px;"> 

 <h3>Lesson Quiz</h3>
 

 <p> Each input will be run through an <b>OR Gate</b>, answer the questions based on what the output will be.
 
 <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>True/False Quiz</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
 
 <form id="quiz-form1">
      <div class="question">
        <p>Input A = 1, Input B = 0</p>
        <label>
          <input type="radio" name="q1" value="0"> 0
        </label>
        <label>
          <input type="radio" name="q1" value="1"> 1
        </label>
      </div>
      <div class="question">
        <p>Input A = 0, Input B = 0</p>
        <label>
          <input type="radio" name="q2" value="0"> 0
        </label>
        <label>
          <input type="radio" name="q2" value="1"> 1
        </label>
      </div>
      <div class="question">
        <p>Input A = 1, Input B = 1</p>
        <label>
          <input type="radio" name="q3" value="0"> 0
        </label>
        <label>
          <input type="radio" name="q3" value="1"> 1
        </label>
      </div>

<button type="submit">Submit Quiz</button>
    </form>

<div id="result">
  </div>

  <script src="logicgates.js"></script>
</body>
</html>