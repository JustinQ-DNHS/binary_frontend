const Questions = [
    {
        question: "What does an arithmetic shift do?",
        answers: {
            a: "All bits are deleted",
            b: "The bits not shifted are discarded",
            c: "The bits that are shifted out of either end are discarded",
            d: "Nothing changes"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the binary equivalent of the decimal number 5?",
        answers: {
            a: "101",
            b: "001",
            c: "100",
            d: "1001"
        },
        correctAnswer: "a"
    },
    {
        question: "What is binary addition result of 1011 + 1101?",
        answers: {
            a: "2112",
            b: "10100",
            c: "11000",
            d: "00111"
        },
        correctAnswer: "c"
    },
    {
        question: "Which encoding standard allows for more characters?",
        answers: {
            a: "ASCII",
            b: "Unicode",
        },
        correctAnswer: "b"
    },
    {
        question: "In a 4-bit two's complement system, what is the representation of -5?",
        answers: {
            a: "1011",
            b: "1101",
            c: "1110",
            d: "1100"
        },
        correctAnswer: "b"
    },
    {
        question: "How many bits are used to represent an ASCII character?",
        answers: {
            a: "7",
            b: "16",
            c: "32",
            d: "8"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the binary representation of the decimal number 13?",
        answers: {
            a: "1010",
            b: "1100",
            c: "1101",
            d: "1011"
        },
        correctAnswer: "c"
    },
    {
        question: "What happens during a left arithmetic shift?",
        answers: {
            a: "Zeroes are shifted to the right",
            b: "Zeroes are shifted to the left",
            c: "Zeroes are deleted",
            d: "Ones are shifted to the right"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the binary addition result of 1001 + 0110?",
        answers: {
            a: "10110",
            b: "01101",
            c: "1111",
            d: "10001"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the binary subtraction result of 1011 - 0101?",
        answers: {
            a: "0110",
            b: "1000",
            c: "0101",
            d: "0011"
        },
        correctAnswer: "c"
    }
    ];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomizeQuestions(questions, numQuestions) {
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions.slice(0, numQuestions);
}

function buildQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
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

function showResults(questions) {
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
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
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;

    // Send the attempt data to the backend
    const attemptData = {
        quizgrade: numCorrect,
        attempt: new Date().toISOString()
    };

    fetch("http://localhost:5000/api/quizgrading", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(attemptData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Score stored successfully:", data);
        loadAttempts(); // Reload attempts after submission
    })
    .catch(error => {
        console.error("Error storing score:", error);
    });
}

function loadAttempts() {
    fetch('http://localhost:5000/api/quizgrading')
        .then(response => response.json())
        .then(attempts => {
            const tableBody = document.getElementById('attemptsTableBody');
            tableBody.innerHTML = ''; // Clear existing rows
            attempts.forEach(attempt => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${attempt.id}</td>
                    <td>${attempt.score}</td>
                    <td>
                        <button onclick="deleteAttempt(${attempt.id})">Delete</button>
                        <button onclick="editAttempt(${attempt.id})">Edit</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading attempts:", error));
}

function deleteAttempt(id) {
    fetch(`http://localhost:5000/api/quizgrading/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            loadAttempts(); // Reload attempts after deletion
        })
        .catch(error => console.error("Error deleting attempt:", error));
}

function editAttempt(id) {
    // Similar to delete, but for updating. You can create a form to modify data.
}

window.onload = () => {
    const selectedQuestions = randomizeQuestions(Questions, 5);
    buildQuiz(selectedQuestions);
    loadAttempts();

    document.getElementById('submit').addEventListener('click', () => {
        showResults(selectedQuestions);
    });
};