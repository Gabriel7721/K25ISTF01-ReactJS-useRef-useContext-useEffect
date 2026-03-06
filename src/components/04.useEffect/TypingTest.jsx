import { useRef, useState } from "react";
import "./TypingTest.css";

const SAMPLE_TEXT =
  "This endpoint gets you a personalized Donald Trump quote based upon the input that you give it.";

const TypingTest = () => {
  const [userInput, setUserInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const renderSampleText = () => {
    return SAMPLE_TEXT.split("").map((char, index) => {
      let className = "";
      if (index < userInput.length) {
        className = char === userInput[index] ? "correct" : "incorrect";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };
  return (
    <>
      <h1>Typing Test</h1>
      <div>{renderSampleText()}</div>
      <textarea
        rows={3}
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing..."
      />
      <p>Time: {seconds.toFixed(2)}</p>
      <p>Text length: {userInput.length}</p>
    </>
  );
};

export default TypingTest;
