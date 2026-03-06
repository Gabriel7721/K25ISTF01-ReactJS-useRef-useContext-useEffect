import { useState } from "react";

const SAMPLE_TEXT =
  "This endpoint gets you a personalized Donald Trump quote based upon the input that you give it.";

const TypingTest = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <>
      <h1>Typing Test</h1>

      <div>{sampleText}</div>

      <textarea
        rows={3}
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing..."
      />

      <p>Text length: {userInput.length}</p>
    </>
  );
};

export default TypingTest;
