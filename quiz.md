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
    background-color: #777777;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.quiz-container {
    background-color: #777777;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 900px;
    height: 650px;
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
#quizQuestions {
    font-family: Arial, sans-serif;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

</style>
<script>
    function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Questions = [
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
        question: "3) What is binary addition answer to 1011 + 1101",
        answers: {
            a: "2112",
            b: "10100",
            c: "11000",
            d: "00111"
        },
        correctAnswer: "c"
    },
    {
        question: "4) Which encoding standard will allow for the more characters?",
        answers: {
            a: "ACII",
            b: "Unicode",
        },
        correctAnswer: "b"
    },
     {
        question: "5) In a 4-bit two's complement system, what is the representation of -5?",
        answers: {
            a: "1011",
            b: "1101",
            c: "1110",
            d: "1100"
        },
        correctAnswer: "b"
    },
     {
        question: "6) How many bits are used to represent an ASCII character?",
        answers: {
            a: "7",
            b: "16",
            c: "32",
            d: "8"
        },
        correctAnswer: "d"
    },
     {
        question: "7) What is the binary representation of the decimal number 13?",
        answers: {
            a: "1010",
            b: "1100",
            c: "1101",
            d: "1011"
        },
        correctAnswer: "c"
    },
     {
        question: "8) What happens during a left arithmetic shift",
        answers: {
            a: "zero's are shifted to the right",
            b: "zero's are shifted to the left",
            c: "zeros are deleted",
            d: "ones are shifted to the right"
        },
        correctAnswer: "a"
    },
     {
        question: "9) What is the binary addition result of 1001 + 0110?",
        answers: {
            a: "10110",
            b: "01101",
            c: "1111",
            d: "10001"
        },
        correctAnswer: "c"
    },
     {
        question: "10) What is the binary subtraction result of 1011 - 0101?",
        answers: {
            a: "0110",
            b: "1000",
            c: "0101",
            d: "0011"
        },
        correctAnswer: "c"
    },
    
];

function randomizeQuestions(sample) {
    let randomizedQuestions = [];
    const quizLength = sample.length;
    for (let i = 0; i < quizLength; i++) {
        const a = getRandomInt(sample.length);
        randomizedQuestions.push(sample[a]);
        sample.splice(a, 1);
  }
  return randomizedQuestions
}

function buildQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
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

buildQuiz(randomizeQuestions(Questions));
</script>