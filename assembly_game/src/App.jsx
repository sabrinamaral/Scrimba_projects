import { useState } from "react";
import Confetti from "react-confetti";
import { languages } from "./languages";
import { getFarewellText, choseRandomWord } from "./utils";

export default function App() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => choseRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;

  // LANGUAGES
  const languagesElements = languages.map((language, index) => {
    const languageLost = index < wrongGuessCount;
    return (
      <span
        className={`chip ${languageLost ? "lost" : ""}`}
        key={language.name}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
        }}
      >
        {language.name}
      </span>
    );
  });

  // WORD | GUESS LETTERS

  const currentWordArr = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);

    return (
      <span
        key={index}
        className={`letter ${
          !isGuessed && isGameLost ? "not-guessed-letters" : ""
        }`}
      >
        {isGameLost
          ? letter.toUpperCase()
          : isGuessed
          ? letter.toUpperCase()
          : ""}
      </span>
    );
  });

  function addGuessedLetter(letter) {
    setGuessedLetters((prev) => {
      return guessedLetters.includes(letter) ? prev : [...prev, letter];
    });
  }

  // KEYBOARD
  const alphabetKeys = alphabet.split("").map((letter) => {
    const guessed = guessedLetters.includes(letter);
    const isCorrect = currentWord.includes(letter);
    const style = {
      backgroundColor: guessed
        ? isCorrect
          ? "#10A95B"
          : "#EC5D49"
        : undefined,
    };

    return (
      <button
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)} // accessibility-friendly
        arial-label={`Letter ${letter}`} // accessibility-friendly
        onClick={() => addGuessedLetter(letter)}
        key={letter}
        style={style}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  // MESSAGES: WIN, LOSE, FAREWELL
  function gameStatus() {
    const lastCorrectGuess = currentWord.includes(guessedLetters.at(-1));

    const lostLanguageMessage =
      wrongGuessCount - 1 >= 0 && wrongGuessCount <= languages.length
        ? getFarewellText(languages[wrongGuessCount - 1].name)
        : null;
    if (!isGameOver) {
      return (
        !lastCorrectGuess &&
        lostLanguageMessage && (
          <section className="farewell">{lostLanguageMessage}</section>
        )
      );
    } else {
      if (isGameWon) {
        return (
          <section className="win">
            <Confetti recycle={false} numberOfPieces={1000} />
            <h2>You win!</h2>
            <p>Wel done! 🎉</p>
          </section>
        );
      }
      if (isGameLost) {
        return (
          <section className="lose">
            <h2>Game Over!</h2>
            <p>You lose! Better start learning assembly 😭</p>
          </section>
        );
      }
    }
  }

  // RESET THE GAME
  function resetGame() {
    setCurrentWord(choseRandomWord());
    setGuessedLetters([]);
  }

  // RENDERING
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status" aria-live="polite" role="status">
        {gameStatus()}
      </section>
      <section className="languages">{languagesElements}</section>
      <section className="letters">{currentWordArr}</section>
      {/* accessibility | screen-readers */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(guessedLetters.at(-1))
            ? `Correct! The letter ${guessedLetters.at(-1)} is in the word.`
            : `Sorry, the letter ${guessedLetters.at(-1)} is not in the word.`}
          You have {languages.length - 1 - wrongGuessCount} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter : "blank"
            )
            .join(" ")}
        </p>
      </section>
      {/* accessibility end section */}
      <section className="keyboard">{alphabetKeys}</section>
      {(isGameWon || isGameLost) && (
        <button onClick={resetGame} className="new-game">
          New Game
        </button>
      )}
    </main>
  );
}
