import React, { useRef } from "react";

const ScrollIntoView = () => {
  const firstCat = useRef(null);
  const secondCat = useRef(null);
  const thirdCat = useRef(null);

  function handleScrollToFirst(params) {}
  function handleScrollToSecond(params) {}
  function handleScrollToThird(params) {}

  return (
    <ul>
      <li>
        <img src="https://placecats.com/neo/300/200?fit=contain" />
      </li>
      <li>
        <img src="https://placecats.com/300/200" />
      </li>
      <li>
        <img src="https://placecats.com/g/300/200" alt="" />
      </li>
    </ul>
  );
};

export default ScrollIntoView;
