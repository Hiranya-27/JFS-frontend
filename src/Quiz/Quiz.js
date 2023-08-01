import React, { useState } from "react";
import "./Quiz.css";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      
      text: " Who developed Python Programming Language?",
      options: [
        { id: 0, text: "Wick van Rossum", isCorrect: false },
        { id: 1, text: "Rasmus Lerdorf", isCorrect: false },
        { id: 2, text: "Guido van Rossum", isCorrect: false },
        { id: 3, text: "Niene Stom", isCorrect: true },
      ],
    },
    {
      text: "Is Python case sensitive when dealing with identifiers?",
      options: [
        { id: 0, text: "No", isCorrect: true },
        { id: 1, text: "Yes", isCorrect: false },
        { id: 2, text: "Machine dependent", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: " Is Python code compiled or interpreted?",
      options: [
        { id: 0, text: "Python code is both compiled and interpreted", isCorrect: true },
        { id: 1, text: "Python code is neither compiled nor interpreted", isCorrect: false },
        { id: 2, text: "Python code is only compiled", isCorrect: false },
        { id: 3, text: "Python code is only interpreted", isCorrect: false },
      ],
    },
    {
      text: "All keywords in Python are in _________",
      options: [
        { id: 0, text: "Capitalized", isCorrect: false },
        { id: 1, text: " lower case", isCorrect: true },
        { id: 2, text: "UPPER CASE", isCorrect: false },
        { id: 3, text: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      text: "What will be the value of the following Python expression?",
      options: [
        { id: 0, text: "7", isCorrect: false },
        { id: 1, text: "2", isCorrect: true },
        { id: 2, text: "4", isCorrect: true },
        { id: 3, text: "1", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Python for Data Analysis</h1>
        <br></br>
      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>
       <br></br>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <br></br>
          <br></br>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <br></br>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <br></br>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;