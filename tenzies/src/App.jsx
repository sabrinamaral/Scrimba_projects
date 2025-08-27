import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const newGameButton = useRef(null);

  const gameWon =
    dice.every((obj) => obj.isHeld === true) &&
    dice.every((obj) => obj.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      newGameButton.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    const diceArr = [];
    let dieObj = {};

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      dieObj = { value: randomNumber, isHeld: false, id: nanoid() };
      diceArr.push(dieObj);
    }
    return diceArr;
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) => {
        return oldDice.map((die) => {
          if (die.isHeld === true) {
            return die;
          } else {
            return { ...die, value: Math.ceil(Math.random() * 6) };
          }
        });
      });
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id) {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        } else {
          return die;
        }
      });
    });
  }

  const die = dice.map((obj) => (
    <Die
      key={obj.id}
      value={obj.value}
      isHeld={obj.isHeld}
      hold={() => hold(obj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{die}</div>
      <button className="roll-dice" onClick={rollDice} ref={newGameButton}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
