import { useRef } from "react";

const DOM_UseRef = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Form</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus to your input element</button>
    </div>
  );
};

export default DOM_UseRef;
