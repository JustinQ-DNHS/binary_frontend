
levels = {
    "OR": {"range": [1, 15], "formats": ["decimal", "binary"], "weight": 0.1},
    "AND": {"range": [16, 255], "formats": ["decimal", "binary"], "weight": 0.2},
    "XOR": {"range": [10, 31], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.3},
    "NAND": {"range": [32, 255], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.4},
    "NOR": {"range": [19, 46], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.5},
    "XNOR": {"range": [48, 255], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.6},
}


document.getElementById('quiz-form1').addEventListener('submit', function(e) {
    e.preventDefault()  
    let score = 0;
    const totalQuestions = 3;
  
    const correctAnswers = {
      q1: '1',
      q2: '0',
      q3: '1',
    };
  
    const formElements = e.target.elements;
  
    for (let question in correctAnswers) {
      const selectedAnswer = formElements[question].value;
      if (selectedAnswer === correctAnswers[question]) {
        score++;
      }
    }
  

    const result = document.getElementById('result');
    result.innerHTML = `You got ${score} out of 3 correct!`;
  
    // Optionally, give feedback on success/failure
    if (score === totalQuestions) {
      result.style.color = 'green';
      result.innerHTML += ' Perfect Score';
    } else if (score > 0) {
      result.style.color = 'orange';
      result.innerHTML += ' Good Stuff';
    } else {
      result.style.color = 'red';
      result.innerHTML += ' Reread the lesson';
    }
  });