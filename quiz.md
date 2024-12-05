---
layout: post
title: Quiz Page
search_exclude: true
description: Take our quiz to test your knowledge!
hide: true
menu: nav/home.html
---

<body>
    <div class="quiz-container">
        <h2>Binary Quiz</h2>
        <div id="quiz"></div>
        <button id="submit" onclick="showResults()">Submit Quiz</button>
        <div id="results"></div>
    </div>
    <script src="script.js"></script>
</body>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #6589e60;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.quiz-container {
    background-color: #6589e6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 900px;
    height: 700px;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #0056b3;
}

#results {
    margin-top: 20px;
    font-size: 18px;
}
</style>


<script>
const quizQuestions = [
    {
        question: "1) What does an arithmetic shift do?",
        answers: {
            a: "All bits are deleted",
            b: "The bits are not shifted are discarded",
            c: "The bits that are shifted out of either end are discarded",
            d: "Nothing changes"
        },
        correctAnswer: "c"
    },
    {
        question: "2) What is the binary equivalent of the decimal number 5?",
        answers: {
            a: "101",
            b: "001",
            c: "100",
            d: "1001"
        },
        correctAnswer: "a"
    },
    {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
    {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
     {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
     {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
     {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
     {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
     {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
     {
        question: "3) What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },


    
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

buildQuiz();
</script>