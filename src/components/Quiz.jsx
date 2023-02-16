import React, { useState } from "react";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "London"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    options: [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount Fuji",
      "Mount Rainier",
    ],
    answer: "Mount Everest",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Nauru", "Vatican City"],
    answer: "Vatican City",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option) => (
              <button
                onClick={() =>
                  handleAnswerOptionClick(
                    option === quizData[currentQuestion].answer
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
