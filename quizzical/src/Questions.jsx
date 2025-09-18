// import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { quizData } from "./mock";
import { shuffleArray } from "./utils";

export default function Questions() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    // fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    //   .then((respond) => respond.json())
    //   .then((data) => {
    //     const decodedData = data.results.map((result) => ({
    //       question: decode(result.question),
    //       correctAnswer: decode(result.correct_answer),
    //       incorrectAnswers: result.incorrect_answers.map((inc_answer) =>
    //         decode(inc_answer)
    //       ),
    //     }));
    //     setData(decodedData);
    //   });
    setData(quizData);
  }, []);
  const question = data.map((elem) => {
    const arrAnswers = shuffleArray([
      ...elem.incorrectAnswers,
      elem.correctAnswer,
    ]);
    return (
      <section className="quiz-content" key={elem.correctAnswer}>
        <p>{elem.question}</p>
        <span className="answers">
          {arrAnswers.map((answ, index) => (
            <button key={index}>{answ}</button>
          ))}
        </span>
      </section>
    );
  });

  return (
    <>
      <section>{question}</section>
      <button className="check-answers">Check answers</button>
    </>
  );
}
