import React, { useState } from "react";
import QUESTIONS from "../Question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  // taking the length of the annswer arr to determine the current question on the user screen
  const activeQuestionIndex = userAnswers.length;

  const handleAnswers = (selectedAns) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAns];
    });
  };

  return (
    <div id="quiz">
      <div id="question">
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
