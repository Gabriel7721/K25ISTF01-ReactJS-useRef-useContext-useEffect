import { useEffect, useRef, useState } from "react";

const ClearEffect = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalCount = useRef(0); // Đếm số lần timer tạo ra
  
  setInterval(() => {
    intervalCount.current += 1;
    setSeconds((s) => s + 1);
    console.log(`Total interval counted: ${intervalCount.current}`);
  }, 2_000);
  //   useEffect(() => {
  //     interval;

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  return (
    <div>
      <h2>{seconds}</h2>
    </div>
  );
};

export default ClearEffect;
