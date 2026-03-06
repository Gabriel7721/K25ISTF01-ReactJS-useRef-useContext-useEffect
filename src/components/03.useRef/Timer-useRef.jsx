import { useRef, useState } from "react";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const id = useRef(null); // Stored Interval ID

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    id.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(id.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Thời gian đã trôi qua: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Timer;
