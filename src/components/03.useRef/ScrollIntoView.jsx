import React, { useRef } from "react";

const ScrollIntoView = () => {
  const firstCat = useRef(null);
  const secondCat = useRef(null);
  const thirdCat = useRef(null);

  function handleScrollToFirst() {
    firstCat.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleScrollToSecond() {
    secondCat.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleScrollToThird() {
    thirdCat.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div>
      <nav>
        <button onClick={handleScrollToFirst}>Neo</button>
        <button onClick={handleScrollToSecond}>Mario</button>
        <button onClick={handleScrollToThird}>Tommy</button>
      </nav>
      <ul>
        <li>
          <img
            src="https://placecats.com/neo/300/200?fit=contain"
            ref={firstCat}
          />
        </li>
        <li>
          <img src="https://placecats.com/300/200" ref={secondCat} />
        </li>
        <li>
          <img src="https://placecats.com/g/300/200" ref={thirdCat} />
        </li>
      </ul>
    </div>
  );
};

export default ScrollIntoView;
