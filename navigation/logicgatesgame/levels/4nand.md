---
layout: page
title: NAND gate
description: Level 4 NAND gate
permalink: /navigation/logicgatesgame/nand/
---
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


<h2>NAND Gate lesson</h2>


<p>The NAND (Negated AND) gate operates as an AND gate followed by a NOT gate. It acts in the manner of the logical operation "and" followed by negation. The output is false if both inputs are true. Otherwise, the output is true. Another way to visualize it is that a NAND gate inverts the output of an AND gate. The NAND gate symbol is an AND gate with the circle of a NOT gate at the output.</p>


<img src="https://www.techtarget.com/rms/onlineimages/diagram5-f.png" alt="Porsche" style="width:600px;height:400px;">

<h3>Lesson Quiz</h3>
Each input will be run through an <b>NAND Gate</b>, answer the questions based on what the output will be.

<form id="quiz">
  <div class="question" c-answer="1">
    <p>Input A = 1, Input B = 0</p>
    <label>
      <input type="radio" name="q1" value="0"> 0
    </label>
    <label>
      <input type="radio" name="q1" value="1"> 1
    </label>
  </div>
  <div class="question" c-answer="1">
      <p>Input A = 0, Input B = 0</p>
      <label>
        <input type="radio" name="q2" value="0"> 0
      </label>
      <label>
        <input type="radio" name="q2" value="1"> 1
      </label>
  </div>
  <div class="question" c-answer="0">
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

<div id="results"></div>

<td><a href="{{site.baseurl}}/navigation/logicgatesgame/nor/" class="button">Continue Lesson</a></td>

<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .question {
            margin-bottom: 20px;
       }
        #results {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body> 

 <script type="module" src="{{site.baseurl}}/navigation/logicgatesgame/lgatesjs.js"></script>
<script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>

</body>
</html>
