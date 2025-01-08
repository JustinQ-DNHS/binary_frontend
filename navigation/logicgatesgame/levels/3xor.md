---
layout: page
title: XOR gate
description: Level 3 XOR gate
permalink: /navigation/logicgatesgame/xor/
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


<h2>XOR Gate lesson</h2>

<p>The XOR (exclusive-OR) gate acts in the same way as the logical "either/or." The output is true if either, but not both, of the inputs are true. The output is false if both inputs are "false" or if both inputs are true. Similarly, the output is 1 if the inputs are different but 0 if the inputs are the same.</p>

<img src="https://www.techtarget.com/rms/onlineimages/diagram3-f.png" alt="Porsche" style="width:600px;height:400px;">

<h3>Lesson Quiz</h3>
Each input will be run through an <b>XOR Gate</b>, answer the questions based on what the output will be.

<form id="quiz3">
  <div class="question" data-correct-answer="1">
    <p>Input A = 1, Input B = 0</p>
    <label>
      <input type="radio" name="q1" value="0"> 0
    </label>
    <label>
      <input type="radio" name="q1" value="1"> 1
    </label>
  </div>
  <div class="question" data-correct-answer="0">
      <p>Input A = 0, Input B = 0</p>
      <label>
        <input type="radio" name="q2" value="0"> 0
      </label>
      <label>
        <input type="radio" name="q2" value="1"> 1
      </label>
  </div>
  <div class="question" data-correct-answer="0">
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

<td><a href="{{site.baseurl}}/navigation/logicgatesgame/nand/" class="button">Continue Lesson</a></td>

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
            const form = document.getElementById('quiz3');
            const resultsContainer = document.getElementById('results');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); 
                let score = 0;
                const questions = form.querySelectorAll('.question'); 
                let resultsHTML = ""; 

                // Check the answers
                questions.forEach((question, index) => {
                    const correctAnswer = question.getAttribute('data-correct-answer');
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
