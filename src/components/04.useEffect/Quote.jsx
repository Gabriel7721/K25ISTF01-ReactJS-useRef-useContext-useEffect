import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        const list = data.messages;
        // const rand = list.length;
        setQuote(list);
      });
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
