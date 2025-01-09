---
layout: page
title: NOR gate
description: Level 5 NOR gate
permalink: /navigation/logicgatesgame/nor/
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


<h2>NOR Gate lesson</h2>


<p>The NOR (NOT OR) gate is a combination OR gate followed by an inverter. Its output is true if both inputs are false. Otherwise, the output is false.<p>


<img src="https://www.techtarget.com/rms/onlineimages/diagram6-f.png" alt="Porsche" style="width:600px;height:400px;">

<h3>Lesson Quiz</h3>
Each input will be run through an <b>NOR Gate</b>, answer the questions based on what the output will be.

<form id="quiz5">
  <div class="question" c-answer="0">
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

<td><a href="{{site.baseurl}}/navigation/logicgatesgame/xnor/" class="button">Continue Lesson</a></td>

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

  <script>
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById('quiz5');
            const resultsContainer = document.getElementById('results');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); 
                let score = 0;
                const questions = form.querySelectorAll('.question'); 
                let resultsHTML = ""; 

                // Check the answers
                questions.forEach((question, index) => {
                    const correctAnswer = question.getAttribute('c-answer');
                    const selectedAnswer = question.querySelector(`input[name="q${index + 1}"]:checked`); 
                    if (selectedAnswer) {
                        const userAnswer = selectedAnswer.value;

                        // Question Results
                        if (userAnswer === correctAnswer) {
                            score++; 
                            resultsHTML += `<p class="correct">Question ${index + 1}: Correct</p>`;
                        } else {
                            resultsHTML += `<p class="incorrect">Question ${index + 1}: Incorrect</p>`;
                        }
                    } else {
                        resultsHTML += `<p class="incorrect">Question ${index + 1}: Please select an answer</p>`;
                    }
                });

                // Show Results
                resultsHTML += `<h2>Your score: ${score} out of ${questions.length}</h2>`;
                resultsContainer.innerHTML = resultsHTML; 
            });
        });
    </script>

</body>
</html>
