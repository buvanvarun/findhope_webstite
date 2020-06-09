import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Option from "../components/Option";
import styles from "../styles/Questions.module.css";
import { Redirect } from "react-router-dom";

var questions = [
  "Little interest or pleasure in doing things in the past two weeks",
  "Feeling down depressed or hopeless in the past two weeks",
  "Trouble falling or staying asleep or sleeping too much in the past two weeks",
  "Feeling tired or having little energy in the past two weeks",
  "Poor appetite or overeating in the past two weeks",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down in the past two weeks",
  "Trouble concentrating on things, such as studying or watching movies in the past two weeks",
  "Moving or speaking so slowly or behaving restlesslythan usual in the past two weeks",
  "Thoughts that you would be better off dead,or of hurting yourself in the past two weeks",
];
const Questions = (props) => {
  const jump = 100 / questions.length;
  const [question, setQuestion] = useState(0);
  const [progress, setProgress] = useState(jump);
  const [points, setPoints] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);
  const [tips, setTips] = useState(0);

  const clickHandler = (id) => {
    if (question < questions.length - 1) {
      setProgress((state) => state + jump);
      setQuestion((state) => state + 1);
      setPoints((state) => state + id);
      setData(data.concat(id));
    }
    if (question === questions.length - 2) {
      setRedirect(true);
      let final = data.map((ele, index) => [ele, index]);
      final = final.sort((a, b) => b[0] - a[0]).splice(0, 3);
      let value = 0;
      for (let ele of final) {
        value = value * 10 + ele[1];
      }
      setTips(value);
    }
  };
  return (
    <div>
      {redirect ? (
        <Redirect to={`result/depression/${points}/${tips}`} />
      ) : null}
      <div className={styles.wrapper}>
        <ProgressBar progress={progress} />
        <div className={styles.questionWrapper}>
          <h1 className={styles.question}>{questions[question]}</h1>
        </div>
        <div className={styles.optionsWrapper}>
          <Option title="Not at all" clicked={() => clickHandler(0)} />
          <Option title="Several days" clicked={() => clickHandler(1)} />
          <Option title="More than half days" clicked={() => clickHandler(2)} />
          <Option title="Nearly everyday" clicked={() => clickHandler(3)} />
        </div>
      </div>
    </div>
  );
};

export default Questions;