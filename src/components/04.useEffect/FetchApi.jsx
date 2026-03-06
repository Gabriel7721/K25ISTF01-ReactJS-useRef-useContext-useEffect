import { useEffect, useState } from "react";

const FetchApi = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
      response.json().then((json) => console.log(json)),
    );
  }, []);
  /**NOTE:
   * Khi sử dụng useEffect() mà không có dependency
   * thì cứ mỗi lần server re-render nó lại call useEffect()
   * gây ra Memory-Leak.
   *
   * Để khắc phục bổ sung khai báo dependency cho useEffect
   */

  return (
    <div>
      <h1>FetchApi</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default FetchApi;
