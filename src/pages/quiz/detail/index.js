import React, { useState } from "react";
import Quiz from "../quiz/Quiz.js";
import quizData from "../DB/quizData.js";
import "./Index.module.css";
import { useParams } from "react-router-dom";

const Index = () => {
  const { topicKey, subtopicKey } = useParams();
  const currentTopic = quizData[topicKey]?.[subtopicKey];

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);

  const handleQuizCompletion = (finalScore, totalAttemptedQuestions) => {
    setScore(finalScore);
    setAttemptedQuestions(totalAttemptedQuestions);
    setQuizCompleted(true);
  };

  const handleTopicSelection = (name) => {
    setSelectedTopic({ name });
  };

  return (
    <div className="Quiz">
      <h1>
        {topicKey}/{subtopicKey}
      </h1>
      {!selectedTopic
        ? Object.keys(currentTopic).map((topicItemKey) => (
            <details key={topicItemKey}>
              <summary>
                <h2>
                  {quizData[topicKey][subtopicKey][topicItemKey].metadata.topic}
                </h2>
              </summary>
              <div>
                <h4>
                  {
                    quizData[topicKey][subtopicKey][topicItemKey].metadata
                      .launchedBy
                  }
                </h4>
                <h4>
                  <p>
                    {
                      quizData[topicKey][subtopicKey][topicItemKey].metadata
                        .launchDate
                    }
                  </p>
                  <p>
                    {
                      quizData[topicKey][subtopicKey][topicItemKey].metadata
                        .totalQuestions
                    }
                  </p>
                </h4>
                <h5
                  onClick={() =>
                    handleTopicSelection(
                      quizData[topicKey][subtopicKey][topicItemKey]
                    )
                  }
                >
                  Get start
                </h5>
              </div>
            </details>
          ))
        : ""}
      <main>
        {selectedTopic && !quizCompleted ? (
          <Quiz
            topicName={selectedTopic.name}
            onComplete={handleQuizCompletion}
          />
        ) : quizCompleted ? (
          <div className="result-container">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score}</p>
            <p>Total Questions Attempted: {attemptedQuestions}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        ) : (
          <p>Please select a topic to start the quiz.</p>
        )}
      </main>
    </div>
  );
};

export default Index;
