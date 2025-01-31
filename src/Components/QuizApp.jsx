import React, { useContext, useState } from "react";
import { Quizcontext } from "./Quizcontext";

const QuizApp = () => {
  const quiz = useContext(Quizcontext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionNo, setQuestionNo] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const checkAnswer = (selectedOpt) => {
    setSelectedOption(selectedOpt);
    setAnswered(true);

    if (selectedOpt === quiz[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1); // Fix: Use functional update
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setQuestionNo((prev) => prev + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setQuestionNo(1);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setAnswered(false);
  };

  if (showScore) {
    return (
      <div className="flex items-center h-screen justify-center">
        <div className="w-full max-w-lg p-5 rounded border-2">
          <div className="border-2 h-16 flex items-center justify-center mt-4 text-xl font-bold">
            Quiz Completed!
          </div>
          <div className="mt-4 text-center">
            <p className="text-xl font-semibold">
              Your Score: {score} / {quiz.length}
            </p>
            <button
              onClick={restartQuiz}
              className="mt-6 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const correctAnswer = quiz[currentQuestion].answer;

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-full max-w-lg p-5 rounded border-2">
        <div className="border-2 h-16 flex items-center justify-center mt-4 text-xl font-bold">
          Quiz App
        </div>
        <div className="mt-4">
          <div className="h-10 text-lg font-semibold">
            Question <span>{questionNo}.</span> {quiz[currentQuestion].question}
          </div>

          {quiz[currentQuestion].options.map((option, id) => (
            <button
              disabled={answered}
              onClick={() => checkAnswer(option)}
              className={`block p-2 text-left mt-4 w-full transition-colors rounded border-2
                ${
                  answered
                    ? option === correctAnswer
                      ? "bg-green-200 border-green-500" // Correct answer is always green
                      : selectedOption === option
                      ? "bg-red-200 border-red-500" // Wrong selected option is red
                      : "bg-white"
                    : selectedOption === option
                    ? "bg-gray-200" // Selected option before answering
                    : "bg-white"
                } hover:bg-gray-200`}
              key={id}
            >
              <span>{option}</span>
            </button>
          ))}

          <div className="mt-6">
            {answered && (
              <p
                className={`font-medium ${
                  selectedOption === correctAnswer
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {selectedOption === correctAnswer ? "Correct!" : "Incorrect!"}
              </p>
            )}
          </div>

          <button
            disabled={!answered}
            onClick={handleNextQuestion}
            className={`${
              answered ? "bg-green-500" : "bg-green-300 cursor-not-allowed"
            } block p-2 text-center font-semibold text-white w-full hover:bg-green-600 transition-colors rounded`}
          >
            {currentQuestion === quiz.length - 1 ? "Finish" : "Next"}
          </button>

          <p className="text-center p-2 mt-4">
            Question {questionNo} of <span>{quiz.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
