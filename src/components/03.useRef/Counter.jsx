import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    // lưu trữ 1 giá trị mà không gây
    // ra re-render
    count + 1;
  }
  return <button onClick={handleClick} >Counter</button>;
};

export default Counter;
