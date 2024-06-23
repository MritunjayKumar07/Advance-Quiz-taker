import React from "react";
import { Link } from "react-router-dom";
import quizData from "../DB/quizData.js";
import "./Quizlist.module.css";

const Quizlist = () => {
  const renderSubtopics = (topicKey) => {
    return (
      <ul>
        {Object.keys(quizData[topicKey]).map((subtopicKey) => (
          <li key={subtopicKey}>
            <Link
              to={`/detail/${topicKey}/${subtopicKey}`}
              style={{ textDecoration: "none" }}
            >
              <b>{subtopicKey}</b>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Quizzes</h1>
      <ul>
        {Object.keys(quizData).map((topicKey) => (
          <li key={topicKey}>
            <details>
              <summary>
                <h3>{topicKey}</h3>
              </summary>
              {renderSubtopics(topicKey)}
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizlist;
