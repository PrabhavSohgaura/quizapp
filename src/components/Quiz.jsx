import React, { useState } from "react";
import QUESTIONS from "../Question";
import quizComplete from "../assets/quiz-complete.png";
import Questiontimer from "./Question-timer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  // taking the length of the annswer arr to determine the current question on the user screen
  const activeQuestionIndex = userAnswers.length;

  const handleAnswers = (selectedAns) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAns];
    });
  };

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="quiz-completed" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  //shuffling the answers by taking original array into one computed variable then
  // sort it so that we can shuffle ans as per index
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <Questiontimer timeout={10000} onTimeout={() => handleAnswers(null)} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleAnswers(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
